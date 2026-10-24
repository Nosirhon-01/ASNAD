// Typographic ASNAD wordmark (replace with the official logo file when available —
// see README, "Logo").
export default function BrandMark({ light = false, className = '' }) {
  return (
    <span className={`inline-flex flex-col leading-none ${light ? 'text-ivory' : 'text-navy'} ${className}`}>
      <span className="text-[1.35rem] font-semibold tracking-[0.32em]">ASNAD</span>
      <span className={`mt-1 text-[8.5px] font-medium tracking-[0.5em] ${light ? 'text-ivory/60' : 'text-steel'}`}>
        UZBEKISTAN
      </span>
    </span>
  )
}
