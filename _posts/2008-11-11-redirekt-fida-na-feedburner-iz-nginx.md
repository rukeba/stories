---
layout: post
title:  'Редирект фида на FeedBurner из nginx'
slug: 'redirekt-fida-na-feedburner-iz-nginx'
date:  2008-11-11 10:42:00 +0300
tags: ["howto","nginx"]
---

Что бы редиректить фиды (rss, atom) со своего сайта на FeedBurner, достаточно добавить в конфигурацию сайта такое:

    # redirect feed requests to feedburner, unless its the feedburner agent
    if ($http_user_agent !~* FeedBurner|FeedValidator) {
        rewrite ^/feed.rss$ http://feeds.feedburner.com/your-feed-name?format=xml;
    }

У меня на блоге именно так и работает — [мой фид](/blog/feed/latest/). Всё просто и я опять радуюсь!

