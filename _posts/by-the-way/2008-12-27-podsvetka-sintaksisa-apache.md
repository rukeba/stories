---
title: Подсветка синтаксиса Apache
date: 2008-12-27 11:27:00 Z
categories:
- by-the-way
tags:
- apache
- done
- web
layout: post
---

Появилась у меня необходимость на страницах [блога HeliconTech](http://helicontech.blogspot.com) 
синтаксически подсвечивать конфигурационные файлы Apache (httpd.conf и .htaccess). Первым делом
я пошёл на сайт Ивана Сагалаева, но оказалось, что его замечательный 
[highlight.js](http://softwaremaniacs.org/soft/highlight/) подсвечивать конфигурацию Apache не умеет.
Но также выяснилось, что написать новую подсветку синтаксиса довольно просто. С сайта документации Apache
я получил html-страницу, на которой были все (*почти все :) его директивы. После некоторого
шаманства с регулярными выражениями из этого html-файла я получил список всех директив Apache 
в простом текстовом файле. Дальше, немного потрудившись, получилось и само описание синтаксиса.

[Скачать highlight-apache.zip](http://media.rukeba.com/files/highlight-apache/highlight-apache.zip)  
[Пример работы](http://media.rukeba.com/files/highlight-apache/apache.html)

Для использования распакуйте архив на сайте и в html-документах внутри тега `head` необходимо добавить:

    <link rel="stylesheet" href="apache.css">
    <script src='highlight.js'></script>
    <script src='apache.js'></script>
    <script>hljs.initHighlightingOnLoad();</script>

Не забудьте поправить пути к файлам.

Подсветка работает. И я радуюсь.

2009-01-03 UPDATE: Иван Сагалаев добавил подсветку apache 
в проект [highlight.js](http://softwaremaniacs.org/soft/highlight/)!

2009-01-04 UPDATE: сделал новый стиль - Magula. Тоже уже принят в основной бранч.

