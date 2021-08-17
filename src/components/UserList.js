import React, { useState } from "react";
import classes from "./UserList.module.css";
import Card from "./Card";
import UserCard from "./UserCard";
import Button from "./Button";

const UserList = (props) => {
  const [displayPortal, setPortal] = useState(false);
  const [payer, setPayer] = useState("");

  const showPortal = () => {
    setPortal(true);
    console.log("working");
  };

  const currentPayer = (name) => {
    setPayer(name);
  };

  return (
    <div>
      {!displayPortal && (
        <Card className={classes.users}>
          <ul>
            {props.userData.map((user) => (
              <li>
                {user.name}, {user.age}
                <Button
                  onClick={() => {
                    showPortal();
                    currentPayer(user.name);
                  }}
                >
                  Pay
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {displayPortal && <UserCard users={props.userData} name={payer} />}
    </div>
  );
};

export default UserList;
