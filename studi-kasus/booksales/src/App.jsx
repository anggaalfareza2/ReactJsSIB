function App() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2x1"
                style={{ color: "#74C0FC" }}
              ></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
        {/* Hero */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Atomic Habits: Perubahan Kecil yang memberikan hasil yang luar
                biasa
              </h1>
              <p className="lead">
                Cara mudah untuk membangun kebiasaan baik dan menghentikan
                kebiasaan buruk. Buku ini memberikan strategi praktis untuk
                membantu Anda mencapai tujuan Anda dengan membuat perubahan
                kecil yang konsisten dalam kehidupan sehari-hari Anda.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Detail
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="https://picsum.photos/720/600"
                alt=""
                width="720"
              />
            </div>
          </div>
        </div>

        {/* Produk */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                "Koleksi buku terlaris yang menginspirasi jutaan orang untuk
                mengubah kebiasaan dan meraih hidup lebih baik."
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 margin m-2">
                  Views
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Other Book
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop"
                    className="card-img-top"
                    alt="Atomic Habits - James Clear"
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <b>Atomic Habits - James Clear</b>
                    <p className="card-text">
                      Perubahan kecil setiap hari menghasilkan hasil luar biasa.
                      Buku ini mengajarkan sistem praktis membangun kebiasaan
                      baik dan menghancurkan kebiasaan buruk secara bertahap.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop"
                    alt="The Psychology of Money - Morgan Housel"
                    className="card-img-top"
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <b>The Psychology of Money - Morgan Housel</b>
                    <p className="card-text">
                      Kesuksesan tidak selalu tentang pintar, tapi tentang
                      perilaku. Buku ini mengungkap 19 kisah tentang hubungan
                      manusia dengan uang dan keputusan keuangan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop"
                    alt="Start With Why - Simon Sinek"
                    className="card-img-top"
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <b>Start With Why - Simon Sinek</b>
                    <p className="card-text">
                      Pemimpin hebat menginspirasi dengan memulai dari
                      "Mengapa". Buku ini menjelaskan bagaimana menemukan tujuan
                      utama Anda untuk memotivasi tim dan pelanggan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop"
                    alt="Ikigai - Héctor García"
                    className="card-img-top"
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <b>
                      Ikigai: The Japanese Secret - Héctor García & Francesc
                      Miralles
                    </b>
                    <p className="card-text">
                      Rahasia panjang umur & bahagia dari penduduk Okinawa,
                      Jepang. Temukan alasan Anda bangun setiap pagi melalui
                      konsep Ikigai - perpaduan passion, misi, profesi.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop"
                    alt="Deep Work - Cal Newport"
                    className="card-img-top"
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <b> Deep Work - Cal Newport</b>
                    <p className="card-text">
                      Kemampuan fokus tanpa distraksi adalah superpower di era
                      digital. Buku ini memberikan aturan praktis untuk bekerja
                      lebih dalam, produktif, dan menghasilkan karya
                      berkualitas.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=500&fit=crop"
                    alt="The 7 Habits of Highly Effective People - Stephen R. Covey"
                    className="card-img-top"
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <b>
                      The 7 Habits of Highly Effective People - Stephen R. Covey
                    </b>
                    <p className="card-text">
                      7 kebiasaan yang mengubah cara hidup jutaan orang. Dari
                      proaktif, memprioritaskan, hingga sinergi - panduan klasik
                      menjadi pribadi yang efektif dan seimbang.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Team */}
        <div className="row">
          <h2>Our Team</h2>
          <div className="col-lg-4">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="rounded-circle mx-auto mb-3"
              style={{ width: "140px", height: "140px", objectFit: "cover" }}
              alt="Sarah Wijaya"
            />

            <h2 className="fw-normal">Sarah Wijaya, S.Psi.</h2>
            <p> Content & Editorial Manager</p>
            <br />
            <p>
              Bertanggung jawab atas kurasi konten, review buku, dan artikel
              pengembangan diri. Sarah memiliki latar belakang psikologi dan
              pecinta literasi.
            </p>
            <p></p>
          </div>

          <div className="col-lg-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="rounded-circle mx-auto mb-3"
              style={{ width: "140px", height: "140px", objectFit: "cover" }}
              alt="Budi Santoso"
            />
            <h2 className="fw-normal">Budi Santoso, S.Kom.</h2>
            <p>Community & Partnership Lead</p>

            <br />
            <p>
              Mengelola komunitas pembaca, kerja sama dengan penerbit, serta
              acara diskusi buku online dan offline / Mengadakan event, juga
              kolaborasi dengan penulis/penerbit
            </p>
            <p></p>
          </div>

          <div className="col-lg-4">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              className="rounded-circle mx-auto mb-3"
              style={{ width: "140px", height: "140px", objectFit: "cover" }}
              alt="Anisa Putri"
            />
            <h2 className="fw-normal">Anisa Putri, S.T.</h2>
            <p>Tech & Product Developer</p>
            <br />

            <p>
              Pengembang website ini sekaligus yang memastikan pengalaman
              pengguna tetap nyaman dalam menjelajahi koleksi buku, serta
              Maintenance website dan keamanan data.
            </p>
            <p></p>
          </div>
        </div>

        {/*Contact & footer */}
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
                    <span className="text-body-secondary">
                      +62 812-3456-7890
                    </span>
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
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="link-body-emphasis"
                    href="#"
                    aria-label="Facebook"
                  >
                    <svg
                      className="bi"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    >
                      <use xlink:href="#facebook"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
