import "../styles/about.css";
import { User, Award, Layers, Sparkles } from "lucide-react";
import aboutImg from "../assets/13.jpeg";

function About() {
  return (
    <section className="page about">
      <div className="container">
        <header className="page-header fade-in-up anim-delay-1">
          <span className="badge-soft">
            <Sparkles size={14} />
            About Me
          </span>
          <h1 className="page-title">
            Kenalan dengan Rizki Ananda (Arvan Shadowa)
          </h1>
          <p className="page-subtitle">
            Di halaman ini saya memperkenalkan siapa saya, mengapa saya memakai
            nama <strong>Arvan Shadowa</strong>, serta skill dan layanan yang
            saya tawarkan melalui website dan sosial media.
          </p>
        </header>

        <div className="grid-2 about-grid fade-in-up anim-delay-2">
          {/* KIRI: Cerita utama + icon */}
          <div className="about-main">
            <div className="about-intro">
              <div className="about-intro-icon">
                <User size={20} />
              </div>
              <div>
                <h2>Tentang Saya</h2>
                <p className="about-intro-sub">
                  Menggabungkan dunia IT, website, dan konten online dalam satu
                  identitas yang konsisten.
                </p>
              </div>
            </div>

            <p>
              Nama saya <strong>Rizki Ananda</strong>. Saya tertarik dengan
              teknologi, dunia digital, dan bagaimana internet bisa dipakai
              untuk berkarya dan membantu orang lain. Saya mengerjakan hal-hal
              seperti pembuatan website, pengelolaan konten, dan bantuan teknis
              di bidang IT.
            </p>
            <p>
              Di dunia online, saya menggunakan nama{" "}
              <strong>Arvan Shadowa</strong>. Nama ini saya pakai sebagai identitas
              yang lebih ringkas dan mudah diingat ketika orang mencari saya di
              internet atau di sosial media.
            </p>

            <div className="about-block">
              <h3>
                <Layers size={18} /> Mengapa memakai nama “Arvan Shadowa”?
              </h3>
              <p>
                Saya ingin memisahkan identitas formal sebagai{" "}
                <strong>Rizki Ananda</strong> dengan identitas kreatif saya di
                dunia digital. Dengan nama <strong>Arvan Shadowa</strong>, saya
                lebih bebas bereksperimen dalam desain, cara bercerita, dan
                gaya konten — sambil tetap membawa jati diri saya yang
                sebenarnya.
              </p>
            </div>

            <div className="about-block">
              <h3>
                <Award size={18} /> Skill yang saya tekuni
              </h3>
              <ul className="list-check about-skill-list">
                <li>✨ Jasa pembuatan website (personal, UMKM, kampus).</li>
                <li>💻 Frontend basic & React untuk tampilan modern.</li>
                <li>🧠 IT Support: troubleshooting ringan & pendampingan.</li>
                <li>📝 Penulisan konten untuk profil & promosi skill.</li>
                <li>
                  📱 Pengelolaan profil online di beberapa sosial media.
                </li>
              </ul>
            </div>
          </div>

          {/* KANAN: Gambar + kartu ringkas */}
          <aside className="about-side">
            <div className="about-image-card fade-in-up anim-delay-2">
              <div className="about-image-wrapper">
                <img
                  src={aboutImg}
                  alt="Ilustrasi tentang Rizki / Arvan Shadowa"
                  className="about-image"
                />
              </div>
              <div className="about-image-caption">
                <p>
                  <strong>Rizki Ananda</strong> • Arvan Shadowa
                  <br />
                  Web Creator & IT Support
                </p>
              </div>
            </div>

            <div className="about-card fade-in-up anim-delay-3">
              <h3>Profil Singkat</h3>
              <dl>
                <div>
                  <dt>Nama Lengkap</dt>
                  <dd>Rizki Ananda</dd>
                </div>
                <div>
                  <dt>Nama Online</dt>
                  <dd>Arvan Shadowa</dd>
                </div>
                <div>
                  <dt>Fokus Utama</dt>
                  <dd>IT, Website, Konten, Profil Online</dd>
                </div>
                <div>
                  <dt>Fungsi Website</dt>
                  <dd>
                    Menampilkan diri, skill, portfolio, sertifikat, dan sosial
                    media.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="about-card fade-in-up anim-delay-4">
              <h3>Keahlian Utama</h3>
              <div className="skills-tags">
                <span>Jasa Website</span>
                <span>React Frontend</span>
                <span>IT Support</span>
                <span>Profil Online</span>
                <span>Content Writing</span>
                <span>Social Media</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
