import { useState, useEffect, useRef, useCallback } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  Ghost,
  Gamepad2,
  Trophy,
  ArrowRight,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Monitor,
} from "lucide-react";

import styles from "./index.module.css";

// --- Marquee Component ---
function Marquee({ children }) {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {children}
          {children}
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

// --- ComicCard Component ---
function ComicCard({ title, description, icon: Icon, colorClass, tiltClass }) {
  return (
    <div className={`${styles.comicCard} ${colorClass} ${tiltClass}`}>
      {/*       <div className={styles.comicCardIconBadge}>
        <Icon size={32} />
      </div> */}
      <h3 className={styles.comicCardTitle}>{title}</h3>
      <p className={styles.comicCardDescription}>{description}</p>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRefs = useRef([]);

  const addToRefs = useCallback((el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  }, []);

  // Add/remove homepage-layout class on <html>
  useEffect(() => {
    document.documentElement.classList.add("homepage-layout");
    return () => document.documentElement.classList.remove("homepage-layout");
  }, []);

  // Scroll listener for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
          }
        });
      },
      { threshold: 0.1 },
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    /*     { href: "#gameplay", label: "Gameplay" },
    { href: "#personnages", label: "Personnages" },
    { href: "#media", label: "Médias" }, */
  ];

  const screenshots = [1, 2, 3];

  const socialLinks = [
    { icon: Twitter, name: "X" },
    { icon: Instagram, name: "Instagram" },
    { icon: Youtube, name: "YouTube" },
    { icon: Monitor, name: "Discord" },
  ];

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Crazy Teacher. Juste essayes le jeu tu vas voir c'est cool !"
    >
      <div className={styles.homepageRoot}>
        {/* ===== NAVBAR ===== */}
        <nav
          className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
        >
          <div className={styles.navbarContainer}>
            <div
              className={`${styles.navbarInner} ${scrolled ? styles.navbarInnerScrolled : ""}`}
            >
              <div className={styles.navbarBrand}>
                {/* website icon.png */}
                <img
                  src="/img/logo.png"
                  alt="Logo Crazy Teacher"
                  className={styles.navbarLogo}
                  style={{ width: 52, height: 52, borderRadius: 999 }}
                />
                <span className={styles.navbarTitle}>Crazy Teacher</span>
              </div>

              <div className={styles.navbarLinks}>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
                <Link to="/blog" className={styles.navbarBlogBtn}>
                  Le Blog
                </Link>
                <a
                  href="https://github.com/Crazy-Teacher-Game"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.navbarGithub}
                >
                  <Github size={20} />
                </a>
              </div>

              <button
                className={styles.navbarHamburger}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                ☰
              </button>
            </div>

            {mobileMenuOpen && (
              <div className={styles.navbarMobileMenu}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                  Le Blog
                </Link>
                <a
                  href="https://github.com/Crazy-Teacher-Game"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GitHub
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* ===== HERO ===== */}
        <header className={styles.heroSection}>
          <div className={styles.heroOverlay} />

          {/*           <div className={styles.heroBadgeNew}>
            <span className={styles.heroBadgeNewText}>Nouveau Jeu !</span>
          </div> */}

          <div className={styles.heroContent}>
            <div className={styles.heroButtons}>
              <Link to="/blog" className={styles.heroBtnPrimary}>
                Le Blog
              </Link>
              {/* <button className={styles.heroBtnPrimary}>Le Blog</button> */}
              {/*               <button className={styles.heroBtnSecondary}>
                Voir le Trailer <Gamepad2 size={28} />
              </button> */}
            </div>
          </div>

          <div className={styles.heroOkBadge}>
            <img src="/img/ok.png" alt="OK!" />
          </div>
        </header>

        {/* ===== MARQUEE ===== */}
        <Marquee>
          <span>🏆 Meilleure SAÉ de l'année - Romain DELON</span>
          <span>•</span>
          <span>🏅 Ça mérite juste 20/20, point. - Ambroise GRAM</span>
          <span>•</span>
          <span>⭐ My favourite game of the year! - Marina MATOSIN</span>
          <span>•</span>
        </Marquee>

        {/* ===== GAMEPLAY ===== */}
        <section id="gameplay" className={styles.gameplaySection}>
          <div className={styles.sectionContainer}>
            <div
              ref={addToRefs}
              className={`${styles.revealHidden} ${styles.gameplayHeader}`}
            >
              <h2 className={styles.gameplayTitle}>Enchaîne les jeux</h2>
              <p className={styles.gameplaySubtitle}>
                La difficulté est croissante. Ton but ? <br />
                Survivre le plus longtemps possible.
              </p>
            </div>

            <div className={styles.cardGrid}>
              <div
                ref={addToRefs}
                className={styles.revealHidden}
                style={{ transitionDelay: "100ms" }}
              >
                <ComicCard
                  title="Rapidité"
                  description="Certains mini-jeux te demanderons une rapidité et une agilité élevée pour ne pas perdre."
                  icon={Ghost}
                  colorClass={styles.comicCardRed}
                  tiltClass={styles.comicCardTiltLeft}
                />
              </div>
              <div
                ref={addToRefs}
                className={styles.revealHidden}
                style={{ transitionDelay: "200ms" }}
              >
                <ComicCard
                  title="Précision"
                  description="D'autres jeux te demanderont de la précision."
                  icon={Trophy}
                  colorClass={styles.comicCardBlue}
                  tiltClass={styles.comicCardTiltRight}
                />
              </div>
              <div
                ref={addToRefs}
                className={styles.revealHidden}
                style={{ transitionDelay: "300ms" }}
              >
                <ComicCard
                  title="Réflexion"
                  description="Et d'autres utiliseront ton cerveau avec des problèmes à résoudre."
                  icon={Gamepad2}
                  colorClass={styles.comicCardGreen}
                  tiltClass={styles.comicCardTiltSlightLeft}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== PERSONNAGES ===== */}
        <section id="personnages" className={styles.charactersSection}>
          <div className={styles.speedLineOverlay} />

          <div className={styles.charactersGrid}>
            <div
              ref={addToRefs}
              className={`${styles.revealHidden} ${styles.characterBio}`}
            >
              <h2 className={styles.characterBioTitle}>Il...</h2>
              <div className={styles.characterBioCard}>
                <h3 className={styles.characterBioCardTitle}>Ç̶̲̲̬̠̇̌̀̽̀͌̾r̴̩̬̥͎̤̈́̈̓͆͌̎a̷̝̋̆̚͘z̵̨͓͓͎̅̾̔̃̈́̚̚y̸͓̙̼̭̎͗́̒͛̑ ̵̢̥͚̟̋Ţ̶̛̤̬̉ͅĕ̴̢͉̠̣̝̮̞͑̏͌̈́͘̕à̶̢̖̈́̈́̕͘͝c̷̦̺͖̹̪͊͋̑̑́͛͝h̶̘͋̄́é̶̬͚͍̣̥͈r̷̜͋͗͐</h3>
                <p className={styles.characterBioCardText}>
                  P̵̟͔͑̓͠e̴͕̟̝͗̔́r̵̩̮̹̋̚͝s̴̢̳̹̒͊o̶̹͑n̸̢̬̆̿͝n̷͔̘̤̆́͝ë̵̼̘ͅ ̴͍̙̺̈n̴̢͂̆̚ȇ̵͎ ̴͎̞̟͋͋̄c̸̘͑͜o̵̩͉̓͘n̷̯̬̬͛̓͝n̶̲̳͓̽à̶͙̲͐͜î̵̠̝͚̑t̶̢̞̣̔͑͝ ̸̗̝͖̐͗̿s̶̠͒o̵̠̓̊͝ň̸̻̈́ ̷̘͈͌̐h̴̙̙̿̓į̴͚̠̎s̵̖͆͑̕t̶͉͔̞̽ȏ̷̓͜͝i̴̤̬͙̎̔̈́r̷̪͚̿̍e̵̪͙̍.̶͇͛̽.̷̨̭̱͆͝ ̵̰̖̐͗͝ ̴̗͗͜B̵̰̍́ó̶͚̭̅͐n̵̛̖̠̟̉͛,̴̩̀͠͝ ̷̨̢̍̆j̵͓͙̫́͐è̷̬͖̂̇ ̶̫͈̓v̶̡̜̔̄ͅa̵͔̲̺͐̀͝i̵̥͙̩̓s̴̡̛̮̬̊ ̶̱͍͖͗͑̈́v̶̡̺̭͑ơ̵͇̩̍͐ù̴̠͙ș̸̠͌͛ ̶̝͈͔̕d̷̡̈̽́ỉ̶͕̫̿ŕ̶̨̹̪̾e̵̝̜͝
                  ̵͍̪͔̓̆̓q̷̗͆̓ú̷̧̺̅é̷̟̝̾ľ̸͓̻̱q̵͖́͋̀͜u̵͙̎ē̸̫̭̂̚ ̴͔͋̀͗c̵̨̛̻̹̏h̷̹̠͉̍̎ò̸̘́̔s̶̺̦͑͒̅ẹ̸̬̦̐́ ̵̺̦̄͝q̴͕̉̋̏ų̶͐̍ë̸̡̪͔ ̸̛̟̤̅j̷̡͈̇͝e̵̙̬͕̅̃ ̷̨̪̔̅̂n̵͎̓͗e̷̫͛ ̵̫̾̀d̴͈̼̈́͂ē̶͕͚͠v̵̼̮̐̾͐r̶̯̆a̵͓̔̓̀ỉ̵̺͙̤͌s̸̱̈́̂ ̵̨̜̙͝p̶̳̦̑͐̽a̵̳̔̋̈́s̴̘̾̃̊.̸̯̽͝ ̴̡͈̌̿̑M̷͓͘ǎ̸̠̼̝͒͘i̸͉̟͒s̶̨̳̝̋ ̵̦͓̰͋̑̍ì̷̡͐̍l̸̩̥͖̾͛ ̶̰͌f̸̞̯̐̒ą̵͇̐͝u̴͚̜͆͌̕ͅt̶̮̠͗ ̶̛͔͉q̸̳̿û̸̮ḙ̴̬̊ ̴̠̙̋v̸̳̿̈́͊o̸͇͂͝u̴͙͋͐s̷̞̏̍
                  ̶͙͊̈̿s̶̖͐͛̄ả̸̬c̶̻͛͝ẖ̶̩̹̄̈́̚ǐ̸̫̚e̸̖̎z̶͎̭̦̈,̴̹̯̆ͅ ̶̦͋̏͛i̴̪͙̐͋́l̸͇̥͊ ̴̞̹͝p̴̲̀̾ằ̶̠̮͜ṟ̸̨̜̽̌a̸̝͎̰̋̄î̸̪̺̦̔t̵͚͠ ̴̱̇̀̚q̵͈̐̒ṳ̴͒'̴͍̱̖͠i̷̛͖l̴̜̏̊̌ ̸͐͜v̸̳̹̐í̵̺̈́ë̸̞́̀͘ǹ̷̫̻̽͜t̴̫͍͕̔͘ ̵̬̅͊ḑ̵͎̤̓̍̓ë̷̜̼́̀ ̷͍̆́?̶̧̪̪̓̈?̵͓̹̀̂̚C̶͎̆̃̚E̶͙̝͑ͅN̸̰͒́͘S̵̫̗̓̾O̴̹͆́͂R̶̺̯̄͛̒E̸͇̽̌̄͜D̸͚͌?̴̞̳̅̎͆ͅ?̶͓̞̅̑͝ ̵̢̲̈́͗̆ę̵̼̺̚͝͝ṭ̴̰̃ ̶͚̖͚̆͋q̶̝͚̓ũ̷̟̒͜e̵̤̠̅̆̌ͅ ̶̼̿͒͛?̶͍̾?̷̡̬̯̽͐B̴̛͈̬̣̿̈́Ỏ̸̡̗̪Ò̸̞́̈́M̷̳͛͊?̴̙̰̞̿͗͘?̵̼͘
                  ̶̡͙̀̔Á̷̧͚̝͗̽I̵̧̐̄U̵̬͝D̷̝̅͝ͅS̷̘̥̀̾F̶͚̈́͒́C̷̢͚̳̊̇J̴̳͌̒͘Ì̶̼̈́͆,̵͉̾̃͜ ̴͍͠E̵͔͙͔͘T̵̢͔̮̽̓,̷͔͒̍̽ ̵̺͎̜̿Q̶̯̓͊̆Ú̴̳͑̒Ë̸̱́͒̂S̶̠̑Ṯ̸́̂̇Ċ̴̮̳͆E̵̘͙̻͗̚Q̶̭͕̐͜U̵͔̓͝͝E̷̺͉͗͜,̵̟̭̀̇͒ ̷͎̝͌̿J̷̮̪̾͒̀E̴̜̤̟͒̄̊.̷̲͊͂͜.̶̲̜̄̽͛.̵̛̱̬.̵̡̋̋̈́ ̵̨̥̱̿Á̷̰͕A̴̲̯̋͜H̸͙͈̑̇̊.̷̣̌.̷͎̾̊.̸̠̍
                </p>
                <button className={styles.characterBioCardBtn}>???</button>
              </div>
            </div>

            <div
              ref={addToRefs}
              className={`${styles.revealHidden} ${styles.characterArtwork}`}
            >
              <div className={styles.characterArtworkFrame}>
                <div className={styles.characterArtworkHoverOverlay} />
                {/*                 <span className={styles.characterArtworkPlaceholder}>
                  Artwork Perso
                </span> */}
                <img
                  src="/img/prof.png"
                  alt="Personnage"
                  className={styles.characterArtworkImg}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== GALERIE ===== */}
        <section id="media" className={styles.gallerySection}>
          <div className={styles.sectionContainer}>
            <div ref={addToRefs} className={styles.revealHidden}>
              <h2 className={styles.galleryTitle}>LE JEU EN IMAGES</h2>
            </div>

            <div className={styles.galleryGrid}>
              {screenshots.map((item, index) => (
                <div
                  key={item}
                  ref={addToRefs}
                  className={`${styles.revealHidden} ${styles.polaroidFrame} ${index % 2 === 0 ? styles.polaroidFrameEven : styles.polaroidFrameOdd}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={styles.polaroidImageWrapper}>
                    {/*                     <div className={styles.polaroidOverlay}>
                      <span className={styles.polaroidOverlayText}>
                        Agrandir
                      </span>
                    </div> */}
                    <img
                      src={`/img/screen${item}.png`}
                      alt={`Capture du jeu ${item}`}
                      className={styles.polaroidImg}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PLATEFORMES ===== */}
        <section className={styles.platformsSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.platformsTitle}>Disponible Sur</h2>
            <div className={styles.platformsGrid}>
              <div className={styles.platformItem}>
                <img
                  src="/img/steam.png"
                  alt="Steam"
                  className={styles.platformLogo}
                />
                <span className={styles.platformLabel}>Steam</span>
              </div>
              <div className={styles.platformItem}>
                <img
                  src="/img/epic-game.svg"
                  alt="Epic Games"
                  className={styles.platformLogo}
                />
                <span className={styles.platformLabel}>Epic Games</span>
              </div>
              <div className={styles.platformItem}>
                <img
                  src="/img/xbox.png"
                  alt="Xbox"
                  className={styles.platformLogo}
                />
                <span className={styles.platformLabel}>Xbox</span>
              </div>
              <div className={styles.platformItem}>
                <img
                  src="/img/playstation.png"
                  alt="PlayStation"
                  className={styles.platformLogo}
                />
                <span className={styles.platformLabel}>PlayStation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className={styles.footerSection}>
          <div className={styles.footerRayOverlay} />

          <div
            ref={addToRefs}
            className={`${styles.revealHidden} ${styles.footerContent}`}
          >
            <h2 className={styles.footerTitle}>20/20 minimum</h2>
            <p className={styles.footerDescription}>
              Marius NOGUERON, Gabriel MAILLARD
              <br />
              Audric FULLHARDT, Valentin BEAUGET
            </p>

            <div className={styles.footerActions}>
              <Link to="/blog" className={styles.footerBlogBtn}>
                Accéder au blog
              </Link>
              {/*               <div className={styles.footerSocialIcons}>
                {socialLinks.map((social, i) => (
                  <button
                    key={i}
                    className={styles.footerSocialBtn}
                    aria-label={social.name}
                  >
                    <social.icon size={28} />
                  </button>
                ))}
              </div> */}
            </div>

            <div className={styles.footerLegal}>
              <p>© 2026 Crazy Teacher. SAÉ 501</p>
              {/*               <div className={styles.footerLegalLinks}>
                <a href="#">Mentions Légales</a>
                <a href="#">Presse Kit</a>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
