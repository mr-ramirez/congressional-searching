import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/SearchResultsItem.css';
import facebookIcon from '../../../images/facebook.png';
import Genders from '../../../data/static/genders';
import youtubeIcon from '../../../images/youtube.png';
import Parties from '../../../data/static/parties';
import States from '../../../data/static/states';
import twitterIcon from '../../../images/twitter.png';
import websiteIcon from '../../../images/web.svg';

class SearchResultsItem extends Component {
  getCardMainStyleClass = () => {
    const { index } = this.props;

    return (index % 2 === 0) ?
      'card mb-3 border border-info'
        :
      'card mb-3 border border-secondary';
  }

  getCardHeaderMainStyleClass = () => {
    const { index } = this.props;

    return (index % 2 === 0) ?
      'card-header text-left bg-info text-light'
        :
      'card-header text-left bg-secondary text-light';
  }

  getGenderName = ({ abbreviation }) => {
    const gender = Object.keys(Genders)
      .find(key => Genders[key].abbreviation === abbreviation);

    return gender !== undefined ?
      Genders[gender].name : abbreviation;
  }

  getPartyName = ({ abbreviation }) => {
    const party = Object.keys(Parties)
      .find(key => Parties[key].abbreviation === abbreviation);

    return party !== undefined ?
      Parties[party].name : abbreviation;
  }

  getStateName = ({ abbreviation }) => {
    const state = States
      .find(item => item.abbreviation === abbreviation);

    return state !== undefined ?
      state.name : abbreviation;
  }

  render() {
    const {
      dateOfBirth,
      facebook,
      faxNumber,
      firstName,
      gender,
      lastName,
      middleName,
      officeAddress,
      party,
      phoneNumber,
      state,
      title,
      twitter,
      website,
      youtube,
    } = this.props.member;

    return (
      <div className={this.getCardMainStyleClass()}>
        <div className={this.getCardHeaderMainStyleClass()}>
          {`${firstName} ${middleName} ${lastName}`}
        </div>

        <div className="card-body text-left">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-4">
                  <p className="subtitle">Title:</p>
                </div>

                <div className="col-lg-8">
                  <p>{title}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                  <div className="col-lg-4">
                    <p className="subtitle">Party:</p>
                  </div>

                  <div className="col-lg-8">
                    <p>{ this.getPartyName({ abbreviation: party }) }</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-4">
                  <p className="subtitle">Office address:</p>
                </div>

                <div className="col-lg-8">
                  <p>{officeAddress}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                  <div className="col-lg-4">
                    <p className="subtitle">State:</p>
                  </div>

                  <div className="col-lg-8">
                    <p>{ this.getStateName({ abbreviation: state }) }</p>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-4">
                  <p className="subtitle">Phone number:</p>
                </div>

                <div className="col-lg-8">
                  <p>{ phoneNumber }</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                  <div className="col-lg-4">
                    <p className="subtitle">Fax number:</p>
                  </div>

                  <div className="col-lg-8">
                    <p>{ faxNumber }</p>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-4">
                  <p className="subtitle">Gender:</p>
                </div>

                <div className="col-lg-8">
                  <p>{ this.getGenderName({ abbreviation: gender }) }</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                  <div className="col-lg-4">
                    <p className="subtitle">Date of Birth:</p>
                  </div>

                  <div className="col-lg-8">
                    <p>{ dateOfBirth }</p>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12 text-right">
              {
                website !== '' ?
                  <a href={website} target="blank">
                    <img src={websiteIcon}
                      className="linkIcon mx-2"
                      alt="Website Url" />
                  </a>
                :
                  null
              }

              {
                facebook !== '' ?
                  <a href={facebook}>
                    <img src={facebookIcon}
                      className="linkIcon mx-2"
                      alt="Facebook" />
                  </a>
                :
                  null
              }

              {
                youtube !== '' ?
                  <a href={youtube}>
                    <img src={youtubeIcon}
                      className="linkIcon mx-2"
                      alt="YouTube" />
                  </a>
                :
                  null
              }

              {
                twitter !== '' ?
                  <a href={twitter}>
                    <img src={twitterIcon}
                      className="linkIcon mx-2"
                      alt="Twitter" />
                  </a>
                :
                  null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SearchResultsItem.propTypes = {
  index: PropTypes.number.isRequired,
  member: PropTypes.object.isRequired,
};

export default SearchResultsItem;
