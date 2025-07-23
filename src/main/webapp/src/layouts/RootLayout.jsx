import { NavLink, Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand fs-2">
            Wednesday Addams
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" end className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" end className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/thainguyen101b/wednesday" target='_blank'>
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  )
}
