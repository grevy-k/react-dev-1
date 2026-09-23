import '../styles/header.css'

function Header() {
  return (
    <header className="header">
      <span className="header__logo">
        <span className="header__logo-accent">&lt;/&gt;</span>
        Dev Insights
      </span>

      <nav>
        
        <a href="#new-post" className="header__link">
          New Post
        </a>
      </nav>
    </header>
  )
}

export default Header