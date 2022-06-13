import headerLogo from '../image/logo.svg';

function Header() {
  return (
    <div className="Header">
      <header className="header">
        <img
          className="header__logo"
          src={headerLogo}
          alt="логотип"
        />
      </header>
    </div> )
}

export default Header
