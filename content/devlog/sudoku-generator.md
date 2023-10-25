---
path: "/ru/blog/sudoku-generator"
date: 2019-03-04
title: "Sudoku generator"
language: "ru"
published: 2021-10-28
lastModified: 2021-10-28
---

Я думаю, что об этом стоит рассказать.

В своё свободное время я стараюсь развивать себя. Как программиста - смотреть новые технологии, повторять или изучать новые алгоритмы, решать простые задачки на codewars.

И вот одним вечером моя вторая половина заявляет, что на Play Store нет нормального судоку размером 16х16. Я говорю, что если найти любой проект на github под android, то сделать его под желаемые требования не займёт больше двух вечеров.

Надо сказать, что с тех пор прошло месяца три.

Немного времени я отвел на то, чтобы пробежаться по общим сведениям из википедии, статьям в СМИ и теоретическим фанатским сайтам. Нужно было ответить для себя на вопросы: как там задействован Эйлер, по какому принципу генерируются паззлы и какие математические разделы я смогу повторить углубившись в этот проект.

Достаточно быстро на гитхабе я наткнулся на приличный судоку написанном на react-native. Технология для меня неизвестная, в ридми на гитхабе гифка мне нравится - значит берём и ставим. Покрутил, посмотрел - нравится. После рефакторинга (убрал магические числа, задающие размер паззла - 81, 27, 9 3) увеличил множитель с 3 на 4 и все сломалось. Иногда красный экран и непонятный traceback. Иногда приложения не стартует. Непонятно как отлаживать.

Забегая вперёд скажу, что алгоритм генерация поля для 16х16 вешается на неопределенно долгое время. Возможно, там вовсе бесконечный цикл. Для меньших размеров алгоритм выдаёт результат за секунду. Никакой привязки к размерности нет, что значит, надо пересматривать алгоритм.

Написать некоторое подобие судоку на react для web получилось прямо за реактивные сроки.

И вот здесь здравый смысл в планировании нерезинового вечернего времени затерялся где-то за планом о создании тулзы, которая будет пошагово решать судоку и графически объяснять каждый ход. Благо такая тулза быстро нашлась на java. Правда я долго тупил, как её запустить под Idea.

Некоторый псевдо с++ код

```
if (all(board.get_columns(), [](column){column.full() && column.unique()}
    && all(board.get_rows(), [](row){row.full() && row.unique()}
    && all(board.get_squares(), [](square){square.full() && squre.unique()}) {
  // board is correct sudoku
}

board.row(x).column(y) = z
board.square(n).in_row(x).in_column(y) = w

if (board.row(x).open_left().size() == 1 && board.column(y).open_left().size() == 1)
  for i in {1...9}:
    board.row(x).column(y) = i
    if (board.row(x).unique() && board.column(y).unique()) break;
```