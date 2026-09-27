import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Gamepad2,
  Github,
  Layers3,
  Menu,
  MessageCircle,
  Monitor,
  Palette,
  Play,
  Sparkles,
  Moon,
  Sun,
  Video,
  X,
  Youtube,
} from "lucide-react";

const socials = [
  { label: "YOUTUBE", handle: "@Artemis_vfx-b8d", href: "https://www.youtube.com/@Artemis_vfx-b8d", icon: Youtube, color: "purple" },
  { label: "TIKTOK", handle: "@artemis1_vfx", href: "https://www.tiktok.com/@artemis1_vfx", icon: Play, color: "blue" },
  { label: "GITHUB", handle: "adebayodanone137-cell", href: "https://github.com/adebayodanone137-cell", icon: Github, color: "cyan" },
];

const whatsappContacts = [
  { label: "WHATSAPP QR CONTACT", handle: "Scan or tap to start a chat", href: "https://wa.me/qr/3R76ORN6ZPAPI1", icon: MessageCircle, color: "whatsapp-green", qr: true },
  { label: "WHATSAPP DIRECT", handle: "+234 707 947 3861", href: "https://wa.me/2347079473861", icon: MessageCircle, color: "whatsapp-blue" },
];

const services = [
  { number: "01", title: "WEB EXPERIENCES", text: "Modern websites, interfaces, landing pages, and interactive digital experiences.", icon: Monitor, color: "purple" },
  { number: "02", title: "DIGITAL DESIGN", text: "UI/UX, branding, visual systems, and creative interfaces with a point of view.", icon: Palette, color: "blue" },
  { number: "03", title: "GAMING", text: "Interactive gaming concepts, football experiences, gameplay interfaces, and digital worlds.", icon: Gamepad2, color: "cyan" },
  { number: "04", title: "VISUAL CONTENT", text: "Video editing, motion graphics, social media visuals, and creative digital content.", icon: Video, color: "lavender" },
];

const work = [
  { title: "ARTEMIS: RISE OF CHAMPIONS", type: "FOOTBALL / GAMING", className: "work-feature", visual: "stadium" },
  { title: "WEB EXPERIENCES", type: "DIGITAL PRODUCTS", className: "work-blue", visual: "browser" },
  { title: "DIGITAL DESIGN", type: "VISUAL SYSTEMS", className: "work-lilac", visual: "type" },
  { title: "VIDEO EDITS", type: "MOTION / CULTURE", className: "work-dark", visual: "film" },
  { title: "UI CONCEPTS", type: "INTERFACE STUDIES", className: "work-cyan", visual: "ui" },
  { title: "EXPERIMENTAL PROJECTS", type: "DIGITAL LAB", className: "work-purple", visual: "lab" },
];

function Visual({ type }: { type: string }) {
  if (type === "stadium") return <div className="visual visual-stadium"><div className="stadium-lines" /><div className="stadium-ball" /><span>90:00</span><b>2—1</b></div>;
  if (type === "browser") return <div className="visual visual-browser"><div className="browser-bar" /><div className="browser-copy">BUILD<br /><em>WHAT'S NEXT.</em></div><div className="browser-orb" /></div>;
  if (type === "type") return <div className="visual visual-type"><span>MAKE</span><strong>NOISE</strong><i>ARTEMIS / 02</i></div>;
  if (type === "film") return <div className="visual visual-film"><div className="film-strip" /><Play fill="currentColor" size={35} /></div>;
  if (type === "ui") return <div className="visual visual-ui"><div /><div /><div /><div /></div>;
  return <div className="visual visual-lab"><span>◌</span><span>✦</span><span>+</span><i>TEST / ITERATE / REPEAT</i></div>;
}

function ServiceIcon({ icon: Icon, color }: { icon: typeof Monitor; color: string }) {
  return <div className={`service-icon ${color}`}><Icon size={23} strokeWidth={1.8} /></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "auto">(() => {
    const stored = window.localStorage.getItem("artemis-theme");
    return stored === "dark" || stored === "auto" ? stored : "light";
  });
  const [systemDark, setSystemDark] = useState(false);
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { reveal.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => setSystemDark(media.matches);
    updateSystemTheme();
    media.addEventListener?.("change", updateSystemTheme);
    return () => media.removeEventListener?.("change", updateSystemTheme);
  }, []);
  useEffect(() => {
    const resolvedTheme = theme === "auto" ? (systemDark ? "dark" : "light") : theme;
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
    window.localStorage.setItem("artemis-theme", theme);
  }, [theme, systemDark]);
  const closeMenu = () => setMenuOpen(false);

  return <div className="studio-shell">
    <header className={`floating-nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="studio-logo" onClick={closeMenu}><span>✦</span> ARTEMIS DOMAIN</a>
      <nav className={menuOpen ? "open" : ""}>
        {["HOME", "ABOUT", "SERVICES", "WORK", "CONTACT"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
      </nav>
      <div className="theme-switch" role="group" aria-label="Choose color theme">
        <button type="button" className={theme === "light" ? "active" : ""} aria-pressed={theme === "light"} onClick={() => setTheme("light")}><Sun size={13} /> LIGHT</button>
        <button type="button" className={theme === "dark" ? "active" : ""} aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}><Moon size={13} /> DARK</button>
        <button type="button" className={theme === "auto" ? "active" : ""} aria-pressed={theme === "auto"} onClick={() => setTheme("auto")}><Monitor size={13} /> AUTO</button>
      </div>
      <a href="#contact" className="talk-button">LET'S TALK <ArrowUpRight size={14} /></a>
      <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
    </header>

    <main>
      <section className="brand-hero" id="home">
        <div className="hero-blobs"><div className="blob blob-purple" /><div className="blob blob-blue" /><div className="blob blob-cyan" /><div className="hero-grid" /></div>
        <div className="hero-intro reveal"><span className="pill"><Sparkles size={13} /> CREATIVE DIGITAL STUDIO</span><span className="hero-index">01 / 08</span></div>
        <div className="hero-layout"><div className="hero-copy-block reveal"><h1>WE CREATE<br /><span>DIGITAL</span><br />WORLDS.</h1><p>ARTEMIS DOMAIN is a creative digital space built around technology, design, gaming, and visual experiences.</p><div className="hero-buttons"><a className="solid-button" href="#about">EXPLORE ARTEMIS <ArrowDownRight size={17} /></a><a className="outline-button" href="#work">VIEW OUR WORK <ArrowUpRight size={17} /></a></div></div><div className="hero-art reveal"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-core"><span>AD</span></div><div className="float-card float-top"><Code2 size={15} /><span>DESIGN<br /><b>+ CODE</b></span></div><div className="float-card float-bottom"><span className="mini-dot" /> SYSTEM ONLINE <b>100%</b></div><div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div></div></div>
        <div className="hero-bottom"><span>DESIGN. CODE. CREATE.</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="about-studio section-light" id="about"><div className="section-top reveal"><span>02 / ABOUT ARTEMIS</span><span>CREATIVE TECHNOLOGY / 2026</span></div><div className="about-layout"><h2 className="editorial-title reveal">MORE THAN<br /><em>A WEBSITE.</em></h2><div className="about-copy reveal"><p>ARTEMIS DOMAIN is a creative space where technology meets imagination. From digital experiences and websites to gaming concepts and visual content, everything is built around one idea — turning concepts into something people can experience.</p><a href="#services" className="text-arrow">DISCOVER THE STUDIO <ArrowUpRight size={16} /></a></div></div><div className="stats-row reveal"><div><strong>01</strong><span>DIGITAL</span></div><div><strong>02</strong><span>CREATIVE</span></div><div><strong>03</strong><span>INNOVATIVE</span></div></div></section>

      <section className="services section-lilac" id="services"><div className="section-top reveal"><span>03 / WHAT WE CREATE</span><span>THE CAPABILITIES</span></div><div className="services-heading"><h2 className="editorial-title reveal">WHAT<br /><em>WE CREATE.</em></h2><p className="reveal">Ideas are only the beginning. We shape them into experiences, products, and worlds that stay with people.</p></div><div className="service-grid">{services.map(({ number, title, text, icon, color }) => <article className={`service-block reveal ${color}`} key={number}><div className="service-head"><span>{number}</span><ServiceIcon icon={icon} color={color} /></div><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={22} /></article>)}</div></section>

      <section className="featured section-light" id="featured"><div className="section-top reveal"><span>04 / FEATURED PROJECT</span><span>PROJECT 001</span></div><div className="featured-shell reveal"><div className="featured-visual"><div className="featured-scanlines" /><div className="featured-ball" /><div className="featured-score"><small>CHAMPIONS LEAGUE / FINAL</small><strong>90:00 <i>2—1</i></strong></div><div className="featured-label">ARTEMIS / RISE OF CHAMPIONS</div><div className="featured-cross">✦</div></div><div className="featured-info"><span className="project-type">FOOTBALL • GAMING • INTERACTIVE EXPERIENCE</span><h2>ARTEMIS:<br /><em>RISE OF</em><br />CHAMPIONS</h2><p>A football gaming experience built around fast controls, competitive gameplay, and an evolving digital world.</p><a href="#work" className="solid-button">EXPLORE PROJECT <ArrowUpRight size={17} /></a></div></div></section>

      <section className="work section-white" id="work"><div className="section-top reveal"><span>05 / CREATIVE WORK GRID</span><span>SELECTED WORK</span></div><div className="work-heading"><h2 className="editorial-title reveal">SELECTED<br /><em>WORK.</em></h2><p className="reveal">A rotating collection of experiments, interfaces, edits, and digital worlds.</p></div><div className="work-grid">{work.map((item, index) => <article className={`work-tile ${item.className} reveal`} key={item.title}><Visual type={item.visual} /><div className="work-caption"><span>0{index + 1} / {item.type}</span><h3>{item.title}</h3><ArrowUpRight size={17} /></div></article>)}</div></section>

      <section className="color-marquee" aria-label="Creative studio capabilities"><div className="marquee-line">{[...Array(2)].flatMap((_, i) => ["ARTEMIS DOMAIN", "CREATIVE TECHNOLOGY", "DIGITAL EXPERIENCES", "GAMING", "DESIGN", "VISUAL CULTURE"].map((item, j) => <span className={`marquee-${j % 3}`} key={`${i}-${j}`}>{item} <b>✦</b></span>))}</div></section>

      <section className="why section-light"><div className="section-top reveal"><span>06 / WHY ARTEMIS?</span><span>THE PRINCIPLES</span></div><h2 className="why-heading reveal">WHY<br /><em>ARTEMIS?</em></h2><div className="principles">{[["01", "IDEAS FIRST."], ["02", "DESIGN WITH PURPOSE."], ["03", "BUILD WITHOUT LIMITS."]].map(([number, text]) => <div className="principle reveal" key={number}><span>{number}</span><strong>{text}</strong><ArrowUpRight size={19} /></div>)}</div></section>

      <section className="social-hub section-lilac" id="social"><div className="section-top reveal"><span>07 / SOCIAL HUB</span><span>FOLLOW THE JOURNEY</span></div><div className="social-heading"><h2 className="editorial-title reveal">FOLLOW<br /><em>THE JOURNEY.</em></h2><p className="reveal">Behind the screens, inside the process, and out in the world.</p></div><div className="social-grid">{socials.map(({ label, handle, href, icon: Icon, color }) => <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label}: ${handle}`} className={`social-tile ${color} reveal`} key={label}><Icon size={30} strokeWidth={1.6} /><span><b>{label}</b><small>{handle}</small></span><ArrowUpRight size={19} /></a>)}</div><div className="whatsapp-grid">{whatsappContacts.map(({ label, handle, href, icon: Icon, color, qr }) => <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label}: ${handle}`} className={`whatsapp-tile ${color} reveal`} key={label}>{qr && <img src="/manus-storage/shared_qr_code_f293e915.png" alt="WhatsApp QR code for Artemis Domain" />}<Icon size={25} strokeWidth={1.8} /><span><b>{label}</b><small>{handle}</small></span><ArrowUpRight size={18} /></a>)}</div></section>

      <section className="contact-cta" id="contact"><div className="cta-glow glow-one" /><div className="cta-glow glow-two" /><div className="cta-inner reveal"><span className="pill light"><Sparkles size={13} /> OPEN FOR COLLABORATION</span><h2>LET'S BUILD<br /><em>SOMETHING</em><br />UNFORGETTABLE.</h2><p>Have an idea, project, game, website, or creative concept? Let's turn it into something real.</p><a className="white-button" href="mailto:hello@artemisdomain.dev">START A PROJECT <ArrowUpRight size={17} /></a></div></section>
    </main>

    <footer className="studio-footer"><div className="footer-top"><a href="#home" className="studio-logo"><span>✦</span> ARTEMIS DOMAIN</a><p>Creative technology<br />without limits.</p><div className="footer-links"><a href="#home">HOME</a><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#work">WORK</a><a href="#contact">CONTACT</a></div><div className="footer-socials">{socials.map(({ label, href, icon: Icon }) => <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon size={17} /></a>)}{whatsappContacts.map(({ label, href }) => <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><MessageCircle size={17} /></a>)}</div></div><div className="footer-bottom"><span>© 2026 ARTEMIS DOMAIN</span><span>CREATIVE TECHNOLOGY / LAGOS, NG</span></div></footer>
  </div>;
}
