import { today } from "./time";

const dummyData = [
  {
    name: "Home",
    tasks: [
      {
        id: 0,
        name: "cleaning",
        completed: false,
        important: false,
        deadline: null,
        steps: [],
        descr: "",
      },
      {
        id: 1,
        name: "shopping",
        completed: false,
        important: false,
        deadline: today(),
        steps: [],
        descr: "shopping list",
      },
      {
        id: 2,
        name: "dinnner",
        completed: false,
        important: false,
        deadline: null,
        steps: [],
        descr: "",
      },
    ],
  },
  {
    name: "Work",
    tasks: [],
  },
];
export default dummyData;
