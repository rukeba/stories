---
permalink: /by-the-way/all/
title: Все записи - Блог
layout: default
---

<div class="row">

<div class="col-sm-9">

{% assign category_tags = site.empty_tags %}

{% for post in site.categories.by-the-way %}
  <div class="post-list-item">
    <h3 class="post-title" itemprop="name headline">
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h3>
    <p class="text-muted">
      <small>
        <span datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: site.date_format }}</span>,
        {% for tag in post.tags %}
          <a class="tag" href="/{{ post.categories | first | slugify }}/{{ tag }}/">{{ tag }}</a>
          {% if forloop.last == false %}&middot;{% endif %}

	        {% unless category_tags contains tag %}
	          {% assign category_tags = category_tags | push: tag %}
	        {% endunless %}

        {% endfor %}
      </small>
    </p>
  </div>
{% endfor %}

</div>

<div class="col-sm-3">

  <h3>Метки</h3>

	{% assign category_tags = category_tags | sort %}
  <ul class="list-unstyled">
    {% for tag in category_tags %}
      <li><a href="/by-the-way/{{ tag | slugify }}/">{{ tag }}</a> <small>{{ site.tags[tag] | size }}</small></li>
    {% endfor %}
  </ul>

</div>

</div>