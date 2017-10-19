---
layout: post
title:  'apache: аутентификация и авторизация #3: mod_auth_basic'
slug: 'apache-autentifikaciya-i-avtorizaciya-3'
date:  2008-04-27 14:32:00 +0300
tags: ["apache"]
---

Рассмотрим как работает mod_auth_basic. Содержимое .htaccess в директории `/var/www/private/`,
соответствующей uri `/private/`:

	# Тип аутентификации
	AuthType Basic
	# Имя зоны, для которой необходима аутентификация,
	# Иначе называется realm
	AuthName "private zone"
	# Провайдер аутентификации. В данном случае - mod_authn_file
	AuthBasicProvider file
	# Информация для mod_authn_file - путь к файлу с именами и паролями,
	# Такой файл создаётся с помощью утилиты htpasswd или вручную - рассмотрим позже.
	AuthUserFile /etc/apache2/conf/.htpasswds
	# Доступ будет разрешён аутентифицированному пользователю john,
	# т.е. будет авторизован только пользователь john.
	Require user john

Происходит запрос в `/private/`. При обработке запроса на этапе проверки доступа начинает
работать модуль mod_auth_basic. Он в запросе ищет заголовок Authentication. Если заголовка нет -
модуль прекращает обработку запроса и сервер возвращает ответ со статусом 401 Unauthorized и
заголовком `WWW-Authenticate: Basic  realm="private zone"`. Браузер, получив такой ответ,
выдаёт приглашение для ввода имени пользователя и пароля для зоны 'private zone'. Получив 
аутентификационные данные, браузер посылает такой же запрос с заголовком Authentication. 
Имя пользователя и пароль кодируются в base64-кодировку так:

	base64encode('john:secret') -> 'am9objpzZWNyZXQ='

и получается такой заголовок:

	Authentication: Basic am9objpzZWNyZXQ=

Теперь, при обработке запроса, mod_auth_basic из заголовка Authentication получит аутентификационные
данные:

	base64decode('am9objpzZWNyZXQ=') -> 'john:secret'

Эти имя пользователя и пароль mod_auth_basic передаст провайдеру аутентификации (в нашем случае 
mod_authn_file) для проверки. При успешной проверке, запрос продолжит обрабатываться, при неуспешной
mod_auth_basic опять прекратит обработку запроса с 401 Unauthorized.

Дальще будет.

