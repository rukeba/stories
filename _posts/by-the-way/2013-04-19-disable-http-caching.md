---
title: Запрет кеширования по HTTP
date: 2013-04-19 21:30:00 Z
categories:
- by-the-way
tags:
- dev
- http
layout: post
---

Забываю я эту магическую последовательность в Cache-Control, которая запрещает браузеру кешировать ответы. Записываю на память:

    Cache-Control: no-cache,no-store,must-revalidate,max-age=0

Ещё для верности можно добавлять:

    Pragma: no-cache
    Expires: 0

А ещё браузеры не кешируют POST-запросы.
   

