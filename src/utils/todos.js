function randomID() {
  return String(Date.now().toString(32) + Math.random().toString(16));
}
const dummyData = [
  {
    name: "123",
    tasks: [
      { name: "task", steps: [{ id: 0, name: "step", isDone: false }] },
      {
        name: "find job",
        steps: [
          { id: 0, name: "get eduaction", isDone: false },
          { id: 0, name: "apply", isDone: false },
          { id: 0, name: "nail overview", isDone: false },
        ],
      },
    ],
  },
  { name: "123", tasks: [] },
  { name: "123", tasks: [] },
];
function createTask(taskName) {
  return {
    id: randomID(),
    name: taskName,
    completed: false,
    important: false,
    deadline: null,
    steps: [],
    descr: "",
  };
}

function createStep(stepName) {
  return {
    id: randomID(),
    name: stepName,
    isDone: false,
  };
}

function createList(listName) {
  return {
    id: randomID(),
    name: listName,
    tasks: [],
  };
}

export { createList, createTask, createStep };
