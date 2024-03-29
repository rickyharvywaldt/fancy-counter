import { useState } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  return (
    <div className={locked ? "card card--limit" : "card"}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer locked={locked} setCount={setCount}>
        <CountButton locked={locked} type="minus" setCount={setCount} />
        <CountButton locked={locked} type="plus" setCount={setCount} />
      </ButtonContainer>
    </div>
  );
}
