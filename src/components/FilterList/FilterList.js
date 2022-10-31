import React, { useState, useTransition } from "react";
import { Users } from "./../../helpers/fakeNames";
import ListItem from "./../ListItem";
const FilterList = () => {
  const [needle, setNeedle] = useState("");

  const [, startTransition] = useTransition();

  const changeHandler = ({ target: { value } }) => {
    startTransition(() => setNeedle(value));
  };

  return (
    <>
      <div>FilterList</div>
      <input onChange={changeHandler} />
      {Users.map(({ userName, id }) => (
        <ListItem key={id} userName={userName} needle={needle} />
      ))}
    </>
  );
};

export default FilterList;
