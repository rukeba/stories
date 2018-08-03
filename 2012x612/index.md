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
{% assign moments = site.collections | where:"label", "moments_2012"  | first %}
  {% for img in moments.files %}
    <img src="/{{ img.path }}">
  {% endfor %}
</div>
