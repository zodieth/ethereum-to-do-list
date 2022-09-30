import "./App.css";
import TaskList from "./Components/TaskList";
import TaskLogo from "./Components/TaskLogo";
import Form from "./Components/Form";
// const TruffleContract = require("../node_modules/@truffle/contract/browser-dist/truffle-contract.min.js");\
// const TruffleContract = require("@truffle/contract/browser-dist");

const contractJson = require("./contracts/TasksContract.json");

function App() {
  async function loadEth() {
    if (window.ethereum) {
      let web3Provider = window.ethereum;
      await web3Provider.request({ method: "eth_requestAccounts" });
      console.log("loaded");
    } else {
      console.log("install Metamask");
    }
  }

  async function loadContract() {
    // const res = await fetch(contractJson);
    // const resJSON = await res.json();
    // TruffleContract(contractJson);
  }

  loadEth();
  loadContract();

  return (
    <div className="App">
      <div className="container">
        <TaskLogo />
        <TaskList />
        <Form />
      </div>
    </div>
  );
}

export default App;
