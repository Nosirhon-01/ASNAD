// All company contact details live here. Change them once and the whole site updates.
export const contact = {
  whatsappNumber: '998337778800', // digits only, used for wa.me links
  phones: [
    { display: '+998 33 777 88 00', href: 'tel:+998337778800' },
    { display: '+998 90 816 16 00', href: 'tel:+998908161600' },
  ],
  instagram: {
    handle: '@asnad.uz',
    url: 'https://www.instagram.com/asnad.uz/',
  },
  telegram: {
    display: '+998 33 777 88 00',
    url: 'https://t.me/+998337778800',
  },
  // The address is shown in the language the visitor selected.
  address: {
    uz: '122 Gavhar ko‘chasi, Dombirobod stroy bozori, Toshkent, O‘zbekiston',
    ru: 'ул. Гавхар, 122, строительный рынок Домбиробод, Ташкент, Узбекистан',
  },
  // Text search used by the map embed and the "open in maps" link (no API key needed).
  mapQuery: 'Dombirobod stroy bozori, Gavhar ko‘chasi 122, Tashkent',
}

// `lang` sets the language of the map's own labels and buttons.
export const mapEmbedUrl = (lang) =>
  `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&hl=${lang}&output=embed`
export const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`
