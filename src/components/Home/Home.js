import React,{useContext} from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";
import Button from "../UI/Button/Button";

const Home = (props) => {
  const ctx = useContext(AuthContext)
  return (
    <Card className={styles.home}>
      <h1>We are glad to see you again!</h1>
      <Button onClick= {ctx.onLogout}>Log out</Button>
    </Card>
  );
};

export default Home;
