import Card from "./Card";
import classes from "./VerificationCard.module.css";
const VerificationCard = (props) => {
  return (
    <Card className={classes.verify}>
      <h1>Transaction Sucessful</h1>
      <p>Payer:{props.payer}</p>
      <p>Payee:{props.reciver}</p>
      <p>Amount:{props.amount}</p>
      Thankyou for choosing City Bank.
    </Card>
  );
};

export default VerificationCard;
