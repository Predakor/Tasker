import { TiDeleteOutline } from "react-icons/ti";
import Button from "../Button";

function DeleteButton({ onClick, className = "", label }) {
  return (
    <Button onClick={onClick} className={className} ghost aria-label={label}>
      <TiDeleteOutline className="font-big font-warning" />
    </Button>
  );
}
export default DeleteButton;
