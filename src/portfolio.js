/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aigerim Dauletbaeva",
  title: "Привет! Я Айгерим 👋",
  subTitle: emoji(
    "Аналитик данных 📊 с опытом работы в государственных системах. Работаю с Python, SQL, Power BI и визуализацией данных. Увлекаюсь цифровизацией, BI-решениями и обучением."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Заменить на твою ссылку
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Что я умею",
  subTitle: "Анализирую данные, визуализирую смыслы, автоматизирую отчёты",
  skills: [
    emoji("⚡ Анализ данных с использованием Python, pandas, NumPy"),
    emoji("⚡ Построение интерактивных отчётов и дашбордов в Power BI"),
    emoji("⚡ Работа с базами данных и написание SQL-запросов в PostgreSQL"),
    emoji("⚡ Визуализация и представление информации с помощью matplotlib и seaborn"),
    emoji("⚡ Подготовка статистических отчётов, участие в цифровизации государственных ИС")
  ],

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Excel",
    fontAwesomeClassname: "fas fa-file-excel" // используем Excel-иконку
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "Pandas",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "NumPy",
    fontAwesomeClassname: "fas fa-square-root-alt"
  },
  {
    skillName: "Matplotlib / Seaborn",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  }
],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Показывать раздел "Образование"
  schools: [
    {
      schoolName: "Евразийский национальный университет им. Л.Н. Гумилёва",
      logo: require("./assets/images/enuLogo.png"), 
      subHeader: "Бакалавр математического и компьютерного моделирования",
      duration: "Сентябрь 2020 – Июнь 2024",
      desc: "Окончила с отличием. Специализация — математическое моделирование, анализ данных и программирование.",
      descBullets: [
        "Прошла курсы по Python, SQL, анализу данных, машинному обучению и Power BI",
        "Участвовала в исследовательских проектах и международной выставке StudExpo-2024"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Показывать секцию с графиками навыков
  experience: [
    {
      Stack: "Аналитика данных (Power BI, Excel, визуализация)",
      progressPercentage: "90%"
    },
    {
      Stack: "Программирование на Python (Pandas, NumPy, Matplotlib)",
      progressPercentage: "80%"
    },
    {
      Stack: "Работа с базами данных (SQL, PostgreSQL)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Эксперт управления цифровизации",
      company: "Бюро национальной статистики РК",
      companylogo: require("./assets/images/bnsLogo.png"), // Убедись, что файл есть
      date: "Февраль 2025 – настоящее время",
      desc: "Участвую в цифровизации статистических процессов, сопровождаю ИИС «е-Статистика» и координирую работы по ней.",
      descBullets: [
        "Контроль доступов, сопровождение и взаимодействие с IT-подрядчиками",
        "Участие в проектах по модернизации аналитической инфраструктуры"
      ]
    },
    {
      role: "Ведущий специалист по информационной безопасности",
      company: "Министерство юстиции РК",
      companylogo: require("./assets/images/justiceLogo.png"), // Проверь путь и расширение
      date: "Август 2024 – Февраль 2025",
      desc: "Отвечала за обеспечение информационной безопасности и техническую поддержку пользователей.",
      descBullets: [
        "Управление правами доступа и мониторинг информационных систем",
        "Обработка обращений граждан через портал «Е-Өтініш»"
      ]
    },
    {
      role: "Стажёр — аналитик данных",
      company: "KazAeroSpace",
      companylogo: require("./assets/images/kazAeroLogo.png"), // Замени на корректное имя или временно закомментируй
      date: "Март 2023 – Апрель 2023",
      desc: "Производственная практика: работа с геоданными, моделирование и участие в разработке программного обеспечения для автоматизации государственных услуг.",
      descBullets: [
        "Создание и анализ геоданных в ArcGIS",
        "Разработка 2D/3D моделей и участие в проектировании ГИС"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Достижения и сертификаты 🏆"),
  subtitle: "Сертификаты, награды и проекты, подтверждающие мои знания и навыки",

  achievementsCards: [
    {
      title: "Сертификат — BI Developer от Islam Derbissalin",
      subtitle: "Завершён авторский курс по Power BI и визуализации данных",
      image: require("./assets/images/powerbiLogo.png"), // замените или закомментируйте при необходимости
      imageAlt: "BI Course",
      footerLink: [
        {
          name: "Сертификат PDF",
          url: "/certificates/islam-pbi.pdf" 
        }
      ]
    },
    {
      title: "Диплом 1 степени — StudEXPO 2024",
      subtitle: "Проект по ИИ-моделированию водохранилища, занявший 1 место на международной выставке в Ош",
      image: require("./assets/images/expoLogo.jpg"),
      imageAlt: "StudEXPO Logo",
      footerLink: [
        {
          name: "Сертификат PDF",
          url: "/certificates/studexpo-2024.pdf"
        },
        {
          name: "GitHub проекта",
          url: "https://github.com/aikera12/Diplom"
        }
      ]
    },
    {
      title: "Stepik Python + Статистика",
      subtitle: "Комплексные курсы Stepik по Python и статистике",
      image: require("./assets/images/stepikLogo.jpg"),
      imageAlt: "Stepik Logo",
      footerLink: [
        {
          name: "Python",
          url: "/certificates/stepik-python.pdf"
        },
        {
          name: "Статистика",
          url: "/certificates/stepik-stat.pdf"
        }
      ]
    },
    {
      title: "Intermediate Python — DataCamp",
      subtitle: "Изучение основ программирования на Python",
      image: require("./assets/images/datacampLogo.jpg"),
      imageAlt: "DataCamp Logo",
      footerLink: [
        {
          name: "Сертификат PDF",
          url: "/certificates/intermediate-python.pdf"
        }
      ]
    },
    {
      title: "Intermediate SQL — DataCamp",
      subtitle: "Практическая работа с SQL-запросами и базами данных",
      image: require("./assets/images/datacampLogo.jpg"),
      imageAlt: "DataCamp Logo",
      footerLink: [
        {
          name: "Сертификат PDF",
          url: "/certificates/intermediate-sql.pdf"
        }
      ]
    },
    {
      title: "Joining Data with pandas — DataCamp",
      subtitle: "Работа с объединением таблиц в pandas",
      image: require("./assets/images/datacampLogo.jpg"),
      imageAlt: "DataCamp Logo",
      footerLink: [
        {
          name: "Сертификат PDF",
          url: "/certificates/join-data-pandas.pdf"
        }
      ]
    },
    {
      title: "Визуализация данных — Seaborn",
      subtitle: "Работа с библиотекой Seaborn для визуального анализа",
      image: require("./assets/images/seabornLogo.png"),
      imageAlt: "Seaborn Logo",
      footerLink: [
        {
          name: "Сертификат PDF",
          url: "/certificates/intro-visual-seaborn.pdf"
        }
      ]
    },
    {
      title: "Intro to Statistics with Python — Stepik",
      subtitle: "Введение в статистику на Python",
      image: require("./assets/images/stepikLogo.jpg"),
      imageAlt: "Stepik Logo",
      footerLink: [
        {
          name: "Сертификат PDF",
          url: "/certificates/intro-stat-python.pdf"
        }
      ]
    }
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Связаться со мной ☎️"),
  subtitle:
    "Обсудим проект, сотрудничество или просто пообщаемся. Моя почта всегда открыта!",
  number: "+7-705-435-22-85", // замени на свой номер, если хочешь показывать
  email_address: "aikerakerakera@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
