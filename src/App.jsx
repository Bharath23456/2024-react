import { useState } from "react";
import Table from "./components/Table"
const App = () => {
  const [count, setCount] = useState(0);

  const data1 = [
    {
      name: "gmu",
      value: 1,
    },
    {
      name: "jain",
      value: 2,
    },
    {
      name: "biet",
      value: 3,
    },
    {
      name: "davan",
      value: 4,
    },
  ];

    
  return (
    <div className="container">
      <Table data={data1} c={count} setFun={setCount} />
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
};

export default App;