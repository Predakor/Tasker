import Card from "../card/Card";
import Task from "../task/Task";
import InputAdd from "../inputAdd/InputAdd";
import Deadline from "./deadline/Deadline";
import Description from "./description/Description";
import { FiAlertCircle } from "react-icons/fi";
import styles from "./TaskInfo.module.css";

function warn() {
  console.warn("not implemented");
}

function TaskInfo({ task }) {
  if (!task) {
    return (
      <Card className={styles.container}>
        <h2>Select task to view details</h2>
      </Card>
    );
  }

  const { name, important, completeted, deadline, steps, descr } = task;
  return (
    <Card className={styles.container}>
      <div className={styles.flexRow}>
        <Task data={task} className={styles.headerTask} />

        <button className={styles.button} onClick={warn}>
          <FiAlertCircle />
        </button>
      </div>

      <DetailsGroup className={styles.deadlineContainer} title="Deadline">
        <Deadline
          deadline={deadline}
          onDateChange={(t) => {
            console.log(t);
          }}
        />
      </DetailsGroup>

      <DetailsGroup title="Steps">
        {steps?.map((subTask) => (
          <Task data={subTask} />
        ))}
        <InputAdd onSubmit={warn} />
      </DetailsGroup>

      <Description />
    </Card>
  );
}

function DetailsGroup({ title, children, className }) {
  return (
    <div className={`${className} ${styles.group}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default TaskInfo;
