import { today } from "./time";

const dummyData = [
  {
    id: "toturial0",
    name: "Toturial",
    tasks: [
      {
        id: 0,
        name: "Add your first task",
        completed: false,
        important: false,
        deadline: null,
        steps: [],
        descr: "",
      },
      {
        id: 1,
        name: "Edit this task",
        completed: false,
        important: false,
        deadline: today(),
        steps: [
          { id: 0, name: "add extra step", completed: true },
          { id: 1, name: "change deadline to tommorow", completed: false },
          { id: 2, name: "mark task as important", completed: false },
          { id: 3, name: "change this task description", completed: false },
          { id: 4, name: "mark all steps as done", completed: false },
        ],
        descr: "Step by step toturial to task managment",
      },
      {
        id: "2",
        name: "Mark all tasks done",
        completed: false,
        important: false,
        deadline: null,
        steps: [],
        descr: "",
      },
      {
        id: "3",
        name: "Add new list",
        completed: false,
        important: false,
        deadline: null,
        steps: [],
        descr: "",
      },
    ],
  },
];
export default dummyData;
