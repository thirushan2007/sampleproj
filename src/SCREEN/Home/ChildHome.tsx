import { useContext, useState } from "react";
import { UsingContext } from "../..";

function ChildHome() {
  const [count, setcount] = useState(0);
  console.log(count);

  const increase = () => {
    setcount((count) => count + 1);
  };

  return (
    <div>
      count:{count}
      <button onClick={increase}>+</button>
    </div>
  );
}

export default ChildHome;
