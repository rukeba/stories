---
layout: post
title:  'apache: аутентификация и авторизация #10: авторитарность'
slug: 'apache-autentifikaciya-i-avtorizaciya-10'
date:  2008-06-02 21:28:00 +0300
category: by-the-way
tags: ["apache"]
---

Модули процесса аутентификации ([mod_auth_basic](/blog/2008/04/27/apache-autentifikaciya-i-avtorizaciya-3/) , mod_auth_digest) и модули авторизации ([mod_authz_user](/blog/2008/05/13/apache-autentifikaciya-i-avtorizaciya-5/), [mod_authz_groupfile](/blog/2008/05/24/apache-autentifikaciya-i-avtorizaciya-7/)) имеют директивы, отвечающие за авторитарность этих модулей: `AuthBasicAuthoritative On|Off`, `AuthzUserAuthoritative On|Off`, `	AuthzGroupFileAuthoritative On|Off`. Эти директивы позволяют продолжить процесс аутентификации и авторизации следующим модулям. По-умолчанию эти модули авторитарны, т.е. `Auth*Authoritative On`.

В модуле mod_auth_basic авторитарность работает следующим образом. Обычно, каждый провайдер аутентификации, перечисленный в директиве `AuthBasicProvider`, пытается аутентифицировать пользователя и, если пользователь *не был найден* модулем, доступ будет запрещён с ответом `401 Authorization Required`. Выключение авторитарности модуля - `AuthBasicAuthoritative Off` - для таких случаев позволяет не запрещать сразу доступ, а предоставить возможность аутентифицировать пользователя другим модулям. Например, модулям сторонних производителей, которые не могут быть подключены с помощью директивы `AuthBasicProvider`. Порядок обработки запроса такими модулями не конфигурируется и определяется в их исходном коде.

Для модуля mod_authz_user, например, отключение авторитарности - `AuthzUserAuthoritative Off` - позволяет продолжить авторизацию следующим модулям (например, mod_authz_groupfile), если не нашлось информации об аутентифицированном пользователе. Пример:

	...
	AuthzUserAuthoritative Off
	Require user john group developers

Модуль mod_authz_user не сможет авторизовать пользователя tom (так как авторизоваться может только пользователь john) и, так как он неавторитарен, позволит продолжить авторизацию следующему модулю - mod_authz_groupfile, которые проверит, принадлежит ли пользователь tom группе developers.

Если все модули в процессе авторизации не смогли авторизовать пользователя и были неавторитарными, последним отработает модуль mod_authz_default, которые запретит доступ `401 Authorization Required`.


