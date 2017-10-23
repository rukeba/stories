---
layout: post
title:  'RewriteCond и %{SERVER_PORT}'
slug: 'rewritecond-i-server_port'
date:  2008-09-08 19:27:00 +0300
category: by-the-way
tags: ["apache","iis"]
---

Нашёл в apache интересную и неочевидную особенность. Имеем конфиг:

    ServerName company.com
    Listen 8080
    Listen 8081
    ...
    RewriteCond %{SERVER_PORT} 8080
    RewriteRule .* bar.html

Правило RewriteRule никогда не отработает! Условие в RewriteCond будет всегда ложно.  %{SERVER_PORT}, как видно из логов mod_rewrite, всегда возвращает 80. Сначала я подумал, что нашёл в apache баг. Но посмотрев исходники, понял, что багрепортером апача мне не быть. Серверная переменная  %{SERVER_PORT} содержит не номер порта, на который пришёл запрос (что в общем вполне логично и ожидаемо), а номер порта из ServerName! Немного исправит положение `ServerName company.com:8080`. Но как отличать запросы, которые пришли на порт 8081?

Выяснил ещё, что в режиме FastCGI сервер IIS 7 не понимает чанковые *запросы*, т.е.  `Transfer-Encoding: chunked`. А именно в режиме FastCGI рекоммендуют запускать php5.

