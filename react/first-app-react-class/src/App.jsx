import './App.css';
import styles from "./styles/styles.module.css"
import classname from "classnames";
import BasicClassComponent from './components/BasicClassComponent';
import SecondClassComponent from './components/SecondClassComponent';

function App() {
  let number = 0
  let numberArray = [1, 3, 5, 7];

  return (
    <div style={{
      // color: number === 0 ? "red" : "blue",
      // backgroundColor: "black"
    }} className={classname(styles.newStyle, styles.newStyle1, "newClass")}>
      <p>Labas</p>
      <SecondClassComponent textColor="orange" bg="purple" text="second class component" />
      <BasicClassComponent textColor="red" bg="white" />
      <BasicClassComponent textColor="white" />
      <BasicClassComponent textColor="blue" numberArray={numberArray} />
    </div>
  );
}

export default App;

{ /* taip komentuojam jsx*/ }