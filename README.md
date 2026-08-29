# DIGITAL ARCHITECT — сайт-портфолио

Современное минималистичное портфолио студии **DIGITAL ARCHITECT** в тёмной теме. Статический сайт (HTML/CSS/JS), готовый для публикации на **GitHub Pages**.

## Локальный запуск

Просто откройте `index.html` в браузере или запустите локальный сервер:

```bash
# Python
python -m http.server 8000
# затем откройте http://localhost:8000
```

## Публикация на GitHub Pages

### Вариант 1: проект `<username>.github.io`
1. Создайте репозиторий с именем `<username>.github.io` (например `stepaandgddev.github.io`).
2. Загрузите все файлы сайта в **корень** репозитория.
3. В настройках репозитория (Settings → Pages) выберите ветку `main` и папку `/ (root)`.
4. Сайт будет доступен по адресу `https://<username>.github.io`.

### Вариант 2: обычный репозиторий + Pages
1. Создайте репозиторий и загрузите файлы.
2. В Settings → Pages в поле source выберите ветку `main` и папку `/ (root)` или `/docs`.
3. Если выбран вариант `/docs`, поместите файлы сайта в папку `docs/` проекта.

## Структура

```
portfolio/
├── index.html      # страница
├── css/style.css   # стили
├── js/main.js      # интеракции (скролл, меню, копирование email)
├── assets/logo.png # логотип
└── README.md
```

## Контакты

- Email: stepaandgd@gmail.com
- Telegram: @stepaandgddev
- GitHub: github.com/stepaandgddev
