// مكتب سداد - السكربت الموحد
// React + Babel JSX

// Site B — Components
const Icon = {
  ChevronLeft: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M15 18l-6-6 6-6"/></svg>,
  ArrowLeft: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  Check: (p) => <svg width={p.size||14} height={p.size||14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  Plus: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Phone: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
  Mail: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  MapPin: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Shield: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  ShieldCheck: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  Award: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  Users: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  Building: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="2" width="18" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>,
  Home: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Briefcase: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  Scale: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 16l3-8 3 8c-2 1-4 1-6 0zM2 16l3-8 3 8c-2 1-4 1-6 0zM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>,
  Wallet: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5"/><circle cx="16" cy="14" r="1.5"/></svg>,
  TrendingDown: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>,
  Star: (p) => <svg width={p.size||14} height={p.size||14} viewBox="0 0 24 24" fill="currentColor" {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  WhatsApp: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.7 2.6 1.1 3.2.9 3.7.8.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.5z"/><path d="M12 .5C5.6.5.5 5.6.5 12c0 2.1.6 4.1 1.6 5.8L.6 23.5l5.9-1.5c1.7.9 3.6 1.4 5.5 1.4 6.4 0 11.5-5.1 11.5-11.5C23.5 5.6 18.4.5 12 .5zm0 21c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.6.9.9-3.5-.2-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-9.9 9.9-9.9s9.9 4.5 9.9 9.9-4.4 9.8-10.1 9.8z"/></svg>,
  Calculator: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>,
  FileText: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  Lock: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  Sparkle: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"/></svg>,
  HandShake: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11 17l2 2a1 1 0 003 0c0-.5-.2-1-.5-1.4l3.5-3.5a2 2 0 000-2.8l-7-7a2 2 0 00-2.8 0l-3.5 3.5L8 10"/><path d="M22 12l-2-2"/></svg>,
  Twitter: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z"/></svg>,
  Linkedin: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Instagram: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
};

const WA_NUMBER = "966500000000";
const WA_LINK = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg||"السلام عليكم، أرغب في الحصول على استشارة")}`;
const fmtSAR = (n) => new Intl.NumberFormat('en-US').format(Math.round(n));

function Stars({ n = 5, size = 14 }) {
  return <span className="testi-stars">{Array.from({length:5}).map((_,i)=> <Icon.Star key={i} size={size} style={{opacity: i<n?1:.25}}/>)}</span>;
}

function Counter({ to, suffix = "", duration = 1400 }) {
  const [v, setV] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setV(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: .3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref} className="num">{fmtSAR(v)}{suffix && <span className="suffix">{suffix}</span>}</span>;
}

function Header({ page, navTo }) {
  const links = [
    ["home", "الرئيسية"],
    ["services", "خدماتنا"],
    ["about", "من نحن"],
    ["calculator", "الحاسبة"],
    ["testimonials", "الشهادات"],
    ["faq", "الأسئلة"],
    ["contact", "تواصل"],
  ];
  return (
    <>
      <div className="utilbar">
        <div className="container utilbar-inner">
          <div className="utilbar-left">
            <span><Icon.Phone size={13}/> 920 00 0000</span>
            <span><Icon.Clock size={13}/> الأحد – الخميس · 8:00 ص — 6:00 م</span>
            <span><Icon.Lock size={11}/> اتصال آمن مشفر</span>
          </div>
          <div className="utilbar-right">
            <span style={{display:'inline-flex', alignItems:'center', gap:6}}>
              <Icon.MapPin size={13}/> الرياض · جدة · الدمام
            </span>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container nav">
          <a href="#home" onClick={(e)=>{e.preventDefault();navTo('home')}} className="brand">
            <div className="brand-mark">س</div>
            <div className="brand-text">
              <span className="brand-name">سداد</span>
              <span className="brand-sub">SADAAD · DEBT SOLUTIONS</span>
            </div>
          </a>
          <nav className="nav-pill">
            {links.map(([k, label]) => (
              <a key={k} href={`#${k}`} className={page === k ? 'active' : ''}
                 onClick={(e)=>{e.preventDefault(); navTo(k);}}>{label}</a>
            ))}
          </nav>
          <div className="nav-cta">
            <a className="btn btn-primary btn-sm" style={{padding:'12px 22px'}}
               href={WA_LINK()} target="_blank" rel="noreferrer">
              استشارة مجانية
              <Icon.ArrowLeft size={14}/>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

function Footer({ navTo }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="brand-mark">س</div>
              <div className="brand-text">
                <span className="brand-name">سداد</span>
                <span className="brand-sub">SADAAD</span>
              </div>
            </div>
            <p className="footer-about">
              مكتب متخصص في تسوية المديونيات والتفاوض مع البنوك. نخدم عملاءنا في جميع مناطق المملكة بسرية تامة واحترافية عالية، ولا نتقاضى أتعابًا قبل إتمام التسوية.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="X"><Icon.Twitter/></a>
              <a href="#" aria-label="LinkedIn"><Icon.Linkedin/></a>
              <a href="#" aria-label="Instagram"><Icon.Instagram/></a>
            </div>
          </div>
          <div>
            <h5>روابط سريعة</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();navTo('about')}}>من نحن</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();navTo('services')}}>الخدمات</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();navTo('calculator')}}>الحاسبة التفاعلية</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();navTo('testimonials')}}>الشهادات</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();navTo('faq')}}>الأسئلة الشائعة</a></li>
            </ul>
          </div>
          <div>
            <h5>خدماتنا</h5>
            <ul>
              <li><a href="#">التفاوض مع البنوك</a></li>
              <li><a href="#">جدولة المديونيات</a></li>
              <li><a href="#">القروض الشخصية</a></li>
              <li><a href="#">القروض العقارية</a></li>
              <li><a href="#">التمويل العقاري</a></li>
            </ul>
          </div>
          <div>
            <h5>تواصل معنا</h5>
            <div className="footer-contact-line"><Icon.WhatsApp size={15}/> 0500 000 000</div>
            <div className="footer-contact-line"><Icon.Phone size={15}/> 920 00 0000</div>
            <div className="footer-contact-line"><Icon.Mail size={15}/> info@sadaad.sa</div>
            <div className="footer-contact-line"><Icon.MapPin size={15}/> الرياض، طريق الملك فهد</div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 مكتب سداد · جميع الحقوق محفوظة</span>
          <div className="footer-legal">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FabWA() {
  return (
    <a className="fab-wa" href={WA_LINK()} target="_blank" rel="noreferrer" aria-label="واتساب">
      <div className="fab-wa-circle"><Icon.WhatsApp size={22}/></div>
      <span>تواصل عبر الواتساب</span>
    </a>
  );
}

// Achievements strip (under hero)
function AchievementsStrip() {
  return (
    <div className="ach-strip">
      <div className="ach-strip-inner">
        <div className="ach-card hero-card-tinted">
          <div className="ach-icon"><Icon.Users size={22}/></div>
          <div>
            <div className="ach-num"><Counter to={500}/><span className="suffix">+</span></div>
            <div className="ach-lbl">عميل تمت خدمته بنجاح</div>
          </div>
        </div>
        <div className="ach-card">
          <div className="ach-icon"><Icon.TrendingDown size={22}/></div>
          <div>
            <div className="ach-num"><Counter to={10}/><span className="suffix">م+</span></div>
            <div className="ach-lbl">ريال تمت تسويتها</div>
          </div>
        </div>
        <div className="ach-card">
          <div className="ach-icon"><Icon.HandShake size={22}/></div>
          <div>
            <div className="ach-num"><Counter to={1000}/><span className="suffix">+</span></div>
            <div className="ach-lbl">فرد استفاد من خدماتنا</div>
          </div>
        </div>
        <div className="ach-card">
          <div className="ach-icon"><Icon.Award size={22}/></div>
          <div>
            <div className="ach-num"><Counter to={94}/><span className="suffix">%</span></div>
            <div className="ach-lbl">نسبة نجاح التسويات</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, WA_LINK, WA_NUMBER, fmtSAR, Stars, Counter, Header, Footer, FabWA, AchievementsStrip });


// Site B — Pages

function PageHero({ crumbs, title, lead, navTo }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-card">
          <div className="crumbs">
            <a href="#" onClick={(e)=>{e.preventDefault(); navTo('home')}}>الرئيسية</a>
            {crumbs.map((c, i) => (
              <React.Fragment key={i}>
                <span className="sep">/</span>
                <span>{c}</span>
              </React.Fragment>
            ))}
          </div>
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { key:'banks', icon: <Icon.Building/>, title:'التفاوض مع البنوك', featured: true,
    desc:'نتفاوض مباشرة مع البنوك للوصول إلى أفضل تسوية ممكنة. نمتلك قنوات تواصل مفتوحة مع كافة البنوك السعودية.',
    points:['تخفيض المبلغ الإجمالي','إعفاء من العمولات والغرامات','إيقاف المطالبات والإجراءات'] },
  { key:'schedule', icon: <Icon.FileText/>, title:'جدولة المديونيات',
    desc:'إعادة جدولة الديون بمدد سداد مريحة تتناسب مع دخلك الشهري وقدرتك المالية الحقيقية.',
    points:['دفعات شهرية مخفّضة','تمديد فترة السداد','إيقاف فوائد التأخير'] },
  { key:'personal', icon: <Icon.Wallet/>, title:'تسوية القروض الشخصية',
    desc:'حلول متخصصة لأصحاب القروض الشخصية المتعثرة عبر تفاوض مدروس مع الجهة الممولة.',
    points:['خصومات تصل إلى 60%','تسوية البطاقات الائتمانية','رفع التعثر من سمة'] },
  { key:'real-estate', icon: <Icon.Home/>, title:'تسوية القروض العقارية',
    desc:'إنقاذ العقار المرهون والتفاوض على شروط أفضل لقرضك العقاري قبل الوصول إلى مرحلة المزاد.',
    points:['تجنب فقدان العقار','إعادة هيكلة القرض','تخفيض الأقساط الشهرية'] },
  { key:'finance', icon: <Icon.Briefcase/>, title:'التمويل العقاري',
    desc:'استشارات متخصصة في تسوية تمويلات الأفراد العقارية مع البنوك وشركات التمويل.',
    points:['تفاوض على نسب الربح','تسوية المتأخرات','حلول للتمويل المتعثر'] },
  { key:'inheritance', icon: <Icon.Scale/>, title:'الديون الموروثة',
    desc:'مساعدة الورثة في التفاوض على الديون التي خلّفها مورثهم وحماية حقوقهم القانونية.',
    points:['تقييم قانوني للالتزامات','التفاوض نيابة عن الورثة','حماية الأصول'] },
];

function ServicesGrid({ navTo }) {
  return (
    <div className="services-grid">
      {SERVICES.map((s) => (
        <div key={s.key} className={`service-card${s.featured ? ' featured' : ''}`}>
          <div className="service-icon">{s.icon}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <ul>
            {s.points.map((p, i) => (
              <li key={i}><span className="check"><Icon.Check size={11}/></span> {p}</li>
            ))}
          </ul>
          <a className="service-link" href="#" onClick={(e)=>{e.preventDefault(); navTo && navTo('services')}}>
            استكشف الخدمة <Icon.ChevronLeft size={14}/>
          </a>
        </div>
      ))}
    </div>
  );
}

const TESTIMONIALS = [
  { name:'أبو فيصل', city:'الرياض', amount:'285,000', stars:5,
    role:'موظف حكومي · قرض شخصي',
    quote:'كنت في وضع صعب جدًا بعد تراكم القروض. تواصلت مع مكتب سداد، وخلال 47 يومًا حصلت على تسوية وفّرت علي أكثر من 70 ألف ريال. الفريق محترم جدًا والتعامل سري.' },
  { name:'أم محمد', city:'جدة', amount:'185,000', stars:5,
    role:'بطاقات ائتمانية',
    quote:'كان عليّ متأخرات بطاقات لأكثر من 180 ألف ريال. ساعدوني في تسوية المبلغ بنسبة خصم وصلت إلى 50%، وأعطوني خطة سداد مريحة. شكرًا لكم.' },
  { name:'محمد العنزي', city:'الدمام', amount:'620,000', stars:5,
    role:'قرض عقاري',
    quote:'كانت وضعي على وشك الذهاب للمزاد. تدخلوا بسرعة وتفاوضوا مع البنك. النتيجة: حافظت على بيتي وأعادوا جدولة القرض بشكل مريح.' },
  { name:'خالد المطيري', city:'الرياض', amount:'420,000', stars:5,
    role:'ديون مختلطة',
    quote:'فريق محترف ومنظم. شرحوا لي كل خطوة بشفافية، ولم أدفع أي ريال إلا بعد توقيع اتفاقية التسوية. أنصح بهم بشدة.' },
  { name:'سلطان الدوسري', city:'مكة المكرمة', amount:'95,000', stars:4,
    role:'موظف خاص',
    quote:'الاستشارة المجانية كانت مفيدة جدًا، أعطوني تقييم واقعي. التفاوض استغرق وقت لكن النتيجة كانت ممتازة.' },
  { name:'أم عبدالعزيز', city:'القصيم', amount:'310,000', stars:5,
    role:'وريثة',
    quote:'خلّف لي والدي رحمه الله ديون كبيرة. ساعدوني قانونيًا وماليًا في التفاوض مع البنوك. تخفّفت كثيرًا.' },
];

function TestimonialsList({ limit }) {
  const list = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <div className="testimonials-grid">
      {list.map((t, i) => (
        <div key={i} className="testi">
          <Stars n={t.stars}/>
          <p className="testi-quote">{t.quote}</p>
          <div className="testi-meta">
            <div className="testi-avatar">{t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
            <div>
              <div className="testi-name">{t.name} · {t.city}</div>
              <div className="testi-role">{t.role}</div>
            </div>
            <span className="testi-amount num">{t.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HomePage({ navTo }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <div className="hero-grid">
              <div>
                <span className="eyebrow"><span className="dot"/> مرخص رسميًا · معتمد لدى 12 جهة مالية</span>
                <h1>نحرّر دينك،<br/>ونعيد لك <em>راحة البال</em>.</h1>
                <p className="hero-lead">
                  مكتب متخصص في التفاوض مع البنوك وتسوية القروض الشخصية والعقارية،
                  بسرية تامة وبلا أي أتعاب قبل إتمام تسويتك.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-wa btn-lg" href={WA_LINK("أرغب في استشارة مجانية بشأن تسوية ديوني")} target="_blank" rel="noreferrer">
                    <Icon.WhatsApp/> ابدأ عبر الواتساب
                  </a>
                  <button className="btn btn-on-dark btn-ghost btn-lg" onClick={()=>navTo('calculator')}>
                    <Icon.Calculator size={16}/> احسب توفيرك
                  </button>
                </div>
                <div className="hero-trust">
                  <div className="hero-trust-item"><span className="ic"><Icon.ShieldCheck size={14}/></span> سرية تامة</div>
                  <div className="hero-trust-item"><span className="ic"><Icon.ShieldCheck size={14}/></span> استشارة مجانية</div>
                  <div className="hero-trust-item"><span className="ic"><Icon.ShieldCheck size={14}/></span> لا دفع قبل التسوية</div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-tag">حالة موثقة #1287</div>
                <h3>قبل وبعد التسوية</h3>
                <div className="showcase-sub">قرض شخصي + بطاقات · مدة التفاوض: 47 يومًا</div>
                <div className="showcase-bars">
                  <div className="showcase-row">
                    <span className="lbl">المبلغ قبل التسوية</span>
                    <span className="val num">347,500 ريال</span>
                    <div className="showcase-bar"><span style={{width:'100%', background:'rgba(255,255,255,.2)'}}/></div>
                  </div>
                  <div className="showcase-row">
                    <span className="lbl">المبلغ بعد التسوية</span>
                    <span className="val num">214,300 ريال</span>
                    <div className="showcase-bar"><span style={{width:'62%'}}/></div>
                  </div>
                </div>
                <div className="showcase-result">
                  <div>
                    <div className="lbl">وفّرنا للعميل</div>
                    <div className="val num">133,200 <span className="currency">ريال</span></div>
                  </div>
                  <span className="saved">−38%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AchievementsStrip/>
      </section>

      <section className="trust-strip" style={{paddingTop:80}}>
        <div className="container">
          <div className="trust-strip-inner">
            <div className="trust-strip-label">شركاؤنا الماليون</div>
            <div className="trust-logos">
              {["البنك الأهلي","الراجحي","الرياض","ساب","البلاد","الإنماء","الجزيرة"].map(b => (
                <div key={b} className="trust-logo">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">خدماتنا</span>
              <h2>حلول مالية شاملة لكل التزاماتك</h2>
              <p>نقدم خدمات متخصصة لتسوية المديونيات بمختلف أنواعها، مع استراتيجيات مدروسة لكل حالة على حدة.</p>
            </div>
            <a className="section-head-link" href="#" onClick={(e)=>{e.preventDefault();navTo('services')}}>
              عرض كل الخدمات <Icon.ChevronLeft size={14}/>
            </a>
          </div>
          <ServicesGrid navTo={navTo}/>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head center">
            <div>
              <span className="section-eyebrow">منهجيتنا</span>
              <h2>أربع خطوات واضحة نحو تسوية دينك</h2>
              <p>عملية شفافة من أول تواصل وحتى توقيع اتفاقية التسوية النهائية مع البنك.</p>
            </div>
          </div>
          <div className="process-modern">
            {[
              {n:'01', t:'استشارة مجانية', d:'تواصل عبر الواتساب لتقييم وضعك المالي.', time:'30 دقيقة'},
              {n:'02', t:'دراسة الحالة', d:'نحلل التزاماتك ونضع استراتيجية تفاوض.', time:'2-5 أيام'},
              {n:'03', t:'التفاوض', d:'فريقنا يفاوض البنوك والممولين نيابة عنك.', time:'30-60 يومًا'},
              {n:'04', t:'التسوية والإغلاق', d:'توقيع الاتفاقية وإغلاق الملف. لا أتعاب قبل ذلك.', time:'يوم واحد'},
            ].map((s, i) => (
              <div key={i} className="process-step">
                <div className="process-step-num">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
                <span className="process-time"><Icon.Clock size={11} style={{marginLeft:4, verticalAlign:'-2px'}}/> {s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-feature">
            <div className="split-img">
              <div className="split-img-decor"/>
              <div style={{textAlign:'center', padding:24, position:'relative'}}>
                <Icon.Users size={48} style={{opacity:.4, marginBottom:8}}/>
                <div style={{fontSize:13}}>صورة فريق العمل</div>
              </div>
            </div>
            <div>
              <span className="section-eyebrow">لماذا سداد</span>
              <h2 style={{fontSize:38, fontWeight:800, margin:'0 0 16px', letterSpacing:'-.02em', lineHeight:1.2}}>
                12 عامًا من الخبرة في إعادة التوازن المالي للمتعثرين
              </h2>
              <p style={{fontSize:16, color:'var(--ink-3)', lineHeight:1.75, margin:0}}>
                نتميز بفريق من المستشارين الماليين والقانونيين المعتمدين، ونلتزم بمعايير صارمة في حماية بيانات عملائنا، ولا نتقاضى أي أتعاب إلا بعد إتمام التسوية بنجاح.
              </p>
              <div className="point-list">
                <div className="point">
                  <div className="pt-icon"><Icon.Shield size={20}/></div>
                  <div>
                    <div className="pt-title">سرية تامة وحماية البيانات</div>
                    <div className="pt-desc">جميع المعلومات مشفرة وفق أعلى معايير حماية البيانات الشخصية في المملكة.</div>
                  </div>
                </div>
                <div className="point">
                  <div className="pt-icon"><Icon.Award size={20}/></div>
                  <div>
                    <div className="pt-title">ترخيص رسمي وشهادات اعتماد</div>
                    <div className="pt-desc">مكتب مرخص يعمل وفق أنظمة هيئة السوق المالية.</div>
                  </div>
                </div>
                <div className="point">
                  <div className="pt-icon"><Icon.HandShake size={20}/></div>
                  <div>
                    <div className="pt-title">لا أتعاب قبل التسوية</div>
                    <div className="pt-desc">سياسة واضحة: لا تدفع لنا حتى نحقق لك تسوية فعلية موثقة.</div>
                  </div>
                </div>
                <div className="point">
                  <div className="pt-icon"><Icon.Building size={20}/></div>
                  <div>
                    <div className="pt-title">شراكات مع البنوك السعودية</div>
                    <div className="pt-desc">قنوات مفتوحة تُسرّع التفاوض وتزيد فرص النجاح.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">شهادات</span>
              <h2>قصص نجاح حقيقية من عملائنا</h2>
              <p>أكثر من 500 عميل استعادوا توازنهم المالي. هذه بعض تجاربهم.</p>
            </div>
            <a className="section-head-link" href="#" onClick={(e)=>{e.preventDefault();navTo('testimonials')}}>
              كل الشهادات <Icon.ChevronLeft size={14}/>
            </a>
          </div>
          <TestimonialsList limit={3}/>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <CTABlock navTo={navTo}/>
        </div>
      </section>
    </>
  );
}

function CTABlock({ navTo }) {
  return (
    <div className="cta-block">
      <div>
        <h2>جاهز لبدء رحلة تسوية ديونك؟</h2>
        <p>استشارة مجانية وتقييم واقعي لوضعك خلال 30 دقيقة فقط. لا التزام، ولا أتعاب قبل إتمام التسوية.</p>
      </div>
      <div className="cta-block-actions">
        <a className="btn btn-wa btn-lg" href={WA_LINK()} target="_blank" rel="noreferrer">
          <Icon.WhatsApp/> ابدأ عبر الواتساب
        </a>
        <button className="btn btn-on-dark btn-ghost btn-lg" onClick={()=>navTo && navTo('contact')}>
          عبر النموذج
        </button>
      </div>
    </div>
  );
}

function ServicesPage({ navTo }) {
  return (
    <>
      <PageHero crumbs={["الخدمات"]} title="خدماتنا"
        lead="نقدم خدمات متخصصة لتسوية المديونيات بمختلف أنواعها، مع استراتيجيات مدروسة لكل حالة." navTo={navTo}/>
      <section className="section">
        <div className="container">
          <ServicesGrid navTo={navTo}/>
        </div>
      </section>
      <section className="section-tight"><div className="container"><CTABlock navTo={navTo}/></div></section>
    </>
  );
}

function AboutPage({ navTo }) {
  return (
    <>
      <PageHero crumbs={["من نحن"]} title="من نحن"
        lead="مكتب سداد · رحلتنا في خدمة المتعثرين ماليًا منذ 2014." navTo={navTo}/>
      <section className="section">
        <div className="container">
          <div className="split-feature">
            <div>
              <span className="section-eyebrow">قصتنا</span>
              <h2 style={{fontSize:38, fontWeight:800, margin:'0 0 16px', letterSpacing:'-.02em', lineHeight:1.2}}>
                12 عامًا في خدمة المتعثرين ماليًا
              </h2>
              <p style={{fontSize:16, color:'var(--ink-3)', lineHeight:1.8, margin:'0 0 14px'}}>
                تأسس مكتب سداد على إيمان عميق بأن كل متعثر مالي يستحق فرصة ثانية. منذ تأسيسنا في عام 2014، ساعدنا أكثر من 500 عميل على الخروج من أزماتهم المالية بكرامة، عبر تفاوض احترافي مع البنوك والمؤسسات.
              </p>
              <p style={{fontSize:16, color:'var(--ink-3)', lineHeight:1.8, margin:0}}>
                نؤمن بأن الشفافية والسرية والنتائج هي ركائز الثقة. لذلك، لا نتقاضى أي أتعاب قبل إتمام التسوية، ونحمي بيانات عملائنا بأعلى المعايير.
              </p>
            </div>
            <div className="split-img">
              <div className="split-img-decor"/>
              <div style={{textAlign:'center', position:'relative'}}>
                <Icon.Building size={48} style={{opacity:.4, marginBottom:8}}/>
                <div style={{fontSize:13}}>صورة المكتب الرئيسي</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="section-head center">
            <div>
              <span className="section-eyebrow">قيمنا</span>
              <h2>ما يميز مكتب سداد</h2>
            </div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Icon.Shield/></div>
              <h3>السرية المطلقة</h3>
              <p>نلتزم بأعلى معايير حماية البيانات الشخصية والمالية لعملائنا، ولا نشارك أي معلومة دون إذن خطي مسبق.</p>
            </div>
            <div className="service-card featured">
              <div className="service-icon"><Icon.Award/></div>
              <h3>ترخيص رسمي</h3>
              <p>مكتب مرخص رسميًا، يعمل وفق اللوائح والأنظمة المعتمدة من الجهات التنظيمية في المملكة.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Icon.TrendingDown/></div>
              <h3>نتائج موثقة</h3>
              <p>أكثر من 10 ملايين ريال تمت تسويتها لصالح عملائنا، بنسبة نجاح تصل إلى 94% من الحالات.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div>
              <span className="section-eyebrow">فريق العمل</span>
              <h2>مستشارون متخصصون في خدمتك</h2>
              <p>فريق من المستشارين الماليين والقانونيين المعتمدين، بخبرة تراكمية تتجاوز 50 عامًا.</p>
            </div>
          </div>
          <div className="team-grid">
            {[
              {name:'أ. خالد الحربي', role:'المدير التنفيذي', bio:'خبرة 15 عامًا في التفاوض المالي مع البنوك.'},
              {name:'م. سلمان العتيبي', role:'مستشار قانوني', bio:'محامٍ معتمد متخصص في قضايا الديون والإفلاس.'},
              {name:'أ. ريم القحطاني', role:'مديرة العمليات', bio:'مهندسة مالية بخبرة 10 سنوات في الاستشارات.'},
              {name:'أ. عبدالله الدوسري', role:'مفاوض أول', bio:'متخصص في تسوية القروض الشخصية والعقارية.'},
            ].map((p, i) => (
              <div key={i} className="team-card">
                <div className="team-photo"><span>صورة شخصية</span></div>
                <div className="team-info">
                  <h4>{p.name}</h4>
                  <div className="role">{p.role}</div>
                  <p className="bio">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight"><div className="container"><CTABlock navTo={navTo}/></div></section>
    </>
  );
}

function CalculatorPage({ navTo }) {
  const [debt, setDebt] = React.useState(150000);
  const [income, setIncome] = React.useState(8000);
  const [type, setType] = React.useState('personal');
  const [months, setMonths] = React.useState(36);

  const reductionPct = React.useMemo(() => {
    let base = 25;
    if (type === 'personal') base = 35;
    if (type === 'cards') base = 45;
    if (type === 'real-estate') base = 18;
    if (debt > 200000) base += 5;
    if (debt > 500000) base += 5;
    return Math.min(base, 60);
  }, [debt, type]);

  const settled = Math.round(debt * (1 - reductionPct/100));
  const monthly = Math.round(settled / months);
  const saved = debt - settled;

  const types = [
    ['personal','قرض شخصي'],
    ['cards','بطاقات ائتمانية'],
    ['real-estate','قرض عقاري'],
    ['mixed','ديون مختلطة'],
  ];

  return (
    <>
      <PageHero crumbs={["الحاسبة"]} title="احسب توفيرك في تسوية الدين"
        lead="أدخل بيانات دينك ودخلك الشهري لمعرفة المبلغ المتوقع توفيره عبر التفاوض. النتائج تقديرية وتعتمد على تقييم الحالة." navTo={navTo}/>
      <section className="section" style={{paddingTop:32}}>
        <div className="container-narrow">
          <div className="calc">
            <div className="calc-card">
              <h3>أدخل بياناتك</h3>
              <p>جميع البيانات سرية ولا يتم حفظها أو مشاركتها.</p>
              <div className="field">
                <div className="field-head">
                  <label>إجمالي الدين الحالي</label>
                  <span className="v num">{fmtSAR(debt)} ريال</span>
                </div>
                <input type="range" min="20000" max="2000000" step="5000" value={debt} onChange={(e)=>setDebt(+e.target.value)}/>
              </div>
              <div className="field">
                <div className="field-head">
                  <label>الدخل الشهري</label>
                  <span className="v num">{fmtSAR(income)} ريال</span>
                </div>
                <input type="range" min="3000" max="50000" step="500" value={income} onChange={(e)=>setIncome(+e.target.value)}/>
              </div>
              <div className="field">
                <div className="field-head"><label>نوع الدين</label></div>
                <div className="type-chips">
                  {types.map(([k, lbl]) => (
                    <button key={k} className={`type-chip${type===k?' on':''}`} onClick={()=>setType(k)}>
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <div className="field-head">
                  <label>مدة السداد المرغوبة</label>
                  <span className="v">{months} شهرًا</span>
                </div>
                <input type="range" min="6" max="84" step="6" value={months} onChange={(e)=>setMonths(+e.target.value)}/>
              </div>
            </div>
            <div className="calc-result">
              <h3>نتيجتك التقديرية</h3>
              <div className="calc-output hi">
                <div className="o-lbl">المبلغ المتوقع توفيره</div>
                <div className="o-val num">{fmtSAR(saved)} <span className="currency">ريال</span></div>
              </div>
              <div className="calc-output">
                <div className="o-lbl">المبلغ بعد التسوية</div>
                <div className="o-val num">{fmtSAR(settled)} <span className="currency">ريال</span></div>
              </div>
              <div className="calc-output">
                <div className="o-lbl">القسط الشهري المقترح</div>
                <div className="o-val num">{fmtSAR(monthly)} <span className="currency">ريال/شهر</span></div>
              </div>
              <div style={{position:'relative', marginTop:24}}>
                <a className="btn btn-wa btn-lg" style={{width:'100%'}} href={WA_LINK(`أرغب في استشارة، دين بقيمة ${fmtSAR(debt)} ريال`)} target="_blank" rel="noreferrer">
                  <Icon.WhatsApp/> أرسل بياناتي عبر الواتساب
                </a>
              </div>
              <div className="calc-disclaimer">
                * النتائج تقديرية. نسبة التخفيض النهائية تتحدد بعد التفاوض مع الجهة الممولة.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialsPage({ navTo }) {
  const [reviews, setReviews] = React.useState([]);
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');
  const [stars, setStars] = React.useState(5);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setReviews([{name, text, stars, when:'قبل لحظات'}, ...reviews]);
    setName(''); setText(''); setStars(5);
  };

  return (
    <>
      <PageHero crumbs={["الشهادات"]} title="ماذا يقول عملاؤنا"
        lead="أكثر من 500 عميل خدمناهم بنجاح. اطلع على تجاربهم، وشاركنا تجربتك إن سبق وتعاملت معنا." navTo={navTo}/>
      <section className="section" style={{paddingTop:32}}>
        <div className="container">
          <TestimonialsList/>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">شارك تجربتك</span>
              <h2>هل تعاملت معنا؟ اترك رأيك</h2>
              <p>تجربتك تساعد عملاء آخرين في اتخاذ قرارهم بثقة.</p>
            </div>
          </div>
          <div className="review-area">
            <div className="review-list">
              {reviews.length === 0 ? (
                <div className="empty">لا توجد تعليقات جديدة بعد. كن أول من يشارك تجربته.</div>
              ) : reviews.map((r, i) => (
                <div key={i} className="review-item">
                  <div className="review-item-head">
                    <span className="who">{r.name}</span>
                    <span className="when">{r.when}</span>
                  </div>
                  <div className="stars">{'★'.repeat(r.stars)}{'☆'.repeat(5-r.stars)}</div>
                  <p className="body">{r.text}</p>
                </div>
              ))}
            </div>
            <form className="review-form" onSubmit={submit}>
              <h4>أضف تعليقك</h4>
              <p>نشر تجربتك يستغرق دقيقة واحدة فقط.</p>
              <div className="form-field">
                <label>الاسم</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="مثال: أبو محمد"/>
              </div>
              <div className="form-field">
                <label>التقييم</label>
                <div className="rating-input">
                  {[1,2,3,4,5].map(n=> (
                    <button type="button" key={n} className={n<=stars?'on':''} onClick={()=>setStars(n)}>
                      <Icon.Star size={26}/>
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-field">
                <label>تجربتك</label>
                <textarea rows="4" value={text} onChange={(e)=>setText(e.target.value)} placeholder="شاركنا تجربتك مع المكتب..."/>
              </div>
              <button type="submit" className="btn btn-primary" style={{width:'100%'}}>نشر التعليق</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const FAQS = [
  { q:'كم تستغرق عملية التسوية عادة؟',
    a:'تتراوح مدة التسوية بين 30 و 90 يومًا حسب تعقيد الحالة، نوع الدين، والجهة الممولة. الحالات البسيطة قد تكتمل خلال 3 أسابيع، بينما الحالات المعقدة قد تحتاج إلى 4 أشهر.' },
  { q:'هل الاستشارة الأولى مجانية فعلاً؟',
    a:'نعم، الاستشارة الأولى مجانية تمامًا ولا التزام عليك. نقوم خلالها بتقييم وضعك المالي وإعطائك تصور واقعي عن إمكانية التسوية والتوفير المتوقع.' },
  { q:'متى أدفع أتعاب المكتب؟',
    a:'نلتزم بسياسة "لا دفع قبل التسوية". الأتعاب تُدفع فقط بعد توقيع اتفاقية التسوية النهائية مع البنك ووصول إلى نتيجة موثقة.' },
  { q:'هل تتعاملون مع البطاقات الائتمانية المتعثرة؟',
    a:'نعم، البطاقات الائتمانية من أكثر الحالات التي نتعامل معها. عادةً نحقق فيها نسب خصم تتراوح بين 35% و 60% من المبلغ الإجمالي.' },
  { q:'هل يتم رفع التعثر من سمة بعد التسوية؟',
    a:'بعد إتمام التسوية وسداد المبلغ المتفق عليه، يقوم البنك بتحديث الوضع لدى سمة بشكل تلقائي خلال 30 إلى 90 يومًا.' },
  { q:'كيف تضمنون سرية بياناتي؟',
    a:'نلتزم باتفاقية سرية موقعة، وجميع البيانات مشفرة. لا نشارك أي معلومة مع جهات خارجية إلا بإذنك الخطي.' },
  { q:'هل تعملون في جميع مناطق المملكة؟',
    a:'نعم، نخدم العملاء في جميع المناطق عن بُعد، ولدينا مكاتب في الرياض وجدة والدمام لمن يفضل الزيارة الميدانية.' },
  { q:'ماذا لو لم تنجح التسوية؟',
    a:'في الحالات النادرة التي لا تنجح فيها التسوية، لا نتقاضى أي أتعاب. نقدم بدائل قانونية أخرى أو نوجهك لخيارات إعادة هيكلة.' },
];

function FAQPage({ navTo }) {
  const [open, setOpen] = React.useState(0);
  return (
    <>
      <PageHero crumbs={["الأسئلة"]} title="الأسئلة الشائعة"
        lead="إجابات تفصيلية على أكثر الأسئلة. لم تجد إجابتك؟ تواصل عبر الواتساب مباشرة." navTo={navTo}/>
      <section className="section" style={{paddingTop:32}}>
        <div className="container-narrow">
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={()=>setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-toggle"><Icon.Plus size={16}/></span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight"><div className="container"><CTABlock navTo={navTo}/></div></section>
    </>
  );
}

function ContactPage({ navTo }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({name:'', phone:'', email:'', amount:'', type:'personal', msg:''});
  const upd = (k) => (e) => setForm({...form, [k]: e.target.value});

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({name:'', phone:'', email:'', amount:'', type:'personal', msg:''});
  };

  return (
    <>
      <PageHero crumbs={["تواصل معنا"]} title="تواصل معنا"
        lead="الواتساب أسرع طريقة للوصول إلينا. نرد عادة خلال 15 دقيقة في أوقات الدوام." navTo={navTo}/>
      <section className="section" style={{paddingTop:32}}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-card">
                <h3>قنوات التواصل</h3>
                <a className="contact-method" href={WA_LINK()} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                  <div className="icon wa"><Icon.WhatsApp size={20}/></div>
                  <div>
                    <div className="lbl">الواتساب · الأسرع</div>
                    <div className="val num" dir="ltr">+966 50 000 0000</div>
                  </div>
                </a>
                <div className="contact-method">
                  <div className="icon"><Icon.Phone size={18}/></div>
                  <div>
                    <div className="lbl">الهاتف الموحد</div>
                    <div className="val num" dir="ltr">920 00 0000</div>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="icon"><Icon.Mail size={18}/></div>
                  <div>
                    <div className="lbl">البريد الإلكتروني</div>
                    <div className="val">info@sadaad.sa</div>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="icon"><Icon.MapPin size={18}/></div>
                  <div>
                    <div className="lbl">المكتب الرئيسي</div>
                    <div className="val" style={{fontSize:14}}>الرياض، طريق الملك فهد</div>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="icon"><Icon.Clock size={18}/></div>
                  <div>
                    <div className="lbl">ساعات العمل</div>
                    <div className="val" style={{fontSize:14}}>الأحد – الخميس · 8 ص — 6 م</div>
                  </div>
                </div>
              </div>
              <a className="btn btn-wa btn-lg" style={{width:'100%', marginTop:18}}
                 href={WA_LINK()} target="_blank" rel="noreferrer">
                <Icon.WhatsApp/> ابدأ المحادثة الآن
              </a>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <h3>طلب استشارة</h3>
              <p>املأ النموذج وسنتواصل معك خلال ساعتين عمل.</p>
              {submitted && (
                <div className="form-success">
                  <Icon.Check size={16}/> تم استلام طلبك بنجاح. سنتواصل معك قريبًا.
                </div>
              )}
              <div className="form-row">
                <div className="form-field">
                  <label>الاسم الكامل *</label>
                  <input required value={form.name} onChange={upd('name')} placeholder="الاسم الثلاثي"/>
                </div>
                <div className="form-field">
                  <label>رقم الجوال *</label>
                  <input required value={form.phone} onChange={upd('phone')} placeholder="05XXXXXXXX" dir="ltr"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>البريد (اختياري)</label>
                  <input value={form.email} onChange={upd('email')} placeholder="example@email.com" dir="ltr"/>
                </div>
                <div className="form-field">
                  <label>نوع الدين</label>
                  <select value={form.type} onChange={upd('type')}>
                    <option value="personal">قرض شخصي</option>
                    <option value="cards">بطاقات ائتمانية</option>
                    <option value="real-estate">قرض عقاري</option>
                    <option value="mixed">مختلط / أخرى</option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label>قيمة الدين التقريبية (ريال)</label>
                <input value={form.amount} onChange={upd('amount')} placeholder="مثال: 150,000" dir="ltr"/>
              </div>
              <div className="form-field">
                <label>تفاصيل إضافية</label>
                <textarea value={form.msg} onChange={upd('msg')} placeholder="أخبرنا عن حالتك بإيجاز..."/>
              </div>
              <div style={{display:'flex', alignItems:'flex-start', gap:8, marginBottom:18, fontSize:13, color:'var(--ink-3)'}}>
                <Icon.Lock size={14} style={{marginTop:3, color:'var(--primary)', flexShrink:0}}/>
                بياناتك سرية تمامًا ومشفرة. لن نشاركها مع أي طرف ثالث.
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%'}}>
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, {
  HomePage, ServicesPage, AboutPage, CalculatorPage,
  TestimonialsPage, FAQPage, ContactPage, CTABlock, ServicesGrid, TestimonialsList, PageHero
});


function App() {
  const [page, setPage] = React.useState(() => {
    const h = (location.hash || '#home').replace('#','');
    return ['home','services','about','calculator','testimonials','faq','contact'].includes(h) ? h : 'home';
  });

  const navTo = (p) => {
    setPage(p);
    history.replaceState(null, '', '#' + p);
    window.scrollTo({top: 0, behavior: 'instant'});
  };

  React.useEffect(() => {
    const onHash = () => {
      const h = (location.hash || '#home').replace('#','');
      if (['home','services','about','calculator','testimonials','faq','contact'].includes(h)) setPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let body;
  switch (page) {
    case 'services': body = <ServicesPage navTo={navTo}/>; break;
    case 'about': body = <AboutPage navTo={navTo}/>; break;
    case 'calculator': body = <CalculatorPage navTo={navTo}/>; break;
    case 'testimonials': body = <TestimonialsPage navTo={navTo}/>; break;
    case 'faq': body = <FAQPage navTo={navTo}/>; break;
    case 'contact': body = <ContactPage navTo={navTo}/>; break;
    default: body = <HomePage navTo={navTo}/>;
  }

  return (
    <>
      <Header page={page} navTo={navTo}/>
      <main data-screen-label={page}>{body}</main>
      <Footer navTo={navTo}/>
      <FabWA/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
