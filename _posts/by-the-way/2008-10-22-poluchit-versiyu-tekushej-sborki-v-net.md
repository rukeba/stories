---
title: Как получить версию текущей сборки в .Net?
date: 2008-10-22 13:20:00 Z
categories:
- by-the-way
tags:
- dot-net
- howto
layout: post
---

Очень просто:

    using System.Reflection;
    
    ...
    
    string version = Assembly.GetExecutingAssembly().GetName().Version.ToString();


