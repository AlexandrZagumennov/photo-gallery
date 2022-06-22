# **Онлайн галерея фотограий**

### Краткое описание приложения:

Галерея фотографий из базы unsplash.com. При первой загрузке подгружается 30 фото. При скролле страницы подгружаются новые фото.
При клике на фото происходит переход на его отдельную страницу. Фото можно скачать при клике на соответствующую кнопку.  
Авторизация на unsplash.com. Авторизованный пользователь может поставить фото лайк или снять его.

### JS - решения:

1. Генерация html - разметки, манипулирование свойствами CSS при помощи JS;
2. Подгрузка данных с прокруткой страницы (IntersectionObserver), бесконечный скролл;
3. Работа с API https://unsplash.com/ с помощью fetch;
4. Анимационный эффект для фото при помощи Masonry;
5. Авторизация oAuth с использованием JWT-токен;
6. Простановка лайков автоизованными пользователями;
7. Развёртывание проекта в облаке https://vercel.com/

### Плагины, бибилиотеки, сервисы:

1. https://unsplash.com/
2. https://masonry.desandro.com/
3. https://vercel.com/

### Ссылка на приложение:

https://photo-gallery-iota-five.vercel.app/
