import css from "./Location.module.css";
import { BsMap } from "react-icons/bs";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../../../redux/vansSlice"; // Імпортуємо екшен setLocation


function Location() {
  const inputRef = useRef(null);
  const dispatch = useDispatch(); // Додаємо хук для диспетчера

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputKeyDown = (event) => {
  if (event.key === 'Enter') {
    const location = event.target.value;
    dispatch(setLocation(location)); // Викликаємо екшен для збереження локації у Redux
  }
};

  const handleInputChange = (event) => {
    const location = event.target.value;
    dispatch(setLocation(location)); // Викликаємо екшен для збереження локації у Redux
  };

  return (
    <div className={css.location}>
      <label className={css.nameOfBlockLocation}>Location</label>
      <div className={css.inputWrapperOfBlockLocation} onClick={handleClick}>
        <BsMap className={css.iconOfMap} />
        <input
          className={css.inputOfBlockLocation}
          ref={inputRef}
          onChange={handleInputChange} // Додаємо обробник зміни введення
          onKeyDown={handleInputKeyDown} // Додаємо обробник натискання клавіші
        
          placeholder="City"
        ></input>
      </div>
    </div>
  );
}

export default Location;