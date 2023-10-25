---
path: "/ru/blog/google-drive-client"
date: 2020-12-12
title: "Клиент для Google Drive"
language: "ru"
published: 2021-10-13
lastModified: 2021-10-28
---

Когда я заходил на Гугл Драйв с винды, то помнится видел в левом меню под всеми кнопками и статусе о свободном месте кнопку, призывающую использовать клиент для винды и не пользоваться браузером. Один раз я решил дать этой программе шанс, в очередной раз ожидая пока интерфейс диска прогрузится (это было во времена свободных от засилия шрифта Gotham). Эта вещь мне показалась медленной на скачку и отдачу, и в чем-то неподконтрольной.

На днях мне захотелось скачать все из гугла. Очевидно, что сделать это можно только с помощью клиента. Проблема в том, что под линукс такой кнопки не появляется, а по запросу "клиент для гугл диска" выдается список платных приложений. Это все неправда.

Выход есть - rclone https://rclone.org/drive/

Настраивается легко, нужно только поверить, что все получится и следовать инструкциям. Ключ для своего клиента нужно создавать всего один раз, даже если аккаунтов вы собираетесь синхронизировать несколько.

Были еще про запас варианты

- https://github.com/vitalif/grive2
- https://github.com/odeke-em/drive#drive

но rclone нашелся в репозитории Арча и завелся без проблем.