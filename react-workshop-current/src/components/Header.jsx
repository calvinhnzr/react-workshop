const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-navigation">
        <a href="/" className="logo">
          <h1>
            <img
              src="./assets/images/projectsurvival-logo.svg"
              alt="ProjectSurvival4All Logo"
            />
          </h1>
        </a>

        <div className="is-hidden">
          <form className="keyword-search for-large-viewports">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Suchen"
            />
            <button type="submit">
              <span className="icon icon--l">search</span>
            </button>
          </form>
        </div>

        <div className="main-menu-trigger hambuger-menu">
          <input type="checkbox" id="hambuger-manu-checkbox" />
          <label htmlFor="hambuger-manu-checkbox">
            <span></span>
            <span></span>

            <span></span>
          </label>
          <ul>
            <li>News</li>
            <li>Barrierefreiheit</li>
            <li>DE</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
