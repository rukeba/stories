---
layout: post
title:  'Как получить версию текущей сборки в .Net?'
slug: 'poluchit-versiyu-tekushej-sborki-v-net'
date:  2008-10-22 16:20:00 +0300
tags: [".net","howto"]
---

Очень просто:

    using System.Reflection;
    
    ...
    
    string version = Assembly.GetExecutingAssembly().GetName().Version.ToString();


