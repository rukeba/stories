---
layout: post
title:  'apache: аутентификация и авторизация #9: mod_authn_default, mod_authz_default'
slug: 'apache-autentifikaciya-i-avtorizaciya-9'
date:  2008-05-28 08:23:00 +0300
category: by-the-way
tags: ["apache"]
---

Модуль mod_authn_default является запасным последнем (fallback) модулем в процессе аутентификации.
Если для запроса нет сконфигурированного модуля аутентифиукации (например, mod_auth_basic с `AuthType Basic` и далее)
модуль mod_authn_default просто отклоняет любые аутентификационные данные 
и прекращает обработку запроса со стастусом `401 Authorization Required`. Такое может случится, если, например,
mod_auth_basic неавторитарен (`AuthBasicAuthoritative Off` - об этом следующем посте) и не смог аутентифицировать
пользователя.

Модуль mod_authz_default является запасным последнем (fallback) модулем в процессе авторизации.
Если для запроса не отработал ни один модуль авторизации (например, mod_authz_user с `Require user john`),
а такое возможно если в `Require` были неопознанные требования, например, `Require unknown requirement`,
модуль mod_authz_default просто прекращает обработку запроса со стастусом `401 Authorization Required`.


