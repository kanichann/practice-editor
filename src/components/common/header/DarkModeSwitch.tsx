import React from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { toggleDarkMode } from "store/slices/dark-mode/darkMode";

const DarkModeSwitch = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const onChangeDarkMode = () => {
    console.log("darkClick");
    console.log(dispatch(toggleDarkMode));
    console.log(isDarkModeEnabled);
    dispatch(toggleDarkMode());
  };
  return (
    <div>
      <button onClick={onChangeDarkMode}>
        darkswitch {isDarkModeEnabled ? "true" : "false"}
      </button>
    </div>
  );
};

export default DarkModeSwitch;
