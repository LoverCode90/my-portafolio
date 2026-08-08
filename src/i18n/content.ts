export type Lang = "es" | "en";

export const languages: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

export const defaultLang: Lang = "es";

interface ProjectText {
  title: string;
  description: string;
}

interface ReviewText {
  quote: string;
}

interface PageContent {
  htmlLang: string;
  meta: {
    description: string;
  };
  nav: {
    contact: string;
    ariaLabel: string;
    languageLabel: string;
  };
  hero: {
    greeting: (name: string) => string;
    paragraph: string;
    ctaProjects: string;
    ctaWhatsapp: string;
    photoAlt: (name: string) => string;
    whatsappMessage: string;
  };
  projects: {
    heading: string;
    viewSite: string;
    imageAlt: (title: string) => string;
    items: ProjectText[];
  };
  reviews: {
    heading: string;
    ratingLabel: string;
    items: ReviewText[];
  };
  contact: {
    heading: string;
    paragraph: string;
    whatsapp: string;
    copyright: string;
  };
}

export const content: Record<Lang, PageContent> = {
  es: {
    htmlLang: "es",
    meta: {
      description:
        "Desarrollo soluciones web a medida: desde sitios personales hasta plataformas de e-commerce completas.",
    },
    nav: {
      contact: "Contáctame",
      ariaLabel: "Principal",
      languageLabel: "Idioma",
    },
    hero: {
      greeting: (name) => `Hola, soy ${name} — Web Developer`,
      paragraph:
        "Construyo soluciones web a medida para negocios y personas — desde sitios personales sencillos hasta plataformas de e-commerce completas con pagos reales, inventario e integraciones de envío. Si necesitas una herramienta hecha para tu flujo de trabajo específico, puedo construirla.",
      ctaProjects: "Ver proyectos",
      ctaWhatsapp: "Contactar por WhatsApp",
      photoAlt: (name) => `Foto de ${name}`,
      whatsappMessage: "Hola, me interesa tus servicios",
    },
    projects: {
      heading: "Proyectos",
      viewSite: "Ver sitio →",
      imageAlt: (title) => `Captura del sitio ${title}`,
      items: [
        {
          title: "Metamorfosis LLC",
          description:
            "Plataforma de e-commerce completa para una tienda de belleza profesional: catálogo, pagos con Square, envíos en tiempo real y cuenta de cliente. Sitio en producción, funcionando con clientes reales.",
        },
        {
          title: "Vida en Barra",
          description:
            "Tienda en línea de jabones y shampoo bars artesanales, con checkout y catálogo similar a Metamorfosis en una versión más compacta. Sitio en producción.",
        },
        {
          title: "Plantilla para negocios de control de plagas",
          description:
            "Plantilla bilingüe (español/inglés) creada como preview para un negocio de fumigación. Reutilizable: se adapta a los colores y datos de cualquier negocio similar. Disponible para la venta.",
        },
      ],
    },
    reviews: {
      heading: "Lo que dicen mis clientes",
      ratingLabel: "Calificación: 5 de 5 estrellas",
      items: [
        {
          quote:
            "Héctor se encargó de construir toda nuestra tienda en línea desde cero — catálogo, pagos, envíos, todo funcionando sin problemas. Siempre responde rápido cuando necesitamos algún ajuste.",
        },
        {
          quote:
            "Le expliqué lo que necesitaba para mi tienda de jabones y Héctor lo tradujo perfecto en un sitio bonito y fácil de usar. Muy profesional y con mucha paciencia para explicarme cada paso.",
        },
      ],
    },
    contact: {
      heading: "Hablemos",
      paragraph: "Cuéntame sobre tu proyecto y te responderé lo antes posible.",
      whatsapp: "WhatsApp",
      copyright: "Todos los derechos reservados.",
    },
  },
  en: {
    htmlLang: "en",
    meta: {
      description:
        "Custom web development: from personal sites to full e-commerce platforms.",
    },
    nav: {
      contact: "Contact me",
      ariaLabel: "Main",
      languageLabel: "Language",
    },
    hero: {
      greeting: (name) => `Hi, I'm ${name} — Web Developer`,
      paragraph:
        "I build custom web solutions for businesses and individuals — from simple personal sites to full e-commerce platforms with real payments, inventory, and shipping integrations. If you need a tool built for your specific workflow, I can build it.",
      ctaProjects: "View projects",
      ctaWhatsapp: "Contact via WhatsApp",
      photoAlt: (name) => `Photo of ${name}`,
      whatsappMessage: "Hi, I'm interested in your services",
    },
    projects: {
      heading: "Projects",
      viewSite: "View site →",
      imageAlt: (title) => `Screenshot of the ${title} site`,
      items: [
        {
          title: "Metamorfosis LLC",
          description:
            "Full e-commerce platform for a professional beauty supply store: catalog, Square payments, real-time shipping, and customer accounts. Live in production, used by real customers.",
        },
        {
          title: "Vida en Barra",
          description:
            "Online store for handmade soap and shampoo bars, with checkout and a catalog similar to Metamorfosis in a more compact version. Live in production.",
        },
        {
          title: "Pest Control Business Template",
          description:
            "Bilingual (Spanish/English) template built as a preview for a pest control business. Reusable — adapts to the colors and details of any similar business. Available for purchase.",
        },
      ],
    },
    reviews: {
      heading: "What my clients say",
      ratingLabel: "Rating: 5 out of 5 stars",
      items: [
        {
          quote:
            "Héctor built our entire online store from scratch — catalog, payments, shipping, all working smoothly. He always responds quickly whenever we need an adjustment.",
        },
        {
          quote:
            "I explained what I needed for my soap store and Héctor translated it perfectly into a beautiful, easy-to-use site. Very professional and patient explaining every step.",
        },
      ],
    },
    contact: {
      heading: "Let's talk",
      paragraph: "Tell me about your project and I'll get back to you as soon as possible.",
      whatsapp: "WhatsApp",
      copyright: "All rights reserved.",
    },
  },
};
