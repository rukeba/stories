---
layout: post
title:  "Луна над Бирючим островом"
slug: "moon-over-the-biruchiy-island"
date:   2018-08-30 08:05:00
category: by-the-way
tags: [photo, life]
image: /mobi/mobi-21.jpg
body_class: "night post-full"
custom-javascript-list:
  - "https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/8.13.0/lazyload.min.js"
  - "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js"
custom-css-list:
  - "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css"
---

Остров Бирючий был островом 90 лет назад. 
Теперь он не остров, а всего лишь продолжение Федотовой косы.
Но согласитесь, «остров» звучит намного интереснее (и дороже), чем «коса».
<!--more-->

{% assign mobi = site.collections | where:"label", "mobi"  | first  %}
{% assign images = mobi.files | sort: 'name'  %}

{% for img in images %}
{% if forloop.index == 1 or forloop.index == 2  %}
<img src="/mobi/{{ img.name }}" data-src="/mobi/{{ img.name }}" data-fancybox="photo" class="full">
{% else %}
<img data-src="/mobi/{{ img.name }}" data-fancybox="photo" class="full">
{% endif %}
{% endfor %}
