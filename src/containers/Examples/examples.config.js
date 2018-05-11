// Project: Content Marketing Platform
import cmsSignIn from './images/cms/cms-signIn.gif'
import cmsSignUp from './images/cms/cms-signUp.gif'
import cmsSearchFilter from './images/cms/cms-searchFilter.gif'
import cmsPagination from './images/cms/cms-pagination.gif'
import cmsPeople from './images/cms/cms-people.gif'
import cmsArticles from './images/cms/cms-articles.gif'
import cmsRelatedData from './images/cms/cms-relatedData.gif'
import cmsPolyglot from './images/cms/cms-polyglot.gif'
import cmsGraphQL from './images/cms/cms-graphql.gif'
import cmsDashboards from './images/cms/cms-dashboards.gif'
// Project: Business Portal
import workflowNavMenu from './images/workflowManager/workflow-navMenu.gif'
import workflowAddLead from './images/workflowManager/workflow-addLead.gif'
import workflowTaskBoard from './images/workflowManager/workflow-taskBoard.gif'
import workflowSignUp from './images/workflowManager/workflow-signUp.gif'
import workflowPasswordQuality from './images/workflowManager/workflow-passwordQuality.gif'
import workflowGeoLocation from './images/workflowManager/workflow-geoLocation.gif'
import workflowPhotoSlider from './images/workflowManager/workflow-photoSlider.gif'
import graphQLFlyweight from './images/workflowManager/router.png'
// Experiment: Mackintosh Windows
import windowsMenu from './images/windows98/windows-menu.gif'
import windowsProperties from './images/windows98/windows-adamProperties.gif'
import windowsResume from './images/windows98/windows-adamResume.gif'
import windowsHobbies from './images/windows98/windows-adamHobbies.gif'
import windowsResponsive from './images/windows98/windows-responsive.gif'
// Course: React 16
import burgerSignup from './images/react16/burger-signup.gif'
import burgerCreation from './images/react16/burger-creation.gif'
// Course: Modern React
import modernWeather from './images/modernReact/modern-weather.gif'
import modernYoutube from './images/modernReact/modern-youtube.gif'
// Course: Advanced React
import advancedSignup from './images/advancedReact/advanced-signup.gif'
// Course: Advanced React
import addSongs from './images/graphqlReact/add-songs.gif'
// Course: Advanced node.js
import chatBot from './images/advancedNode/chatbot.gif'
// Course: React Native
import employeeManager from './images/reactNativeRedux/employee-manager.gif'
import techStack from './images/reactNativeRedux/tech-stack.gif'
import albumPurchase from './images/reactNativeRedux/album-purchase.gif'
// Course: Web Developer Bootcamp
import campsiteSignup from './images/devBootcamp/campsite-signup.gif'
import campsiteAddNew from './images/devBootcamp/campsite-addNew.gif'
import campsiteComments from './images/devBootcamp/campsite-comments.gif'
import rgbGame from './images/devBootcamp/rgb-game.gif'
import movieSearch from './images/devBootcamp/movie-search.gif'

export default [ /* eslint-disable object-curly-newline */
  {
    // PROJECTS
    category_id: 'projects',
    feature_image: cmsSignIn,
    feature_id: 'project: content marketing platform',
    feature_URL_primary: {
      enabled: true,
      label: 'BACK SOURCE',
      tooltip: 'View Backend source code',
      url: 'https://github.com/agm1984/adammackintosh-dot-net-server',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'FRONT SOURCE',
      tooltip: 'View Frontend source code',
      url: 'https://github.com/agm1984/adammackintosh-dot-net-webapp',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'This project is a result of thousands of hours of research, trial and error, and pursuit of best practices for JavaScript engineering. It is important to note that sometimes, correct information was very hard to track down given the relative newness of isomorphic JavaScript co-mingled with 10 years of ES5. When the work day is done, I usually go home and continue coding. When tough problems arise at work, I always go home and continue researching. Details are very important to me. Details are what set a Company apart and what raise the bar of quality. I recommend taking a look at both the server and client code bases for this project if you have a couple minutes available for research.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'REACT', 'REDUX', 'REACT-TABLE', 'JSON WEB TOKENS'],
      secondary: ['CREATE-REACT-APP', 'NODE.JS', 'GRAPHQL', 'NEO4J', 'MONGO DB'],
    },
    feature_images: [
      { image_id: 0, image_src: cmsSignIn, image_caption: 'JWT AUTHENTICATION', image_seen: false },
      { image_id: 1, image_src: cmsSignUp, image_caption: 'MULTI-STAGE SIGNUP', image_seen: false },
      { image_id: 2, image_src: cmsSearchFilter, image_caption: 'MULTI-FIELD SEARCH', image_seen: false },
      { image_id: 3, image_src: cmsPagination, image_caption: 'PAGINATION CONTROLS', image_seen: false },
      { image_id: 4, image_src: cmsPeople, image_caption: 'USER MANAGEMENT', image_seen: false },
      { image_id: 5, image_src: cmsArticles, image_caption: 'BLOG SYSTEM', image_seen: false },
      { image_id: 6, image_src: cmsRelatedData, image_caption: 'RELATED DATA', image_seen: false },
      { image_id: 7, image_src: cmsPolyglot, image_caption: 'NEO4J & MONGO DB', image_seen: false },
      { image_id: 8, image_src: cmsGraphQL, image_caption: 'GRAPHQL', image_seen: false },
      { image_id: 9, image_src: cmsDashboards, image_caption: 'SERVER METRICS', image_seen: false },
    ],
    feature_conclusion: 'I am a systems thinker with an acute sense of patterns. If given the opportunity, I choose to work with a team of unique individuals that appreciate and utilize memes.',
    feature_seen: false,
  },
  {
    category_id: 'projects',
    feature_image: workflowNavMenu,
    feature_id: 'project: business management portal',
    feature_URL_primary: {
      enabled: true,
      label: 'BACK SOURCE',
      tooltip: 'View Backend source code',
      url: 'https://github.com/agm1984/adammackintosh-dot-net-server',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'FRONT SOURCE',
      tooltip: 'View Frontend source code',
      url: 'https://github.com/agm1984/project-manager-webapp',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'This project features logic from a book called \'Design Patterns: Elements of Reusable Object-Oriented Software.\' The app\'s routing was inspired by the Flyweight Pattern. I recommend taking a look at the Frontend code base if you have a couple minutes available for research.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'REACT', 'REDUX', 'JSON WEB TOKENS'],
      secondary: ['NODE.JS', 'GRAPHQL', 'NEO4J', 'MONGO DB'],
    },
    feature_images: [
      { image_id: 0, image_src: workflowNavMenu, image_caption: 'NAVIGATION MENU', image_seen: false },
      { image_id: 1, image_src: workflowSignUp, image_caption: 'REGISTRATION SYSTEM', image_seen: false },
      { image_id: 2, image_src: workflowTaskBoard, image_caption: 'KANBAN BOARD', image_seen: false },
      { image_id: 3, image_src: workflowAddLead, image_caption: 'CUSTOMER MANAGEMENT', image_seen: false },
      { image_id: 4, image_src: workflowPasswordQuality, image_caption: 'PASSWORD ALGORITHM', image_seen: false },
      { image_id: 5, image_src: workflowGeoLocation, image_caption: 'GOOGLE MAPS API', image_seen: false },
      { image_id: 6, image_src: workflowPhotoSlider, image_caption: 'IMAGE SLIDER', image_seen: false },
      { image_id: 7, image_src: graphQLFlyweight, image_caption: 'GRAPHQL', image_seen: false },
    ],
    feature_conclusion: 'A rapidly growing skill and passion of mine is UI interactions during application events and state-changes. When I see things move in the browser, I see the mathematical art of motion tweens. In web browsers, there is a thing called jank. The nature of a render loop makes certain things expensive. It takes specific focus to ensure animations are buttery smooth across all devices that might encounter them. It also takes specific focus to account for Web Accessibility.',
    feature_seen: false,
  },
  {
    category_id: 'projects',
    feature_image: windowsMenu,
    feature_id: 'experiment: mackintosh windows',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/mackintosh-windows',
    },
    feature_URL_secondary: { enabled: false },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'Mackintosh Windows features a responsive UI with desktop mode, mobile mode, and window-state manager. CSS Media Queries allow for fluid UI resizing from the smallest mobile devices to the largest desktop monitors. The window-state manager is heavily inspired by a book called \'Design Patterns: Elements of Reusable Object-Oriented Software.\' I tried to use as many software design patterns as possible from the book. I chose not to use Redux so I could demonstrate ES6 JavaScript functional programming techniques alongside React\'s standard implementation. I recommend taking a look at the code base if you have a couple minutes available for research.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'REACT', 'REACT-DRAGGABLE'],
      secondary: ['CREATE-REACT-APP', 'BABEL', 'ES LINT', 'JEST', 'PUPPETEER'],
    },
    feature_images: [
      { image_id: 0, image_src: windowsMenu, image_caption: 'WINDOW-STATE MANAGER', image_seen: false },
      { image_id: 1, image_src: windowsProperties, image_caption: 'ADAM PROPERTIES', image_seen: false },
      { image_id: 2, image_src: windowsResume, image_caption: 'ADAM RESUME', image_seen: false },
      { image_id: 3, image_src: windowsHobbies, image_caption: 'ADAM HOBBIES', image_seen: false },
      { image_id: 4, image_src: windowsResponsive, image_caption: 'RESPONSIVE UI', image_seen: false },
    ],
    feature_conclusion: 'I have a long-term vision for a portfolio demonstration that involves three operating systems: Windows, MacOS, and a Linux. Each one helps me augment a particular aspect of my skills and experience. For example, Windows is an environment that brings mood of the internet\'s early days. Windows 95 incorporated at-scale UX R&D which makes its UI patterns useful still for today\'s UX concerns. MacOS represents a medium that contrasts the dated UI of Windows and allows for inclusion of the highest quality graphics. A Linux-oriented environment helps me demonstrate command-line and data-analysis topics. This Windows experiment represents the structure for the first of the three environments.',
    feature_seen: false,
  },
  {
    // COURSES
    category_id: 'courses',
    feature_image: burgerSignup,
    feature_id: 'course: react 16 complete guide',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW COURSE',
      tooltip: 'View course details',
      url: 'https://www.udemy.com/react-the-complete-guide-incl-redux',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/react-burger-builder',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'This course contains a ton of Functional Reactive Programming and React theory along with comprehensive applied skills. I\'ve watched a lot of Academind\'s JavaScript tutorial videos on YouTube. He leaves no stone unturned. The main project in this course is a burger order app that features advanced architecture and best-practice patterns.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'REACT', 'REDUX', 'REACT-ROUTER V4'],
      secondary: ['CREATE-REACT-APP', 'BABEL', 'ES LINT', 'AXIOS'],
    },
    feature_images: [
      { image_id: 0, image_src: burgerSignup, image_caption: 'CLIENTSIDE AUTH', image_seen: false },
      { image_id: 1, image_src: burgerCreation, image_caption: 'SECURE CHECKOUT', image_seen: false },
    ],
    feature_conclusion: 'I recommend this course to anyone because of its use of immutable, functional JavaScript and also because of its use of scalable component-reuse techniques.',
    feature_seen: false,
  },
  {
    category_id: 'courses',
    feature_image: modernWeather,
    feature_id: 'course: modern react with redux',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW COURSE',
      tooltip: 'View course details',
      url: 'https://www.udemy.com/react-redux',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/react-weather-app',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'Around early-to-mid-2017, this was the first React course I took after doing months of server-side JavaScript and API development in node.js. I was working with microservices, Express.js, Hapi.js, stateless JWT authentication, worker processes, Redis semaphores, Neo4j, Mongo DB, GraphQL, and RSA encryption.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'REACT', 'REDUX', 'REDUX-FORM', 'REACT-ROUTER V4', 'REACT-SPARKLINES', 'GOOGLE-MAPS API', 'YOUTUBE API', 'BOOTSTRAP'],
      secondary: ['NPM', 'WEBPACK', 'BABEL', 'ES LINT', 'AJAX'],
    },
    feature_images: [
      { image_id: 0, image_src: modernWeather, image_caption: 'WEATHER API', image_seen: false },
      { image_id: 1, image_src: modernYoutube, image_caption: 'YOUTUBE API', image_seen: false },
    ],
    feature_conclusion: 'I enjoyed this course because Stephen Grider did an amazing job not only explaining React and Redux architecture but also visually showing it. There was a lot of practical utility in building a YouTube API-consumer component and a weather app both using Ajax. The final project in this course involved a CRUD-based REST API and blog app.',
    feature_seen: false,
  },
  {
    category_id: 'courses',
    feature_image: advancedSignup,
    feature_id: 'course: advanced react and redux',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW COURSE',
      tooltip: 'View course details',
      url: 'https://www.udemy.com/react-redux-tutorial',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/react-graphql-auth',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'This course was instrumental in crystallizing my server-side knowledge of JSON Web Tokens. It was around this time I became able to quickly deploy new APIs or app clients on demand. The course was a good refresher for REST endpoints and a good primer for later courses that used GraphQL.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'REACT TESTING', 'REACT', 'REDUX', 'REDUX-FORM', 'REACT-ROUTER V2', 'HIGHER-ORDER COMPONENTS', 'MIDDLEWARE', 'JSON WEB TOKENS', 'LOCALSTORAGE'],
      secondary: ['NPM', 'WEBPACK', 'BABEL', 'ES LINT', 'AJAX'],
    },
    feature_images: [
      { image_id: 0, image_src: advancedSignup, image_caption: 'JWT AUTH', image_seen: false },
    ],
    feature_conclusion: 'This course was a logical next-step for me after the Modern React and Redux course. It offered a fascinating twist by using an older version of React-Router and Redux-Form which are different APIs. Looking back, this was around the time I really started to understand and combine reactive programming with practices of server-side monadic and functor-based functional programming techniques in node.js. Functional Reactive Programming (FRP) reminds me a lot of Calculus in that functions can be composed to drastically simplify complex systems. Calculus relies on determinstic transformations for the same reasons that FRP prefers immutable, unidirectional data flow. That is simply another way to describe a deterministic transformation from point A to B.',
    feature_seen: false,
  },
  {
    category_id: 'courses',
    feature_image: addSongs,
    feature_id: 'course: graphql with react',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW COURSE',
      tooltip: 'View course details',
      url: 'https://www.udemy.com/graphql-with-react-course',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/react-graphql-song-app',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'I was already sold on the benefits of GraphQL long before taking this course, but I was coming from a server-side perspective where data inefficiencies cost CPU, bandwidth, and time—some things GraphQL tends to minimize. This course contains lots of theory about how to structure data-centric React applications.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'GRAPHQL', 'REACT', 'REACT-ROUTER V2', 'APOLLO-CLIENT'],
      secondary: ['NPM', 'WEBPACK', 'BABEL', 'ES LINT'],
    },
    feature_images: [
      { image_id: 0, image_src: addSongs, image_caption: 'OPTIMISTIC UI', image_seen: false },
    ],
    feature_conclusion: 'Optimistic UI-updating is an Apollo Client feature that allows the app to assume a process will complete successfully and therefore show a result without waiting for a reply. This time savings makes for instant UI feedback and great UX. Along with optimistic UI, Apollo Client handles data pre-fetching easily. I haven\'t had a chance to implement it in a production app yet, but great performance and UX could potentially be unlocked because pre-fetching reduces later work on subsequent page loads.',
    feature_seen: false,
  },
  {
    category_id: 'courses',
    feature_image: chatBot,
    feature_id: 'course: advanced node.js',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW COURSE',
      tooltip: 'View course details',
      url: 'https://www.pluralsight.com/courses/nodejs-advanced',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/advanced-nodejs-pluralsight',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'I completed this course in early 2017 after working with node.js for some time building out APIs that used multiple threads, child worker processes, Neo4j, and Redis. I took this course around the time I was practicing async/await syntax and composing async functions with aim for declarative, synchronous-looking code.',
    feature_tech: {
      primary: ['JAVASCRIPT', 'NODE.JS'],
      secondary: ['UDP SOCKETS', 'CHILD PROCESSES', 'CHAT SERVERS', 'CHATBOTS'],
    },
    feature_images: [
      { image_id: 0, image_src: chatBot, image_caption: 'CHATBOT', image_seen: false },
    ],
    feature_conclusion: 'The course was timely for many reasons. Most notably, it laid the foundations for my understanding of the JavaScript event loop and call stack. The course went into some length about LIBUV and using C++ plugins in node.js. I built a few chat programs as we explored streams and UDP and TCP sockets. I recommend it to anyone looking to skill up in reactive programming or isomorphic JavaScript.',
    feature_seen: false,
  },
  {
    category_id: 'courses',
    feature_image: employeeManager,
    feature_id: 'course: react native and redux',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW COURSE',
      tooltip: 'View course details',
      url: 'https://www.udemy.com/the-complete-react-native-and-redux-course',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/react-native-employeemanager',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'I quickly learned a lot with this course. My iOS and Android QA experience came in handy to shoulder the initial learning curve. The key takeaway for me is that React Native brings a language-agnostic bridge adapter to native mobile, and this unlocks the power of the JavaScript bundle.',
    feature_tech: {
      primary: ['ES6+ JAVASCRIPT', 'REACT NATIVE', 'REDUX', 'FIREBASE', 'AXIOS'],
      secondary: ['CREATE-REACT-NATIVE-APP', 'ES LINT', 'USER AUTHENTICATION', 'UI ANIMATIONS'],
    },
    feature_images: [
      { image_id: 0, image_src: employeeManager, image_caption: 'EMPLOYEE MANAGER APP', image_seen: false },
      { image_id: 1, image_src: techStack, image_caption: 'TECH STACK APP', image_seen: false },
      { image_id: 2, image_src: albumPurchase, image_caption: 'ALBUM PURCHASE APP', image_seen: false },
    ],
    feature_conclusion: 'I recently became interested in the animation of UI interactions. I did one year of a BSc. Major in Physics Degree at Vancouver Island University. Besides learning things about Physics, Math, and Economics that I use every day, I find 2D and 3D kinematics quite useful when it comes to animating the x, y, z axes. I am always looking for opportunities to implement beautiful app interactions. I enjoy the science behind bringing a design or idea to life.',
    feature_seen: false,
  },
  {
    category_id: 'courses',
    feature_image: rgbGame,
    feature_id: 'course: web developer bootcamp',
    feature_URL_primary: {
      enabled: true,
      label: 'VIEW COURSE',
      tooltip: 'View course details',
      url: 'https://www.udemy.com/the-web-developer-bootcamp',
    },
    feature_URL_secondary: {
      enabled: true,
      label: 'VIEW SOURCE',
      tooltip: 'View source code',
      url: 'https://github.com/agm1984/YelpCamp',
    },
    feature_URL_tertiary: { enabled: false },
    feature_summary: 'This is a very popular course and for good reason. Colt Steele is a great teacher, and he laid the JavaScript foundations for me. This course is much more comprehensive than it may appear at face value. I had already been doing development cycle work for five years prior to this, but this course provided me the drills to become strong with JavaScript.',
    feature_tech: {
      primary: ['HTML', 'CSS', 'DOM MANIPULATION', 'ES5 JAVASCRIPT', 'JQUERY', 'NODE.JS', 'EXPRESS.JS'],
      secondary: ['REST API', 'MONGO DB', 'MONGOOSE.JS', 'PASSPORT.JS', 'ES LINT', 'BOOTSTRAP', 'EJS'],
    },
    feature_images: [
      { image_id: 0, image_src: rgbGame, image_caption: 'ADVANCED DOM CONTROL', image_seen: false },
      { image_id: 1, image_src: campsiteSignup, image_caption: 'AUTHENTICATION SYSTEM', image_seen: false },
      { image_id: 2, image_src: campsiteAddNew, image_caption: 'REST API', image_seen: false },
      { image_id: 3, image_src: campsiteComments, image_caption: 'COMMENTS SYSTEM', image_seen: false },
      { image_id: 4, image_src: movieSearch, image_caption: 'MOVIE SEARCH API', image_seen: false },
    ],
    feature_conclusion: 'This course is great for people that have not done JavaScript or CSS in a while and want to brush up on the DOM. With the course, a person could get up and running with REST endpoints and websites in node.js. I would consider this a great precursor to more complex APIs in node.js and to more complex Frontend clients.',
    feature_seen: false,
  },
] /* eslint-enable object-curly-newline */
