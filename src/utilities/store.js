import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      projects: [
        {
          id: 0,
          title: 'Course Planning Web Application',
          content: `During my course planning, I often found myself gathering information from various sources — tracking mandatory courses, understanding prerequisites, and checking availability. This multi-step process was time-consuming and error-prone.

To solve this, I built a web application that consolidates all relevant course data in one place, complete with a visual course map. Students can see prerequisite chains at a glance and track their status — yet to take, enrolled, or completed.

The application is being developed using <strong>JavaScript (React)</strong> for the frontend, <strong>Python</strong> for the backend API, and <strong>MongoDB</strong> for persistent storage. The goal is to eliminate the friction from academic planning entirely.`,
          imgSrc: ['courseMaster/loading.png', 'courseMaster/course_map.png', 'courseMaster/login.png'],
          imgCaption: [
            'Selecting a program loads all corresponding courses.',
            'Demo: Visual course map with prerequisite chains.',
            'Login page with secure authentication.',
          ],
          technology: ['JavaScript (React)', 'CSS (Bootstrap)', 'Python', 'MongoDB'],
          githubUrl: 'https://github.com/doryang1019/course-tracking-system-frontend',
          category: 'sideProject',
        },
        {
          id: 1,
          title: 'Household Resale Android App',
          content: `A course assignment to develop a full household-items resale app for Android using <strong>Java</strong>. I led design and implementation of the app's pages and core features while teammates handled SQLite integration and CRUD operations.

Key features I built include:
<ul>
  <li>Location and notification permission management</li>
  <li>"Nearby Me" — live listings filtered by user's GPS coordinates</li>
  <li>Sorting and filtering by price, category, and distance</li>
  <li>Full seller profile and item listing management</li>
</ul>

The project reinforced my understanding of Android lifecycles, permissions, and local data persistence.`,
          imgSrc: [
            'vandealApp/welcomePage.png', 'vandealApp/registerPage.png', 'vandealApp/loginPage.png',
            'vandealApp/permissionPrompt.png', 'vandealApp/homePage.png', 'vandealApp/buyingPage.png',
            'vandealApp/shoppingCart.png', 'vandealApp/listingPage.png', 'vandealApp/profilePage.png',
          ],
          imgCaption: [
            'Welcome page', 'Register a new account', 'Login with credentials',
            'Permission request for notifications and location', 'Home page — browse listings',
            'Search and filter items', 'Shopping cart review', 'List items for sale', 'Profile management',
          ],
          technology: ['Java', 'SQLite', 'Android Studio'],
          githubUrl: 'https://github.com/GeaByte/household-resale-android-app',
          category: 'courseProject',
        },
        {
          id: 2,
          title: 'Online Order Website',
          content: `A full-featured online ordering system built with <strong>PHP</strong> and the <strong>Laravel framework</strong> as a course project.

The site allows customers to browse a menu, place orders, and manage their accounts. Key features include authentication, a product catalogue with filtering, a shopping cart, and an order history system.

Built with MySQL for data persistence and Bootstrap for a clean, responsive UI. This project deepened my understanding of MVC architecture, Eloquent ORM, and Laravel's routing system.`,
          imgSrc: [
            'sandwichQueen/home.png', 'sandwichQueen/menu.png',
            'sandwichQueen/register.png', 'sandwichQueen/login.png',
          ],
          imgCaption: ['Home page', 'Menu — browse all products', 'Register page', 'Login page'],
          technology: ['PHP (Laravel)', 'MySQL', 'Bootstrap'],
          githubUrl: 'https://github.com/GeaByte/Sandwich_Queen_Online_Order_System',
          category: 'courseProject',
        },
        {
          id: 3,
          title: 'MERN Family Todo App',
          content: `A full-stack MERN application built for a course project. Features RESTful APIs for authentication, task management, and family user grouping — allowing multiple household members to share and manage tasks.

Used <strong>MongoDB</strong> with Mongoose for schema flexibility. Optimised Axios calls to reduce data-fetch overhead. JWT-based auth secures all routes.

This project reinforced my understanding of SPA architecture, API design, and state management in React.`,
          imgSrc: [],
          imgCaption: [],
          technology: ['React', 'Express', 'MongoDB', 'Node.js', 'Axios'],
          githubUrl: '',
          category: 'courseProject',
        },
      ],
    };
  },
  getters: {
    allProjects: (state) => state.projects,
    getProjectById: (state) => (id) => state.projects.find((p) => p.id === id),
  },
});

export default store;
