---
date: 2014-01-04
title: Анализ последовательностей регуляторных районов генов 
published: 2022-04-24
lastModified: 2022-04-24
---

Сегодня листал книгу о геноме человека, понял что теории без практики будет маловато, и, более того, книга будет скучновата для рождественских каникул, поэтому купил Гуссерля (это он феноменологию придумал). А генами решил заняться по одной [интересной ссылочке](http://genome.crg.es/courses/Lisbon04/)

[собственно вот](http://genome.crg.es/courses/Lisbon04/exercises/day2/search_motifs/slide7.html), что можно поделать, чтобы прикоснуться к биоинформатике.

Будем искать место промоутера вида (G|C)TATAAA(A|T)(G|A) в цепочке ДНК плодовой мушки. Пошаговая инструкция в лекции имеет студенческий характер, т.е. требуемый результат можно получить, только с некоторыми изменениями. Итак:

- заходим [на сайт](http://rsat.sb-roscoff.fr/) ранее ссылка была на `http://rsat.scmbb.ulb.ac.be/rsat/`
- в левой панели выбираем **Pattern matching** -> **dna-pattern**
- в **Query pattern** вставляем `STATAAAWR`
- в **Sequence** вставляем весь текст из http://genome.crg.es/courses/Lisbon04/exercises/day2/search_motifs/sequences/All.fa (он в формате fasta)
- **Search strands** меняем на direct only
- **Origin** меняем на start
- **Substitutions** ставим 1 (при 0 результатов не будет, а на 2 - получим больше совпадений, но что странно - с той же вероятностью 0.89, т.е. 8 правильных из 9)
- жмем Go
- в таблице Matching positions в столбце **matching_seq** кроме "-" должны быть кусочки совпавших генов.
- жмем кнопку **feature map**
- удаляем ересь с html тегами (<blockquote>,<br>,<hr>), чтобы в строки начинались с ;
- для **Display limits** ставим от 50 до 500
- в параметрах **Map dimensions** для опции **thickness** задаем значение 60
- **Feature handle** меняем на color dot
- ставим галку для positions среди **Label keys**
- жмем Go

Это был не курс "Стань генным инженером за 16 шагов", это был всего лишь поиск подстроки, который можно на питоне написать.
После этого я бы спросил: "Зачем их находить?", а после возникнет вопрос: "Как искать шаблон, по которому их находить?".


## Зачем их находить?

Был такой проект о расшифровке генома человека. В 1990-м году люди с энтузиазмом посмотрели на потенциально огромную работу, прикинули, сколько грантов можно под это дело себе обеспечить и начали сей проект под предлогом победы над многими болезнями. В 2003 году проект закончился. Успешно, кстати. Только есть небольшая проблема: ДНК брали у некой группы добровольных доноров, но геном у каждого человека различный. Поэтому результаты проекта - это лишь некоторая средняя модель, на которую можно опираться, но для каждого человека оно не может с точностью утверждать, какой участок гена за что отвечает.

В 2009 году выходит статья, что программы, которые предсказывают промоутеры, сравнивались между собой неверно, что давало нечестное преимущество. Я уверен, что работы все еще идут, ученые спорят, пьют чаи, но курят больше, чем пишут. К примеру, в Европе уже готовы улучшать ДНК эмбрионов [ссылка на источник потерялась]

Генная инженерия использует промоутеры при исследовании экспрессии генов http://www.biotechnolog.ru/ge/ge9_2_1.htm . Жалко, что практического материала, типа DIY, я не нашел.


## Как искать шаблон?

К слову, база данных TRANSFAC требует мыло с академическим адресом. Меня, конечно, заинтересовал почтовый сервис на моем университете - нужно будет подготовить пентест. В итоге, проблема с регистрацией в следующем упражнении (http://genome.crg.es/courses/Lisbon04/exercises/day2/search_motifs/slide9.html), привела меня к иллюстрированному гайду по работе с геном, который вырабатывает лептин: http://compfly.bio.ub.es/eblanco/courses/03_promoteranalysis/

Ответ на вопрос где-то в этом гайде. Я пока работаю над этим. Но то ли извилины медленно работают, то ли отвлекающих факторов масса, то ли еще учиться да учиться мне. Что можно ждать дальше: пентест почтовых сервисов?...