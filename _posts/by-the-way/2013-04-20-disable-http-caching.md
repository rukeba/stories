---
layout: post
title:  'Запрет кеширования по HTTP'
slug: 'disable-http-caching'
date:  2013-04-20 00:30:00 +0300
category: by-the-way
tags: ["dev","http"]
---

Забываю я эту магическую последовательность в Cache-Control, которая запрещает браузеру кешировать ответы. Записываю на память:

    Cache-Control: no-cache,no-store,must-revalidate,max-age=0

Ещё для верности можно добавлять:

    Pragma: no-cache
    Expires: 0

А ещё браузеры не кешируют POST-запросы.
   

