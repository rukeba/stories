---
layout: post
title:  'apache: аутентификация и авторизация #7: mod_authz_groupfile'
slug: 'apache-autentifikaciya-i-avtorizaciya-7'
date:  2008-05-24 18:04:00 +0300
tags: ["apache"]
---

Модуль mod_authz_groupfile обеспечивает авторизацию уже аутентифицорованного пользователя
по принадлежности его к некоторой группе. Пример:

	Require group developers managers

Группы и их члены определяются в простом текстовом файле: в одной строке название группы
и после двоеточия имена членов группы через пробел или таб. Пример:

	# file /path/to/groupfile
	testers: tom tony
	developers: jack john
	managers: jane bill

Путь к этому файлу определяется директивой AuthGroupFile:

	AuthGroupFile /path/to/groupfile

Отметим, что данный выше пример директивы `Require` полностью аналогичен такой:

	Require user jack john jane bill

Использование модуля mod_authz_groupfile позволяет группировать пользователей в группы, и управлять
доступом уже на уровне групп.

