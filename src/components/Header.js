import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>Payment Portal</div>
        {props.children}
      </div>
    </>
  );
};

export default Header;
