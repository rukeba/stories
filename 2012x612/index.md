---
permalink: /2012x612/
title: 2012x612
layout: default
---

<style type="text/css">
  #ig img {
    display: inline-block;
    margin: 0 20px 20px 0;
  }
</style>
<div id="ig" class="clearfix">
  {% for img in site.moments_2012 %}
    <img src="{{ img.path }}">
    <img src="{{ img.url }}">
  {% endfor %}
</div>
