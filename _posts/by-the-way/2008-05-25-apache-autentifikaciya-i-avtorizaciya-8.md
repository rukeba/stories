---
title: 'apache: аутентификация и авторизация #8: mod_authn_anon'
date: 2008-05-25 07:51:00 Z
categories:
- by-the-way
tags:
- apache
layout: post
---

Модуль mod_authn_anon позволяет аутентифицировать анонимных пользователей. В качестве
имени как правило используется anonymous (но можно выбрать любые другие), в качестве
пароля -- email. Этот email может быть сохранён в логе. Совместно с другими провайдерами аутентификации (например, mod_authn_file) модуль mod_authn_anon даёт возможность отслеживать
доступ зарегистрированных пользователей и держать сайт открытым для незарегистрированных пользователей.

Пример конфигурации с комментариями:

	AuthName "Protected area"
	# тип аутентификации
	AuthType Basic
	# список провайдеров аутентификации, работают последовательно
	AuthBasicProvider file anon
	# путь к файлу с пользователями для mod_authn_file
	AuthUserFile /path/to/your/.htpasswd

	# Параметры mod_authn_anon
	# может ли имя быть пустым или любым (on или off)
	Anonymous_NoUserID off
	# может ли пароль (т.е. email) быть пустым (on или off)
	Anonymous_MustGiveEmail on
	# проверять ли, что введеный пароль есть email (on или off)
	Anonymous_VerifyEmail on
	# логировать ли email(on или off)
	Anonymous_LogEmail on
	# список имён анонимных пользователей
	Anonymous anonymous guest www test welcome

	Require valid-user

Модуль mod_authn_anon может работать только с Basic-аутентификацией. Проверка email 
(включается директивой `Anonymous_MustGiveEmail on`) тривиальна - в строке проверяется
наличие символа '@' и '.'.

