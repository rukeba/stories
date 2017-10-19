---
layout: post
title:  'Как уменьшить размер памяти, используемой mysql'
slug: 'kak-umenshit-razmer-pamyati-ispolzuemoj-mysql'
date:  2008-10-30 09:33:00 +0300
tags: ["howto","mysql"]
---

Если вы не используете движок InnoDB в mysql (не уверены используете или нет = не используете) добавте в конфигурационный файл mysql (C:\\mysql\\bin\\my.ini или /etc/mysql/my.cnf) в секцию `[mysqld]` комманду для [отключения InnoDB](http://dev.mysql.com/doc/refman/5.0/en/server-options.html#option_mysqld_skip-innodb).

    [mysqld]
    skip-innodb

В моём случае (ubuntu 8.04) mysql стал потреблять виртуальной памяти почти на 100M меньше.

