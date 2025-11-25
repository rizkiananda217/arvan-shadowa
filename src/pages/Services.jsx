// src/pages/Services.jsx
import "./services.css"; // ⬅️ sesuaikan kalau folder CSS-mu beda

function Services() {
  const services = [
    {
      id: 1,
      title: "Pembuatan Website",
      icon: "💻",
      short:
        "Landing page, website kampus, company profile, hingga portofolio pribadi.",
      details: [
        "React JS, Vite, atau WordPress",
        "Desain modern & responsif (mobile friendly)",
        "Bisa terhubung ke database (PHP + MySQL)",
      ],
    },
    {
      id: 2,
      title: "IT Support & Jaringan",
      icon: "🛠️",
      short:
        "Membantu instalasi, perbaikan, dan troubleshooting perangkat di kantor atau kampus.",
      details: [
        "Instalasi & sharing printer",
        "Setting jaringan LAN / WiFi",
        "Troubleshooting komputer & sistem",
      ],
    },
    {
      id: 3,
      title: "Desain Grafis & Konten",
      icon: "🎨",
      short:
        "Membantu pembuatan desain untuk media sosial, poster kegiatan, dan branding.",
      details: [
        "Poster event kampus / klinik",
        "Konten Instagram & feed rapi",
        "Template presentasi (PPT) estetis",
      ],
    },
    {
      id: 4,
      title: "Pengembangan Sistem & Aplikasi",
      icon: "📊",
      short:
        "Membangun sistem sederhana berbasis web sesuai kebutuhan instansi atau usaha.",
      details: [
        "PHP Native / Framework + MySQL",
        "Dashboard admin & laporan",
        "Analisis kebutuhan & dokumentasi",
      ],
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Diskusi Kebutuhan",
      desc: "Mendengarkan kebutuhanmu, target pengguna, dan gambaran sistem/website yang diinginkan.",
    },
    {
      id: 2,
      title: "Perencanaan & Desain",
      desc: "Membuat konsep tampilan (mockup) dan alur kerja, sehingga kamu bisa membayangkan hasil akhirnya.",
    },
    {
      id: 3,
      title: "Pengembangan & Uji Coba",
      desc: "Proses coding, integrasi, serta testing agar website/sistem berjalan dengan baik.",
    },
    {
      id: 4,
      title: "Serah Terima & Support",
      desc: "Penyerahan project, panduan penggunaan, dan dukungan jika ada kendala di kemudian hari.",
    },
  ];

  return (
    <section className="page services-page">
      {/* HERO */}
      <div className="services-hero">
        <span className="badge-services">Services</span>
        <h1>Layanan yang Saya Tawarkan</h1>
        <p>
          Saya membantu individu, bisnis kecil, dan institusi pendidikan untuk
          membangun kehadiran digital yang profesional, sekaligus memberikan
          dukungan IT yang praktis dan mudah dipahami.
        </p>
      </div>

      {/* GRID SERVICES */}
      <section className="services-grid">
        {services.map((svc) => (
          <article className="service-card" key={svc.id}>
            <div className="service-icon">{svc.icon}</div>
            <h2>{svc.title}</h2>
            <p className="service-short">{svc.short}</p>
            <ul className="service-list">
              {svc.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* PROSES KERJA */}
      <section className="services-process">
        <h2>Cara Kerja Saya</h2>
        <p className="process-subtitle">
          Setiap project akan saya kerjakan dengan alur yang jelas, sehingga
          kamu tahu apa yang sedang dikerjakan di setiap tahap.
        </p>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={step.id}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KENAPA PILIH SAYA */}
      <section className="services-why">
        <h2>Kenapa Memilih Saya?</h2>
        <div className="why-grid">
          <div className="why-item">
            <h3>Pengalaman di Dunia Kesehatan & Kampus</h3>
            <p>
              Berpengalaman menangani kebutuhan digital di lingkungan kampus
              kesehatan, sehingga paham alur kerja administrasi, akademik, dan
              publikasi.
            </p>
          </div>
          <div className="why-item">
            <h3>Komunikasi Mudah & Fleksibel</h3>
            <p>
              Saya berusaha menjelaskan hal teknis dengan bahasa yang sederhana,
              sehingga nyaman diajak diskusi bahkan jika kamu bukan orang IT.
            </p>
          </div>
          <div className="why-item">
            <h3>Desain Rapi & Fungsional</h3>
            <p>
              Fokus tidak hanya pada tampilan yang estetik, tetapi juga kemudahan
              penggunaan serta kecepatan akses website.
            </p>
          </div>
          <div className="why-item">
            <h3>Bisa Dikembangkan Bertahap</h3>
            <p>
              Project bisa dimulai dari versi sederhana dulu, kemudian
              dikembangkan seiring kebutuhan dan budget yang bertambah.
            </p>
          </div>
        </div>
      </section>

      {/* CTA KE KONTAK */}
      <section className="services-cta">
        <h2>Siap Mulai Project Bersama?</h2>
        <p>
          Jika kamu tertarik membuat website, mengembangkan sistem, atau butuh
          bantuan IT Support, kamu bisa langsung menghubungi saya melalui halaman{" "}
          <a href="/kontak">Kontak</a> atau WhatsApp yang tertera.
        </p>
        <a href="/kontak" className="btn-services">
          Hubungi Saya
        </a>
      </section>
    </section>
  );
}

export default Services;
