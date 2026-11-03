import React, { useEffect, useState } from "react";

const projects = [
  {
    name: "ShopSphere",
    eyebrow: "MULTI-SELLER MARKETPLACE",
    description:
      "A marketplace storefront with product discovery, category filters, search, cart interactions, and a seller entry point.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://shop-sphere-mocha-rho.vercel.app/",
    code: "https://github.com/shivathota1323/shop_sphere",
    kind: "shop",
    number: "01",
    featured: true,
  },
  {
    name: "Rare Medicine Locator",
    eyebrow: "HEALTHCARE ACCESS",
    description:
      "A medicine discovery and request platform with account access, a medicine dashboard, request workflows, and in-app chat.",
    stack: ["React", "Express", "MongoDB", "JWT"],
    live: "https://rare-medicine-locator.vercel.app/",
    code: "https://github.com/shivathota1323/Rare-Medicine-locator",
    kind: "medicine",
    number: "02",
    featured: true,
  },
  {
    name: "Blog App",
    eyebrow: "ROLE-BASED PUBLISHING",
    description:
      "A publishing platform for readers, authors, and admins, with article creation, editing, comments, authentication, and image uploads.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary"],
    live: "https://blog-app-shiva.vercel.app/",
    code: "https://github.com/shivathota1323/BLOG-APP",
    kind: "blog",
    number: "03",
    featured: true,
  },
  {
    name: "Employee Manager",
    eyebrow: "FULL-STACK CRUD APP",
    description:
      "An employee record manager for creating, viewing, editing, and removing employee details through a React interface and API.",
    stack: ["React", "Express", "MongoDB", "Axios"],
    live: "https://mern-mini-app-two.vercel.app/",
    code: "https://github.com/shivathota1323/Mern-mini-app",
    kind: "employees",
    number: "04",
    featured: true,
  },
  {
    name: "WorkLoop",
    eyebrow: "GROUP PROJECT · REAL-TIME COLLABORATION",
    description:
      "A team collaboration app with workspaces, channels, direct messages, threads, notifications, file sharing, and scheduled reminders.",
    stack: ["MERN", "Socket.IO", "Redis", "Cloudinary"],
    live: "https://workloop-realtime-chat.vercel.app/",
    code: "https://github.com/WorkLoop-Developers/workloop-realtime-chat",
    kind: "workloop",
    number: "05",
    featured: true,
  },
  {
    name: "Article Publishing Platform",
    eyebrow: "CAPSTONE PROJECT",
    description:
      "A multi-role article platform where readers browse and comment, authors manage content, and admins oversee users.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    live: null,
    code: "https://github.com/shivathota1323/ATP_24eg112c60",
    kind: "articles",
    number: "06",
    featured: false,
  },
];

const skills = [
  { label: "FRONT END", items: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "BACK END", items: ["Node.js", "Express.js", "REST APIs"] },
  { label: "DATA", items: ["MongoDB", "MySQL"] },
  {
    label: "CODE & CREATIVE",
    items: [
      "Java",
      "C",
      "Premiere Pro",
      "After Effects",
      "3D animation",
      "Motion graphics",
    ],
  },
];

const scenes = [
  { id: "interface", label: "UI transitions", index: "01" },
  { id: "dimension", label: "3D forms", index: "02" },
  { id: "type", label: "Kinetic typography", index: "03" },
];

function Arrow({ diagonal = false }) {
  return (
    <span aria-hidden="true" className="arrow-glyph">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function ProjectArt({ kind }) {
  if (kind === "shop")
    return (
      <div className="art-shop-window" aria-hidden="true">
        <div className="art-window-bar">
          <i />
          <i />
          <i />
          <span>shop / sphere</span>
          <b>⌕</b>
        </div>
        <div className="art-shop-heading">
          <small>CURATED FOR YOU</small>
          <b>
            Find your
            <br />
            next favourite.
          </b>
          <span className="art-shop-orb" />
        </div>
        <div className="art-product-row">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="art-shop-foot">
          <span>DISCOVER GOODS</span>
          <span>01 — 04</span>
        </div>
      </div>
    );
  if (kind === "medicine")
    return (
      <div className="art-medicine-window" aria-hidden="true">
        <div className="art-med-top">
          <span>✳</span> MEDI<span>FIND</span>
          <b>
            Find a medicine <Arrow />
          </b>
        </div>
        <div className="art-med-copy">
          <small>CARE, CLOSER</small>
          <strong>
            Hard-to-find
            <br />
            medicine, found.
          </strong>
        </div>
        <div className="art-med-search">
          ⌕ &nbsp; Search by medicine or condition <i>→</i>
        </div>
        <div className="art-med-status">
          <i /> SUPPORT NETWORK ACTIVE <span>↗</span>
        </div>
      </div>
    );
  if (kind === "blog" || kind === "articles")
    return (
      <div className={`art-editor-window ${kind}`} aria-hidden="true">
        <div className="art-editor-top">
          <span>STORIES / 2026</span>
          <span>⌕ &nbsp; MENU</span>
        </div>
        <div className="art-editor-kicker">
          THE DAILY EDIT <i>✳</i>
        </div>
        <div className="art-editor-title">
          Ideas worth
          <br />
          <em>sharing.</em>
        </div>
        <div className="art-editor-lines">
          <i />
          <i />
          <i />
        </div>
        <div className="art-editor-bottom">
          <span>READ THE LATEST</span>
          <b>↗</b>
        </div>
      </div>
    );
  if (kind === "employees")
    return (
      <div className="art-employee-window" aria-hidden="true">
        <div className="art-employee-head">
          <span>TEAM / DIRECTORY</span>
          <b>＋ ADD MEMBER</b>
        </div>
        <div className="art-employee-title">
          People make
          <br />
          the work.
        </div>
        <div className="art-person-row">
          <i>AK</i>
          <span>
            <b>Alex Kim</b>
            <small>Product design</small>
          </span>
          <em>ACTIVE</em>
        </div>
        <div className="art-person-row">
          <i>JM</i>
          <span>
            <b>Jordan Miles</b>
            <small>Engineering</small>
          </span>
          <em>ACTIVE</em>
        </div>
        <div className="art-employee-count">
          <strong>24</strong> TEAM MEMBERS <span>↗</span>
        </div>
      </div>
    );
  if (kind === "workloop")
    return (
      <div className="art-chat-window" aria-hidden="true">
        <div className="art-chat-side">
          <b>W.</b>
          <i>⌂</i>
          <i>▤</i>
          <i>◌</i>
          <i>＋</i>
        </div>
        <div className="art-chat-main">
          <div className="art-chat-heading">
            # launch-room <span>•••</span>
          </div>
          <div className="art-chat-message">
            <i>SK</i>
            <span>
              <b>
                Shiva <small>10:42 AM</small>
              </b>
              <em>Motion pass is ready for review ✨</em>
            </span>
          </div>
          <div className="art-chat-message muted">
            <i>AK</i>
            <span>
              <b>
                Arjun <small>10:43 AM</small>
              </b>
              <em>Just opened it — the timing feels great.</em>
            </span>
          </div>
          <div className="art-chat-input">
            Message #launch-room <b>↗</b>
          </div>
        </div>
      </div>
    );
  return (
    <div className="art-capstone-window" aria-hidden="true">
      <div className="art-capstone-lines">
        <i />
        <i />
        <i />
      </div>
      <div className="art-capstone-paper">
        <small>ARTICLE / CULTURE</small>
        <b>
          Make room
          <br />
          for the new.
        </b>
        <span>
          Read the story <Arrow />
        </span>
      </div>
      <div className="art-capstone-index">
        EDITOR'S DESK &nbsp; / &nbsp; 2026
      </div>
    </div>
  );
}

function MotionPreview({ scene, playing }) {
  return (
    <div
      className={`motion-screen motion-screen--${scene}${playing ? " is-playing" : " is-paused"}`}
      aria-label={`${scene} motion preview`}
    >
      <div className="motion-screen-top">
        <span className="screen-dot" />
        <span>SHIVA / MOTION STUDY</span>
        <span className="screen-live">PREVIEW {playing ? "●" : "Ⅱ"}</span>
      </div>
      {scene === "interface" && (
        <div className="motion-ui-scene" aria-hidden="true">
          <div className="motion-ui-card">
            <div className="motion-ui-cover" />
            <div className="motion-ui-copy">
              <i />
              <i />
              <i />
            </div>
            <span>
              GOOD THINGS TAKE SHAPE <b>↗</b>
            </span>
          </div>
          <div className="motion-ui-orbit orbit-a" />
          <div className="motion-ui-orbit orbit-b" />
          <div className="motion-ui-spark">✳</div>
        </div>
      )}
      {scene === "dimension" && (
        <div className="motion-3d-scene" aria-hidden="true">
          <div className="motion-cube">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="motion-sphere" />
          <div className="motion-3d-ring ring-a" />
          <div className="motion-3d-ring ring-b" />
          <span>FORM / 003</span>
        </div>
      )}
      {scene === "type" && (
        <div className="motion-type-scene" aria-hidden="true">
          <small>TYPE ANIMATION / 03</small>
          <strong>
            MAKE
            <br />
            <em>IT</em> MOVE<span>.</span>
          </strong>
          <div className="type-scanline" />
          <div className="type-stamp">
            KINETIC TYPE
            <br />
            STUDY — 03
          </div>
        </div>
      )}
      <div className="motion-timeline" aria-hidden="true">
        <span>00:00</span>
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>00:08</span>
      </div>
    </div>
  );
}

function App() {
  const [activeScene, setActiveScene] = useState("interface");
  const [isPlaying, setIsPlaying] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(true);
  const visibleProjects = showAllProjects
    ? projects
    : projects.filter((project) => project.featured);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealNodes = document.querySelectorAll("[data-reveal]");
    let revealObserver;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -45px 0px" },
      );
      revealNodes.forEach((node) => revealObserver.observe(node));
    }

    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".nav-link")];
    const updateScrollState = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`,
      );
      const active = sections.reduce(
        (best, section) =>
          section.getBoundingClientRect().top < 180 ? section.id : best,
        "home",
      );
      navLinks.forEach((link) =>
        link.setAttribute(
          "aria-current",
          link.hash === `#${active}` ? "location" : "false",
        ),
      );
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const tiltNodes = document.querySelectorAll("[data-tilt]");
    const onMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
      event.currentTarget.style.setProperty("--glow-x", `${x * 100}%`);
      event.currentTarget.style.setProperty("--glow-y", `${y * 100}%`);
    };
    const onLeave = (event) => {
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    };
    tiltNodes.forEach((node) => {
      node.addEventListener("pointermove", onMove);
      node.addEventListener("pointerleave", onLeave);
    });
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      revealObserver?.disconnect();
      tiltNodes.forEach((node) => {
        node.removeEventListener("pointermove", onMove);
        node.removeEventListener("pointerleave", onLeave);
      });
    };
  }, [showAllProjects]);

  return (
    <>
      <div className="scroll-meter" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Shiva Kumar home">
          <span className="brand-mark">
            S<span>K</span>
          </span>
          <span className="brand-name">
            SHIVA KUMAR <i>PORTFOLIO / 2026</i>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-link" href="#work">
            Work
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#motion">
            Creative
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>
        <a className="header-cta" href="mailto:shivathota1323@gmail.com">
          Let&apos;s talk <Arrow diagonal />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> DEVELOPER + MOTION CREATIVE{" "}
              <span className="eyebrow-code">SK / 001</span>
            </div>
            <h1>
              I make digital
              <br />
              things{" "}
              <span className="hero-word">
                move<span className="hero-dot">.</span>
              </span>
            </h1>
            <p className="hero-intro">
              I&apos;m Shiva — an IT student building useful web products and
              shaping ideas through video editing, 3D animation, and motion
              graphics.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore projects <Arrow />
              </a>
              <a
                className="button button-quiet"
                href={`${import.meta.env.BASE_URL}shiva-kumar-resume.pdf`}
                download
              >
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-meta">
              <span>BASED IN HYDERABAD, INDIA</span>
              <span>
                SCROLL TO EXPLORE <b>↓</b>
              </span>
            </div>
          </div>
          <div className="hero-visual" data-tilt>
            <div className="hero-frame-head">
              <span>PROFILE / 01</span>
              <span>HYDERABAD, INDIA</span>
            </div>
            <div className="hero-visual-glow" />
            <div className="hero-portrait">
              <img
                src={`${import.meta.env.BASE_URL}shiva-kumar.jpg`}
                alt="Portrait of Thota Shiva Kumar"
              />
            </div>
            <div className="hero-profile-card">
              <div>
                <strong>Thota Shiva Kumar</strong>
                <span>Developer · Visual creative</span>
              </div>
              <span className="hero-profile-mark" aria-hidden="true">
                SK
              </span>
            </div>
          </div>
          <div className="hero-rail" aria-hidden="true">
            <span>WEB DEVELOPMENT</span>
            <i>✳</i>
            <span>VIDEO EDITING</span>
            <i>✳</i>
            <span>3D + MOTION</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-kicker">
                <span>01</span> / SELECTED WORK
              </p>
              <h2>
                Built to be
                <br />
                <span className="text-outline">used.</span>
              </h2>
            </div>
            <div className="work-intro">
              <p>
                From full-stack tools to playful interfaces — a collection of
                things I&apos;ve built while learning, collaborating, and
                pushing ideas forward.
              </p>
              <span>
                PROJECTS / {String(visibleProjects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article
                className={`project-card${index === 0 ? " project-card-featured" : ""}`}
                key={project.name}
                data-reveal
                style={{ "--reveal-delay": `${(index % 3) * 90}ms` }}
              >
                <div
                  className={`project-art project-art--${project.kind}`}
                  data-tilt
                >
                  <div className="project-art-index">
                    {project.number} <span>/ 0{visibleProjects.length}</span>
                  </div>
                  <ProjectArt kind={project.kind} />
                  <div className="project-art-chip">{project.eyebrow}</div>
                  <span className="art-corner-mark">↗</span>
                </div>
                <div className="project-content">
                  <div className="project-content-top">
                    <p className="project-category">{project.eyebrow}</p>
                    <span className="project-number">{project.number}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live site <Arrow diagonal />
                      </a>
                    )}
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Source code <Arrow diagonal />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            className="show-projects"
            type="button"
            onClick={() => setShowAllProjects((current) => !current)}
            aria-expanded={showAllProjects}
          >
            {showAllProjects ? "Show featured projects" : "Show all projects"}
            <span>{showAllProjects ? "−" : "+"}</span>
          </button>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-copy-block" data-reveal>
            <p className="section-kicker">
              <span>02</span> / THE PERSON BEHIND THE PIXELS
            </p>
            <h2>
              Logic in the build.
              <br />
              <span className="accent-word">Feeling in the finish.</span>
            </h2>
            <p className="about-copy">
              I&apos;m studying Information Technology and building across the
              MERN stack. I enjoy bringing structure to complex ideas, turning
              them into useful interfaces, and refining the details that make a
              product feel clear and considered.
            </p>
            <p className="about-copy about-copy-secondary">
              My projects span marketplace discovery, medicine access,
              publishing, and real-time team collaboration. I also practice
              competitive programming to strengthen my problem-solving, while
              video editing, 3D animation, and motion graphics let me explore
              rhythm, composition, and visual storytelling.
            </p>
            <p className="about-copy about-copy-secondary">
              I&apos;m currently pursuing a B.Tech in Information Technology at
              Anurag University in Hyderabad. After completing MERN stack
              training with Rajesh Sir at Sunteck Corp, I&apos;m continuing to
              grow through hands-on projects, collaboration, and consistent
              practice.
            </p>
            <div className="about-tags" aria-label="Areas of focus">
              <span>Full-stack development</span>
              <span>Creative problem-solving</span>
              <span>Continuous learning</span>
            </div>
          </div>
          <div className="skills-card" data-reveal>
            <div className="skills-card-top">
              <span>THE TOOLKIT</span>
              <span className="skills-card-mark">✳</span>
            </div>
            {skills.map((group, index) => (
              <div className="skill-row" key={group.label}>
                <span className="skill-index">0{index + 1}</span>
                <span className="skill-label">{group.label}</span>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="skills-card-foot">
              <span className="status-dot" /> ALWAYS LEARNING / ALWAYS MAKING
            </div>
          </div>
        </section>

        <section className="motion-section section-wrap" id="motion">
          <div className="motion-heading" data-reveal>
            <div>
              <p className="section-kicker">
                <span>03</span> / MOTION DESIGN &amp; VISUAL STORYTELLING
              </p>
              <h2>
                Frames with
                <br />
                <span className="accent-word">a pulse.</span>
              </h2>
            </div>
            <p>
              I explore how pacing, depth, typography, and transitions can give
              an idea more clarity and character. These interactive studies show
              the visual directions I enjoy building across video, interface
              motion, and 3D.
            </p>
          </div>
          <div className="motion-playground" data-reveal>
            <div className="motion-playground-header">
              <span>INTERACTIVE MOTION STUDY</span>
              <span>CSS / 3 SCENES</span>
            </div>
            <div className="motion-playground-body">
              <MotionPreview scene={activeScene} playing={isPlaying} />
              <div className="motion-controls">
                <div className="motion-controls-copy">
                  <span>SELECT A STUDY</span>
                  <strong>
                    {scenes.find((scene) => scene.id === activeScene)?.label}
                  </strong>
                  <p>
                    A set of original motion studies exploring interface
                    feedback, dimensional form, and animated typography. My
                    creative workflow includes editing in Premiere Pro and
                    building motion graphics with After Effects.
                  </p>
                </div>
                <div
                  className="motion-scene-tabs"
                  role="group"
                  aria-label="Choose a motion preview"
                >
                  {scenes.map((scene) => (
                    <button
                      key={scene.id}
                      type="button"
                      className={activeScene === scene.id ? "is-active" : ""}
                      onClick={() => setActiveScene(scene.id)}
                      aria-pressed={activeScene === scene.id}
                    >
                      <span>{scene.index}</span>
                      {scene.label}
                      <Arrow />
                    </button>
                  ))}
                </div>
                <button
                  className="motion-play-button"
                  type="button"
                  onClick={() => setIsPlaying((current) => !current)}
                  aria-pressed={isPlaying}
                >
                  <span>{isPlaying ? "Ⅱ" : "▶"}</span>
                  {isPlaying ? "Pause preview" : "Play preview"}
                </button>
              </div>
            </div>
          </div>
          <div className="creative-strip" data-reveal>
            <span>ALSO IN MY CREATIVE TOOLBOX</span>
            <b>VIDEO EDITING</b>
            <i>✳</i>
            <b>3D ANIMATION</b>
            <i>✳</i>
            <b>MOTION GRAPHICS</b>
          </div>
          <div className="motion-focus-grid" data-reveal>
            <article>
              <span>01 / POST-PRODUCTION</span>
              <h3>Video editing</h3>
              <p>
                Editing in Adobe Premiere Pro: shaping footage with deliberate
                pacing, clean transitions, and a clear visual flow.
              </p>
            </article>
            <article>
              <span>02 / 3D &amp; LOOK DEVELOPMENT</span>
              <h3>3D animation</h3>
              <p>
                Exploring shape, lighting, and movement to give visual ideas
                depth and presence.
              </p>
            </article>
            <article>
              <span>03 / COMPOSITING &amp; GRAPHICS</span>
              <h3>Motion design</h3>
              <p>
                Using Adobe After Effects to combine type, graphics, and timing
                for expressive digital storytelling.
              </p>
            </article>
          </div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <div className="journey-title" data-reveal>
            <p className="section-kicker">
              <span>04</span> / CURRENTLY IN PROGRESS
            </p>
            <h2>
              Learn. Build.
              <br />
              <span className="text-outline">Repeat.</span>
            </h2>
          </div>
          <div className="journey-list">
            <article className="journey-item" data-reveal>
              <span className="journey-date">2024 — 2028</span>
              <span className="journey-marker" />
              <div>
                <p className="journey-type">EDUCATION / IN PROGRESS</p>
                <h3>B.Tech, Information Technology</h3>
                <p className="journey-place">
                  Anurag University, Hyderabad · GPA 8.92
                </p>
              </div>
            </article>
            <article className="journey-item" data-reveal>
              <span className="journey-date">COMPLETED</span>
              <span className="journey-marker" />
              <div>
                <p className="journey-type">TECHNICAL TRAINING</p>
                <h3>MERN Stack</h3>
                <p className="journey-place">
                  Sunteck Corp · Rajesh Sir · MongoDB · Express.js · React ·
                  Node.js
                </p>
              </div>
            </article>
            <article className="journey-item" data-reveal>
              <span className="journey-date">ONGOING</span>
              <span className="journey-marker" />
              <div>
                <p className="journey-type">PRACTICE / PROBLEM SOLVING</p>
                <h3>Competitive Programming</h3>
                <p className="journey-place">Java · C · JavaScript</p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="contact-section section-wrap"
          id="contact"
          data-reveal
        >
          <div className="contact-noise" />
          <p className="section-kicker">
            <span>05</span> / HAVE A GOOD ONE IN MIND?
          </p>
          <h2>
            Let&apos;s make
            <br />
            <em>it move.</em>
          </h2>
          <p className="contact-copy">
            Have a web project, creative idea, collaboration, or opportunity in
            mind? Send me an email, message me through my LinkedIn profile, or
            explore my code on GitHub. I&apos;m glad to connect and talk through
            what you&apos;re building.
          </p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:shivathota1323@gmail.com"
            >
              Email me <Arrow diagonal />
            </a>
            <a
              className="button button-outline"
              href="https://www.linkedin.com/in/shiva-thota/"
              target="_blank"
              rel="noreferrer"
            >
              Message on LinkedIn <Arrow diagonal />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/shivathota1323"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <Arrow diagonal />
            </a>
          </div>
          <p className="contact-email">
            Email directly at{" "}
            <a href="mailto:shivathota1323@gmail.com">
              shivathota1323@gmail.com
            </a>
          </p>
          <span className="contact-spark" aria-hidden="true">
            ✳
          </span>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            S<span>K</span>
          </span>
          <span className="brand-name">
            SHIVA KUMAR <i>BACK TO TOP ↑</i>
          </span>
        </a>
        <span className="footer-note">
          DESIGNED / CODED / ANIMATED WITH CARE
        </span>
        <div className="footer-links">
          <a
            href="https://github.com/shivathota1323"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow diagonal />
          </a>
          <a
            href="https://linkedin.com/in/shiva-thota"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow diagonal />
          </a>
          <a href="mailto:shivathota1323@gmail.com">
            Email <Arrow diagonal />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
