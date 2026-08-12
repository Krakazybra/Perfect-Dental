import {
  ServiceItem,
  Doctor,
  PriceCategory,
  BeforeAfterCase,
  Review,
  PlatformRating,
  Certificate,
  SpecialOffer,
} from '../types';
import leadDoctorImg from '../assets/images/lead_doctor_maksat_1786534720649.jpg';
import doctorAliyaImg from '../assets/images/doctor_aliya_orthopedist_1786534867700.jpg';
import doctorArmanImg from '../assets/images/doctor_arman_endodontist_1786534886146.jpg';
import doctorDinaImg from '../assets/images/doctor_dina_orthodontist_1786534906573.jpg';

export const CLINIC_INFO = {
  name: 'DENTA',
  tagline: 'Высокая стоматология в Алматы',
  subtext: 'Стоматология, в которую хочется возвращаться',
  description:
    'Современное лечение зубов по международным протоколам в атмосфере абсолютного комфорта. Мы объединили передовые технологии и искреннюю заботу о каждом пациенте.',
  address: 'г. Алматы, пр. Аль-Фараби, 15, БЦ "Нурлы Тау", Блок 4В',
  phones: ['+7 (747) 093-89-86', '+7 (727) 123-45-67', '+7 (701) 123-45-67'],
  whatsappPhone: '77470938986',
  workingHours: {
    weekdays: 'Пн - Пт: 09:00 - 20:00',
    saturday: 'Сб: 10:00 - 16:00',
    sunday: 'Вс: Выходной',
  },
  stats: [
    { value: '4+', label: 'Опыт врачей от 4 лет' },
    { value: '0 ₸', label: 'Проф. осмотр' },
    { value: '3+', label: 'Гарантия от 3 лет' },
  ],
  leadDoctorImage: leadDoctorImg,
  mapImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAsJPjzn1bAsWrrsGTELBz0K7B9hZFATcIZ-Uw6k3zQndhUHrqbkK9R-a-FgdCp8Y-NdxvYQhN4zNzAtKpfGgMWxolAu9rF88oVgsFwuQ4JyD1l0AsT-sOjV3j7FTGSlhE0bmoQ4amZPF42A4SVwpftLpg1ZMS2aIuX_-fPIAAeBzJf21c2AdVgmxoNtufQssTl3fJtc_X-WSC2eP9CLp4eBOC3biRrbPhJknQiizUQGSCk4iT9Gspp=s1600',
  tooth3dImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCLjRWJfXF7fs6cFyx7svboT4uXiYwcUBnGooBnaqUf1b6OGYiVOjTMrauh1zuhDW_BPDeg4xd8LMYVSQdHK4EhCKqbB3oB0_EOOwu8hdka8uWLqy5EfrR4TpjBQHygmJEKpikXaExOo4fuwAMNxkdyFMEeyX_OpkWPuyGY7XJTrdZ1szICINsi6KiHLZwKjSWF6II17ZJSrAKcVZ7SU4GIoRZzXJTQ31V9lshV7oq_Y8nm8bg20tMY=s1600',
  diamondToothImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDbzAPBuNPFoWYkaqaPSu4WRAa44nOIN0lLTGvbGtFu8eDyR_98X9V0puSX5gw6K4_AGCR6J_9zD1Rs53vRlLSCeoZ_DWdEcswQREQLHZJ-mpNuGYnede6uo_Wj7SND1c9SiMjZvTTQcPWdd0m_vgiYQv2q6jKTK36HiutP0LOvAC1oxNv4F7RxVaJ1_j_gF6Q05YyFYZc8anVJdH0CpcnaEnFUa9b7ZRwyRM8JdANiiY52fiQgWC-d=s1600',
};

export const FEATURED_GRID_SERVICES = [
  {
    id: 'caries',
    title: 'ЛЕЧЕНИЕ КАРИЕСА',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLMHknlIQSXfcdvjywyhvgQqaDmnh3AExzo2qngBE41n5JrKefd6kserqwTFiEFsLWy2xgG56fWE2tTwQqKh4cRNqVZTWarX7gFrHTNwwRBtfgw0o3Em8gt6tTuMkQzjzd0e-IjBvCOixLQysAX5guNLkHj__9KiWyxe3dSvt7i71Ig8mLEXtBMFRp2FmUY-JEQpW7sJ-FiUX88qe3BrspvD2pnlZPV4Yabvvdj0jrET6ZviQe0KM7=s1600',
    bgColor: 'bg-surface-container-low',
    textColor: 'text-on-surface',
  },
  {
    id: 'implantation',
    title: 'ИМПЛАНТАЦИЯ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZzoN3VUsxdv5fPUc7CuWY2oloMsBn_sf2KD67QFrAyOfEUjCxfy8HUW9KUnUMMrGr0FxPsMv80KJZL8vvWg3DbwpGk84XLnkZ2X29ROZsMinOMYwqZsnE09uEvoePJstrHtEXJQp80v3_oxO1a4MrI0rWRaoyHBMPAGNKa46QtjWIVI4QWHBEKePYrQY4zVcyFm-0ub53SSg2SKmXH_Ms_U-fLLnUTrtAfXcFtqIYLfqOggGwesuz=s1600',
    bgColor: 'bg-surface-container-low',
    textColor: 'text-on-surface',
  },
  {
    id: 'braces',
    title: 'БРЕКЕТЫ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCat06A4-eaumyZItpqG2QO0ef3lDDImSEfSmXG7QY5k9i9JEOjH9ayWNbBpDbFg0BY6zm_ga5oubJflUgHb3OTrZ9omomOJKpsx8CnuTR9QeHer2Pz6Nlihefb5bFQqYXTLcnqxZOLzXRgf4bvDQpzyYUkEip8rizbNnmMem8Taqy_JpfvdyMA55LbuqHNtKhxO88VKOMsmMVkGw9qVe6cIEw9Gy9WUUmjD4_wyGg8KbY2gkNMcOUM=s1600',
    bgColor: 'bg-surface-container-low',
    textColor: 'text-on-surface',
  },
  {
    id: 'teeth-1-day',
    title: 'ЗУБЫ ЗА 1 ДЕНЬ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIvpY_XyG6bi4b8kOWdEkpG96USAptRcCcfCDGxWnTVB7VYCP-yijtx1Ks5zIxihStm7SyIx4hTibZBI4BDxwk8mOrwxTqiPBONKLYVmsidmhYr4nh-XmP0b5FhUAHUZs2_2YeQC7ou1riBZ76kZ79KYf5E1u3yJ0i6E2mHWBcQoHVarPDeGakaU6j16LbpsvjEykOBw3X6QHjSFsknHzY0GsF8ddHdey2Iv7kHUyU2OcyvMWDIf6Y=s1600',
    bgColor: 'bg-inverse-primary',
    textColor: 'text-on-primary-fixed-variant',
  },
  {
    id: 'cleaning-whitening',
    title: 'ЧИСТКА И ОТБЕЛИВАНИЕ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZi5bUgpVceOoy8iyfYTSq90zAnnK0__6nyNOpSRhRil58QIhJKqJ4YuSJgGBBs2hHLTdZe4lyTc8J4hkF_hx0lcSmJ5qdYOOgGkxHO-aFpnwVWtlAssv4su7hceD4mJS15x5f2a_FlE_Y3ks5duvm8ogZlfzJ1X3ty23QKABpbZn1UMGApNFEHiJtc4Vv90oidEVrA-IxTG7XzDOR5p-WgSyzqFJH2rnCbFWR2M6xKdBatNUkXWj=s1600',
    bgColor: 'bg-surface-container-low',
    textColor: 'text-on-surface',
  },
  {
    id: 'orthopedics',
    title: 'ОРТОПЕДИЯ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3AQNXZQ7uuRPdxtDxzKLaunCbVgD2POxCzHrZSsvzWguy8AxaSB34ofQ1gpVKq2VSoyjFEmiTYNb5I-GzEggVtbbY2X76sR-unphmtkrBH_v5NnPb1jRSh5mYOM6C-Mguv9d2a2qQCDOvB-BKGII9fFgzR2-RF-EufNarnwa_fepU5KusYhpCo2E8FExHGnVqhsSaUpIxv7591SAVwFjKrOW_6D4Mwv4SSSocEziyQywLnqqa8are=s1600',
    bgColor: 'bg-surface-container-low',
    textColor: 'text-on-surface',
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'therapy',
    title: 'Терапия',
    category: 'Терапевтическое лечение',
    description:
      'Лечение кариеса и его осложнений с использованием микроскопа. Максимальное сохранение здоровых тканей зуба и безболезненный процесс.',
    priceFrom: 'от 15 000 ₸',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200',
    isPopular: true,
  },
  {
    id: 'implantation',
    title: 'Имплантация',
    category: 'Хирургия и имплантология',
    description:
      'Восстановление утраченных зубов с помощью премиальных имплантационных систем. 3D-планирование для идеального долгосрочного результата.',
    priceFrom: 'от 150 000 ₸',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZzoN3VUsxdv5fPUc7CuWY2oloMsBn_sf2KD67QFrAyOfEUjCxfy8HUW9KUnUMMrGr0FxPsMv80KJZL8vvWg3DbwpGk84XLnkZ2X29ROZsMinOMYwqZsnE09uEvoePJstrHtEXJQp80v3_oxO1a4MrI0rWRaoyHBMPAGNKa46QtjWIVI4QWHBEKePYrQY4zVcyFm-0ub53SSg2SKmXH_Ms_U-fLLnUTrtAfXcFtqIYLfqOggGwesuz=s1600',
    isPopular: true,
  },
  {
    id: 'orthodontics',
    title: 'Ортодонтия',
    category: 'Исправление прикуса',
    description:
      'Исправление прикуса и выравнивание зубов. Современные брекет-системы и незаметные элайнеры для комфортного и эстетичного лечения.',
    priceFrom: 'от 200 000 ₸',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCat06A4-eaumyZItpqG2QO0ef3lDDImSEfSmXG7QY5k9i9JEOjH9ayWNbBpDbFg0BY6zm_ga5oubJflUgHb3OTrZ9omomOJKpsx8CnuTR9QeHer2Pz6Nlihefb5bFQqYXTLcnqxZOLzXRgf4bvDQpzyYUkEip8rizbNnmMem8Taqy_JpfvdyMA55LbuqHNtKhxO88VKOMsmMVkGw9qVe6cIEw9Gy9WUUmjD4_wyGg8KbY2gkNMcOUM=s1600',
    isPopular: true,
  },
  {
    id: 'teeth-1-day',
    title: 'Зубы за 1 день',
    category: 'Экспресс имплантация',
    description:
      'Установка временной или постоянной протезной конструкции сразу в день имплантации. Полноценная функция и эстетика за 24 часа.',
    priceFrom: 'от 350 000 ₸',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIvpY_XyG6bi4b8kOWdEkpG96USAptRcCcfCDGxWnTVB7VYCP-yijtx1Ks5zIxihStm7SyIx4hTibZBI4BDxwk8mOrwxTqiPBONKLYVmsidmhYr4nh-XmP0b5FhUAHUZs2_2YeQC7ou1riBZ76kZ79KYf5E1u3yJ0i6E2mHWBcQoHVarPDeGakaU6j16LbpsvjEykOBw3X6QHjSFsknHzY0GsF8ddHdey2Iv7kHUyU2OcyvMWDIf6Y=s1600',
  },
  {
    id: 'cleaning-whitening',
    title: 'Чистка и отбеливание',
    category: 'Профилактика и эстетика',
    description:
      'Профессиональная гигиена полости рта AirFlow и деликатное отбеливание с сохранением естественной прочности эмали.',
    priceFrom: 'от 60 000 ₸',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZi5bUgpVceOoy8iyfYTSq90zAnnK0__6nyNOpSRhRil58QIhJKqJ4YuSJgGBBs2hHLTdZe4lyTc8J4hkF_hx0lcSmJ5qdYOOgGkxHO-aFpnwVWtlAssv4su7hceD4mJS15x5f2a_FlE_Y3ks5duvm8ogZlfzJ1X3ty23QKABpbZn1UMGApNFEHiJtc4Vv90oidEVrA-IxTG7XzDOR5p-WgSyzqFJH2rnCbFWR2M6xKdBatNUkXWj=s1600',
  },
  {
    id: 'orthopedics',
    title: 'Ортопедия и виниры',
    category: 'Протезирование',
    description:
      'Керамические виниры, циркониевые и металлокерамические коронки. Восстановление идеальной анатомии и белоснежной улыбки.',
    priceFrom: 'от 80 000 ₸',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3AQNXZQ7uuRPdxtDxzKLaunCbVgD2POxCzHrZSsvzWguy8AxaSB34ofQ1gpVKq2VSoyjFEmiTYNb5I-GzEggVtbbY2X76sR-unphmtkrBH_v5NnPb1jRSh5mYOM6C-Mguv9d2a2qQCDOvB-BKGII9fFgzR2-RF-EufNarnwa_fepU5KusYhpCo2E8FExHGnVqhsSaUpIxv7591SAVwFjKrOW_6D4Mwv4SSSocEziyQywLnqqa8are=s1600',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'berikzhanov-maksat',
    name: 'Берикжанов Максат',
    specialty: 'Главный врач, хирург-имплантолог',
    experienceYears: 15,
    description:
      'Специализируется на сложных удалениях зубов, дентальной имплантации и костно-пластических операциях. Член международной ассоциации имплантологов.',
    image: leadDoctorImg,
  },
  {
    id: 'smagulova-aliya',
    name: 'Смагулова Алия',
    specialty: 'Стоматолог-ортопед',
    experienceYears: 12,
    description:
      'Эксперт в области эстетического протезирования, виниров и люминиров. Создает идеальные улыбки с учетом индивидуальных анатомических особенностей каждого пациента.',
    image: doctorAliyaImg,
  },
  {
    id: 'aliev-arman',
    name: 'Алиев Арман',
    specialty: 'Стоматолог-терапевт, эндодонтист',
    experienceYears: 9,
    description:
      'Виртуозно владеет техниками лечения каналов под микроскопом. Спасает зубы, от которых отказались в других клиниках. Сторонник зубосохраняющих методик.',
    image: doctorArmanImg,
  },
  {
    id: 'serikova-dina',
    name: 'Серикова Дина',
    specialty: 'Врач-ортодонт',
    experienceYears: 11,
    description:
      'Специалист по исправлению прикуса любой сложности. Работает с современными брекет-системами и элайнерами. Помогает обрести уверенную улыбку в любом возрасте.',
    image: doctorDinaImg,
  },
];

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    title: 'Терапия',
    items: [
      {
        title: 'Первичная консультация врача-стоматолога',
        price: 'от 15 000 ₸',
        description: 'Осмотр, составление индивидуального плана лечения',
      },
      {
        title: 'Лечение кариеса (включая анестезию и пломбу)',
        price: 'от 45 000 ₸',
        description: 'Премиальные светоотверждаемые материалы',
      },
      {
        title: 'Лечение пульпита (1 канал)',
        price: 'от 80 000 ₸',
        description: 'Эндодонтическая обработка под дентальным микроскопом',
      },
      {
        title: 'Профессиональная гигиена полости рта',
        price: 'от 60 000 ₸',
        description: 'Ультразвук + AirFlow + полировка эмали',
      },
    ],
  },
  {
    title: 'Хирургия и Имплантация',
    items: [
      {
        title: 'Удаление зуба (простое)',
        price: 'от 30 000 ₸',
        description: 'Атравматичное извлечение под локальной анестезией',
      },
      {
        title: 'Удаление зуба мудрости (ретенированного)',
        price: 'от 80 000 ₸',
        description: 'Сложное хирургическое вмешательство',
      },
      {
        title: 'Установка имплантата (Osstem, Южная Корея)',
        price: 'от 350 000 ₸',
        description: 'Высокий процент приживаемости (98.8%)',
      },
      {
        title: 'Установка имплантата (Straumann, Швейцария)',
        price: 'от 650 000 ₸',
        description: 'Премиальная система с пожизненной гарантией',
      },
    ],
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Лечение среднего кариеса',
    patientProblem:
      'Пациент обратился с чувствительностью зуба на холодное и горячее. На приёме был выявлен кариес центральной фиссуры моляра.',
    workDone: [
      'Лечение кариеса под микроскопом (для максимального сохранения зуба)',
      'Восстановление естественной анатомической структуры зуба',
      'Герметизация фиссур и финишная полировка',
    ],
    guaranteeYears: 5,
    beforeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArZcb2lJFwqcO9xMt1plSYE6NmZJTi3dZWdKyQnZn-FG8EbpFHc1zuz07waryIQA5rxy-hIN8jcbq5nLmtY3kaXRijNOc13sKPwEVRI84JYAh9C004zzbbpVgp5RIRA7vlOSDk5S3cq5u3rHxoQaCmv-rlEo7BZ0-lB_9R2MG-ye5dvQjC05Xg9f_j1jk6reJJrmpbn3gda9id481v3Rd5zlaXxAUIiHRmb6-QeyXlx8l2aXn1uxw3=s1600',
    afterImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRZPpChSI4CJC_to2i23Y3YMvuMI7AUUfAbrmD6SLOlK-GKkOr7niO0TLCcyDCPQ9tG2T7VWxmf2WGShvtxAmeS9lGGrlgNZ_Qzn7sq9v713wzj6qD3gUrrMBgovTE7oMdL0GLHd0_pcRXLhdfClUMg2eyAI-Kas2lM5kCjQvx0TBstXd_AlkMgKuoWhYmy-rIWd8mpXUDkXagV6O4OLhMZ8znjgJkFyCr1CsnbdodSQNVwYOY5USB=s1600',
  },
  {
    id: 'case-2',
    title: 'Установка эстетических керамических виниров',
    patientProblem:
      'Пациент желал исправить сколы, дисколорит front-зоны и обрести гармоничную голливудскую улыбку.',
    workDone: [
      'Цифровое планирование улыбки Digital Smile Design',
      'Минимальное препарирование эмали в пределах 0.3 мм',
      'Установка 8 ультратонких E-max виниров премиум класса',
    ],
    guaranteeYears: 10,
    beforeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLMHknlIQSXfcdvjywyhvgQqaDmnh3AExzo2qngBE41n5JrKefd6kserqwTFiEFsLWy2xgG56fWE2tTwQqKh4cRNqVZTWarX7gFrHTNwwRBtfgw0o3Em8gt6tTuMkQzjzd0e-IjBvCOixLQysAX5guNLkHj__9KiWyxe3dSvt7i71Ig8mLEXtBMFRp2FmUY-JEQpW7sJ-FiUX88qe3BrspvD2pnlZPV4Yabvvdj0jrET6ZviQe0KM7=s1600',
    afterImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3AQNXZQ7uuRPdxtDxzKLaunCbVgD2POxCzHrZSsvzWguy8AxaSB34ofQ1gpVKq2VSoyjFEmiTYNb5I-GzEggVtbbY2X76sR-unphmtkrBH_v5NnPb1jRSh5mYOM6C-Mguv9d2a2qQCDOvB-BKGII9fFgzR2-RF-EufNarnwa_fepU5KusYhpCo2E8FExHGnVqhsSaUpIxv7591SAVwFjKrOW_6D4Mwv4SSSocEziyQywLnqqa8are=s1600',
  },
];

export const PLATFORM_RATINGS: PlatformRating[] = [
  {
    platform: 'Google',
    rating: 4.8,
    maxRating: 5,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4zfQ1BA--CNhGp1DaQmtKTg2KMVj-XKp5r5CLEdvpedHpHfX_bDsJIPlx3m_YkaX6pwDFHyeFaRBk4rZ0qE3_t30oclHwmu8s7E8DtKwv5qET9ppJ_2uqlfOL9_0pEhPRe8tIwxwwnreIllnt62ZVkRJ5BQj0a8oHk_GRdQJrhE4t-vi651wDBIiZQWObYKhoatT0H0gSGBijntZKbTPdV0vaNvbtTwogje5zIyjWh68t6bQbGDp',
    description: 'Зарабатываем репутацию в главном поисковике мира',
    linkText: 'в отзывах Google',
  },
  {
    platform: '2GIS',
    rating: 4.9,
    maxRating: 5,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJcMcqZ-dgWvcgn9Xxk2xpNry4OepYz6FADIKlunt0nZnTFm-cNC-ccep4-lmv_ZknmxwcJQTjqSOOSBOQdiRC1g_tclqBZD_jO_kbNUjS7SCszeqRATbo7iL_Lww-9fKpLFTcJDlsSkR5cUfFEh5IttcTLFWSGm0Ufba9Pxr4LsTxIi2tVFra4T3Esz9Y-3XsyvarB3fIlF9-jGFe5Fj8uyFksWc-BblvyVSxDYXNZJiTWCxYbxT6',
    description: 'Зарабатываем репутацию в главном справочнике страны',
    linkText: 'в отзывах 2GIS',
  },
  {
    platform: 'Yandex',
    rating: 4.7,
    maxRating: 5,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLiXQRl4T2nQGTq8OOBxxJyQRfZu7nTNbnOLA-y4WNgPITMyhndoMBkA3YOr74IFX_5Ivuckn_U4TIV-nqe85nrACFRSK9xinGIuqsjjOMb5dshqOTErFMIwno1U7DidqpdWShjcXdL88WD-mNyGILCmSjRjVgYNbCQpbQU-iPxqV6S5cgwDy83dKaMdgYflEHnabW9bM8wmM_Ql192u2KoTGoiLwjO6AqnJoLjmU4ug6bkI5AATpe',
    description: 'Зарабатываем репутацию в главном справочнике города',
    linkText: 'в отзывах Yandex',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Тогжан Баймагамбетова',
    date: '14.01.2025',
    rating: 5,
    text: 'Приходила на консультацию, так как сейчас в поисках стоматологии на установку брекетов себе и дочери. Клиника как из фильмов зарубежных 😄 не то что у нас в детстве ужас и страх. Ну а далее хочется отметить специалистов. Все очень вежливые, внимательные и подробно объясняют каждый этап!',
    initials: 'Т',
    commentLabel: 'Комментарий от нашего клиента',
  },
  {
    id: 'rev-2',
    author: 'Гульмира Есентимирова',
    date: '23.12.2024',
    rating: 5,
    text: 'Одна из 10 клиник которая смогла подтвердить заключение по рентгену. Я прошла 9 клиник которые непонятно куда смотрели и ничего не видели. Спасибо доктору Аслану за профессионализм и чуткое отношение!',
    initials: 'Г',
    commentLabel: 'Комментарий от нашего клиента',
  },
  {
    id: 'rev-3',
    author: 'Maria Rybnikova',
    date: '18.08.2024',
    rating: 5,
    text: 'Лучшая стоматология в которой я была за всю жизнь. Записалась поздно вечером сразу на утро следующего дня с серьёзной проблемой. Доктор сразу назвал финальную стоимость и никто не пытался мне продать лишние услуги.',
    initials: 'Ma',
    commentLabel: 'Комментарий от нашего клиента',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Сертификат BIOHORIZONS',
    issuer: 'BioHorizons Implant Systems Inc.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCquNydkSvnTTfeQhEgPcYHdIO6e1om-sLqcFeyNFE7ltsTVHyhkAH3dGQp_G4-ffJ6S0e3aj7XVvRaIFTzDUiHLxAQg2vA98K9SM0RVNXcE3oTMTrbaGJIrs10iA0ce43wsMH96LiPJuWBXixLJQMOVgl9prKZ3feyPY1Ly4BXavwjuRNxWsDsRtt8opEV9e3krpXCi6T0dxDxTCZsYf6C_E8nzdXSM1WGVvqgoY_6B2O7x90kJB2O=s1600',
  },
  {
    id: 'cert-2',
    title: 'Европейский сертификат цифровой стоматологии',
    issuer: 'European Digital Dental Academy',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiF7pGRG9BHPEqrUItnptvrz5e7OXfN4dT3QI3qc5jb2K_dmURfzLxsjHaRKt6MAnfvR8GdpnWVKxel9VQommk1xfwdWo6QNqyEopCv7MfNn-yx9W2zu-fdVrCRMxnj43P2D2ZvpCfcUlDJRAVObHfuiRdEk6NaiGa22PPkrssG_Qon_llb7aniOjED54O0sNTLPeeDCgsfCdZ5XEFyW2S4-6M35Bc0nHHCJZlcnSw6hmCU4UGSpPG=s1600',
  },
  {
    id: 'cert-3',
    title: 'Мастер-класс по современной ортодонтии',
    issuer: 'International Orthodontic Society',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSvKnq6d0jYl-9PzP3G3ZczxD3wYXdp74NJLbjvCaNF6ffNWa1-tscHMY_nMPKNNnOgBHkFENQwwawCadj-8MkZyEkxZ6kNd4iHbXwgh1HJNCamqHmTgkOrH6-3I7w9-x5dCJGdI38Sa7IpKfG5LO23zGBHFWo63tC6y0xUEkm1wbfnv0I9HaP-0S_IM4nL6SUs7xMxLOIAVN_1Mqc3Gd4oAogQhTAkwm0l4gby5Pfj0eN2draf3DM=s1600',
  },
  {
    id: 'cert-4',
    title: 'Продвинутая костная пластика и синус-лифтинг',
    issuer: 'Global Implant Training Center',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCawM4PkaKdDof5KmqjxWAU-KZ9HutqFkI2GWo9RENNJrWsQTbW_JntbVfC6TE84s8k1R5vDAP-DaufpoJhlm-aZVWMHkctObf-stJm7wwnDikEcCKOhvlri-qD32RBDMDh4VQ4RoYX8Sx7SnTD0VseSjsS21Rzh0ho_kgvrkadwjqQ3U6LLL3YpfjC7jdst9KKGgFyIr4yQuMYJAeMvBR464PJGApK97r6-GS-OvdZHiWKP2Hdcf9u=s1600',
  },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Первичная консультация и КЛКТ',
    badge: 'Для новых пациентов',
    description:
      'Комплексная диагностика состояния полости рта. Включает осмотр главного врача, 3D-снимок (КЛКТ) и составление подробного плана лечения.',
    oldPrice: '15 000 ₸',
    newPrice: '0 ₸',
    colSpan: 'full',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdiulYrZWoh3Q8aCU8mflhf3SjReBI1rl3F2jAQAjbIu9x9YN1DQLGB2wZ4qMAOd-snA4deCeoQ0JXdOVAM-ke-ULECpo7prRIn_27ipBydSDEEIZc0sQpkaw_VIeKmQDhS2HnVtAhI5LMwYndlztLMjWpokg0OqwnkULhAkzwH5CEU3H28X3F-0hTra2WWmWOPCTbCCma2O-SkJjS54PDLEsD2Ab8ZLPp0as83HrIW2Thj-G1m7D=s1600',
    icon: 'medical_services',
  },
  {
    id: 'offer-2',
    title: 'Семейная улыбка',
    description:
      'Заботьтесь о здоровье близких вместе. Скидка предоставляется на терапевтическое лечение для каждого последующего члена семьи.',
    newPrice: '-15%',
    discountBadge: '-15%',
    icon: 'family_restroom',
    colSpan: 'half',
  },
  {
    id: 'offer-3',
    title: 'Белоснежное преображение',
    description:
      'Профессиональное клиническое отбеливание системами последнего поколения. Безопасно для эмали, видимый результат за один визит.',
    oldPrice: '120 000 ₸',
    newPrice: '85 000 ₸',
    icon: 'auto_awesome',
    colSpan: 'half',
  },
  {
    id: 'offer-4',
    title: 'Имплантация под ключ',
    badge: 'Премиум качество',
    description:
      'Фиксированная стоимость восстановления зуба премиальной системой (Швейцария/Корея). В цену включены: имплантат, формирователь десны, абатмент, коронка и работа хирурга.',
    newPrice: 'от 180 000 ₸',
    colSpan: 'full',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCze3JVT_C6NDzyG4-tpoYQbMmy-V-JOm-_tpvm3q18PTBTiVQCA0ja5qQCMQtDoQB3IKA7vcbe4X5wYNV7wYv2sK238oCOirz5KIGJqyglu5eYHXKvvvt3HECAK8sfGCDxwo6DuZLkEd_YBeRGgsBsSYsSJdv9ARqA9Eaa-Uj2aARrA6k9v5HpFP04tdRf-BoUcTjmzxH4o9grcGkweKLlD_wit3NVUGA6SPvvy8VKMpZW9Hpu4lSU=s1600',
    icon: 'verified',
  },
];
