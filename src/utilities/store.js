import { createStore } from "vuex"
// import test from "../assets/test.jpeg"
const store = new createStore({
  state() {
    return {
      projects: [
        {
          id: 0,
          title: "Course Planner",
          content: "During my course planning, I often found myself gathering information from various sources. I needed to track mandatory courses in my program, understand the prerequisites for each course, and check their availability. This process was time-consuming, and each registration period required me to revisit multiple websites to compile the necessary information. \nTo address this challenge, I envisioned a solution that consolidates all relevant course data in one place, complete with a visual course map. This feature allows students to easily see the relationships between courses, including prerequisites, and monitor their status—whether they are yet to take a course, currently enrolled, or have already passed it. \nThe goal of this web application is to streamline course planning and eliminate the hassle often associated with it. Currently, the website is still under development, but we are working diligently to complete a comprehensive version as soon as possible. \nThe application is being developed using JavaScript (React) for the frontend, Python for the backend, and MongoDB for the database. We are excited to bring this tool to students, making their academic journey smoother and more organized.",
          imgSrc: ["courseMaster/loading.png", "courseMaster/course_map.png", "courseMaster/login.png"],

        },
        {
          id: 1,
          title: "Project Title 2",
          content: "content 2",
          imgSrc: ["test.jpeg"],
        },
        {
          id: 2,
          title: "Online Order Website",
          content: "This project is a user-friendly online order website developed using PHP and the Laravel framework. Designed as a course project, it serves as a practical application of my skills in web development, focusing on building a functional and engaging user experience.",
          imgSrc: ["sandwichQueen/home.png", "sandwichQueen/menu.png", "sandwichQueen/register.png", "sandwichQueen/login.png"],
        },
        {
          id: 3,
          title: "Project Title 4",
          content: "content 4",
          imgSrc: ["test.jpeg"],
        },
        {
          id: 4,
          title: "Project Title 5",
          content: "content 5",
          imgSrc: ["test.jpeg"],
        },
      ],
    }
  },
  getters: {
    allProjects(state){return state.projects},
    getProjectById(state){return (id) => state.projects.find(project => project.id === id);}
  },
});

export default store;
