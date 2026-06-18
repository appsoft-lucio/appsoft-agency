import { useEffect, useState } from 'react'
import logoImage from '../../img/logo-appsoft-orange.png'
import { navigation, whatsappUrl } from '../data/site'
import ArrowIcon from './ArrowIcon'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="brand" href="#inicio" aria-label="AppSoft — início">
          <img
            src={logoImage}
            alt=""
            width="720"
            height="320"
            decoding="async"
          />
        </a>

        <button
          className={`menu-button ${menuOpen ? 'menu-button--open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`navigation ${menuOpen ? 'navigation--open' : ''}`}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--small"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Falar agora <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}
