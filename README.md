# 📚 Homework Assignments

## Description
This repository contains solutions to JavaScript homework assignments related to DOM manipulation, event handling, and working with external libraries.

---

## 📚 Домашні завдання

## Опис
Цей репозиторій містить розв'язки домашніх завдань з роботи з DOM, подіями в JavaScript та підключення бібліотек.

---

## 📌 Завдання

### 1️⃣ Перемикач кольорів фону
**Опис:**
- Використовує дві кнопки: "Start" і "Stop" для зміни кольору фону сторінки.
- Кнопка "Start" запускає зміну кольору раз на секунду.
- Кнопка "Stop" зупиняє зміну кольору.
- Доки зміна кольору активна, кнопка "Start" має бути неактивною.
- Використовує функцію `getRandomHexColor()` для генерації кольору.

📁 **Файл:** [`01-color-switcher.js`](src/js/01-color-switcher.js)

---

### 2️⃣ Таймер зворотного відліку
**Опис:**
- Користувач вибирає кінцеву дату за допомогою бібліотеки `flatpickr`.
- Якщо дата в минулому, виводиться повідомлення "Please choose a date in the future".
- Кнопка "Start" стає активною лише після вибору дати у майбутньому.
- Відлік часу показує дні, години, хвилини та секунди.
- Таймер автоматично зупиняється при досягненні нуля.
- Використовує функцію `convertMs()` для розрахунку часу.

📁 **Файл:** [`02-timer.js`](src/js/02-timer.js)

---

### 3️⃣ Генератор промісів
**Опис:**
- Користувач вводить початкову затримку, крок збільшення затримки та кількість промісів.
- При натисканні кнопки "Create promises" створюється вказана кількість промісів.
- Кожен проміс має певну затримку та випадково виконується або відхиляється.
- Використовує бібліотеку `notiflix` для відображення повідомлень про виконання або відхилення промісів.

📁 **Файл:** [`03-promises.js`](src/js/03-promises.js)

---

## 🔗 Підключені бібліотеки

- [flatpickr](https://flatpickr.js.org/)
- [notiflix](https://github.com/notiflix/Notiflix#readme)