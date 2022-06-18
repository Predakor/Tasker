import Step from "../Step/Step";
import styles from "./StepList.module.css";
function StepList({ steps, editStep, addStep }) {
  return (
    <div className={styles.container}>
      {steps?.map((step) => (
        <Step name={step.name} done={step.completed} onSubmit={editStep} key={step.id} />
      ))}
      <Step onSubmit={addStep} />
    </div>
  );
}

export default StepList;
