import "../styles/home.css";
import {
  Code2,
  Globe2,
  Headphones,
  Wrench,
  Image as ImageIcon,
} from "lucide-react";
import profileImg from "../assets/12.jpeg";
import workspaceImg from "../assets/11.jpeg";
import galleryWebsite from "../assets/4.jpeg";
import gallerySetup from "../assets/2.jpeg";
import galleryCampus from "../assets/8.jpeg";
import galleryCode from "../assets/1.png";

const miniGallery = [
  {
    id: 1,
    title: "Tampilan website personal",
    caption: "Contoh layout website untuk profil diri atau portofolio.",
    image: galleryWebsite,
  },
  {
    id: 2,
    title: "Setup kerja sederhana",
    caption: "Tempat saya biasa ngoding, ngajar, dan mengerjakan project.",
    image: gallerySetup,
  },
  {
    id: 3,
    title: "Suasana kampus / lingkungan kerja",
    caption: "Ilustrasi suasana kerja yang mendukung untuk fokus.",
    image: galleryCampus,
  },
  {
    id: 4,
    title: "Ngoding & eksperimen tampilan",
    caption: "Proses bermain dengan kode dan tampilan UI.",
    image: galleryCode,
  },
];

// LINK WHATSAPP – pakai format internasional 628...
const WHATSAPP_LINK =
  "https://wa.me/62895325972351?text=Halo%20kak%20Rizki,%20saya%20ingin%20pesan%20jasa%20/%20konsultasi%20melalui%20website%20Anda.";

function Home() {
  return (
    <section className="page home">
      <div className="container">
        {/* HERO */}
        <div className="home-hero fade-in-up anim-delay-1">
          <div className="hero-text">
            <p className="hero-label">Rizki Ananda • Arvan Shadowa</p>
            <h1>
              Tunjukkan <span>skill & karya</span> terbaikmu,
              <br />
              dimulai dari satu website.
            </h1>
            <p className="hero-subtitle">
              Halo, saya <strong>Rizki Ananda</strong>, yang juga dikenal dengan
              nama <strong>Arvan Shadowa</strong>. Saya membantu membuat{" "}
              <strong>website</strong>, mengerjakan{" "}
              <strong>project digital</strong>, dan berbagi aktivitas saya
              melalui berbagai <strong>sosial media</strong>. Website ini saya
              gunakan untuk menampilkan diri, skill, dan layanan yang saya
              tawarkan.
            </p>

            <div className="hero-actions">
              <a href="/portfolio" className="btn-primary">
                <Code2 size={16} />
                Lihat Portfolio & Sertifikat
              </a>
              <a
                href={WHATSAPP_LINK}
                className="btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Headphones size={16} />
                Pesan Jasa / Konsultasi
              </a>
            </div>

            <div className="hero-meta">
              <span>✔ Jasa pembuatan website</span>
              <span>✔ IT Support & troubleshooting</span>
              <span>✔ Terbuka untuk project & kolaborasi</span>
            </div>
          </div>

          {/* Kartu profil dengan foto */}
          <div className="hero-right fade-in-up anim-delay-2">
            <div className="hero-photo-wrapper">
              <img
                src={profileImg}
                alt="Rizki Ananda"
                className="hero-photo"
              />
              <div className="hero-photo-badge">
                <span className="badge-dot" /> Available for project
              </div>
            </div>

            <div className="hero-mini-card">
              <img
                src={workspaceImg}
                alt="Workspace"
                className="hero-mini-thumb"
              />
              <div className="hero-mini-text">
                <h3>Web Creator & IT Support</h3>
                <p>
                  Online sebagai <strong>“Arvan Shadowa”</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: penjelasan website */}
        <section className="home-section fade-in-up anim-delay-2">
          <h2>Mengapa saya membuat website ini?</h2>
          <p className="section-subtitle">
            Bukan sekadar blog, website ini jadi tempat saya memperkenalkan
            diri, menampilkan keahlian dan project yang pernah saya kerjakan,
            sekaligus menghubungkan orang ke sosial media saya.
          </p>

          <div className="grid-3">
            <div className="card fade-in-up anim-delay-2">
              <h3>Siapa saya & apa yang saya kerjakan</h3>
              <p>
                Menjelaskan siapa itu <strong>Rizki Ananda</strong> /{" "}
                <strong>Arvan Shadowa</strong>, dan bidang yang saya tekuni
                dalam dunia IT & website.
              </p>
            </div>
            <div className="card fade-in-up anim-delay-3">
              <h3>Skill & Project yang nyata</h3>
              <p>
                Menampilkan pengalaman saya di bidang{" "}
                <strong>pembuatan website</strong>, <strong>IT Support</strong>,
                serta project lain yang relevan.
              </p>
            </div>
            <div className="card fade-in-up anim-delay-4">
              <h3>Titik kumpul sosial media</h3>
              <p>
                Orang bisa dengan mudah menemukan Instagram, YouTube, dan
                platform lain yang saya gunakan untuk berbagi aktivitas dan
                karya.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Jasa yang Saya Tawarkan */}
        <section className="home-section services-section fade-in-up anim-delay-2">
          <h2>Jasa yang Saya Tawarkan</h2>
          <p className="section-subtitle">
            Berikut gambaran jasa yang bisa kamu pesan dari saya. Kita bisa
            diskusi dulu untuk menyesuaikan dengan kebutuhanmu.
          </p>

          <div className="services-grid">
            <div className="card service-card fade-in-up anim-delay-2">
              <div className="service-icon">
                <Globe2 size={22} />
              </div>
              <h3>Jasa Pembuatan Website</h3>
              <ul>
                <li>Website personal / profil / portofolio.</li>
                <li>Website kampus / fakultas / organisasi.</li>
                <li>Website UMKM, jasa, atau layanan.</li>
                <li>Desain modern, responsif, dan rapi.</li>
              </ul>
              <p className="service-cta">
                Cocok untuk kamu yang ingin punya “alamat resmi” di internet.
              </p>
            </div>

            <div className="card service-card fade-in-up anim-delay-3">
              <div className="service-icon">
                <Code2 size={22} />
              </div>
              <h3>Project Website & Sistem</h3>
              <ul>
                <li>Struktur halaman & alur konten.</li>
                <li>Integrasi ke backend sederhana (PHP/MySQL).</li>
                <li>Penyesuaian desain dengan kebutuhanmu.</li>
                <li>Cocok untuk tugas akhir atau sistem kecil.</li>
              </ul>
              <p className="service-cta">
                Dari konsep sampai website bisa diakses online.
              </p>
            </div>

            <div className="card service-card fade-in-up anim-delay-4">
              <div className="service-icon">
                <Wrench size={22} />
              </div>
              <h3>IT Support & Pendampingan</h3>
              <ul>
                <li>Instalasi software & setting dasar.</li>
                <li>Setting jaringan lokal sederhana.</li>
                <li>Panduan penggunaan aplikasi (Office, dll).</li>
                <li>Support jarak jauh (remote) sesuai kebutuhan.</li>
              </ul>
              <p className="service-cta">
                Membantu kamu mengatasi masalah teknis sehari-hari.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: MINI GALLERY – BANYAK GAMBAR */}
        <section className="home-section home-gallery-section fade-in-up anim-delay-3">
          <div className="home-gallery-header">
            <h2>
              <ImageIcon size={18} /> Sekilas Visual Kegiatan Saya
            </h2>
            <p className="section-subtitle">
              Beberapa gambar ini menggambarkan aktivitas saya: mulai dari
              mengerjakan website, mengajar, hingga setup kerja yang saya pakai
              sehari-hari.
            </p>
          </div>

          <div className="home-gallery-grid">
            {miniGallery.map((item, idx) => (
              <article
                key={item.id}
                className={`home-gallery-card fade-in-up anim-delay-${
                  (idx % 3) + 2
                }`}
              >
                <div className="home-gallery-thumb-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="home-gallery-thumb"
                  />
                </div>
                <div className="home-gallery-text">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Home;
