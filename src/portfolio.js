/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Trung's Portfolio",
  description:
    "Full-Stack Developer skilled in React, TypeScript, and Node.js, with experience in Shopify theme development and e-commerce solutions. Currently pursuing a Master's in Computer Networks at Sorbonne Université, focusing on network programming and security.",
  og: {
    title: "Vinh Trung THIEU Portfolio",
    type: "website",
    url: "http://tvtrung.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Vinh Trung THIEU",
  logo_name: "Trung Thieu ",
  nickname: "john_thieu",
  subTitle:
    "Full-Stack Developer skilled in React, TypeScript, and Node.js, with experience in Shopify theme development and e-commerce solutions. Currently pursuing a Master's in Computer Networks at Sorbonne Université, focusing on network programming and security.",
  resumeLink:
    "https://drive.google.com/file/d/1qo_3xWx7G2bdKByhaqpgW0-e8WnQDVLW/view?usp=sharing",
  portfolio_repository: "https://github.com/tvtrungg/tvt-portfolio",
  githubProfile: "https://github.com/tvtrungg",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/tvtrungg",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/tvtrungg",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tvtrung/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:thieuvinhtrung4123@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/john.thieu2410/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cybersecurity & Networking",
      fileName: "CyberSecurityImg",
      skills: [
        "⚡ Currently pursuing a Master's in Networks at Sorbonne Université, France",
        "⚡ Familiar with networking concepts (TCP/IP, OSI model, sockets, ",
        "⚡ Contributing to a Smart Contract project and OS development",
        "⚡ Proficient in C/C++, Python, and JavaScript for network-related projects",
      ],
      softwareSkills: [
        {
          skillName: "Encryption",
          fontAwesomeClassname: "carbon:encryption",
          style: {
            backgroundColor: "transparent",
            color: "#40e3c1",
          },
        },
        {
          skillName: "Intrustion Detection",
          fontAwesomeClassname: "material-symbols:detection-and-zone",
          style: {
            backgroundColor: "transparent",
            color: "#e6b998",
          },
        },
        {
          skillName: "Cloud Security",
          fontAwesomeClassname: "carbon:ibm-cloud-security-compliance-center",
          style: {
            backgroundColor: "transparent",
            color: "#1b84d4",
          },
        },
        {
          skillName: "Wire Shark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "#1b84d4",
            borderRadius: "15%",
            color: "white",
          },
        },
        {
          skillName: "CCNA",
          fontAwesomeClassname: "simple-icons:cisco",
          style: {
            backgroundColor: "transparent",
            color: "white",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "C/C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "vscode-icons:file-type-sql",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience in building web apps with React, TypeScript, Next.js and Ant Design Pro",
        "⚡ Backend development with Node.js, Express.js, and ASP.NET Core",
        "⚡ Expertise in database management (SQL Server, Prisma) and API integration",
        "⚡ Proficient in state management with Redux, React Query and Valtio",
        "⚡ Familiar with cloud deployment using Verce, Netlify, and Heroku",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "Ant Design Pro",
          fontAwesomeClassname: "devicon:antdesign",
          style: {
            color: "#0170FE",
          },
        },
        {
          skillName: "Liquid - Shopify",
          fontAwesomeClassname: "logos:shopify",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#FFC83D",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Shopify Theme & E-commerce Development",
      fileName: "ShopifyImg",
      skills: [
        "⚡ Developed and implemented custom Shopify themes based on provided designs",
        "⚡ Tested functionality, interface layout, and documented reports on test cases",
        "⚡ Assisted customers with issue resolution and installation guidance",
        "⚡ Experienced in using Liquid, Ajax, JavaScript, Shopify, HTML & CSS",
      ],
      softwareSkills: [
        {
          skillName: "Liquid",
          fontAwesomeClassname: "catppuccin:liquid",
          style: {
            backgroundColor: "transparent",
            color: "#40e3c1",
          },
        },
        {
          skillName: "Shopify",
          fontAwesomeClassname: "logos:shopify",
          style: {
            backgroundColor: "transparent",
            color: "#1b84d4",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "vscode-icons:file-type-html",
          style: {
            backgroundColor: "transparent",
            color: "white",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
          style: {
            backgroundColor: "transparent",
            color: "white",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
            color: "white",
          },
        },
      ],
    },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/tvtrungg/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/tvtrung",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sorbonne Université - Paris 6",
      subtitle: "M.S. of Computer Networks",
      logo_path: "su_logo.png",
      alt_name: "Sorbonne Université",
      duration: "2024 - 2025",
      descriptions: [
        // "⚡ I have studied core subjects in network and telecommunications, including Network Architecture, Telecommunications Networks, and Network Security.",
        // "⚡ I have specialized in advanced topics like Routing, Wireless Networks, and Internet of Things (IoT).",
        // "⚡ I gained hands-on experience in Network Programming, Simulation, and Traffic Engineering through practical projects.",
        // "⚡ The program equipped me with the ability to design, optimize, and secure network systems in rapidly evolving technological environments.",
        // "⚡ I completed a 5-6 month internship where I applied my academic knowledge to real-world network system implementations.",
        // "⚡ I am prepared for roles such as Network Engineer, Telecom Specialist, R&D Engineer, and Network Security Expert in the telecommunications and IT industries."
        "⚡ I have completed the first semester of the RES Master's program, focusing on core subjects like Network Architecture, Telecommunications Networks, and Network Programming.",
        "⚡ I gained foundational knowledge in areas such as Network Design, Signal Processing, and Algorithms for Networking.",
        "⚡ I have been involved in hands-on projects such as Network Programming and Simulation, developing practical skills in configuring and optimizing network systems.",
        "⚡ The program is preparing me to adapt to rapid technological changes in networking and telecommunications through a mix of theoretical and practical learning.",
        "⚡ I am building a solid foundation for future specialization in areas such as Wireless Networks, IoT, and Network Security.",
      ],

      website_link: "https://www.sorbonne-universite.fr/",
    },
    {
      title: "Claude Bernard Lyon 1 University",
      subtitle: "BSc in Informatics",
      logo_path: "lyon_logo.png",
      alt_name: "Claude Bernard Lyon 1 University",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied core subjects in Mathematics, Physics, and Electronics.",
        "⚡ I gained expertise in IT areas such as Network Architecture, Programming, Operating Systems, Data Analysis, AI, Databases, Software Development, and Cybersecurity.",
        "⚡ I developed technical skills in software design, system optimization, and problem-solving.",
        "⚡ I enhanced my soft skills in leadership, teamwork, communication, and negotiation.",
      ],
      website_link: "https://www.univ-lyon1.fr/",
    },
    {
      title: "University of Science - VNUHCM",
      subtitle: "BSc in Informatics",
      logo_path: "hcmus_logo.png",
      alt_name: "University of Science - VNUHCM",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied core subjects in Mathematics, Physics, and Electronics.",
        "⚡ I gained expertise in IT areas such as Network Architecture, Programming, Operating Systems, Data Analysis, AI, Databases, Software Development, and Cybersecurity.",
        "⚡ I developed technical skills in software design, system optimization, and problem-solving.",
        "⚡ I enhanced my soft skills in leadership, teamwork, communication, and negotiation.",
      ],
      website_link: "https://en.hcmus.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML, CSS and Responsive Design",
      subtitle: "- F8 -",
      logo_path: "f8_logo.png",
      certificate_link: "https://fullstack.edu.vn/cert/e4gct",
      alt_name: "HTML, CSS and Responsive Design",
      color_code: "#ff7e22",
    },
    {
      title: "JavaScript and React",
      subtitle: "- F8 -",
      logo_path: "f8_logo.png",
      certificate_link: "https://fullstack.edu.vn/cert/901zb",
      alt_name: "Javascript",
      color_code: "#ff7e22",
    },
    {
      title: "Basic of Cybersecurity",
      subtitle: "- Codecademy -",
      logo_path: "codecademy_logo.png",
      certificate_link: "https://www.codecademy.com/profiles/VinhTrung",
      alt_name: "Basic of Cybersecurity",
      color_code: "#ffffff",
    },
    // Hex: 1F70C199, D83B0199, 00000099, 2A73CC, 4285F499, FFBB0099, 0C9D5899
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description: `<p>⚡ Full Stack Developer with experience in building web applications using ReactJS, NextJS, ASP.NET Core, and ExpressJS.</p> 
    <p>⚡ Proficient in UI/UX design, performance optimization, and API integration.</p> 
    <p>⚡ Experienced with SQL, MongoDB databases, and implementing secure systems. Strong problem-solving, communication skills, and fast learner.</p> 
    <p>⚡ Proficient in English and French (TCF-B1).</p>`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Frontend Developer & IT Support",
          company: "Halo Soft",
          company_url: "https://halothemes.net/",
          logo_path: "halo_logo.jpg",
          duration: "Mar 2024 - July 2024",
          location: "Ho Chi Minh City, Vietnam",
          description: `Halo Soft specializes in website design, e-commerce solutions, and SEO, offering templates for Shopify, Bigcommerce, and 3Dcart.
          <p>•	Develop and implement themes based on provided designs.</p>
          <p>•	Test functionality and interface layout, and document reports on test cases upon completion.</p>
          <p>•	Assist customers with issue resolution and installation guidance.</p>

          <p><b>Technologies</b>: Liquid, Ajax, Javascript, Shopify, HTML & CSS.</p>`,
          color: "#0879bf",
        },
        {
          title: "Frontend Developer",
          company: "WraParty Company",
          company_url: "https://www.wrapparty.vn/",
          logo_path: "wrapparty_logo.jfif",
          duration: "June 2023 - Oct 2023",
          location: "Ho Chi Minh City, Vietnam",
          description: `A landing page for WraParty - a media company specialized in producing standard advertisements and trendy.
          <p>• Implemented APIs and created a contact form with Formspree.</p>
          <p>• Use SEO techniques to improve website's visibility on search engines.</p>
          <p>• Integrated Google Maps API into web application to increase user experience.</p>
          <p><b>Technologies</b>: NextJS, ReactJS, TailwindCSS, Framer-motion, Antd, Typescript.</p>`,
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: `
    <p><b>Full-Stack Developer</b> with hands-on experience in building innovative, user-friendly web applications using modern technologies like React, TypeScript, Next.js, and Node.js.</p> 
    <p>Currently pursuing a <b>Master's degree in Cybersecurity & Networking</b>, enhancing my expertise in building secure and scalable solutions for real-world projects.</p>`,
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research & Insights",
  description:
    "Explore articles, studies, and perspectives on technology and science that I am passionate about.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "vulnerability-detection-in-smart-contracts",
      name:
        "Vulnerability Detection in Smart Contracts: A Comprehensive Survey",
      createdAt: "2024-07-08T11:51:15Z",
      description:
        " TRACTIn the growing ﬁeld of blockchain technology, smart contracts exist as transformative digital agree-ments that execute transactions autonomously in decentralised networks.",
      url:
        "https://www.researchgate.net/publication/382178364_Vulnerability_Detection_in_Smart_Contracts_A_Comprehensive_Survey",
    },
    {
      id: "the-i-in-llm-stands-for-intelligence",
      name: "The I in LLM stands for intelligence",
      createdAt: "2024-01-02T11:37:17Z",
      description:
        "I have held back on writing anything about AI or how we (not) use AI for development in the curl factory. Now I can't hold back anymore. Let me show you the most significant effect of AI on curl as of today - with examples.",
      url:
        "https://daniel.haxx.se/blog/2024/01/02/the-i-in-llm-stands-for-intelligence/",
    },
    {
      id: "so-sanh-web-2-0-web-3-0",
      name: "So sánh Web 2.0 & Web 3.0",
      createdAt: "2023-09-25T00:00:00Z",
      description:
        "Sự ra đời của Web2 (Web 2.0) và Web3 (Web 3.0) đã thay đổi hành vi của người dùng trực tuyến.",
      url: "https://200lab.io/blog/su-khac-biet-giua-web2-va-web3/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avt_logo.jfif",
    description:
      "Feel free to reach out for collaborations, job opportunities, or simply to connect - I'm always open to new ideas and exciting projects!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document my experiences throughout my professional journey and share insights on technical topics and industry trends",
    // link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Antony, Paris, France - 92160",
    locality: "Antony",
    country: "France",
    region: "Paris",
    postalCode: "92160",
    streetAddress: "Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/JcjpFgsZok9DrvQ8A",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
