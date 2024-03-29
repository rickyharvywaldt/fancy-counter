import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount }) {
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={handleClick}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
