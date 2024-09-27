import css from "./Location.module.css";
import { BsMap } from "react-icons/bs";
import { useRef } from "react";

function Location() {
const inputRef = useRef(null); 

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  };
  return (
    <div className={css.location}>
      <label className={css.nameOfBlockLocation}>Location</label>
          <div className={css.inputWrapperOfBlockLocation} onClick={handleClick}>
              
        <BsMap className={css.iconOfMap} />
        <input className={css.inputOfBlockLocation} ref={inputRef}></input>
      </div>
    </div>
  );
}

export default Location;
