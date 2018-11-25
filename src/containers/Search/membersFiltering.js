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
