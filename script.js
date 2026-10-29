/*
  script.js
  Construit dynamiquement la page à partir de PORTFOLIO_DATA (data.js).
*/

(function () {
  const d = PORTFOLIO_DATA;

  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  // ---- HERO ------------------------------------------------------
  if (document.getElementById("heroName")) document.getElementById("heroName").textContent = d.profile.name;
  if (document.getElementById("heroTagline")) document.getElementById("heroTagline").textContent = d.profile.tagline;
  if (document.getElementById("heroAvailability")) document.getElementById("heroAvailability").textContent = d.profile.availability;
  if (document.getElementById("summaryText")) document.getElementById("summaryText").textContent = d.profile.summary;

  const ctaCv = document.getElementById("ctaCv");
  if (ctaCv) ctaCv.href = d.profile.cvFile;
  
  const ctaGithub = document.getElementById("ctaGithub");
  if (ctaGithub) ctaGithub.href = d.profile.github;


  // Terminal typed line
  const typedEl = document.getElementById("typedRole");
  if (typedEl) {
    const roleText = d.profile.role;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typedEl.textContent = roleText;
    } else {
      let i = 0;
      (function type() {
        if (i <= roleText.length) {
          typedEl.textContent = roleText.slice(0, i);
          i++;
          setTimeout(type, 28);
        }
      })();
    }
  }

  // ---- PARCOURS ----------------------------------------------------
  const eduList = document.getElementById("eduList");
  if (eduList) {
    d.education.forEach(item => {
      const li = el("li", "edu-item");
      li.innerHTML = `
        <div class="period">${item.period}</div>
        <h3>${item.title}</h3>
        <div class="place">${item.place}</div>
      `;
      eduList.appendChild(li);
    });
  }

  if (document.getElementById("goalTitle")) document.getElementById("goalTitle").textContent = d.educationGoal.title;
  if (document.getElementById("goalDetail")) document.getElementById("goalDetail").textContent = d.educationGoal.detail;

  // ---- COMPÉTENCES -------------------------------------------------
  const skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    d.skillGroups.forEach(group => {
      const wrap = el("div", "skill-group");
      const h3 = el("h3", null, group.category);
      const ul = el("ul");
      group.skills.forEach(s => ul.appendChild(el("li", null, s)));
      wrap.appendChild(h3);
      wrap.appendChild(ul);
      skillsGrid.appendChild(wrap);
    });
  }

  // ---- EXPÉRIENCE ----------------------------------------------------
  const xpList = document.getElementById("xpList");
  if (xpList) {
    xpList.innerHTML = "";
    d.experience.forEach(xp => {
      const item = el("div", "xp-item");
      const tasks = xp.tasks.map(t => `<li>${t}</li>`).join("");
      
      const placeContent = (xp.url && xp.url.trim() !== "") 
        ? `<a href="${xp.url}" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline; cursor: pointer;">${xp.place}</a>` 
        : xp.place;

      item.innerHTML = `
        <div class="period">${xp.period}</div>
        <div>
          <h3>${xp.title}</h3>
          <div class="place">${placeContent}</div>
          <ul>${tasks}</ul>
        </div>
      `;
      xpList.appendChild(item);
    });
  }

  // ---- PROJETS -------------------------------------------------------
  const projectsList = document.getElementById("projectsList");
  if (projectsList) {
    d.projects.forEach(p => {
      const item = el("div", "project");
      const stack = p.stack.map(s => `<span>${s}</span>`).join("");
      let links = "";
      if (p.link) links += `<a href="${p.link}" target="_blank" rel="noopener">Voir →</a>`;
      if (p.repo) links += `<a href="${p.repo}" target="_blank" rel="noopener">Code →</a>`;
      item.innerHTML = `
        <div>
          <div class="project__period">${p.period}</div>
          <h3 class="project__title">${p.title}</h3>
          <p class="project__desc">${p.description}</p>
          <div class="stack">${stack}</div>
        </div>
        <div class="project__links">${links}</div>
      `;
      projectsList.appendChild(item);
    });
  }

  // ---- VEILLE ----------------------------------------------------------
  if (document.getElementById("veilleSubject")) document.getElementById("veilleSubject").textContent = d.veille.subject;
  if (document.getElementById("veilleSummary")) document.getElementById("veilleSummary").textContent = d.veille.summary;
  
  const veilleLink = document.getElementById("veilleLink");
  if (veilleLink) {
    veilleLink.href = d.veille.articlePage;
  }

  // ---- CONTACT -----------------------------------------------------------
  const contactGrid = document.getElementById("contactGrid");
  if (contactGrid) {
    contactGrid.innerHTML = "";
    const contactItems = [
      { label: "Email", value: d.profile.email, href: `mailto:${d.profile.email}` },
      { label: "Téléphone", value: d.profile.phone, href: `tel:${d.profile.phone.replace(/\s/g, "")}` },
      { label: "GitHub", value: "Mon GitHub", href: d.profile.github }
    ];
    
    if (d.profile.location) {
      contactItems.push({ label: "Localisation", value: d.profile.location, href: null });
    }
    if (d.profile.linkedin && d.profile.linkedin.trim() !== "") {
      contactItems.push({ label: "LinkedIn", value: "Profil LinkedIn", href: d.profile.linkedin });
    }
    
    contactItems.forEach(c => {
      const wrap = el("div");
      const inner = c.href ? `<a href="${c.href}" target="_blank" rel="noopener">${c.value}</a>` : c.value;
      wrap.innerHTML = `<span class="contact__label">${c.label} : </span>${inner}`;
      contactGrid.appendChild(wrap);
    });
  }

  // ---- FOOTER -------------------------------------------------------------
  const lastUpdateEl = document.getElementById("lastUpdate");
  if (lastUpdateEl) {
    lastUpdateEl.textContent = document.lastModified.split(" ")[0] || "";
  }
})();
