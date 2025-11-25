import "../styles/portfolio.css";
import { Instagram, MonitorSmartphone, Wrench, LayoutTemplate } from "lucide-react";

import projPersonalImg from "../assets/4.jpeg";
import projCampusImg from "../assets/14.jpeg";
import projItSupportImg from "../assets/15.jpeg";


import certItImg from "../assets/16.png";
import certFrontendImg from "../assets/16.png";
import certWebinarImg from "../assets/9.jpg";

// ====== DATA PROJECT ======
const projects = [
  {
    id: 1,
    title: "Website Personal / Profil Online",
    year: "2025",
    type: "Pembuatan Website",
    description:
      "Website untuk menampilkan profil, skill, layanan, dan sosial media secara profesional.",
    role: "Perancangan struktur halaman, tampilan, dan konten.",
    image: projPersonalImg,
    icon: <MonitorSmartphone size={18} />,
  },
  {
    id: 2,
    title: "Website Fakultas / Kampus / Organisasi",
    year: "2025",
    type: "Pembuatan Website",
    description:
      "Tampilan dan struktur halaman untuk website lembaga pendidikan atau organisasi.",
    role: "Layout halaman, navigasi, dan penyesuaian konten.",
    image: projCampusImg,
    icon: <LayoutTemplate size={18} />,
  },
  {
    id: 3,
    title: "Dukungan IT pembicara di seminar kuliah tamu",
    year: "2024",
    type: "IT Support",
    description:
      "Membantu memberikan materi terkait kecerdasan buatan (AI).",
    role: "Pendampingan onsite/remote dan edukasi pengguna.",
    image: projItSupportImg,
    icon: <Wrench size={18} />,
  },
  
];

// ====== DATA SERTIFIKAT ======
const certificates = [
  {
    id: 1,
    title: "Sertifikat Pelatihan IT Support Dasar",
    issuer: "Contoh Lembaga / Kampus",
    year: "2024",
    description:
      "Pelatihan troubleshooting, instalasi software, dan pendampingan pengguna di lingkungan kerja.",
    link: "#",
    image: certItImg,
  },
  {
    id: 2,
    title: "Sertifikat Pembuatan Website & Frontend Dasar",
    issuer: "Contoh Platform / Kursus Online",
    year: "2023",
    description:
      "Materi HTML, CSS, JavaScript, dan pengenalan React untuk frontend modern.",
    link: "#",
    image: certFrontendImg,
  },
  {
    id: 3,
    title: "Sertifikat Seminar / Webinar Teknologi",
    issuer: "Penyelenggara Seminar / Komunitas",
    year: "2022",
    description:
      "Mengikuti webinar yang membahas perkembangan teknologi dan dunia digital.",
    link: "#",
    image: certWebinarImg,
  },
];

// ====== DATA PROFIL & POSTINGAN SOSIAL (INSTAGRAM STYLE) ======
const socialProfile = {
  username: "arvanshadowa", // ganti dengan username IG kamu
  name: "Rizki Ananda",
  bio: "Web creator & IT Support • Berbagi seputar teknologi, website, dan aktivitas online.",
  stats: {
    posts: 48,
    followers: "1.2K",
    following: 320,
  },
  link: "https://www.instagram.com/rizkiananda0000/", // ganti dengan link IG asli
};

const socialPosts = [
  {
    id: 1,
    title: "Setup kerja sederhana tapi nyaman.",
    category: "Workspace",
  },
  {
    id: 2,
    title: "Project website personal / profil online ✨",
    category: "Project",
  },
  {
    id: 3,
    title: "Belajar teknologi pelan-pelan tapi konsisten.",
    category: "Thoughts",
  },
  {
    id: 4,
    title: "Sedikit cuplikan tampilan website kampus.",
    category: "Preview",
  },
  {
    id: 5,
    title: "Story tentang proses mengerjakan project.",
    category: "Behind the scenes",
  },
  {
    id: 6,
    title: "Tips singkat seputar IT Support harian.",
    category: "Tips",
  },
];

function Portfolio() {
  return (
    <section className="page portfolio">
      <div className="container">
        {/* HEADER */}
        <header className="page-header fade-in-up anim-delay-1">
          <span className="badge-soft">Portfolio & Online Profile</span>
          <h1 className="page-title">
            Karya, Sertifikat, & Jejak Sosial Media Saya
          </h1>
          <p className="page-subtitle">
            Di halaman ini saya menampilkan jenis project yang saya kerjakan,
            sertifikat yang saya miliki, serta profil Instagram yang menggambarkan
            aktivitas saya di dunia digital.
          </p>
        </header>

        {/* HIGHLIGHT */}
        <section className="portfolio-highlight fade-in-up anim-delay-2">
          <div>
            <span className="section-label">Fokus Saya</span>
            <h2>Website, IT Support, & Profil Online</h2>
            <p>
              Saya membantu pembuatan website, mendukung kebutuhan IT Support,
              dan mengatur bagaimana profil saya muncul di internet — baik
              melalui website ini maupun sosial media.
            </p>
          </div>
          <div className="portfolio-tags">
            <span>Pembuatan Website</span>
            <span>Profil Online</span>
            <span>Website Kampus / UMKM</span>
            <span>IT Support</span>
            <span>Sertifikat & Pelatihan</span>
          </div>
        </section>

        {/* LIST PROJECT */}
        <section className="portfolio-list fade-in-up anim-delay-3">
          <h2>Contoh Jenis Project</h2>
          <div className="portfolio-grid">
            {projects.map((project, idx) => (
              <article
                key={project.id}
                className={`portfolio-card fade-in-up anim-delay-${(idx % 3) + 2}`}
              >
                <div className="portfolio-thumb-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-thumb"
                  />
                  <div className="portfolio-thumb-badge">{project.icon}</div>
                </div>
                <div className="portfolio-card-head">
                  <span className="portfolio-year">{project.year}</span>
                  <span className="portfolio-type">{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="portfolio-role">
                  <strong>Peran saya:</strong> {project.role}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SERTIFIKAT & PENGHARGAAN */}
        <section className="certificate-section fade-in-up anim-delay-3">
          <div className="certificate-header">
            <div>
              <span className="section-label">Sertifikat & Penghargaan</span>
              <h2>Sertifikat yang Saya Miliki</h2>
              <p>
                Sertifikat ini menunjukkan bahwa saya terus belajar dan
                mengembangkan kemampuan. Ke depannya, setiap kartu sertifikat
                bisa diarahkan langsung ke file PDF atau gambar yang asli.
              </p>
            </div>
          </div>

          <div className="certificate-grid">
            {certificates.map((cert, idx) => (
              <article
                key={cert.id}
                className={`certificate-card fade-in-up anim-delay-${(idx % 3) + 2}`}
              >
                <div className="certificate-thumb-wrapper">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certificate-thumb"
                  />
                </div>
                <div className="certificate-top">
                  <span className="certificate-year">{cert.year}</span>
                  <span className="certificate-issuer">{cert.issuer}</span>
                </div>
                <h3>{cert.title}</h3>
                <p className="certificate-desc">{cert.description}</p>
                <div className="certificate-footer">
                  <a
                    href={cert.link}
                    className="certificate-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Sertifikat
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SOCIAL MEDIA PROFILE ala INSTAGRAM */}
        <section className="social-section fade-in-up anim-delay-3">
          <div className="social-section-header">
            <span className="section-label">Social Media</span>
            <h2>Profil Instagram: Tampilan Online Saya</h2>
            <p>
              Selain dari website, orang juga bisa mengenal saya lewat Instagram.
              Di sini saya tampilkan kartu profil dan contoh gaya konten yang
              menggambarkan aktivitas saya.
            </p>
          </div>

          <div className="social-layout">
            {/* Kartu profil IG */}
            <div className="social-profile-card">
              <div className="social-avatar">RA</div>
              <div className="social-profile-main">
                <div className="social-username-row">
                  <p className="social-username">@{socialProfile.username}</p>
                  <a
                    href={socialProfile.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-ig-button"
                  >
                    <Instagram size={16} />
                    Kunjungi Instagram
                  </a>
                </div>
                <p className="social-name">{socialProfile.name}</p>
                <p className="social-bio">{socialProfile.bio}</p>
                <div className="social-stats">
                  <div>
                    <strong>{socialProfile.stats.posts}</strong>
                    <span>Postingan</span>
                  </div>
                  <div>
                    <strong>{socialProfile.stats.followers}</strong>
                    <span>Pengikut</span>
                  </div>
                  <div>
                    <strong>{socialProfile.stats.following}</strong>
                    <span>Mengikuti</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid contoh postingan */}
            <div className="social-grid">
              {socialPosts.map((post, idx) => (
                <article
                  key={post.id}
                  className={`social-post-card fade-in-up anim-delay-${(idx % 3) + 2}`}
                >
                  <div className={`social-post-thumb thumb-${(idx % 3) + 1}`} />
                  <div className="social-post-meta">
                    <span className="social-post-category">
                      {post.category}
                    </span>
                    <p className="social-post-title">{post.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Portfolio;
