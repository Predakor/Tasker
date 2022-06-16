function randomID() {
  return String(Date.now().toString(32) + Math.random().toString(16));
}

function createList(listName) {
  return {
    id: randomID(),
    name: listName,
    tasks: [],
  };
}

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
    completed: false,
  };
}

export { createList, createTask, createStep };
