## Курс по JavaScript від Digital Learning

### Завдання #1. Аудит сайтів за допомогою `Chrome DevTools`

#### [www.worldsciencefestival.com](https://www.worldsciencefestival.com/ "www.worldsciencefestival.com")

1. Час завантаження сайту.

```txt
1.73 с
```

2. `Error`-елементи, які не підвантажуються, які потребують уваги.

```txt
Failed to set referrer policy: The value '' is not one of 'no-referrer', 'no-referrer-when-downgrade', 'origin', 'origin-when-cross-origin', 'same-origin', 'strict-origin', 'strict-origin-when-cross-origin', or 'unsafe-url'. The referrer policy has been left unchanged. | (index):1

GET https://connect.facebook.net/en_US/fbevents.js net::ERR_BLOCKED_BY_CLIENT | (index):258 

POST https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j87&tid=UA-22690893-1&cid=694106123.1603982883&jid=380140934&gjid=1157969452&_gid=2011809801.1603982883&_u=QCCAgUABCAAAAE~&z=1090089510 net::ERR_BLOCKED_BY_CLIENT | analytics.js:37 

https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1013191057/?random=1603987388148&cv=9&fst=1603987388148&num=1&bg=ffffff&guid=ON&resp=GooglemKTybQhCsO&eid=376635471&u_h=1080&u_w=1920&u_ah=1040&u_aw=1920&u_cd=24&u_his=2&u_tz=120&u_java=false&u_nplug=3&u_nmime=4&gtm=2oaae2&sendb=1&ig=1&data=event%3Dgtag.config&frm=0&url=https%3A%2F%2Fwww.worldsciencefestival.com%2F&tiba=World%20Science%20Festival&hn=www.googleadservices.com&async=1&rfmt=3&fmt=4 net::ERR_BLOCKED_BY_CLIENT | conversion_async.js:34 
```

3. Проаналізувати скільки пам'яті займає сайт (максимум сайт має завантажувати `10 МБ`) (`5 МБ` - нормально).

```txt
8.6 МБайт
```

4. Проаналізувати `Performance` - **Продуктивність**, які файли найдовше завантажуються, а які сповільнюють систему.

> `Performance`: 23%

```txt
96 ms Loading
572 ms Scripting
492 ms Rendering
69 ms Painting
293 ms System
4399 ms Idle
```

5. `SEO Accessibility` аудит (як читається сайт роботами-пошуковиками, що потрібно змінити, щоб показники були ближчими до `90%`).

> `SEO`: 86%

Покращення показників `SEO`:

- додати в документ мета-тег `description` зі стислим описом вмісту сторінки (мета-описи можуть бути включені в результати пошуку);
- додати до елементів зображення атрибути `alt`.

6. Результат 

> `Accessibility` - **Доступність**: 71% 

***

#### [www.world.rugby](https://www.world.rugby/ "www.world.rugby")

1. Час завантаження сайту.

```txt
3.15 с
```

2. `Error`-елементи, які не підвантажуються, які потребують уваги.

```txt
GET https://connect.facebook.net/en_US/fbevents.js net::ERR_BLOCKED_BY_CLIENT | (index):2740

GET https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js net::ERR_BLOCKED_BY_CLIENT | (index):2766

GET https://www.world.rugby/resources/prod/v8.4.2/i/elements/rwc-thumbnail-curve.png 403 | t-wr.css:1 

GET https://www.world.rugby/resources/prod/v8.4.2/fonts/webbelliscup-bold-webfont.woff net::ERR_ABORTED 403 | t-wr.css:1 
```

3. Проаналізувати скільки пам'яті займає сайт (максимум сайт має завантажувати `10 МБ`) (`5 МБ` - нормально).

```txt
8.7 МБайт
```

4. Проаналізувати `Performance` - **Продуктивність**, які файли найдовше завантажуються, а які сповільнюють систему.

> `Performance`: 19%

```txt
125 ms Scripting
147 ms Rendering
25 ms Painting
78 ms System
108607 ms Idle
```

5. `SEO Accessibility` аудит (як читається сайт роботами-пошуковиками, що потрібно змінити, щоб показники були ближчими до `90%`).

> `SEO`: 83%

Покращення показників `SEO`:

- додати в документ мета-тег `description` зі стислим описом вмісту сторінки (мета-описи можуть бути включені в результати пошуку);
- переконатися, що атрибут `href` якірних елементів має значення, яке вказує на необхідні місця на сторінках сайту (пошукові системи можуть використовувати атрибути `href` у посиланнях для сканування вебсайтів);
- переконатися, що сторінки зручні для мобільних пристроїв, щоб користувачам не потрібно було масштабувати зображення (інтерактивні елементи, такі як кнопки та посилання, повинні бути достатньо великими (`48x48 px`) і мати достатньо місця навколо них, щоб їх було досить просто натискати, не перекриваючи інші елементи. 

6. Результат 

> `Accessibility` - **Доступність**: 62%
