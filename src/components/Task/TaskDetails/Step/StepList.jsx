import { createStep } from "../../../../utils/todos";
import AddStep from "./AddStep";
import Step from "./Step";
import styles from "./Step.module.css";

function StepList({ steps, updateTask }) {
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

  const removeStep = (stepID) => {
    const newSteps = steps.filter((step) => step.id !== stepID);
    updateTask({ steps: newSteps });
  };

  return (
    <div className={styles.stepList}>
      {steps.map((step) => (
        <Step
          step={step}
          editStep={editStep}
          removeStep={removeStep}
          key={step.id}
        />
      ))}
      <AddStep onSubmit={addStep} />
    </div>
  );
}

export default StepList;
