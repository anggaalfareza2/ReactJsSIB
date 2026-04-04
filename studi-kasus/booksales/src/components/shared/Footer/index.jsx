export default function Footer () {
    return (
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy;2026 Nurul Fikri Academy</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="#"
                  aria-label="Instagram"
                >
                  <svg className="bi" width="24" height="24">
                    <use link:href="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="#"
                  aria-label="Facebook"
                >
                  <svg className="bi" width="24" height="24" aria-hidden="true">
                    <use link:href="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
    )
}