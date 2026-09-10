# Perfect Dental — QA и release report

Дата проверки: 10 сентября 2026

Production URL: https://perfect-dental-six.vercel.app

Vercel project: `perfect-dental`

Deployment: `dpl_5dTgH2CrSiNBhWCoj2U5JtoPx1NE`, повышен до production.

Статус Vercel: `READY`, target `production`.

## Автоматические проверки

- `npm run check`: успешно
  - TypeScript/typecheck: успешно
  - unit-тесты: 7 из 7
  - content-check: успешно
  - production build и prerender всех публичных маршрутов: успешно
- E2E: 21 из 21
- Mobile suite: 70 из 70
  - ширины 360, 390 и 768 px
  - отсутствие горизонтального переполнения
  - загрузка изображений
  - мобильное меню и модальное окно записи
  - отсутствие ошибок страницы и console error
- Accessibility: 17 из 17
- Visual regression: 70 из 70
  - ширины 360, 390, 768, 1024 и 1440 px

## Проверено вручную

- Главная страница открывается по production alias.
- Прямые ссылки и обновление вложенных маршрутов работают.
- Основной H1, изображения, навигация, телефон, WhatsApp и ссылки 2GIS присутствуют.
- Каталог содержит 9 понятных пациенту направлений; старые URL услуг отвечают постоянным редиректом 308.
- Страница врачей содержит 4 клиентские фотографии без битых изображений и горизонтального переполнения.
- Страница работ содержит 3 выбранные Instagram-публикации, страница отзывов — 5 историй пациентов.
- Production deployment привязан к отдельному проекту `perfect-dental` и репозиторию `Krakazybra/Perfect-Dental`.

## Ограничение Vercel-preview

Vercel используется для визуального согласования статического сайта. Endpoint `POST /api/appointments.php` и доставка заявок в Telegram начинают работать после публикации на PHP-хостинге и установки `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` вне публичного каталога.
