import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const output = path.resolve("public/shiva-kumar-resume.pdf");
fs.mkdirSync(path.dirname(output), { recursive: true });
const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: "Thota Shiva Kumar | Resume",
    Author: "Thota Shiva Kumar",
    Subject: "Information Technology, MERN Stack, and Video Editor Resume",
  },
});
doc.registerFont("Arial", "C:/Windows/Fonts/arial.ttf");
doc.registerFont("Arial-Bold", "C:/Windows/Fonts/arialbd.ttf");
doc.registerFont("Arial-Italic", "C:/Windows/Fonts/ariali.ttf");
doc.pipe(fs.createWriteStream(output));

const W = 612;
const left = 42;
const width = 528;
const ink = "#152321";
const muted = "#596963";
const dim = "#8B9992";
const accent = "#397A69";
const lightAccent = "#D5FF68";
const rule = "#D9E1DC";
const projects = [
  {
    name: "ShopSphere",
    stack: "React  |  Node.js  |  Express  |  MongoDB",
    detail:
      "Marketplace discovery with category filters, search, cart interactions, and a seller entry point.",
    live: "https://shop-sphere-mocha-rho.vercel.app/",
    source: "https://github.com/shivathota1323/shop_sphere",
  },
  {
    name: "Rare Medicine Locator",
    stack: "React  |  Express  |  MongoDB  |  JWT",
    detail:
      "Medicine discovery and requests with account access, a medicine dashboard, request workflows, and in-app chat.",
    live: "https://rare-medicine-locator.vercel.app/",
    source: "https://github.com/shivathota1323/Rare-Medicine-locator",
  },
  {
    name: "Blog App",
    stack: "React  |  Node.js  |  MongoDB  |  Cloudinary",
    detail:
      "Role-based publishing for readers, authors, and admins, with secure sessions, comments, and image uploads.",
    live: "https://blog-app-shiva.vercel.app/",
    source: "https://github.com/shivathota1323/BLOG-APP",
  },
  {
    name: "Employee Manager",
    stack: "React  |  Express  |  MongoDB  |  Axios",
    detail:
      "A full-stack employee directory to create, view, edit, and remove employee records.",
    live: "https://mern-mini-app-two.vercel.app/",
    source: "https://github.com/shivathota1323/Mern-mini-app",
  },
  {
    name: "WorkLoop  |  Group project",
    stack: "MERN  |  Socket.IO  |  Redis  |  Cloudinary",
    detail:
      "Real-time team collaboration with workspaces, channels, direct messages, threads, file sharing, and reminders.",
    live: "https://workloop-realtime-chat.vercel.app/",
    source: "https://github.com/WorkLoop-Developers/workloop-realtime-chat",
  },
  {
    name: "Article Publishing Platform  |  Capstone",
    stack: "MongoDB  |  Express  |  React  |  Node.js",
    detail:
      "A multi-role publishing app for readers, authors, and admins, with article management and reader comments.",
    source: "https://github.com/shivathota1323/ATP_24eg112c60",
  },
];

function sectionTitle(label, y) {
  doc
    .font("Arial-Bold")
    .fontSize(8)
    .fillColor(ink)
    .text(label.toUpperCase(), left, y, { characterSpacing: 1.1 });
  const labelWidth = doc.widthOfString(label.toUpperCase(), {
    characterSpacing: 1.1,
    font: "Arial-Bold",
    size: 8,
  });
  doc
    .moveTo(left + labelWidth + 13, y + 6)
    .lineTo(left + width, y + 6)
    .strokeColor(rule)
    .lineWidth(0.65)
    .stroke();
}

function link(label, url, x, y, w) {
  doc
    .font("Arial-Bold")
    .fontSize(6.6)
    .fillColor(accent)
    .text(label, x, y, { width: w, align: "right", lineBreak: false });
  doc.link(x, y - 1, w, 10, url);
}

function project(project, y, index) {
  doc
    .font("Arial-Bold")
    .fontSize(9.2)
    .fillColor(ink)
    .text(project.name, left, y, { width: 355, lineBreak: false });
  if (project.live) link("LIVE", project.live, 431, y + 1, 49);
  link(project.live ? "SOURCE" : "GITHUB", project.source, 484, y + 1, 86);
  doc
    .font("Arial")
    .fontSize(7.2)
    .fillColor(accent)
    .text(project.stack, left, y + 13, { width: 430, lineBreak: false });
  doc
    .font("Arial")
    .fontSize(8.1)
    .fillColor(muted)
    .text(project.detail, left, y + 25, { width, height: 19, lineGap: 0.8 });
  doc
    .moveTo(left, y + 49)
    .lineTo(left + width, y + 49)
    .strokeColor(index === projects.length - 1 ? "#B8C6BD" : rule)
    .lineWidth(index === projects.length - 1 ? 0.75 : 0.5)
    .stroke();
}

// Header band
doc.rect(0, 0, W, 137).fill("#152321");
doc.rect(0, 0, 7, 137).fill(lightAccent);
doc
  .roundedRect(503, 21, 68, 68, 8)
  .lineWidth(1)
  .strokeColor(lightAccent)
  .stroke();
doc.image(path.resolve("public/shiva-kumar.jpg"), 506, 24, {
  fit: [62, 62],
});
doc
  .font("Arial-Bold")
  .fontSize(27)
  .fillColor("#F4F6F1")
  .text("THOTA SHIVA KUMAR", left, 28, { characterSpacing: 0.25 });
doc
  .font("Arial-Bold")
  .fontSize(8.6)
  .fillColor(lightAccent)
  .text("IT UNDERGRADUATE   /   MERN DEVELOPER   /   VIDEO EDITOR", left, 64, {
    characterSpacing: 0.65,
  });
doc
  .moveTo(left, 84)
  .lineTo(left + width, 84)
  .strokeColor("#41534A")
  .lineWidth(0.65)
  .stroke();
doc
  .font("Arial")
  .fontSize(8)
  .fillColor("#D4DDD5")
  .text(
    "+91 89195 51272    |    shivathota1323@gmail.com    |    Jodimetla, Hyderabad",
    left,
    96,
    { width },
  );
doc.text(
  "github.com/shivathota1323    |    linkedin.com/in/shiva-thota",
  left,
  111,
  { width },
);
doc.link(left, 110, 205, 11, "https://github.com/shivathota1323");
doc.link(left + 220, 110, 270, 11, "https://linkedin.com/in/shiva-thota");

// Summary
sectionTitle("Profile", 153);
doc
  .font("Arial")
  .fontSize(8.1)
  .fillColor("#33423B")
  .text(
    "Information Technology undergraduate at Anurag University with MERN stack training from Sunteck Corp under Rajesh Sir. I build full-stack web applications using React, JavaScript, Node.js, Express, MongoDB, and MySQL, and have applied REST APIs, JWT authentication, Socket.IO, Redis, Cloudinary, and Axios across project work. My portfolio includes marketplace, healthcare access, publishing, employee management, and real-time collaboration applications. Alongside development, I edit video with Adobe Premiere Pro, create motion graphics with After Effects, explore 3D animation, and practice competitive programming in Java, C, and JavaScript.",
    left,
    168,
    { width, height: 52, lineGap: 1.2 },
  );

// Evidence-led project portfolio
sectionTitle("Selected projects", 222);
projects.forEach((projectItem, index) =>
  project(projectItem, 239 + index * 50, index),
);

// Skills and education
sectionTitle("Skills", 541);
doc
  .font("Arial-Bold")
  .fontSize(8.1)
  .fillColor(ink)
  .text("Development", left, 557, { continued: true })
  .font("Arial")
  .fillColor(muted)
  .text("  React, JavaScript, Node.js, Express, REST APIs, MongoDB, MySQL");
doc
  .font("Arial-Bold")
  .fontSize(8.1)
  .fillColor(ink)
  .text("Programming", left, 572, { continued: true })
  .font("Arial")
  .fillColor(muted)
  .text("  Java, C    |    Web: HTML, CSS    |    Tools: Git, VS Code");
doc
  .font("Arial-Bold")
  .fontSize(8.1)
  .fillColor(ink)
  .text("Tools & systems", left, 587, { continued: true })
  .font("Arial")
  .fillColor(muted)
  .text(
    "  HTML, CSS, Git, VS Code, REST APIs, JWT, Socket.IO, Redis, Cloudinary, Axios",
  );
doc
  .font("Arial-Bold")
  .fontSize(8.1)
  .fillColor(ink)
  .text("Video & motion", left, 602, { continued: true })
  .font("Arial")
  .fillColor(muted)
  .text(
    "  Adobe Premiere Pro, After Effects, video editing, 3D animation, motion graphics",
  );

sectionTitle("Education & credentials", 625);
const col2 = 326;
doc
  .font("Arial-Bold")
  .fontSize(8.7)
  .fillColor(ink)
  .text("B.Tech, Information Technology", left, 642, { width: 265 });
doc
  .font("Arial")
  .fontSize(8)
  .fillColor(muted)
  .text("Anurag University, Hyderabad", left, 655, { width: 265 });
doc
  .font("Arial")
  .fontSize(8)
  .fillColor(muted)
  .text("2024 - 2028  |  GPA 8.92", left, 667);
doc
  .font("Arial-Bold")
  .fontSize(8.3)
  .fillColor(ink)
  .text("Narayana Junior College", left, 684, { width: 260 });
doc
  .font("Arial")
  .fontSize(8)
  .fillColor(muted)
  .text("Intermediate, 2022 - 2024  |  GPA 9.89", left, 697, { width: 260 });
doc
  .font("Arial-Bold")
  .fontSize(8.3)
  .fillColor(ink)
  .text("Secondary School", left, 714, { width: 260 });
doc
  .font("Arial")
  .fontSize(8)
  .fillColor(muted)
  .text("2022  |  GPA 9.2", left, 727, { width: 260 });
doc
  .font("Arial-Bold")
  .fontSize(8.3)
  .fillColor(ink)
  .text("MERN Stack Training", col2, 642, { width: 244 });
doc
  .font("Arial")
  .fontSize(8)
  .fillColor(muted)
  .text("Sunteck Corp  |  Rajesh Sir", col2, 655, {
    width: 244,
  });
doc
  .font("Arial")
  .fontSize(7.6)
  .fillColor(muted)
  .text("MongoDB  |  Express  |  React  |  Node.js", col2, 667, { width: 244 });
doc
  .font("Arial-Bold")
  .fontSize(8.3)
  .fillColor(ink)
  .text("HackerRank Certificates", col2, 689, { width: 244 });
doc
  .font("Arial")
  .fontSize(8)
  .fillColor(muted)
  .text("Java and C  |  Competitive programming practice", col2, 702, {
    width: 244,
  });

doc
  .moveTo(left, 758)
  .lineTo(left + width, 758)
  .strokeColor(rule)
  .lineWidth(0.7)
  .stroke();
doc
  .font("Arial")
  .fontSize(7.2)
  .fillColor(dim)
  .text("English  |  Telugu  |  Hindi", left, 771);
doc
  .font("Arial")
  .fontSize(7.2)
  .fillColor(dim)
  .text("COMMUNICATION  ·  TEAMWORK  ·  PROBLEM SOLVING", left + 230, 771, {
    width: 298,
    align: "right",
    characterSpacing: 0.35,
  });
doc.end();
