import { unsplash } from '../utils/images'

// ─────────────────────────────────────────────────────────────
// Images for the hero, showcase and inspiration gallery.
// These are demonstration interiors (Unsplash License), not ASNAD
// customer projects. Replace `src` with '/gallery/your-photo.jpg'
// after placing your files in /public/gallery/.
// ─────────────────────────────────────────────────────────────

export const heroImages = {
  main: {
    src: unsplash('1701422522223-355c7a6f5648'),
    alt: {
      uz: 'Vertikal louver panellar bilan qoplangan devor va o‘rnatilgan kamin',
      ru: 'Стена, облицованная вертикальными louver-панелями, со встроенным камином',
    },
  },
  detail: {
    src: unsplash('1722109997425-40f920848aed'),
    alt: { uz: 'Yog‘och reykali panel fakturasi', ru: 'Фактура деревянной реечной панели' },
  },
}

// "Har bir detal muhim" — applications of the materials
export const showcase = [
  {
    id: 'living',
    src: unsplash('1701422522306-4e1b4216385a'),
    title: { uz: 'Mehmonxonadagi devor panellari', ru: 'Стеновые панели в гостиной' },
    alt: { uz: 'TV va kamin zonasi louver panellar bilan', ru: 'ТВ-зона и камин с louver-панелями' },
  },
  {
    id: 'office',
    src: unsplash('1754380629457-b833f6bea68a'),
    title: { uz: 'Zamonaviy ofis interyeri', ru: 'Современный офисный интерьер' },
    alt: { uz: 'Yog‘och panelli qabulxona va o‘simliklar', ru: 'Ресепшн с деревянными панелями и растениями' },
  },
  {
    id: 'feature',
    src: unsplash('1770625467980-942f6ee8ebd8'),
    title: { uz: 'Dekorativ aksent devor', ru: 'Декоративная акцентная стена' },
    alt: { uz: 'Geometrik naqshli yog‘och devor va iliq yorug‘lik', ru: 'Деревянная стена с геометрическим рисунком и тёплой подсветкой' },
  },
  {
    id: 'bamboo',
    src: unsplash('1684694722346-b674e60f0382'),
    title: { uz: 'Bambuk bilan bezak', ru: 'Отделка бамбуком' },
    alt: { uz: 'Qora bog‘ichlar bilan biriktirilgan bambuk panel', ru: 'Бамбуковая панель, скреплённая чёрными узлами' },
  },
  {
    id: 'louver',
    src: unsplash('1787908094332-a18bcc5dfe96'),
    title: { uz: 'Louver devor tizimlari', ru: 'Louver-системы для стен' },
    alt: { uz: 'Yoritgich chiziqlari bilan vertikal reykalar', ru: 'Вертикальные ламели с линейной подсветкой' },
  },
  {
    id: 'door',
    src: unsplash('1677457836930-3af51eb6e9a5'),
    title: { uz: 'Minimalistik eshik yechimi', ru: 'Минималистичное дверное решение' },
    alt: { uz: 'To‘q ko‘k devordagi oddiy shakldagi oq eshik', ru: 'Белая дверь простой формы в тёмно-синей стене' },
  },
]

// "Interyer uchun ilhom" — inspiration gallery
// `shape` controls the tile size in the grid: 'tall', 'wide' or 'square'.
export const gallery = [
  {
    src: unsplash('1774200981075-a728eaaa3824'),
    shape: 'wide',
    alt: { uz: 'Tabiiy yog‘och elementli ochiq mehmonxona va oshxona', ru: 'Открытая гостиная-кухня с натуральным деревом' },
  },
  {
    src: unsplash('1760624493115-46380c9d2280'),
    shape: 'tall',
    alt: { uz: 'Yog‘och reykalar polga soya naqshi tushirmoqda', ru: 'Деревянные ламели отбрасывают узор теней на пол' },
  },
  {
    src: unsplash('1701421047923-001f8f79bb1a'),
    shape: 'square',
    alt: { uz: 'Reykali devorli yotoqxona', ru: 'Спальня со стеной из ламелей' },
  },
  {
    src: unsplash('1738666831048-fc9e53345692'),
    shape: 'square',
    alt: { uz: 'Yog‘och reykalar bilan to‘liq qoplangan xona', ru: 'Помещение, полностью облицованное деревянными рейками' },
  },
  {
    src: unsplash('1782718979595-be6003fc498e'),
    shape: 'tall',
    alt: { uz: 'O‘yma dekorativ panelli zamonaviy lobbi', ru: 'Современное лобби с резными декоративными панелями' },
  },
  {
    src: unsplash('1755288556391-c4911fa13627'),
    shape: 'wide',
    alt: { uz: 'Yog‘och devor va mebelli zamonaviy mehmonxona', ru: 'Современная гостиная с деревянной стеной и мебелью' },
  },
  {
    src: unsplash('1766445318570-1dc4bf3f5d79'),
    shape: 'square',
    alt: { uz: 'Iliq yoritilgan egri yog‘och shift', ru: 'Изогнутый деревянный потолок с тёплой подсветкой' },
  },
  {
    src: unsplash('1701422522371-d2cc964a708e'),
    shape: 'square',
    alt: { uz: 'Kamin va reykali panelli mehmonxona', ru: 'Гостиная с камином и реечными панелями' },
  },
]

export const ctaImage = {
  src: unsplash('1543751416-705d3e34d02a'),
  alt: { uz: 'To‘q rangli gorizontal yog‘och reykalar', ru: 'Тёмные горизонтальные деревянные рейки' },
}
