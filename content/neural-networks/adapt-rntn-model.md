---
path: "/ru/neural-networks/adapt-rntn-model"
date: "2020-08-02"
title: Приспосабливаем RNTN модель
language: "ru"
draft: true
published: 2021-10-13
lastModified: 2022-07-31
---

RNTN - Recursive Neural Tensor Network - тензорнон обобщение рекурсивной нейронной сети.

Для начала поговорим о том, как подготавливаются данные для этой модели.
Предложение на естественном языке разбивается на слова, определяются части речи, проводится грамматический анализ, которое представляется в виде дерева определяющего взаимодействие между словами. Тогда как грамматический анализ - это термин из лингвистики, построенное дерево является результатом синтаксического разбора, с которым все программисты сталкиваются при написании своего калькулятора (или компилятора). 

Далее, рекурсия присутствует во время обучения и подчеркивает как слова в предложении воздействуют друг на друга. Что странно, в системе RNN присутсвует только одна матрица, которая отвечает за переходы на всех уровнях между любыми двумя словами. Эта матрица впитывает в себя все данные из обучения. И если данные противоречат друг другу, то вероятно, что такие понятия размывают "связи" в матрице, что ухудшает результат, и в целом делает качество модели непредсказумо зависимым от данных в обучении.

## Небольшое отступление по поводу визуализации
