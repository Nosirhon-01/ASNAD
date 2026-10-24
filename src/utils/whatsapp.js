import { contact } from '../data/contact'

// Builds a wa.me link with a URL-encoded, prefilled message.
export function whatsappLink(message = '') {
  const base = `https://wa.me/${contact.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

// Spread onto an <a> tag so every WhatsApp link opens safely in a new tab.
export function whatsappProps(message) {
  return {
    href: whatsappLink(message),
    target: '_blank',
    rel: 'noopener noreferrer',
  }
}
