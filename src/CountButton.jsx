import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ locked, type, setCount }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else if (type === "plus") {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });
  };
  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
