import { unsplash } from '../utils/images'

// ─────────────────────────────────────────────────────────────
// PRODUCT CATALOG
// Every text field has an Uzbek (uz) and a Russian (ru) version.
// To use your own photo, put it in /public/products/ and set
// image: '/products/your-file.jpg'
// The current photos are demonstration interiors from Unsplash.
// ─────────────────────────────────────────────────────────────

export const categories = [
  { id: 'bamboo', label: { uz: 'Bambuk panellar', ru: 'Бамбуковые панели' }, short: { uz: 'Bambuk', ru: 'Бамбук' } },
  { id: 'decor', label: { uz: 'Dekorativ devor panellari', ru: 'Декоративные стеновые панели' }, short: { uz: 'Dekor', ru: 'Декор' } },
  { id: 'louver', label: { uz: 'Louver panellari', ru: 'Ламели и louver-панели' }, short: { uz: 'Louver', ru: 'Ламели' } },
  { id: 'doors', label: { uz: 'Yashirin eshiklar', ru: 'Скрытые двери' }, short: { uz: 'Eshiklar', ru: 'Двери' } },
  { id: 'adhesive', label: { uz: 'Tomchi kley', ru: 'Жидкие гвозди и клей' }, short: { uz: 'Kley', ru: 'Клей' } },
]

export const products = [
  {
    id: 'bamboo-panels',
    category: 'bamboo',
    image: unsplash('1558299244-f4bb4dd735b2'),
    name: { uz: 'Bambuk panellar', ru: 'Бамбуковые панели' },
    imageAlt: {
      uz: 'Tabiiy bambuk poyalaridan iborat devor yuzasi',
      ru: 'Стеновая поверхность из натуральных стеблей бамбука',
    },
    short: {
      uz: 'Tabiiy bambuk fakturasi interyerga iliqlik va tabiiylik bag‘ishlaydi.',
      ru: 'Натуральная фактура бамбука добавляет интерьеру тепла и естественности.',
    },
    description: {
      uz: 'Bambuk panellar devor va dekorativ yuzalarni bezash uchun mo‘ljallangan. Tabiiy faktura va iliq rang tuslari yashash xonalari, kafe va ofis interyerlarida uyg‘un, tinch muhit yaratadi.',
      ru: 'Бамбуковые панели предназначены для отделки стен и декоративных поверхностей. Природная фактура и тёплые оттенки создают гармоничную, спокойную атмосферу в жилых комнатах, кафе и офисах.',
    },
    applications: {
      uz: ['Yashash xonalari', 'Kafe va restoranlar', 'Ofis va qabulxona zonalari'],
      ru: ['Жилые комнаты', 'Кафе и рестораны', 'Офисы и зоны ресепшн'],
    },
  },
  {
    id: 'decorative-wall-panels',
    category: 'decor',
    image: unsplash('1782718979452-13ae46c6f59d'),
    name: { uz: 'Dekorativ devor panellari', ru: 'Декоративные стеновые панели' },
    imageAlt: {
      uz: 'Dekorativ devor panellari bilan bezatilgan zamonaviy mehmonxona',
      ru: 'Современная гостиная с декоративными стеновыми панелями',
    },
    short: {
      uz: 'Devorga hajm, ritm va tugallangan ko‘rinish beruvchi zamonaviy yechim.',
      ru: 'Современное решение, которое придаёт стене объём, ритм и завершённый вид.',
    },
    description: {
      uz: 'Dekorativ devor panellari aksent devorlar, TV zonalari va mehmonxona hududlarini bezash uchun qo‘llaniladi. Ular oddiy devorni interyerning asosiy elementiga aylantirishga yordam beradi.',
      ru: 'Декоративные стеновые панели используют для акцентных стен, ТВ-зон и гостиных. Они помогают превратить обычную стену в главный элемент интерьера.',
    },
    applications: {
      uz: ['Aksent devorlar', 'TV zonalari', 'Mehmonxona va lobbi'],
      ru: ['Акцентные стены', 'ТВ-зоны', 'Гостиные и лобби'],
    },
  },
  {
    id: 'louver-panels',
    category: 'louver',
    image: unsplash('1701422052139-e72ee5e67249'),
    name: { uz: 'Louver panellari', ru: 'Louver-панели (ламели)' },
    imageAlt: {
      uz: 'Mehmonxonada vertikal reykali louver devor paneli',
      ru: 'Стеновая louver-панель с вертикальными ламелями в гостиной',
    },
    short: {
      uz: 'Vertikal reykalar bilan aniq chiziqlar va zamonaviy arxitektura ritmi.',
      ru: 'Вертикальные ламели — чёткие линии и современный архитектурный ритм.',
    },
    description: {
      uz: 'Louver panellari — vertikal reykali dekorativ panellar. Ular devor, ustun va bo‘luvchi yuzalarda chuqurlik hissini yaratadi hamda yorug‘lik tushganda ifodali soya o‘yinini beradi.',
      ru: 'Louver-панели — декоративные панели с вертикальными ламелями. На стенах, колоннах и перегородках они создают ощущение глубины и выразительную игру света и тени.',
    },
    applications: {
      uz: ['Devor qoplamasi', 'Ustun va bo‘luvchi yuzalar', 'Ofis va tijorat interyerlari'],
      ru: ['Облицовка стен', 'Колонны и перегородки', 'Офисные и коммерческие интерьеры'],
    },
  },
  {
    id: 'hidden-doors',
    category: 'doors',
    image: unsplash('1697653568339-e8f8a5dd7318'),
    name: { uz: 'Yashirin eshiklar', ru: 'Скрытые двери' },
    imageAlt: {
      uz: 'Devor bilan uyg‘unlashgan minimalistik eshik',
      ru: 'Минималистичная дверь, сливающаяся со стеной',
    },
    short: {
      uz: 'Devor bilan bir tekislikda joylashadigan minimalistik eshik yechimlari.',
      ru: 'Минималистичные двери, установленные в одной плоскости со стеной.',
    },
    description: {
      uz: 'Yashirin eshiklar devor tekisligiga uyg‘unlashib, interyerda yaxlit va toza ko‘rinish yaratadi. Devor panellari bilan birga qo‘llanilganda eshik umumiy kompozitsiyaning bir qismiga aylanadi.',
      ru: 'Скрытые двери встраиваются в плоскость стены и делают интерьер цельным и чистым. В сочетании со стеновыми панелями дверь становится частью общей композиции.',
    },
    applications: {
      uz: ['Koridor va zallar', 'Panelli devorlar', 'Minimalistik interyerlar'],
      ru: ['Коридоры и холлы', 'Стены с панелями', 'Минималистичные интерьеры'],
    },
  },
  {
    id: 'construction-adhesive',
    category: 'adhesive',
    image: unsplash('1607400201515-c2c41c07d307'),
    name: { uz: 'Tomchi kley', ru: 'Жидкие гвозди и клей' },
    imageAlt: {
      uz: 'Montaj pistoleti yordamida yog‘och yuzaga kley surtilmoqda',
      ru: 'Нанесение монтажного клея на деревянную поверхность пистолетом',
    },
    short: {
      uz: 'Panellar va dekorativ elementlarni o‘rnatishda qo‘llaniladigan montaj kleyi.',
      ru: 'Монтажный клей для установки панелей и декоративных элементов.',
    },
    description: {
      uz: 'Tomchi kley (suyuq mix) qurilish va pardozlash ishlarida turli materiallarni mahkamlash uchun ishlatiladi. Qaysi turi sizning yuzangiz va materialingizga mos kelishini biz bilan maslahatlashib aniqlang.',
      ru: 'Жидкие гвозди используются в строительных и отделочных работах для крепления различных материалов. Какой вариант подойдёт вашей поверхности и материалу — уточните у нас.',
    },
    applications: {
      uz: ['Panellarni montaj qilish', 'Dekorativ elementlar', 'Pardozlash ishlari'],
      ru: ['Монтаж панелей', 'Декоративные элементы', 'Отделочные работы'],
    },
  },
]
