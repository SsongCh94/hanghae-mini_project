import { useState } from "react";

const useLoginInput = (parameter) => {
  const [value, setValue] = useState(parameter);

  const onChangeHandler = (e) => {
    setValue((prev) => e.target.value);
  };
  return [value, onChangeHandler];
};

export default useLoginInput;
