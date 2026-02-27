export type Language = 'en' | 'it';

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: {
    en: string;
    it: string;
  };
  nationality: {
    en: string;
    it: string;
  };
  location: string;
  email: string;
  github: string;
  linkedin: string;
  photoUrl: string;
  cvUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: {
    en: string;
    it: string;
  };
  period: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  type: 'work' | 'education';
}

export type ProjectType = 'backend' | 'fullstack';

export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    it: string;
  };
  type: ProjectType;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Niccolò Mantovani",
  role: "Back End Developer",
  tagline: {
    en: "Crafting robust and scalable backend systems with precision and passion.",
    it: "Creazione di sistemi backend robusti e scalabili con precisione e passione."
  },
  nationality: {
    en: "Italian",
    it: "Italiana"
  },
  location: "Padova & Mantova, Italy",
  email: "nicomanto49@gmail.com",
  github: "https://github.com/nicomanto",
  linkedin: "https://www.linkedin.com/in/niccol%C3%B2-mantovani-25b54621b",
  photoUrl: "https://www.gravatar.com/avatar/cceb51c1797bca97b7cd5211907dd744?s=1000",
  cvUrl: "/CV/CV-Mantovani-Niccolò-IT.pdf"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Datasoil",
    role: {
      en: "Backend Developer",
      it: "Sviluppatore Backend"
    },
    period: {
      en: "2022 - Present",
      it: "2022 - Presente"
    },
    description: {
      en: "Full-time development and maintenance of a Digital Twin platform supporting business operations, from asset management to ticketing. Focused on backend development in Golang with MongoDB as database, managing deployment and monitoring through AWS services. Responsible for real-time data stream processing, ensuring platform efficiency and reliability.",
      it: "Tempo pieno. Sviluppo e manutenzione di una piattaforma Digital Twin per supportare l’operatività aziendale, dalla gestione degli asset fino al ticketing. Il mio lavoro si concentra sullo sviluppo back-end in Golang, con MongoDB come database, e sulla gestione del deploy e del monitoraggio tramite servizi AWS. Mi occupo inoltre dell’analisi e dell’elaborazione in tempo reale di flussi di dati, garantendo efficienza e affidabilità della piattaforma."
    },
    type: "work"
  },
  {
    id: "2",
    company: "Università degli Studi di Padova",
    role: {
      en: "Bachelor's Degree in Computer Science",
      it: "Laurea Triennale in Informatica"
    },
    period: {
      en: "2018 - 2021",
      it: "2018 - 2021"
    },
    description: {
      en: "Bachelor’s Degree at the School of Science, Computer Science curriculum. In-depth knowledge of multiple programming languages, both functional and object-oriented. Acquired software development best practices covering the full lifecycle and agile team management methodologies.",
      it: "Laurea Triennale Scuola di Scienze, indirizzo Informatico. Conoscenza approfondita di molti linguaggi di programmazione, sia funzionali che ad oggetti. Acquisizione di best practices nell'ambito di sviluppo software riguardo al suo ciclo di vita e alla gestione dell'organizzazione del team di sviluppo tramite metodologie agili."
    },
    type: "education"
  },
  {
    id: "3",
    company: "ITIS Enrico Fermi",
    role: {
      en: "High School Diploma in Computer Science",
      it: "Diploma, indirizzo Informatico"
    },
    period: {
      en: "2013 - 2018",
      it: "2013 - 2018"
    },
    description: {
      en: "Technical high school diploma in Computer Science. Gained foundational knowledge of programming languages and key computer science concepts.",
      it: "Diploma, indirizzo Informatico. Conoscenza di base di alcuni linguaggi di programmazione e di concetti chiave nell'ambito informatico."
    },
    type: "education"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Wishy",
    description: {
      en: "Customized wishlist.",
      it: "Lista dei desideri personalizzata."
    },
    type: "backend",
    techStack: ["Golang", "MongoDB", "AWS", "Serverless"],
    githubUrl: "https://github.com/nicomanto/wishy",
    imageUrl: "/img/projects/wish-list.png"
  },
  {
    id: "2",
    title: "TrendInsight",
    description: {
      en: "Twitter bot that shows trends insights about popular tweets.",
      it: "Bot di Twitter che mostra statistiche sui tweet più popolari della piattaforma."
    },
    type: "backend",
    techStack: ["Python", "Twitter API"],
    githubUrl: "https://github.com/nicomanto/TrendInsight",
    liveUrl: "https://twitter.com/insight_trend",
    imageUrl: "/img/projects/trendInsight.png"
  },
  {
    id: "3",
    title: "CoinbaseBroker",
    description: {
      en: "Script that sells cryptocurrencies after exceeding specific thresholds on the Coinbase platform.",
      it: "Script che permette la vendita di cryptovalute dopo il superamento di specifiche soglie sulla piattaforma Coinbase."
    },
    type: "backend",
    techStack: ["Python", "Coinbase API"],
    githubUrl: "https://github.com/nicomanto/CoinbaseBroker",
    imageUrl: "/img/projects/broker.png"
  },
  {
    id: "4",
    title: "ListManager",
    description: {
      en: "Telegram bot that manage lists created by users. It integrate a connection to the skill List Manager created for Alexa.",
      it: "Bot Telegram che permettere di gestire delle liste definite dall'utente. Inoltre permette il collegamento con la skill List Manager di Alexa."
    },
    type: "backend",
    techStack: ["Python", "Telegram API"],
    githubUrl: "https://github.com/nicomanto/ListManager",
    liveUrl: "https://t.me/ListManager8aBot",
    imageUrl: "/img/projects/listing.png"
  },
  {
    id: "5",
    title: "Photo Site",
    description: {
      en: "Website for a photo model that offer the possibilty to show personal photo and personal informations.",
      it: "Sito web per fotomodella dove si possono visualizzare le informazioni principali, i contatti e le foto effettuate da essa."
    },
    type: "fullstack",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/nicomanto/Photo-site",
    liveUrl: "https://photo-site-nicomanto.vercel.app/",
    imageUrl: "/img/projects/photo-site.png"
  },
  {
    id: "6",
    title: "EmporioLambda",
    description: {
      en: "E-commerce website in Serverless style that used service from Amazon Web Services (AWS) and Next.js framework. Proposed by RedBabel.",
      it: "Sito di E-commerce in stile Serverless sviluppato tramite i servizi Amazon Web Services (AWS) e il framework Next.js. Proposto da RedBabel."
    },
    type: "backend",
    techStack: ["Next.js", "AWS", "Serverless","TypeScript","JavaScript"],
    githubUrl: "https://github.com/nicomanto/EmporioLambda",
    liveUrl: "https://emporio-lambda-fe.vercel.app/",
    imageUrl: "/img/projects/emporio-lambda.png"
  },
  {
    id: "7",
    title: "Fly Web",
    description: {
      en: "Website where you can organize your travel. In this site you can choose a destination and next buy your plane ticket.",
      it: "Sito web che permette l'intera gestione di una prenotazione di un viaggio, dalla ricerca all'acquisto."
    },
    type: "backend",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/nicomanto/FlyWeb",
    imageUrl: "/img/projects/FlyWebLogo.png"
  },
  {
    id: "8",
    title: "Oenology",
    description: {
      en: "Database that can be used by winery.",
      it: "Database che può essere usato da un'azienda vinicola."
    },
    type: "backend",
    techStack: ["SQL", "Python"],
    githubUrl: "https://github.com/nicomanto/Oenology",
    imageUrl: "/img/projects/oenology.png"
  },
  {
    id: "9",
    title: "QuizRoom",
    description: {
      en: "Software where you can create quiz blocks and run them. Designed to be used in schools by both teachers and student.",
      it: "Software dove è possibile creare blocchi di quiz ed eseguirli. Pensato per essere usato in ambito scolastico sia dai docenti che dagli alunni."
    },
    type: "fullstack",
    techStack: ["QT", "C++"],
    githubUrl: "https://github.com/nicomanto/QuizRoom",
    imageUrl: "/img/projects/quiz-room.png"
  }
];
