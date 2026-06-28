import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import { articles } from '../../data/articlesData';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find current article
  const article = articles.find(item => item.id === parseInt(id));

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Social actions states
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Comments State (Simulation)
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Rian Hidayat',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop',
      date: '1 hari yang lalu',
      content: 'Artikel yang sangat bermanfaat! Manajemen waktu memang menjadi kunci utama menghadapi semester 4 yang penuh tekanan akademis dan rapat organisasi.'
    },
    {
      id: 2,
      name: 'Amelia Putri',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop',
      date: '12 jam yang lalu',
      content: 'Setuju banget dengan poin manajemen waktu digital. Saya pakai Google Calendar sangat terbantu untuk blokir waktu belajar mandiri.'
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  if (!article) {
    return (
      <div className="py-2xl px-margin-mobile md:px-margin-desktop text-center min-h-[60vh] flex flex-col justify-center items-center">
        <span className="material-symbols-outlined text-6xl text-text-secondary mb-md">error</span>
        <h2 className="font-headline-md text-headline-md text-text-primary mb-sm">Artikel Tidak Ditemukan</h2>
        <p className="text-text-secondary mb-lg max-w-sm">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <button 
          onClick={() => navigate('/article')}
          className="bg-primary text-white px-xl py-2.5 rounded-lg font-label-md hover:bg-primary-hover transition-colors"
        >
          Kembali ke Artikel
        </button>
      </div>
    );
  }

  // Get 3 related articles (exclude current one)
  const relatedArticles = articles
    .filter(item => item.id !== article.id)
    .slice(0, 3);

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment = {
      id: Date.now(),
      name: 'Saya (Pengguna)',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop',
      date: 'Baru saja',
      content: newCommentText.trim()
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  return (
    <div className="py-md md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col relative text-left">
      
      {/* Toast Notification for Share */}
      {showShareToast && (
        <div className="fixed bottom-lg right-lg bg-text-primary text-white px-md py-sm rounded-xl shadow-lg flex items-center gap-2 z-50 animate-fade-in transition-all">
          <span className="material-symbols-outlined text-success">check_circle</span>
          <span className="font-body-sm text-xs font-semibold">Tautan artikel berhasil disalin ke papan klip!</span>
        </div>
      )}

      {/* Breadcrumb */}
      <header className="mb-md hidden md:block">
        <Breadcrumb items={[
          { label: 'Article', path: '/article' },
          { label: article.title }
        ]} />
      </header>

      {/* Mobile Back Button */}
      <div className="md:hidden mb-sm">
        <Link to="/article" className="inline-flex items-center text-primary font-semibold text-xs gap-1 py-1">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Kembali ke Daftar Artikel
        </Link>
      </div>

      {/* Article Header Details */}
      <div className="mb-lg md:mb-xl max-w-4xl">
        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
          {article.category}
        </span>
        <h1 className="font-headline-xl text-3xl md:text-5xl text-text-primary mt-md mb-lg leading-tight tracking-tight">
          {article.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-border pb-md">
          {/* Author info */}
          <div className="flex items-center gap-sm">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border border-border"
            />
            <div>
              <h4 className="font-bold text-sm md:text-base text-text-primary">{article.author.name}</h4>
              <p className="text-xs text-text-secondary">{article.author.role}</p>
            </div>
            <div className="ml-xs border-l border-border pl-sm text-xs text-text-secondary">
              <p>{article.date}</p>
              <p className="mt-0.5 font-semibold text-primary">{article.readTime}</p>
            </div>
          </div>

          {/* Social action buttons */}
          <div className="flex items-center gap-sm self-start sm:self-auto">
            <button 
              onClick={handleShareClick}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-white text-text-secondary hover:text-primary hover:border-primary/50 transition-all"
              title="Bagikan Tautan"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center justify-center w-10 h-10 rounded-xl border transition-all ${
                isBookmarked 
                  ? 'bg-primary/10 border-primary text-primary' 
                  : 'bg-white border-border text-text-secondary hover:text-primary hover:border-primary/50'
              }`}
              title="Simpan Artikel"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isBookmarked ? 'bookmark_added' : 'bookmark'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Cover Image */}
      <div className="w-full aspect-[21/9] min-h-[220px] max-h-[480px] rounded-2xl overflow-hidden mb-xl border border-border shadow-sm">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layout (Two Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Left Column: Article Body (2/3) */}
        <div className="lg:col-span-2">
          {/* Article Text Content */}
          <div className="prose max-w-none text-text-primary font-body-md text-sm md:text-base leading-relaxed space-y-md md:space-y-lg">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-justify">{paragraph}</p>
            ))}

            {/* Blockquote simulation */}
            <blockquote className="border-l-4 border-primary bg-soft-blue/50 p-md rounded-r-xl my-lg italic text-text-secondary text-sm md:text-base">
              "Kunci utama dari kesuksesan akademik dan keaktifan berorganisasi bukanlah seberapa banyak waktu yang Anda miliki, melainkan seberapa bijak Anda memilah prioritas dan mengelola energi harian Anda."
            </blockquote>

            <p>
              Jangan ragu untuk berdiskusi dengan dosen wali atau kakak tingkat yang memiliki pengalaman serupa. Dukungan sosial dan bimbingan yang tepat akan mempermudah jalan Anda melewati semester 4 ini dengan hasil yang gemilang. Selamat belajar dan berorganisasi!
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-xs mt-xl pt-lg border-t border-border">
            {article.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-surface-container-low text-text-secondary border border-border text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Comment Section (Simulated) */}
          <section className="mt-2xl">
            <h3 className="font-bold text-lg md:text-xl text-text-primary mb-lg">
              Diskusi & Komentar ({comments.length})
            </h3>

            {/* Form Input Komentar */}
            <form onSubmit={handleCommentSubmit} className="flex gap-md items-start mb-xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" 
                alt="My Profile"
                className="w-10 h-10 rounded-full object-cover border border-border"
              />
              <div className="flex-1">
                <textarea 
                  rows="3"
                  placeholder="Tulis pendapat atau pertanyaan Anda di sini..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="w-full bg-white border border-border rounded-xl p-md font-body-sm text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none shadow-sm"
                />
                <div className="flex justify-end mt-sm">
                  <button 
                    type="submit"
                    className="bg-primary hover:bg-primary-hover text-white text-xs md:text-sm px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 flex items-center gap-1.5"
                  >
                    Kirim Komentar
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Comment List */}
            <div className="space-y-lg">
              {comments.map(comment => (
                <div key={comment.id} className="flex gap-md items-start pb-md border-b border-border/40 last:border-0 text-left">
                  <img 
                    src={comment.avatar} 
                    alt={comment.name}
                    className="w-9 h-9 rounded-full object-cover border border-border"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-xs mb-1">
                      <h5 className="font-bold text-sm text-text-primary">{comment.name}</h5>
                      <span className="text-[10px] text-text-secondary">{comment.date}</span>
                    </div>
                    <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Author Info & Related Articles (1/3) */}
        <aside className="lg:col-span-1">
          <div className="flex flex-col gap-xl sticky top-24">
            
            {/* Author Profile Card */}
            <div className="bg-white border border-border rounded-2xl p-lg text-center shadow-sm">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-md border-2 border-primary/20 shadow-sm"
              />
              <h4 className="font-bold text-base text-text-primary">{article.author.name}</h4>
              <p className="text-xs text-text-secondary font-label-md mt-0.5">{article.author.role}</p>
              
              <p className="text-text-secondary text-xs leading-relaxed mt-md mb-lg">
                {article.author.bio}
              </p>

              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`w-full py-2 rounded-xl text-xs font-bold border transition-all ${
                  isFollowing 
                    ? 'bg-surface-container-low text-text-secondary border-border hover:bg-surface-container-mid' 
                    : 'bg-primary text-white border-primary hover:bg-primary-hover'
                }`}
              >
                {isFollowing ? 'Mengikuti' : 'Ikuti Penulis'}
              </button>
            </div>

            {/* Related Articles Panel */}
            <div className="bg-white border border-border rounded-2xl p-lg shadow-sm">
              <h3 className="font-bold text-sm md:text-base text-text-primary mb-md border-b border-border pb-sm text-left">
                Artikel Terkait
              </h3>
              
              <div className="flex flex-col gap-md">
                {relatedArticles.map(item => (
                  <Link 
                    key={item.id} 
                    to={`/article/${item.id}`}
                    className="flex gap-sm group items-stretch text-left"
                  >
                    {/* Related Image */}
                    <div className="w-[80px] h-[60px] rounded-lg overflow-hidden flex-shrink-0 border border-border/40">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Related Content */}
                    <div className="flex flex-col justify-between overflow-hidden">
                      <h4 className="font-bold text-xs text-text-primary line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1 text-[10px] text-text-secondary">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span className="font-semibold text-primary">{item.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </aside>
      </div>

    </div>
  );
};

export default ArticleDetailPage;
