import { createStore } from "vuex"
// import test from "../assets/test.jpeg"
const store = new createStore({
  state() {
    return {
      projects: [
        {
          id: 0,
          title: "Project Title 1",
          content: "content 1",
          imgSrc: ["test.jpeg"],

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
