/* ============================================================
   Renders SITE (from data.js) onto the page, then wires up
   theme toggle, mobile nav and scroll reveals.
   ============================================================ */

// ---------- helpers ----------
const $ = (sel) => document.querySelector(sel);

const esc = (str) =>
  String(str ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

const tags = (list) =>
  list && list.length
    ? `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
    : "";

const linkBtn = (label, href, cls = "proj-btn") =>
  href ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)} ↗</a>` : "";

// ---------- render functions ----------
function renderStack() {
  $("#stack-list").innerHTML = SITE.stack.map((s) => `<li>${esc(s)}</li>`).join("");
}

function renderExperience() {
  $("#experience-list").innerHTML = SITE.experience
    .map(
      (e) => `
      <li class="entry reveal">
        <div class="entry-meta"><span class="entry-date">${esc(e.date)}</span></div>
        <div class="entry-body">
          <h3>${esc(e.role)} <span class="at">@</span> <span class="org">${esc(e.org)}</span></h3>
          <p>${esc(e.description)}</p>
          ${tags(e.tags)}
        </div>
      </li>`
    )
    .join("");

  const app = SITE.featuredApp;
  $("#featured-app").innerHTML = app
    ? `<div class="callout reveal">
        <div class="callout-label">${esc(app.label)}</div>
        <h3>${esc(app.title)}</h3>
        <p>${esc(app.description)}</p>
        ${app.link ? `<a class="inline-link" href="${esc(app.link.href)}" target="_blank" rel="noopener">${esc(app.link.label)} ↗</a>` : ""}
      </div>`
    : "";
}

function renderFreelance() {
  $("#freelance-list").innerHTML = SITE.freelance
    .map((f) => {
      const links =
        [linkBtn("GitHub", f.github, "inline-link"), linkBtn("Live site", f.live, "inline-link")]
          .filter(Boolean)
          .join("") || (f.note ? `<span class="muted-tag">${esc(f.note)}</span>` : "");
      return `
      <li class="row reveal">
        <div class="row-main">
          <h3>${esc(f.title)}</h3>
          <p>${esc(f.description)}</p>
          ${tags(f.tags)}
        </div>
        <div class="row-links">${links}</div>
      </li>`;
    })
    .join("");
}

function renderProjects() {
  $("#projects-list").innerHTML = SITE.projects
    .map((p) => {
      const fitClass = p.coverFit ? ` fit-${esc(p.coverFit)}` : "";
      const cover = p.cover
        ? `<div class="card-cover"><img class="card-img${fitClass}" src="${esc(p.cover)}" alt="${esc(p.title)} cover" loading="lazy"></div>`
        : `<div class="card-cover card-cover--mono"><span class="cover-glyph">{ }</span></div>`;
      const links = [linkBtn("GitHub", p.github), linkBtn("Live", p.live)].filter(Boolean).join("");
      return `
      <article class="card reveal">
        ${cover}
        <div class="card-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          ${tags(p.tags)}
          ${links ? `<div class="card-links">${links}</div>` : ""}
        </div>
      </article>`;
    })
    .join("");
}

function renderOpenSource() {
  $("#opensource-list").innerHTML = SITE.openSource
    .map((o) => {
      const links = [linkBtn("GitHub", o.github, "inline-link"), linkBtn("Live", o.live, "inline-link")]
        .filter(Boolean)
        .join("");
      return `
      <li class="row reveal">
        <div class="row-main">
          <h3>${esc(o.title)}</h3>
          <p>${esc(o.description)}</p>
          ${tags(o.tags)}
        </div>
        <div class="row-links">${links}</div>
      </li>`;
    })
    .join("");
}

function renderEducation() {
  $("#education-list").innerHTML = SITE.education
    .map(
      (e) => `
      <article class="edu-card reveal">
        <span class="edu-period">${esc(e.period)}</span>
        <h3>${esc(e.degree)}</h3>
        <p class="edu-school">${esc(e.school)}</p>
        ${e.note ? `<p class="edu-note">${esc(e.note)}</p>` : ""}
      </article>`
    )
    .join("");
}

function renderCourses() {
  $("#courses-list").innerHTML = SITE.courses
    .map(
      (c) => `
      <li class="row reveal">
        <div class="row-main">
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.meta)}</p>
        </div>
        <div class="row-links">
          <span class="course-date">${esc(c.date)}</span>
          ${linkBtn("Certificate", c.certificate, "inline-link")}
        </div>
      </li>`
    )
    .join("");
}

function renderContact() {
  $("#contact-list").innerHTML = SITE.contact
    .map(
      (c) => `
      <li>
        <span class="contact-label">${esc(c.label)}</span>
        <a href="${esc(c.href)}"${c.external ? ' target="_blank" rel="noopener"' : ""}>${esc(c.text)}</a>
      </li>`
    )
    .join("");
}

// ---------- build the page ----------
renderStack();
renderExperience();
renderFreelance();
renderProjects();
renderOpenSource();
renderEducation();
renderCourses();
renderContact();

// ---------- footer year ----------
$("#year").textContent = new Date().getFullYear();

// ---------- theme toggle (persisted) ----------
const root = document.documentElement;
const themeToggle = $("#theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.setAttribute("data-theme", "light");
}

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ---------- mobile nav ----------
const navToggle = $(".nav-toggle");
const navLinks = $("#nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ---------- subtle reveal on scroll ----------
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
