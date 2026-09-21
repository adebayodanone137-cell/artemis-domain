import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Menu,
  MoveUpRight,
  Play,
  Sparkles,
  X,
  Youtube,
} from "lucide-react";

const socials = [
  { label: "YouTube", handle: "Artemis_vfx-b8d", href: "https://www.youtube.com/@Artemis_vfx-b8d", icon: Youtube },
  { label: "TikTok", handle: "@artemis1_vfx", href: "https://www.tiktok.com/@artemis1_vfx", icon: Play },
  { label: "GitHub", handle: "adebayodanone137-cell", href: "https://github.com/adebayodanone137-cell", icon: Github },
];

const projects = [
  { number: "01", title: "ARTEMIS: RISE OF CHAMPIONS", category: "Interactive Sports Experience", description: "A fast-paced football universe built around responsive controls, competitive energy, and a mobile-first gameplay interface.", tags: ["JavaScript", "Game UI"], visual: "champions" },
  { number: "02", title: "PULSE GRID", category: "Developer Portfolio", description: "A modular portfolio system designed to present technical work, experiments, and digital product thinking through a sharp visual language.", tags: ["React", "Motion"], visual: "pulse" },
  { number: "03", title: "ORBIT", category: "Web Application", description: "A focused productivity platform that turns scattered tasks into a calm, structured workflow across devices.", tags: ["UX Systems", "Responsive"], visual: "orbit" },
];

const skills = ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "SQL", "Responsive Design", "UI / UX"];

function ProjectVisual({ type }: { type: string }) {
  return <div className={`project-visual ${type}`} aria-hidden="true">
    <div className="visual-grid" />
    {type === "champions" && <><div className="pitch"><span /><span /><span /></div><div className="score">90:00 <b>2—1</b></div><div className="visual-label">FINAL WHISTLE</div></>}
    {type === "pulse" && <><div className="pulse-lines"><i /><i /><i /><i /><i /></div><div className="pulse-orb" /><div className="visual-label">BUILD / SHIP / REPEAT</div></>}
    {type === "orbit" && <><div className="orbit-ring r1" /><div className="orbit-ring r2" /><div className="orbit-core" /><div className="visual-label">FOCUS MODE / 01</div></>}
    <span className="visual-corner">ARTEMIS / 0{type === "champions" ? 1 : type === "pulse" ? 2 : 3}</span>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">✦</span> ARTEMIS DOMAIN<span className="brand-slash">/</span><span className="brand-cursor">_</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["About", "Skills", "Projects", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}<span>↗</span></a>)}
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-backdrop" />
        <div className="hero-topline reveal"><span>( 001 / INTRO )</span><span>LAGOS, NG — 2026</span></div>
        <div className="hero-content">
          <p className="eyebrow reveal delay-1"><span className="status-dot" /> Available for select projects</p>
          <h1 className="hero-title reveal delay-2">I BUILD <em>DIGITAL</em><br /><span>EXPERIENCES</span><br />THAT MOVE <em>PEOPLE.</em></h1>
          <div className="hero-bottom reveal delay-3">
            <p className="hero-copy">I create thoughtful digital products where clear interfaces, purposeful motion, and dependable technology work together.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a><a className="button button-ghost" href="#contact">Start a conversation <MoveUpRight size={16} /></a></div>
          </div>
        </div>
        <div className="hero-meta reveal delay-4"><div><span>Based in</span><strong>Lagos, Nigeria</strong></div><div><span>Discipline</span><strong>Frontend Developer</strong></div><div className="scroll-cue"><ChevronDown size={16} /> Scroll to explore</div></div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-kicker"><span>( 002 / APPROACH )</span><span>01—03</span></div>
        <div className="about-grid"><p className="display-statement">I TURN <span>COMPLEX IDEAS</span> INTO CLEAR DIGITAL EXPERIENCES.</p><div className="about-aside"><p>I’m a developer with a designer’s eye for the details that make a product feel inevitable. I turn early ideas into useful, accessible, modern websites and digital products.</p><a className="text-link" href="#contact">Let's build something <ArrowUpRight size={17} /></a></div></div>
      </section>

      <section className="skills section-wrap" id="skills">
        <div className="section-kicker"><span>( 003 / TOOLKIT )</span><span>WHAT I USE</span></div>
        <div className="skills-layout"><h2>THE TOOLS<br /><em>BEHIND THE WORK.</em></h2><div className="skills-list">{skills.map((skill, index) => <div className="skill-row" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><Code2 size={17} /></div>)}</div></div>
      </section>

      <section className="projects section-wrap" id="projects">
        <div className="section-kicker"><span>( 004 / SELECTED WORK )</span><span>CASE FILES</span></div>
        <div className="projects-heading"><h2>SELECTED<br /><em>PROJECTS.</em></h2><p>A small selection of things I’ve made, shaped, and shipped.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><ProjectVisual type={project.visual} /><div className="project-info"><div><span className="project-number">{project.number}</span><p className="project-category">{project.category}</p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="case-link">View case study <ArrowUpRight size={16} /></a></div></div></article>)}</div>
      </section>

      <div className="marquee" aria-label="Services and capabilities"><div className="marquee-track">{[...Array(2)].flatMap((_, i) => ["FRONTEND SYSTEMS", "INTERACTION DESIGN", "JAVASCRIPT", "RESPONSIVE PRODUCTS", "DIGITAL CRAFT", "CREATIVE TECHNOLOGY"].map((item, j) => <span key={`${i}-${j}`}>{item} <b>✦</b></span>))}</div></div>

      <section className="contact section-wrap" id="contact"><div className="contact-orbit" /><div className="section-kicker"><span>( 005 / CONTACT )</span><span>OPEN CHANNEL</span></div><div className="contact-content"><p className="eyebrow"><span className="status-dot" /> Let’s make an impact</p><h2>HAVE A<br /><em>CHALLENGE?</em><br />LET’S MAKE IT REAL.</h2><p>Have an idea for a website, digital product, or creative project? Let’s turn it into something real.</p><a className="button button-primary" href="mailto:hello@artemisdomain.dev">Start a project <ArrowUpRight size={17} /></a></div></section>

      <section className="socials section-wrap"><div className="section-kicker"><span>( 006 / FIND ME )</span><span>THE OUTER RING</span></div><div className="social-grid">{socials.map(({ label, handle, href, icon: Icon }) => <a className="social-card" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label}: ${handle}`} key={label}><Icon size={25} strokeWidth={1.5} /><span><b>{label}</b><small>{handle}</small></span><ArrowUpRight size={17} /></a>)}</div></section>
    </main>

    <footer className="site-footer"><div className="footer-main"><a className="brand" href="#home"><span className="brand-mark">✦</span> ARTEMIS DOMAIN<span className="brand-slash">/</span></a><p>Designing useful digital experiences<br />with clarity and intent.</p><div className="footer-socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} /></a>)}</div></div><div className="footer-bottom"><span>© 2026 Artemis Domain. All rights reserved.</span><span>Built with clarity / Lagos, NG</span></div></footer>
  </div>;
}
