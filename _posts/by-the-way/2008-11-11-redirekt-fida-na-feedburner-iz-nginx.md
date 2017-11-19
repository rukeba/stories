---
title: Редирект фида на FeedBurner из nginx
date: 2008-11-11 07:42:00 Z
categories:
- by-the-way
tags:
- howto
- nginx
layout: post
---

Что бы редиректить фиды (rss, atom) со своего сайта на FeedBurner, достаточно добавить в конфигурацию сайта такое:

    # redirect feed requests to feedburner, unless its the feedburner agent
    if ($http_user_agent !~* FeedBurner|FeedValidator) {
        rewrite ^/feed.rss$ http://feeds.feedburner.com/your-feed-name?format=xml;
    }

У меня на блоге именно так и работает — [мой фид](/blog/feed/latest/). Всё просто и я опять радуюсь!

