import React from "react";
import style from "./tasklogo.module.css";
import { AiFillAlipayCircle } from "react-icons/ai";

function TaskLogo() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.dapp}>
          <h1 className={style.name}>
            <AiFillAlipayCircle className={style.icon} />
            EthTaskApp
          </h1>
          <h1 className={style.desc}>Decentralized Task App</h1>
          <h1 className={style.address}>Wallet</h1>
          <h1 className={style.wallet}>
            0xb61bca329Fa71e79e92BfD44B95f2C62b8EA68d1
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TaskLogo;
