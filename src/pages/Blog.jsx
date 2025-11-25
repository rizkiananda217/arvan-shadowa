import "../styles/blog.css";
import { PenSquare, Sparkles } from "lucide-react";
import blogHeroImg from "../assets/17.jpeg";

const posts = [
  {
    id: 1,
    title: "Kenapa Profil Online Itu Penting di Era Digital?",
    date: "10 November 2025",
    readTime: "4 menit baca",
    tag: "Profil Online",
    excerpt:
      "Di era digital, orang sering mencari kita lewat internet. Profil online yang jelas membantu orang mengenal siapa kita dan apa yang kita kerjakan.",
  },
  {
    id: 2,
    title: "Mulai Bangun Jejak Digital dari Hal Sederhana",
    date: "2 November 2025",
    readTime: "3 menit baca",
    tag: "Digital Presence",
    excerpt:
      "Tidak perlu menunggu sempurna untuk mulai. Kita bisa mulai dari hal kecil: bio yang jelas, foto profil yang rapi, dan cara kita berbagi konten.",
  },
  {
    id: 3,
    title: "Konsistensi vs. Perfeksionisme dalam Berkarya Online",
    date: "25 Oktober 2025",
    readTime: "5 menit baca",
    tag: "Mindset",
    excerpt:
      "Sering kali yang menghambat kita bukan tidak punya ide, tapi merasa semua harus sempurna. Di artikel ini saya bercerita bagaimana saya mencoba tetap konsisten tanpa harus menunggu semuanya ideal.",
  },
];

function Blog() {
  return (
    <section className="page blog">
      <div className="container">
        <header className="page-header fade-in-up anim-delay-1">
          <span className="badge-soft">
            <Sparkles size={14} />
            Blog & Insight
          </span>
          <h1 className="page-title">Catatan Perjalanan Online Saya</h1>
          <p className="page-subtitle">
            Kumpulan tulisan singkat, insight, dan refleksi tentang skill,
            karier digital, dan cara saya berkarya di internet.
          </p>
        </header>

        {/* HERO BLOG DENGAN GAMBAR */}
        <section className="blog-hero-card fade-in-up anim-delay-2">
          <div className="blog-hero-text">
            <h2>
              <PenSquare size={18} /> Ruang cerita & refleksi
            </h2>
            <p>
              Di bagian blog ini, saya menulis hal-hal yang saya pelajari,
              rasakan, dan pikirkan seputar teknologi, website, dan perjalanan
              saya membangun profil online.
            </p>
          </div>
          <div className="blog-hero-image-wrapper">
            <img
              src={blogHeroImg}
              alt="Ilustrasi menulis / blogging"
              className="blog-hero-image"
            />
          </div>
        </section>

        {/* LIST ARTIKEL */}
        <section className="blog-list">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              className={`blog-card fade-in-up anim-delay-${(idx % 3) + 2}`}
            >
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="blog-tag-row">
                <span className="blog-tag">{post.tag}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href="#" className="blog-readmore">
                Baca selengkapnya
              </a>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Blog;
