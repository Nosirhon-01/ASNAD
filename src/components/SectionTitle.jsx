// Large section heading. The last word is set in an italic serif for contrast,
// which is the main typographic signature of the site.
export default function SectionTitle({ as: Tag = 'h2', children, className = '' }) {
  const words = String(children).trim().split(' ')
  const last = words.pop()
  return (
    <Tag
      className={`text-balance text-[2.5rem] font-normal leading-[0.95] tracking-tightest sm:text-6xl lg:text-7xl ${className}`}
    >
      {words.length > 0 && <>{words.join(' ')} </>}
      <span className="font-serif text-[1.08em] italic tracking-normal">{last}</span>
    </Tag>
  )
}
