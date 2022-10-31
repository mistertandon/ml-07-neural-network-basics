import React, { useState, useEffect } from "react";
import "./ListItem.css";

const ListItem = ({ userName = "", needle = "" }) => {
  const [fullName, setFullName] = useState(userName);

  useEffect(() => {
    setFullName(fullName);
  }, [fullName]);

  const index = fullName.toLowerCase().indexOf(needle.toLowerCase());

  if (index === -1 || !needle) {
    return <div>{fullName}</div>;
  }

  return (
    <div className="firstname--cntr">
      <div className="highlight--no">{fullName.slice(0, index)}</div>

      <div className="highlight--yes">
        {fullName.slice(index, index + needle.length)}
      </div>

      <div className="highlight--no">
        {fullName.slice(index + needle.length, fullName.length)}
      </div>
    </div>
  );
};

export default ListItem;
