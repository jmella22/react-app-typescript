import React from "react";
import { Sub } from "../types";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.firstname}>
            <img src={sub.avatar} alt={`avatar de ${sub.firstname}`} />
            <h4>
              {sub.firstname} (<small>{sub.age}</small>)
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
