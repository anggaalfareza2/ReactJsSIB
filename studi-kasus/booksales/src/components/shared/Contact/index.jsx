export default function Contact() {
  return (
    <>
      <div className="b-example-divider"></div>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <h5>Tentang Kami</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <p
                    className="text-body-secondary mb-2"
                    style={{ fontSize: "14px", lineHeight: "1.5" }}
                  >
                    NF Academy adalah platform belajar kebiasaan baik melalui
                    rekomendasi buku berkualitas. Perubahan kecil, hasil luar
                    biasa.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Menu</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Book
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Team
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Kontak</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 d-flex">
                  <i className="bi bi-geo-alt-fill text-secondary me-2"></i>
                  <span className="text-body-secondary">
                    Jl. Pendidikan No. 123, Jakarta Selatan
                  </span>
                </li>
                <li className="nav-item mb-2 d-flex">
                  <i className="bi bi-telephone-fill text-secondary me-2"></i>
                  <span className="text-body-secondary">+62 812-3456-7890</span>
                </li>
                <li className="nav-item mb-2 d-flex">
                  <i className="bi bi-envelope-fill text-secondary me-2"></i>
                  <span className="text-body-secondary">
                    hello@nfacademy.com
                  </span>
                </li>
                <li className="nav-item mb-2 d-flex">
                  <i className="bi bi-clock-fill text-secondary me-2"></i>
                  <span className="text-body-secondary">
                    Senin - Jumat, 09.00 - 17.00 WIB
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Follow Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary d-flex align-items-center"
                  >
                    <i className="bi bi-facebook me-2"></i> Facebook
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary d-flex align-items-center"
                  >
                    <i className="bi bi-instagram me-2"></i> Instagram
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary d-flex align-items-center"
                  >
                    <i className="bi bi-twitter-x me-2"></i> Twitter
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary d-flex align-items-center"
                  >
                    <i className="bi bi-youtube me-2"></i> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </footer>
      </div>
    </>
  );
}
