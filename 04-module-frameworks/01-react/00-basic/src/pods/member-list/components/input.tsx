import React from "react";
import { useState } from "react";
import { ListPage } from "../member-list.component"; 

// interface Props {
//   organization: string;
// }


export const InputSearch: React.FC = ()  => {
  // const organization = props; 
  const [filter, setFilter] = useState('');
  
  const handleChange = (ev) => {
    console.log(ev.target, 'hola');
    setFilter(ev.target.value);
  };

  return <>
    <form action="">
      <fieldset>
        <label htmlFor="">Search</label>
        <input
          type="text"
          id=""
          value={filter}
          onChange={handleChange }
        />
      </fieldset>
  </form>
  </>
}

