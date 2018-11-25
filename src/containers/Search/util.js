import Parties from '../../data/static/parties';
import States from '../../data/static/states';

export function doesMemberInformationMatchSearchText({ searchText, member }) {
  const {
    firstName,
    lastName,
    middleName,
  } = member;

  return firstName.toLowerCase().includes(searchText)
    || lastName.toLowerCase().includes(searchText)
    || middleName.toLowerCase().includes(searchText);
}

export function sortMembers({ a, b }) {
  const firstMember = `${a.firstName} ${a.middleName} ${a.lastName}`;
  const secondMember = `${b.firstName} ${b.middleName} ${b.lastName}`;

  return ('' + firstMember).localeCompare(secondMember);
}

export function getPartyName({ abbreviation }) {
  const party = Object.keys(Parties)
    .find(key => Parties[key].abbreviation === abbreviation);

  return party !== undefined ?
    party.name : abbreviation;
}

export function getStateName({ abbreviation }) {
  const state = Object.keys(States)
    .find(key => States[key].abbreviation === abbreviation);

  return state !== undefined ?
    state.name : abbreviation;
}
