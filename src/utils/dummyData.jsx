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
        steps: [
          { id: 0, name: "go out", completed: true },
          { id: 1, name: "find shop", completed: false },
          { id: 2, name: "buy broceres", completed: false },
        ],
        descr: "shopping list",
      },
    ],
  },
  {
    name: "Work",
    tasks: [],
  },
];
export default dummyData;
