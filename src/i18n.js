import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      nav: {
        about: "À Propos",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact",
      },
      home: {
        title: "Développeur Front‑End Junior",
        subtitle: `Je suis Adem Guettafi, développeur junior basé au Canada, passionné par la création d’interfaces modernes et réactives ainsi que par le développement de projets innovants.`,
      },
      skills: {
        title: "Mes Compétences",
      },
      contact: {
        title: "Contactez‑moi",
        nameLabel: "Nom",
        emailLabel: "Email",
        msgLabel: "Message",
        send: "Envoyer",
        success: "Merci ! Votre message a bien été envoyé.",
        error: "Oups… une erreur s'est produite. Réessayez plus tard.",
      },
      cv: {
        download: "Télécharger mon CV",
      },
      filters: {
        project: "Mes Projets",
        all: "Tous",
        projects: { none: "Aucun projet dans cette catégorie pour le moment." },
      },
      projects: {
        demo: "Démo",
        code: "Code",
        none: "Aucun projet dans cette catégorie pour le moment.",
      },
      footer: {
        copy: "© {{year}} Portfolio par Adem Guettafi. Tous droits réservés.",
      },
       projectList: {
        cruds: {
          title:       'CRUDS',
          description: 'Un système de gestion de données (CRUDS) permettant de créer, lire, modifier, supprimer et sauvegarder des données, développé avec HTML, CSS et JavaScript.'
        },
        portfolio: {
          title:       'Portfolio',
          description: 'Un portfolio développé avec React.js et la librairie MUI, composé de quatre sections : À propos, Projets, Compétences et Contact. Il est disponible en deux langues et propose un mode clair et un mode sombre.'
        },
        'JEU X-O': {
          title:       'JEU X-O',
          description: 'Jeu de morpion interactif (X-O) conçu en HTML, CSS et JavaScript, permettant à deux joueurs de s’affronter sur une grille 3×3.'
        },
        'List To-Do': {
          title:       'List To-Do',
          description: 'Une application web simple de type to-do list, permettant d’ajouter et de supprimer des tâches, développée avec HTML, CSS et JavaScript.'
        },
        'List To-Do React': {
          title:       'List To-Do React',
          description: 'Application to-do list professionnelle développée avec React.js et la librairie MUI. Sections : toutes, terminées et non-terminées.'
        },
        'Cs.constantine web': {
          title:       'Cs.constantine Web',
          description: 'Un site web pour un club sportif, développé avec HTML, CSS et JavaScript.'
        }
      }
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
      },
      home: {
        title: "Junior Front‑End Developer",
        subtitle: `I’m Adem Guettafi, a junior developer based in Canada.  Passionate about crafting modern, responsive interfaces and building innovative projects.`,
      },
      skills: {
        title: "My Skills",
      },
      contact: {
        title: "Get in Touch",
        nameLabel: "Name",
        emailLabel: "Email",
        msgLabel: "Message",
        send: "Send",
        success: "Thank you! Your message has been sent.",
        error: "Oops… something went wrong. Please try again later.",
      },
      cv: {
        download: "Download my CV",
      },
      filters: {
        project: "My Projects",
        all: "All",
      },
      projects: {
        demo: "Demo",
        code: "Code",
        none: "No projects in this category at the moment.",
      },
      footer: {
        copy: "© {{year}} Portfolio by Adem Guettafi. All rights reserved..",
      },
      projectList: {
        cruds: {
          title:       'CRUDS',
          description: 'A data management system (CRUDS) allowing create, read, update and delete operations, built with HTML, CSS and JavaScript.'
        },
        portfolio: {
          title:       'Portfolio',
          description: 'A portfolio built with React.js and MUI, featuring About, Projects, Skills and Contact. Supports bilingual (FR/EN) and light/dark modes.'
        },
        'jeu-x-o': {
          title:       'Tic-Tac-Toe Game',
          description: 'An interactive Tic-Tac-Toe game built in HTML, CSS and JavaScript for two players on a 3×3 grid.'
        },
        'todo-js': {
          title:       'To-Do List',
          description: 'A simple to-do list web app that lets you add and remove tasks, built with HTML, CSS and JavaScript.'
        },
        'todo-react': {
          title:       'React To-Do List',
          description: 'A professional to-do list app built with React.js and MUI. Sections include all tasks, completed and pending.'
        },
        'club-web': {
          title:       'Sports Club Website',
          description: 'A website for a sports club, developed with HTML, CSS and JavaScript.'
        }
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // langue par défaut
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
