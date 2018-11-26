export default class Member {
  dateOfBirth = null;
  facebook = '';
  faxNumber = '';
  firstName = '';
  gender = '';
  id = '';
  lastName = '';
  middleName = '';
  nextElection = '';
  officeAddress = '';
  party = '';
  phoneNumber = '';
  state = '';
  title = '';
  twitter = '';
  website = '';
  youtube = '';

  constructor({
    date_of_birth,
    facebook,
    fax,
    first_name,
    gender,
    id,
    last_name,
    middle_name,
    next_election,
    office,
    party,
    phone,
    state,
    title,
    twitter,
    url,
    youtube,
  }) {
    this.dateOfBirth = !date_of_birth ? null : date_of_birth;
    this.facebook = !facebook ? '' : facebook;
    this.faxNumber = !fax ? '' : fax;
    this.firstName = !first_name ? '' : first_name;
    this.gender = !gender ? '' : gender;
    this.id = !id ? '' : id;
    this.lastName = !last_name ? '' : last_name;
    this.middleName = !middle_name ? '' : middle_name;
    this.nextElection = !next_election ? '' : next_election;
    this.officeAddress = !office ? '' : office;
    this.party = !party ? '' : party;
    this.phoneNumber = !phone ? '' : phone;
    this.state = !state ? '' : state;
    this.title = !title ? '' : title;
    this.twitter = !twitter ? '' : twitter;
    this.website = !url ? '' : url;
    this.youtube = !youtube ? '' : youtube;
  }
}
