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
        copy: "© {{year}} Portfolio by Adem Guettafi. All rights reserved.",
      },
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
