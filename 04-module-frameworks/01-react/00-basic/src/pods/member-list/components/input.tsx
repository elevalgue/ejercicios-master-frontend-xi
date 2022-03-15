import React from "react";
import { useState } from "react";
import { ListPage } from "../member-list.component"; 

// interface Props {
//   organization: string;
// }


export const inputSearch: React.FC = ()  => {
  // const organization = props; 
  const [input, setInput] = useState('');
  
const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  return <>
    <form action="">
      <fieldset>
        <label htmlFor="">Search</label>
        <input
          type="text"
          id=""
          value={input}
          onChange={handleChange }
        />
      </fieldset>
      <button>Search</button>
  </form>
  </>
}

