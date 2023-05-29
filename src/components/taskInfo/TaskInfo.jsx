import Card from "../card/Card";
import Task from "../task/Task";
import Deadline from "./deadline/Deadline";
import StepList from "./StepList/StepList";
import Description from "./description/Description";
import { createStep } from "../../utils/todos";
import { FiAlertCircle } from "react-icons/fi";
import styles from "./TaskInfo.module.css";

function TaskInfo({ task, editTask }) {
  if (!task) return <OpenTaskHint />;

  const { name, important, completed, deadline, steps, descr } = task;

  function addStep(newStep) {
    newStep = createStep(newStep);
    const newSteps = [...steps, newStep];
    editTask({ ...task, steps: newSteps });
  }

  function editStep(editedStep) {
    const newSteps = steps.map((step) => {
      return step.id === editedStep.id ? editedStep : step;
    });
    editTask({ ...task, steps: newSteps });
  }
  function changeStatus() {
    editTask({ ...task, completed: !completed });
  }
  function changeDeadline(newDealine) {
    editTask({ ...task, deadline: newDealine });
  }
  function changeDescription(newDescr) {
    editTask({ ...task, descr: newDescr });
  }

  return (
    <Card className={styles.container}>
      <div className={styles.flexRow}>
        <Task data={task} className={styles.headerTask} />

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
