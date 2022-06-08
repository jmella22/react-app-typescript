import React, { useState } from "react";
import { Sub } from "../types";

interface FormState {
  inputVales: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputVales"]>({
    firstname: "",
    age: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
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
        />
        <input
          onChange={handleChange}
          value={inputValues.age}
          type="number"
          placeholder="age"
          name="age"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          placeholder="avatar"
          name="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          placeholder="description"
          name="description"
        />
        <button>save</button>
      </form>
    </div>
  );
};

export default Form;
