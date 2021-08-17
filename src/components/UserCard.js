import Card from "./Card";
import Button from "./Button";
// import user from "../pics./user.webp";
import classes from "./UserCard.module.css";
import { useState } from "react";
import VerificationCard from "./VerificationCard";
import userImg from "../pics/customer.png";

const UserCard = (props) => {
  const [reciver, setReciver] = useState("");
  const [amount, enterAmount] = useState("");
  const [payNow, setPayNow] = useState(false);
  const reciverHandler = (event) => {
    setReciver(event.target.value);
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    enterAmount(event.target.value);
  };
  const paymentHandler = () => {
    setPayNow(true);
  };
  return (
    <div>
      {!payNow && (
        <Card className={classes.card}>
          <h1>Payment being made from account of Mr.{props.name}</h1>
          <img src={userImg}></img>
          <br></br>

          <select onChange={reciverHandler}>
            {props.users.map((user) => (
              <option value={user.name}>
                {user.name}, {user.age}
              </option>
            ))}
          </select>
          <br></br>

          <input
            type="number"
            placeholder="Amount"
            onChange={amountChangeHandler}
          ></input>
          <br></br>
          <p>
            Proceed to pay Mr.{reciver} an amount of Rs.{amount} :
          </p>
          <Button onClick={paymentHandler}>Pay Now</Button>
        </Card>
      )}

      {payNow && (
        <VerificationCard
          className={classes.verify}
          payer={props.name}
          reciver={reciver}
          amount={amount}
        />
      )}
    </div>
  );
};

export default UserCard;
