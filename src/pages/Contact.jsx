import "../styles/contact.css";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import contactImg from "../assets/18.jpeg";

function Contact() {
  return (
    <section className="page contact">
      <div className="container">
        <header className="page-header fade-in-up anim-delay-1">
          <span className="badge-soft">
            <MessageCircle size={14} />
            Contact
          </span>
          <h1 className="page-title">
            Pesan Jasa atau Kolaborasi dengan Saya
          </h1>
          <p className="page-subtitle">
            Jika kamu tertarik dengan jasa <strong>pembuatan website</strong>,{" "}
            <strong>project sistem sederhana</strong>, atau membutuhkan{" "}
            <strong>IT Support</strong>, silakan hubungi saya melalui form ini
            atau lewat sosial media. Kita bisa diskusi dulu sebelum menentukan
            paket terbaik.
          </p>
        </header>

        <div className="grid-2 contact-grid fade-in-up anim-delay-2">
          {/* Kiri: Informasi kontak + gambar */}
          <div className="contact-info">
            <div className="contact-illustration-card">
              <img
                src={contactImg}
                alt="Ilustrasi komunikasi / contact"
                className="contact-illustration"
              />
            </div>

            <h2>Informasi Kontak</h2>
            <p>
              Silakan pilih cara komunikasi yang paling nyaman untuk kamu. Saya
              akan berusaha merespons secepat mungkin.
            </p>

            <div className="contact-box fade-in-up anim-delay-2">
              <h3>
                <Mail size={16} /> Email Utama
              </h3>
              <p>
                Kamu bisa mengirim email ke:
                <br />
                <a href="mailto:hello@arvanshadowa.com">
                  hello@arvanshadowa.com
                </a>
              </p>
            </div>

            <div className="contact-box fade-in-up anim-delay-3">
              <h3>
                <Phone size={16} /> Sosial Media & Chat
              </h3>
              <ul>
                <li>
                  Instagram:{" "}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @arvanshadowa
                  </a>
                </li>
                <li>
                  WhatsApp: <span>link / nomor nanti kamu isi sendiri</span>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Profil LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Kanan: Form kontak */}
          <div className="contact-form-wrapper fade-in-up anim-delay-3">
            <h2>Kirim Pesan Langsung</h2>
            <p className="contact-form-subtitle">
              Form ini masih bersifat tampilan (belum terhubung ke backend).{" "}
              <br />
              Nanti bisa kita sambungkan ke email/API kalau kamu mau.
            </p>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Ini hanya demo tampilan form. Nanti bisa kita sambungkan ke backend / email."
                );
              }}
            >
              <div className="form-group">
                <label>Nama</label>
                <input type="text" placeholder="Tulis nama kamu" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email aktif kamu"
                  required
                />
              </div>

              <div className="form-group">
                <label>Topik</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Pilih topik
                  </option>
                  <option value="kolaborasi">Kolaborasi</option>
                  <option value="undangan">Undangan sharing / event</option>
                  <option value="website">Pemesanan jasa website</option>
                  <option value="it-support">Butuh IT Support</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div className="form-group">
                <label>Pesan</label>
                <textarea rows="4" placeholder="Tulis pesan kamu di sini" />
              </div>

              <button type="submit" className="btn-primary">
                <Send size={16} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
