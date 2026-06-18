const icons = {
  website: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
      <path d="m9 14-2 2 2 2M15 14l2 2-2 2" />
    </>
  ),
  store: (
    <>
      <path d="M4 10v10h16V10" />
      <path d="M3 4h18l-1.5 6a3 3 0 0 1-5.5.8 3 3 0 0 1-4 0A3 3 0 0 1 4.5 10z" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  landing: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
      <path d="M7 13h7M7 16h4" />
      <path d="m16 14 3 2-3 2z" />
    </>
  ),
  content: (
    <>
      <path d="M5 3h10l4 4v14H5z" />
      <path d="M14 3v5h5" />
      <path d="M8 13h8M8 17h6" />
      <path d="m8 9 1 1 2-2" />
    </>
  ),
  system: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
    </>
  ),
  support: (
    <>
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M21 3v6h-6" />
      <path d="M21 9a9 9 0 0 0-9-6" />
      <path d="M12 8v4l3 2" />
    </>
  ),
}

export default function ServiceIcon({ name }) {
  return (
    <span className="service-card__icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[name]}
      </svg>
    </span>
  )
}
