import { FiAlertCircle } from "react-icons/fi";
import { createStep } from "../../../utils/todos";
import Task from "../../Task/Task";
import Card from "../../card/Card";
import Description from "./Description/Description";
import StepList from "./Step/StepList";
import styles from "./TaskInfo.module.css";
import Deadline from "./deadline/Deadline";

function TaskInfo({ task, editTask }) {
  if (!task) return <OpenTaskHint />;

  const { completed, deadline, steps, descr } = task;

  const updateTask = (updates) => {
    editTask({ ...task, ...updates });
  };

  const addStep = (newStep) => {
    const newSteps = [...steps, createStep(newStep)];
    updateTask({ steps: newSteps });
  };

  const editStep = (editedStep) => {
    const newSteps = steps.map((step) =>
      step.id === editedStep.id ? editedStep : step
    );
    updateTask({ steps: newSteps });
  };

  const changeStatus = () => {
    updateTask({ completed: !completed });
  };

  const changeDeadline = (newDeadline) => {
    updateTask({ deadline: newDeadline });
  };

  const changeDescription = (newDescr) => {
    updateTask({ descr: newDescr });
  };

  return (
    <Card className={styles.container}>
      <div className={styles.flexRow}>
        <Task
          task={task}
          changeTask={updateTask}
          className={styles.headerTask}
        />

        <button className={styles.button} onClick={changeStatus}>
          <FiAlertCircle />
        </button>
      </div>

      <DetailsGroup className={styles.deadlineContainer} title="Deadline">
        <Deadline deadline={deadline} onDateChange={changeDeadline} />
      </DetailsGroup>

      <DetailsGroup title="Steps">
        <StepList steps={steps} editStep={editStep} addStep={addStep} />
      </DetailsGroup>

      <Description value={descr} onBlur={changeDescription} />
    </Card>
  );
}

function DetailsGroup({ title, children, className = "" }) {
  return (
    <div className={`${styles.group} ${className}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
function OpenTaskHint() {
  return (
    <Card className={styles.container}>
      <h2>Select task to view details</h2>
    </Card>
  );
}

export default TaskInfo;
