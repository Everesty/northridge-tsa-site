import React from 'react';

import './AboutClubPage.scss';

const ImageSection = ({ images }) => (
  <section className={`activity-images images-${(['solo', 'duet', 'trio'])[Object.keys(images).length - 1]}`}>
    {Object.keys(images).map(url => (
      <div key={url}>
        <img
          src={url}
          alt=""
          style={{
            top: `${-images[url]}%`
          }}
        />
      </div>
    ))}
  </section>
);
ImageSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: React.PropTypes.object.isRequired
};

export default () => (
  <div id="AboutClubPage">
    <section className="content">
      <h2>What is TSA?</h2>
      <p className="side-note">Learning to live in a technical world.</p>
      <p>
        Other than airport security,&nbsp;
        <a href="http://tsaweb.org/What-Is-TSA">TSA</a> stands for the&nbsp;
        <b>Technology Student Association</b>. Schools across the globe, both
        middle and high, have TSA clubs that are engaging students in science,
        technology, engineering, and mathematics. Over 233,000 students have
        been a part of TSA across 2,000 schools.
      </p>
      <p>
        At Northridge, TSA allows students to go beyond what they learn in
        class and get involved in STEM activities around friends who share
        their interests. From competitive events, to conferences, and even
        some community service, TSA chapter members have gotten involved.
      </p>
      <p>
        Here are some adventures Northridge&apos;s TSA has conquered:
      </p>
    </section>

    <hr className="wide-divider" />

    <ImageSection
      images={{
        '/static/images/activities/spaghetti_towers/1.jpg': 0,
        '/static/images/activities/spaghetti_towers/2.jpg': 0
      }}
    />
    <section className="content">
      <img
        src="/static/images/activities/spaghetti_towers/winners.jpg"
        alt="The winning tower"
        className="right-img tall"
      />
      <h3>Spaghetti Towers</h3>
      <p>
        To start off the year, Northridge TSA hosted a challenge: build the
        tallest tower made out of spaghetti and marshmallows.
      </p>
      <p>
        Teams were then limited to groups of two and, after getting materials,
        students were then set free to begin the whole design process in a
        constrained period of time.
      </p>
      <p>
        A few crumbled towers later, a clear winner emmerged, with a tower
        height of nearly 4 feet--far surpassing anyones guesses.
      </p>
    </section>

    <hr className="wide-divider" />

    <ImageSection
      images={{
        '/static/images/activities/leadership_conference/1.jpg': 20,
        '/static/images/activities/leadership_conference/2.jpg': 30
      }}
    />
    <section className="content">
      <h3>Leadership Conference</h3>
      <p>
        Northridge TSA&apos;s leadership attended Leadership conference in Orem
        back in September to meet with the leadership for other TSA clubs
        around the state.
      </p>
      <p>
        At this conference, important lessons were talked about, and each
        member of leadership definitely gained a new page of knowledge.
      </p>
      <p>
        More important than that, though, everybody in leadership got to meet
        with other people fulfilling the same leadership roles as them,
        allowing for efficient practices to be shared. The wonderful Utah
        state TSA leadership leaders were also around to share their expertise.
      </p>
    </section>

    <hr className="wide-divider" />

    <ImageSection
      images={{
        '/static/images/activities/trunk_or_treat/1.jpg': 0,
        '/static/images/activities/trunk_or_treat/2.jpg': 0
      }}
    />
    <section className="content">
      <img
        src="/static/images/activities/trunk_or_treat/3.jpg"
        alt=""
        className="right-img wide"
      />
      <h3>Trunk-or-Treat</h3>
      <p>
        As halloween approached, Northridge TSA planned and readied up to
        participate in Northridge&apos;s Trunk-or-Treat.
      </p>
      <p>
        Two trunks were set up by TSA: one <i>Back to the Future</i> themed,
        the other scientist themed.
      </p>
      <p>
        The scientist-themed trunk featured a robotic arm that would grab and
        release pieces of candy. Although very simple, the arm was definitely
        one of many kids&apos; favorite things at the Trunk-or-Treat. It can
        definitely be said that some future engineers were inspired that night.
      </p>
    </section>

    <hr className="wide-divider" />

    <ImageSection
      images={{
        '/static/images/activities/paper_boats/1.jpg': 0,
        '/static/images/activities/paper_boats/2.jpg': 0
      }}
    />
    <section className="content">
      <h3>Paper Boats</h3>
      <p>
        On one club meeting for Northridge TSA, the challenge was to build
        a bout out of only paper and tape that would hold as much weight as
        possible.
      </p>
      <p>
        Upon constructing them, the boats were tested to see if they would
        first float, and if they succeeded, how much weight it would take to
        make the boats sink.
      </p>
      <p>
        This competiton demonstrated the interaction between many physical
        properties, such as bouyancy, volume, surface area, and density.
      </p>
    </section>

    <hr className="wide-divider" />

    <ImageSection
      images={{
        '/static/images/activities/vex/1.jpg': 10,
        '/static/images/activities/vex/2.jpg': 0
      }}
    />
    <section className="content">
      <h3>VEX Competition</h3>
      <p>
        Many TSA members are also part of Northridge&apos;s VEX Robotics club.
        Luckily, TSA also features robotics, giving these talented individuals
        a reason to venture into TSA alongside VEX.
      </p>
      <p>
        Earlier in the year, Northridge hosted a VEX competition; no issues
        arose thanks to our lovely volunteers.
      </p>
    </section>
  </div>
);
