import React from "react";
import { Sub } from "../types";
import useNewSubForm from "./hooks/useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispath] = useNewSubForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispath({
      type: "CHANGE_VALUE",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    dispath({ type: "CLEAR" });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispath({ type: "CLEAR" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.firstname}
          type="text"
          placeholder="firstname"
          name="firstname"
          required
        />
        <input
          onChange={handleChange}
          value={inputValues.age}
          type="number"
          placeholder="age"
          name="age"
          required
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          placeholder="avatar"
          name="avatar"
          required
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          placeholder="description"
          name="description"
        />
        <button type="button" onClick={handleClick}>
          clear
        </button>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Form;
