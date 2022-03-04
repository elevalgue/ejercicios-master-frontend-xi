import React from "react";
import { Member } from '../api/member-list.api-model';

interface Props {
  member: Member; 
}

export const MemberRow: React.FC<Props> = props => {

  return <>
          <tr>
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
  </>
}


