---
layout: post
title:  'Генераторы статических сайтов и блогов'
slug: 'static-websites-blogs-generators'
date:  2012-06-10 22:15:00 +0300
category: by-the-way
tags: ["python","software","web"]
---

В последнее время набирают популярность генераторы статических сайтов и блогов. Тема действительно интересная и правильная: большинству сайтов не нужно генерировать страницы при каждом запросе, делая запросы к базе данных, читая и разбирая шаблоны. Такие сайты можно генерировать на машине разработчика и выкладывать (вылаживать?) на хостинг уже готовые html-файлы. А комментарии живут с помощью IntenseDebate, Disqus, Hypercomments или других (их много).

Некоторые их них я пощупал, на hyde даже сделал простой сайтец. Итак:

### На Python


* оригинальный [hyde 0.5.3](https://github.com/lakshmivyas/hyde) - хороший, внутри немного Джанги (шаблоны и settings), не развивается;
* a [brand new hyde](https://github.com/hyde/hyde) - сильно переписанный заново, избавились от Джанги, шаблоны на jinja2, плохо документирован;
* [Blogofile](http://www.blogofile.com/) - ничего о нём сказать не могу, но популярный;
* [Pelican](http://pelican.notmyidea.org/en/latest/index.html) - попроще Blogofile, некоторын моменты документированы плохо, вцелом - ок;
* дедушка [Pyblosxom](http://pyblosxom.bluesock.org/) - самый старинный проект (начат в 2004 году), ничего про него сказать не могу;
* [Nikola](http://nikola.ralsina.com.ar/) - продвинутый, хорошо документированный;
* [Acrylamid](http://posativ.org/acrylamid/) - простой, хорошо документирован;
* [Logr](https://github.com/BrewerHimself/Logr) - похоже самый простой из всех;
* [Cactus](https://github.com/koenbok/Cactus) - внутри работает на Джанге, плохо документирован.

### На Ruby

* [jekyll](https://github.com/mojombo/jekyll) - вроде он сейчас король королей, ещё и потому, что на нём работают Github Pages;
* [octopress](http://octopress.org/) - построен на jekyll, содержит внутри готовый, красивый, валидный шаблон, есть много сторонних тем.

### На Node.js

* [sweet](https://github.com/sapegin/sweet)
* [DocPad](https://docpad.org/) - очень продвинутый, имеет много [плагинов](https://docpad.org/docs/plugins) и готовых [шаблонов](https://docpad.org/docs/skeletons).

UPD 2012-04-04: добавлен DocPad  
(будет обновляться)

