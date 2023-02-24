import { Pokedex, Moviefy, StudyAdvisor, Moviefy2, StudyAdvisor2, Pokedex2} from '../img/index'

const projects = [
    {
        name: 'Moviefy +',
        img: [Moviefy, Moviefy2], 
        codeUrl: 'https://github.com/BelenDeAmorrortu/PF-Henry-Front',
        projectUrl: 'https://hpfc.netlify.app/',
        videoUrl: 'https://www.youtube.com/watch?v=poxn0ZRXXxM',
        alert: true,
        description: <p>Moviefy+ is a website to book cinema tickets as well as a movie streaming service.<br/>The project was developed on a period of three weeks. We had one-week sprints where our team would present to a Product Owner the progress in the development of the web app.</p>,
        features:'Payment gateway - Email notifications - Shopping cart - User authentication and authorization - Admin Dashboard',
        technologies:'React - React Router Dom - Redux - Mongo Db - Mongoose - Node.js - Express.js - Sass - Firebase - Mercado Pago - Cloudinary.'
    },
    {
        name: 'Study Advisor',
        img: [StudyAdvisor, StudyAdvisor2], 
        codeUrl: null,
        projectUrl: null,
        videoUrl: 'https://youtu.be/5djjAW3O3Do',
        alert: true,
        description:<>
        <p>This website is still in development.</p>
        <p>Study Advisor is an e-learning website which provides different tools such as a Calendar, a Summary Editor and a Flash Card Generator for each user to find the most efficient way to carry out their studies and learn new concepts.</p>
        </>,
        features:'Real time collaborative Summary Editor - Flash Card Generator - Calendar - Dark/Light Mode - User authentication and authorization',
        technologies: 'React - React Router Dom - Redux - Socket.io - Mongo Db - Mongoose - Node.js - Express.js - Sass - Firebase - SweetAlert2'
    },
    {
        name: 'Poke-dex',
        img: [Pokedex, Pokedex2], 
        codeUrl: 'https://github.com/BelenDeAmorrortu/Poke-dex',
        projectUrl: 'https://pokedex-belendeamorrortu.netlify.app',
        videoUrl: 'https://youtu.be/r_QTq5DfLR4',
        alert: false,
        description:<p>Individual project developed within Henry Bootcamp. <br/> Development of a single page application using React and Redux for state management. All components were developed with CSS and Sass without the use of external libraries. <br/>The SPA consumes data from an API (pokeapi.co) through a Back End developed in Node.JS using Express, which added new features to the original API.</p>,
        features: 'Search - Sort and filters - Pagination - Controlled components',
        technologies: 'React - React Router Dom - Node.js - Express.js - PostgreSQL - Sass'
    }
]

export default projects

