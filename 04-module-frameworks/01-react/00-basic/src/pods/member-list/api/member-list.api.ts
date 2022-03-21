import { Member } from './member-list.api-model';

// export const getMembers = (filter: string): Promise<Member[]> => {
export const getMembers = (filter: string) => {
  fetch(`https://api.github.com/orgs/lemoncode/members?`)
        .then((response) => response.json())
        .then((json) => json.results);
};