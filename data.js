/*
  data.js — CONTENU DU PORTFOLIO
  ================================
  Ce fichier centralise tout le contenu modifiable du site.
*/

const PORTFOLIO_DATA = {

  // ---------------------------------------------------------------
  // IDENTITÉ
  // ---------------------------------------------------------------
  profile: {
    name: "Killian Nkounkou",
    role: "Étudiant BTS SIO SLAM — 2ᵉ année",
    tagline: "Je conçois et sécurise des applications, du modèle de données jusqu'au déploiement.",
    location: "Orléans, France",
    email: "killiannkounkou06@gmail.com",
    phone: "06 21 04 66 48",
    github: "https://github.com/killian-nkounkou",
    linkedin: "https://www.linkedin.com/in/killian-nkounkou-387ab6418/", 
    cvFile: "CV_Killian-Nkounkou.pdf", 
    availability: "Recherche un stage en développement / sécurité informatique",
    summary: "Étudiant en 2ᵉ année de BTS SIO option SLAM (Solutions Logicielles et Applications Métiers), je recherche un stage pour développer mes compétences en développement d'applications et en sécurisation des systèmes."
  },

  // ---------------------------------------------------------------
  // COMPÉTENCES
  // ---------------------------------------------------------------
  skillGroups: [
    {
      category: "Développement Web",
      skills: ["PHP", "JavaScript", "HTML/CSS", "Architecture MVC", "jQuery", "Ajax", "Bootstrap", "CodeIgniter"]
    },
    {
      category: "Développement Objet & Mobile",
      skills: ["POO (PHP / Java)", "Python", "Android Studio (XML)", "JUnit", "SonarQube"]
    },
    {
      category: "Bases de données (SGBDR)",
      skills: ["MySQL", "MariaDB", "SQL Server", "SQLite"]
    },
    {
      category: "Conception & Gestion de projet",
      skills: ["UML", "Merise (Modélisation)", "Méthode SCRUM", "Trello", "GanttProject"]
    },
    {
      category: "Cybersécurité & Juridique",
      skills: ["Requêtes préparées", "Hachage de données", "Jetons JWT / CSRF", "Conformité RGPD"]
    },
    {
      category: "Solutions CMS & Outils IT",
      skills: ["WordPress", "WooCommerce", "GLPI", "Composer", "Doxygen"]
    },
    {
      category: "Environnement & Outils de dev",
      skills: ["Git (Sublime Merge)", "VS Code", "Eclipse IDE", "XAMPP", "Windows / macOS / Linux", "VirtualBox"]
    },
    {
      category: "Langues",
      skills: ["Francais", "Anglais (Technique)"]
    }
  ],

  // ---------------------------------------------------------------
  // PARCOURS
  // ---------------------------------------------------------------
  education: [
    {
      period: "2025 — 2027 (2ᵉ année en cours)",
      title: "BTS SIO — option SLAM",
      place: "Lycée Benjamin Franklin (45)",
      detail: "Solutions Logicielles et Applications Métiers."
    },
    {
      period: "2023 — 2024",
      title: "Baccalauréat STI2D",
      place: "Lycée Maurice Genevoix (45)"
    },
    {
      period: "2021",
      title: "Diplôme National du Brevet",
      place: "Collège René Cassin (41)"
    }
  ],

  educationGoal: {
    title: "Poursuite d'études souhaitée",
    detail: "Licence MIAGE"
  },

  // ---------------------------------------------------------------
  // EXPÉRIENCES PROFESSIONNELLES
  // ---------------------------------------------------------------
  experience: [
    {
      period: "2026",
      title: "Création d'identité visuelle — Stage",
      place: "Signal Net 41",
      url: "https://signal-net.fr",
      tasks: [
        "Création de profils sur les réseaux sociaux",
        "Création de flyers",
        "Création d'un site web",
        "Sécurisation d'un site web",
        "Hébergement d'un site web"
      ]
    },
    {
      period: "2024 — 2025",
      title: "Préparateur de commandes — CDD",
      place: "Amazon",
      url: "",
      tasks: [
        "Rangement de colis",
        "Tri des colis",
        "Manutention"
      ]
    }
  ],

  // ---------------------------------------------------------------
  // PROJETS
  // ---------------------------------------------------------------
  projects: [
    {
      title: "Portfolio personnel",
      period: "2026",
      description: "Ce site : vitrine de mon parcours, mes projets et ma veille technologique, pensé pour être mis à jour facilement au fil du BTS.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "",
      repo: ""
    }
  ],

  // ---------------------------------------------------------------
  // VEILLE TECHNOLOGIQUE
  // ---------------------------------------------------------------
  veille: {
    subject: "L'évolution des méthodes d'authentification pour sécuriser les comptes utilisateurs sur les réseaux sociaux",
    summary: "Suivi des évolutions des méthodes d'authentification (mot de passe, 2FA, passkeys, biométrie...) utilisées par les plateformes sociales pour protéger les comptes utilisateurs, et des menaces qui les poussent à évoluer.",
    articlePage: "veille-authentification.html"
  }
};
