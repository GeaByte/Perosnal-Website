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
          imgSrc: ["test.jpeg", "", ""],

        },
        {
          id: 1,
          title: "Project Title 2",
          content: "content 2",
          imgSrc: ["test.jpeg", "", ""],
        },
        {
          id: 2,
          title: "Project Title 3",
          content: "content 3",
          imgSrc: ["test.jpeg", "", ""],
        },
        {
          id: 3,
          title: "Project Title 4",
          content: "content 4",
          imgSrc: ["test.jpeg", "", ""],
        },
        {
          id: 4,
          title: "Project Title 5",
          content: "content 5",
          imgSrc: ["test.jpeg", "", ""],
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
