---
layout: post
title:  'В какой последовательности апач обрабатывет свои конфигурационные секции. '
slug: 'v-kakoj-posledovatelnosti-apach-obrabatyvet-svoi-k'
date:  2008-07-02 10:03:00 +0300
tags: ["apache"]
---

Начнём без долгих прелюдий. Источник - [Configuration Sections](http://httpd.apache.org/docs/2.2/sections.html)
из документации апача и его исходники, т.к. в документации не отражены разные тонкости.

Прикаждом запросе конфигурационные секции апача применяются так: сначала сливаются (соединяются, merge)
директивы из конфигурации сервера (httpd.conf) и директивы из конфигурации виртуального хоста (в соответствующеё секции ``<VirtualHost>``), и объединённая конфигурация (merged configuration) исполняется. Затем соединяются директивы из конфигурационных секций типа `Directory`, `Files`, файлов .htaccess, и полученная объединённая конфигурация исполняется.

Допустим, что апач обрабатывает запрос `http://servername/a/b/index.html`, в результате которого будет выдан файл
`/www/servername/a/b/index.html`. Вот итоговая последовательность применения конфигурационных секций:

**Соединяются конфигурации**

* httpd.conf
* `<VirtualHost>` `</VirtualHost>`

**Выполняется соединённая конфигурация**

**Соединяются конфигурации**

* `<Directory /www/servername/>` ... `</Directory>`
* `<VirtualHost>` `<Directory /www/servername/>` ... `</Directory>` `</VirtualHost>`
* /www/servername/.htaccess
* `<Directory /www/servername/a/>` ... `</Directory>`
* `<VirtualHost>` `<Directory /www/servername/a/>` ... `</Directory>` `</VirtualHost>`
* /www/servername/a/.htaccess
* `<Directory /www/servername/a/b/>` ... `</Directory>`
* `<VirtualHost>` `<Directory /www/servername/a/b/>` ... `</Directory>` `</VirtualHost>`
* /www/servername/a/b/.htaccess

* `<Directory ~ | DirectoryMatch ^/www/servername/>` ... `</DirectoryMatch>`
* `<VirtualHost>` `<Directory ~ | DirectoryMatch ^/www/servername/>` ... `</DirectoryMatch>` `</VirtualHost>`
* `<Directory ~ | DirectoryMatch ^/www/servername/a/>` ... `</DirectoryMatch>`
* `<VirtualHost>` `<Directory ~ | DirectoryMatch ^/www/servername/a/>` ... `</DirectoryMatch>` `</VirtualHost>`
* `<Directory ~ | DirectoryMatch ^/www/servername/a/b/>` ... `</DirectoryMatch>`
* `<VirtualHost>` `<Directory ~ | DirectoryMatch ^/www/servername/a/b/>` ... `</DirectoryMatch>` `</VirtualHost>`

* `<Files | Files ~ index.html>` ... `</Files>`  в порядке как они записаны в конфиге
* `<VirtualHost>` `<Files | Files ~ index.html>` ... `</Files>` `</VirtualHost>` в порядке как они записаны в конфиге

* `<Location | Location ~ >` ... `</Location>` в порядке как они записаны в конфиге
* `<VirtualHost>` `<Location | Location ~ >` ... `</Location>` `</VirtualHost>` в порядке как они записаны в конфиге

**Выполняется соединённая конфигурация**


