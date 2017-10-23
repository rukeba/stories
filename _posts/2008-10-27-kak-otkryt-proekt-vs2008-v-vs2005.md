---
layout: post
title:  'Как открыть проект VS2008 в VS2005'
slug: 'kak-otkryt-proekt-vs2008-v-vs2005'
date:  2008-10-27 09:00:00 +0300
category: by-the-way
tags: [".net","howto"]
---

Я пользуюсь старой доброй Visual Studio 2005 и .Net 2.0. Но иногда в мои руки попадают проекты сделанные в 2008-й и открывать их 2005-ая отказывается. Немного поэкспериментировав, нашёл простой рецепт:

* делаем резервную копию файла_проекта.csproj;
* открываем файл_проекта.csproj в вашем любимом текстовом редакторе (да, это обычный xml-файл);
* если у вас не установлен .Net 3.5, удаляем все теги Reference, внутри которых есть тег `<RequiredTargetFramework>3.5</RequiredTargetFramework>`;
* заменяем строку  
`<Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" />`  
на  
`<Import Project="$(MSBuildBinPath)\Microsoft.CSharp.targets" />`
* сохраняемся, открываем проект в VS2005 и радуемся!


