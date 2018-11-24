export default class Member {
  firstName = '';
  lastName = '';
  middleName = '';
  state = '';
  title = '';

  constructor({
    first_name,
    last_name,
    middle_name,
    state,
    title,
  }) {
    this.firstName = !first_name ? '' : first_name;
    this.lastName = !last_name ? '' : last_name;
    this.middleName = !middle_name ? '' : middle_name;
    this.state = !state ? '' : state;
    this.title = !title ? '' : title;
  }
}
