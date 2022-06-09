import { useReducer } from "react";
import { Sub } from "../../types";

interface FormState {
  inputVales: Sub;
}

const INITIAL_STATE = {
  firstname: "",
  age: 0,
  avatar: "",
  description: "",
};

type FormReducerAction =
  | {
      type: "CHANGE_VALUE";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "CLEAR";
    };

const formReducer = (
  state: FormState["inputVales"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "CLEAR":
      return INITIAL_STATE;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSubForm;
