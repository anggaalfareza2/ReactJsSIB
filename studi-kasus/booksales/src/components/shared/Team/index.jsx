export default function Team() {
  return (
    <>
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
            Mengelola komunitas pembaca, kerja sama dengan penerbit, serta acara
            diskusi buku online dan offline / Mengadakan event, juga kolaborasi
            dengan penulis/penerbit
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
            Pengembang website ini sekaligus yang memastikan pengalaman pengguna
            tetap nyaman dalam menjelajahi koleksi buku, serta Maintenance
            website dan keamanan data.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}
