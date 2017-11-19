---
title: Блог
layout: default
permalink: /by-the-way/
---

{% for post in site.categories.by-the-way limit:10 %}
<div id="blog-content" class="{{ post.categories | first | slugify }}"  itemscope itemtype="http://schema.org/BlogPosting">
  <div class="post">
    <h2 class="post-title" itemprop="name headline">
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h2>
    <p class="text-muted">
      <small>
        <span datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: site.date_format }}</span>,
        {% for tag in post.tags %}
          <a class="tag" href="/{{ post.categories | first | slugify }}/{{ tag }}/">{{ tag }}</a>
          {% if forloop.last == false %}&middot;{% endif %}
        {% endfor %}
      </small>
    </p>
    <div class="body" itemprop="articleBody">
      {{ post.content }}
    </div>
  </div>
</div>
{% endfor %}

<p><a href="/by-the-way/all/">Все записи</p>