---
layout: post
title:  'apache: аутентификация и авторизация #4: mod_authn_file'
slug: 'apache-autentifikaciya-i-avtorizaciya-4'
date:  2008-05-12 10:11:00 +0300
category: by-the-way
tags: ["apache"]
---

Рассмотрим работу модуля mod_authn_file. Этот модуль является
провайдером аутентификации для таких модулей как mod_auth_basic или
mod_auth_digest. Аутентификация происходит путём поиска пары
пользователь/пароль в текстовом файле. Такой файл можно создать
руками, а можно с помощью утилиты htpasswd. Команда

	htpasswd -c /path/to/passwdfile user1

предложит ввести пароль для пользователя user1 и создаст файл по
указанному пути такого содержания:

	user1:$apr1$9Y3.....$4fT.9GPTLwu4zwNTJ9HoE0

Для шифрования паролей утилита htpasswd для Windows по умолчанию
использует md5, а для unix-систем - crypt(). Опционально пароли можно
шифровать с помощью SHA1 или не шифровать вообще, например так:

	user2:pass2

Для того, что бы аутентификация происходила с помощью этого модуля
необходимо указать

	AuthBasicProvider file
	# или
	AuthDigestProvider file

и путь к файлу с паролями

	AuthUserFile /path/to/file

Путь может быть абсолютным или относительным от ServerRoot.

Этот провайдер аутентификации используется чаще всего: просто и
быстро, к тому же файл с паролями можно править руками (например,
закомментировать с помощью `#` любого пользователя). Недостаток -
медленная работа при большом количстве пользователей. В целях
безопасности не следует помещать файл с паролями в дерево директорий
сайта.

дальше будет.

