import React from "react";
import { useState, useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { useDebounce } from 'use-debounce';
import {getMembers} from './api/member-list.api'
import { Member } from './api/member-list.api-model';
// import { InputSearch } from "./components/input";

export const ListPage: React.FC = () => {
  const [memberList, setMemberList] = React.useState<Member[]>([]);
  const [filter, setFilter] = useState<string>('lemoncode');
  const [debouncedFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    getMembers(filter)
  }, [debouncedFilter]);

  return (
    <>
      <h2>Hello from List page</h2>

      <form action="">
        <fieldset>
          <label htmlFor="">Search</label>
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
          {/* <input
            type="text"
            id=""
            value={filter}
            onChange={handleChange}
          /> */}
        </fieldset>
      </form>


      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((member) => (
            // para limpiar la consola
            <tr key={member.id}>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("/detail/:id", { id: member.login })}>
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
