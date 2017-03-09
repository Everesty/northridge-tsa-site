import React from 'react';

import './MembersPage.scss';

import memberInfos from '../../data/TSA_Members.json';

function nameToImgSrc(name) {
  return `/static/images/members/${name.toLowerCase().replace(' ', '_')}.png`;
}

const Member = ({ name, img, title }) => {
  if (img || title) {
    return (
      <div className="member">
        {img && <img className="portrait" alt={name} src={img} />}
        <div className="name">{name}</div>
        {title && <div className="title">{title}</div>}
      </div>
    );
  }

  return <li>{name}</li>; // TODO
};
Member.propTypes = {
  name: React.PropTypes.string.isRequired,
  img: React.PropTypes.string,
  title: React.PropTypes.string
};
Member.defaultProps = {
  img: '',
  title: ''
};

export default () => {
  const leadershipMembers = memberInfos
    .filter(member => member.isLeadership)
    .map(member => (
      <Member
        name={member.name}
        title={member.title}
        img={nameToImgSrc(member.name)}
      />
    ));

  const activeMembers = memberInfos
    .filter(member => !member.isLeadership && member.isActive)
    .map(member => (
      <Member
        name={member.name}
        img={nameToImgSrc(member.name)}
      />
    ));

  const inactiveMembers = memberInfos
    .filter(member => !member.isLeadership && !member.isActive)
    .map(member => (
      <Member name={member.name} />
    ));

  return (
    <div id="MembersPage">
      <section className="content">
        <h2>Leadership</h2>
        <div className="members-grid leadership">
          {leadershipMembers}
        </div>

        <hr />

        <h2>Honor Roll Members</h2>
        <div className="members-grid">
          {activeMembers}
        </div>
      </section>

      <hr className="wide-divider" />

      <section className="content">
        <h3>Other Members</h3>
        <ul className="member-list">
          {inactiveMembers}
        </ul>
      </section>
    </div>
  );
};
