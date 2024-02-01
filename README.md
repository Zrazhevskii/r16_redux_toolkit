# Домашнее задание к заданию «Redux Toolkit»

## Задание: Поиск фильмов по каталогу IMDb и добавление найденных фильмов в "Избранное"

### Цель задания

1. Научиться работать с пакетом Redux Toolkit.

Ключи для API:
- 64405bd2
- 9713c5e7

Либо вы можете зарегистрировать свой ключ для API.

Оформление на Ваш вкус. Допускает использование UI фреймворков, например React-Bootstrap, Ant Design, Prime

### Инструкция к заданию
1. Изучить стороннее [API](https://www.omdbapi.com/)
2. Создать роуты для поиска фильма (главный роут), просмотра карточки фильма, избранного.
3. Реализовать компоненты для поиска, отображения найденных фильмов, карточку одного фильма с его описанием.
4. При вводе фильма в строку поиска отправить запрос к API. Во время запроса показать прелодер. После успешного получения ответа убрать прелодер, показать фильмы, если таковы были найдены. Если результат отрицательный, показать плашку, что фильмы не найдены.
5. Любой из найденный фильмов можно добавить в "Избранное". При переключении на вкладку "Избранное" показывать фильмы, которые были туда добавлены. Любой фильм можно удалить из "Избранного".

Пример ответа при поиске фильма:

```
{
  "Search": [
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0103064",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Terminator",
      "Year": "1984",
      "imdbID": "tt0088247",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Lady Terminator",
      "Year": "1989",
      "imdbID": "tt0095483",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
  ],
  "totalResults": "124",
  "Response": "True"
}
```
