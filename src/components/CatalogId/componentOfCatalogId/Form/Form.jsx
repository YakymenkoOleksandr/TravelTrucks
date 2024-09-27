import css from "./Form.module.css";
import SelectDay from "../SelectDay/SelectDay.jsx";
import { useRef } from "react";

function Form() {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleDivClick = (index) => {
    if (inputRefs[index].current) {
      inputRefs[index].current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={css.form}>
      <div className={css.headerOfForm}>
        <h3>Book your campervan now</h3>
        <p className={css.textUnderHeader}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.inputs}>
        <form onSubmit={handleSubmit}>
          <div className={css.wrapperForInputs}>
            <div className={css.inputField} onClick={() => handleDivClick(0)}>
              <input
                className={css.input}
                type="text"
                placeholder="Name*"
                ref={inputRefs[0]}
              ></input>
            </div>
            <div className={css.inputField} onClick={() => handleDivClick(1)}>
              <input
                className={css.input}
                type="email"
                placeholder="Email*"
                ref={inputRefs[1]}
              ></input>
            </div>
            <SelectDay />
            <div className={css.inputComent} onClick={() => handleDivClick(2)}>
              <input
                className={css.input}
                type="text"
                placeholder="Comment"
                ref={inputRefs[2]}
              ></input>
            </div>
            <div className={css.submit}>
              <button className={css.submitButton} type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
