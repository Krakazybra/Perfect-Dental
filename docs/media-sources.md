# Источники изображений

Все изображения оборудования в `public/images/equipment` получены от клиента Perfect Dental и используются как подтверждённые материалы клиники.

| Файл | Источник | Назначение |
| --- | --- | --- |
| `doctor-smile-pluser.webp` | клиент | стоматологический лазер Doctor Smile Pluser |
| `digital-3d-diagnostics.webp` | клиент | цифровая 3D-диагностика, модель требует подтверждения |
| `intraoral-scanner.webp` | клиент | внутриротовый сканер, модель требует подтверждения |

AVIF-версии и `og-perfect-dental.png` являются техническими производными этих же клиентских материалов.

### Улучшенные версии оборудования

Файлы с суффиксом `-v2` созданы встроенным OpenAI ImageGen на основе клиентских фотографий. Изображения приведены к единой светлой клинической подаче; неподтверждённые модели оборудования в текстах сайта не называются.

| Файл | Основа | Изменения |
| --- | --- | --- |
| `doctor-smile-pluser-v2.webp` | клиентский снимок Doctor Smile Pluser | удалены дубли, улучшены фон, свет, резкость и композиция |
| `digital-3d-diagnostics-v2.webp` | клиентский снимок 3D-диагностического аппарата | увеличено разрешение, восстановлен полный кадр, добавлен нейтральный фон |
| `intraoral-scanner-v2.webp` | клиентский снимок внутриротового сканера | удалён дубль, увеличено разрешение, выровнены фон и освещение |

## Команда

Фотографии в `public/images/team` переданы клиентом. При подготовке для сайта выполнены только кадрирование, лёгкая цветокоррекция и конвертация в WebP/AVIF; лица и детали внешности не изменялись.

| Файлы сайта | Клиентский исходник | Назначение |
| --- | --- | --- |
| `founder-portrait`, `founder-smiling` | `_MG_2557.jpg`, `_MG_2562.jpg` | основатель Perfect Dental |
| `doctor-portrait-02` | `_MG_2580.jpg` | врач клиники |
| `doctor-portrait-03` | `_MG_2617.jpg` | врач клиники |
| `doctor-portrait-04` | `_MG_2659.jpg` | врач клиники |

## Иллюстрации направлений

Файлы `surgery-editorial`, `orthopedics-editorial`, `therapy-editorial`, `orthodontics-editorial`, `surgery-neutral`, `periodontology-editorial`, `gnathology-editorial` и `emergency-editorial` созданы встроенным генератором изображений OpenAI специально для интерфейса сайта. Они не изображают конкретное оборудование или помещение Perfect Dental. `emergency-editorial` содержит нейтральную модель пациента; остальные перечисленные изображения являются предметными композициями.

## Лицензированные изображения

| Файл | Автор и источник | Лицензия | Изменения |
| --- | --- | --- | --- |
| `dental-microscope.webp` | [Kiran891, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SYNCA_CJ-Optik_Flexion_Twin_microscope_and_A-dec_500_LED_lights_from_patient_perspective.jpg) | CC BY-SA 4.0 | кадрирование, изменение размера, WebP/AVIF |
| `orthodontic-brackets.webp` | [Panadda Niranatlumpong et al., Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dental_braces_parts_4.jpg) | CC BY 3.0 | кадрирование, изменение размера, WebP/AVIF |

## Работы и истории пациентов

На публичных страницах используются выбранные заказчиком публикации официального Instagram-аккаунта Perfect Dental. Они подключаются через стандартный Instagram embed и сохраняют прямую ссылку на оригинал.

Файлы в `public/images/results` созданы OpenAI ImageGen ранее и сохранены только как неиспользуемый архив. Текущая страница «Работы» их не выводит.

| Пара файлов | Источник | Назначение |
| --- | --- | --- |
| `orthodontics-before/after` | OpenAI ImageGen | иллюстрация ортодонтической коррекции |
| `restoration-before/after` | OpenAI ImageGen | иллюстрация восстановления формы зуба |
| `therapy-before/after` | OpenAI ImageGen | иллюстрация лечения кариеса и реставрации |
