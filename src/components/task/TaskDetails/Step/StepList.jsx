import Step from "./Step";
import styles from "./Step.module.css";
function StepList({ steps, editStep, addStep }) {
  return (
    <div className={styles.stepList}>
      {steps.map((step) => (
        <Step
          name={step.name}
          done={step.completed}
          onSubmit={editStep}
          key={step.id}
        />
      ))}
      <Step onSubmit={addStep} />
    </div>
  );
}

export default StepList;
