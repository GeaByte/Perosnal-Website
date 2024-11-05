import { createStore } from "vuex"
const store = new createStore({
  state() {
    return {
      projects: [
        {
          id: 0,
          title: "Course Planning Web Application",
          content: "During my course planning, I often found myself gathering information from various sources. I needed to track mandatory courses in my program, understand the prerequisites for each course, and check their availability. This process was time-consuming, and each registration period required me to revisit multiple websites to compile the necessary information. \nTo address this challenge, I envisioned a solution that consolidates all relevant course data in one place, complete with a visual course map. This feature allows students to easily see the relationships between courses, including prerequisites, and monitor their status—whether they are yet to take a course, currently enrolled, or have already passed it. \nThe goal of this web application is to streamline course planning and eliminate the hassle often associated with it. Currently, the website is still under development, but we are working diligently to complete a comprehensive version as soon as possible. \nThe application is being developed using <strong>JavaScript (React)</strong> for the frontend, <strong>Python</strong> for the backend, and <strong>MongoDB</strong> for the database. We are excited to bring this tool to students, making their academic journey smoother and more organized.",
          imgSrc: ["courseMaster/loading.png", "courseMaster/course_map.png", "courseMaster/login.png"],
          imgCaption: ["Selecting a program will load the corresponding courses.", "Demo: Visual Representation of the Course Map", "Login page"],
          technology: ["JavaScript(React)", "CSS(Bootstrap)", "Python", "MongoDB"],
          githubUrl:"https://github.com/doryang1019/course-tracking-system-frontend",
          category: "sideProject",
        },
        {
          id: 1,
          title: "Household Resale Android App",
          content: "This project was a course assignment where we were tasked with developing a household items resale app for the Android platform, using <strong>Java</strong> as the primary programming language. As part of a team, I took on the responsibility of designing and implementing the app’s pages and core functionalities, while my teammates focused on integrating SQLite for data storage and handling CRUD operations.\nIn addition to these core features, I developed several key functionalities to enhance the user experience, including:\n<ul><li>Managing location and notification permissions</li><li>Implementing a \"Nearby Me\" feature to display listings based on the user's current location</li><li>Enabling sorting and filtering of items by various preferences</li></ul>",
          imgSrc: ["vandealApp/welcomePage.png", "vandealApp/registerPage.png", "vandealApp/loginPage.png", "vandealApp/permissionPrompt.png", "vandealApp/homePage.png", "vandealApp/buyingPage.png", "vandealApp/shoppingCart.png", "vandealApp/listingPage.png", "vandealApp/profilePage.png"],
          imgCaption:["Welcome Page", "Register a new account", "Login with user credential", "Request for notification and location permission, if not already granted", "Home page of the app", "Browsing items by keyword search or sorting by features", "Reviewing the items in your shopping cart", "Listing your items for sale", "Reviewing and updating your profile information"],
          technology: ["Java", "SQLite"],
          githubUrl: "https://github.com/GeaByte/household-resale-android-app",
          category: "courseProject",
        },
        {
          id: 2,
          title: "Online Order Website",
          content: "This project is a user-friendly online order website developed using <strong>PHP</strong> and the <strong>Laravel framework</strong>. Designed as a course project, it serves as a practical application of my skills in web development, focusing on building a functional and engaging user experience.",
          imgSrc: ["sandwichQueen/home.png", "sandwichQueen/menu.png", "sandwichQueen/register.png", "sandwichQueen/login.png"],
          imgCaption:["Home page", "Menu - browse all products", "Register Page", "Login Page"],
          technology: ["PHP(Laravel)", "MySQL"],
          githubUrl: "https://github.com/GeaByte/Sandwich_Queen_Online_Order_System",
          category: "courseProject",

        },
        // {
        //   id: 3,
        //   title: "Template Title 4",
        //   content: "template 4",
        //   imgSrc: ["test.jpeg"],
        //   imgCaption:[],
        //   technology: [],
        //   githubUrl: "",

        // },
        // {
        //   id: 4,
        //   title: "Template Title 5",
        //   content: "template 5",
        //   imgSrc: ["test.jpeg"],
        //   imgCaption:[],
        //   technology: [],
        //   githubUrl: "",

        // },
      ],
    }
  },
  getters: {
    allProjects(state) { return state.projects },
    getProjectById(state) { return (id) => state.projects.find(project => project.id === id); }
  },
});

export default store;
