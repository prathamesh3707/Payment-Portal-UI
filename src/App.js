import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import UserList from "./components/UserList";
import { useState } from "react";
import payment from "./pics/payment.jpg";

const data = [
  { name: "Mohan", age: 23 },
  { name: "Gautam Don", age: 43 },
  { name: "Xavier", age: 32 },
  { name: "Selmon", age: 78 },
  { name: "Savlon", age: 59 },
  { name: "Obama", age: 53 },
  { name: "Narendra", age: 19 },
  { name: "Jethalal", age: 56 },
  { name: "Rabul", age: 38 },
  { name: "Sundar", age: 67 },
  { name: "Richard", age: 59 },
];

function App() {
  const [listShow, setListShow] = useState(false);

  const makeTransaction = () => {
    setListShow(true);
  };
  return (
    <div className="App">
      <Header>
        <Button onClick={makeTransaction}>Make Transaction</Button>
      </Header>
      {!listShow && <img src={payment}></img>}
      {listShow && <UserList userData={data} />}
    </div>
  );
}

export default App;
