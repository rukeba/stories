---
layout: post
title:  'apache: аутентификация и авторизация. #1'
slug: 'apache-autentifikaciya-i-avtorizaciya-1'
date:  2008-04-22 18:52:00 +0300
category: by-the-way
tags: ["apache"]
---

В последнее время я вплотную занялся рассмотрением безопасности в apache. Источники: [Authentication, Authorization and Access Control](http://httpd.apache.org/docs/2.2/howto/auth.html) и [исходники apache](http://archive.apache.org/dist/httpd/).

Для начала поймём, что такое аутентификация и авторизация:

* **Аутентификация** (англ. Authentication) или подтверждение подлинности — процедура проверки соответствия субъекта и того, за кого он пытается себя выдать, с помощью некой уникальной информации, в простейшем случае — с помощью имени и пароля.
* **Авторизация** (англ. Authorization) — процесс, а также результат процесса проверки необходимых параметров и предоставление определённых полномочий лицу или группе лиц (прав доступа) на выполнение некоторых действий в различных системах с ограниченным доступом.

В апаче за эти процессы отвечают следующие модули:

**Типы аутентификации** (директива AuthType):

*	mod_auth_basic (Basic аутентификация)
*	mod_auth_digest (Digest футентификация)


**Провайдеры аутентификации** (проверяют имя/пароль):

*	mod_authn_alias
*	mod_authn_anon
*	mod_authn_dbd
*	mod_authn_dbm
*	mod_authn_default
*	mod_authn_file
*	mod_authnz_ldap


**Авторизаторы** (директива Require, проверяют возможность доступа для уже аутентифицированного пользователя):

*	mod_authnz_ldap
*	mod_authz_dbm
*	mod_authz_default
*	mod_authz_groupfile
*	mod_authz_owner
*	mod_authz_user


Дальше будет.

