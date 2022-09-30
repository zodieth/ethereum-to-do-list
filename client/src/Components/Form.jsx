import React from "react";
import style from "./form.module.css";

function Form() {
  return (
    <div>
      <form className={style.container}>
        <h1>Save A Task</h1>
        <div className={style.input}>
          {" "}
          <input type="text" placeholder="Write A Task" />
          <input type="text" placeholder="Write A Description" />
        </div>
        <button className={style.submit} type="submit">
          <h1 className={style.submitText}>SUBMIT</h1>
        </button>
      </form>
    </div>
  );
}

export default Form;
