import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';

import northridgeTeachers from '../../data/northridgeTeachers.hjson';

import './AboutNorthridgePage.scss';

const md = new MarkdownIt();

function teacherNameToId(name) {
  return name.split(' ')[1].toLowerCase();
}

const TeacherList = () => (
  <div>
    <section className="jumbo-image">
      <img src="/static/images/northridge/commons1.jpg" alt="Northridge Commons" />
      <div className="title">Northridge</div>
    </section>

    <section className="content">
      <p>
        At <a href="http://www.davis.k12.ut.us/Domain/526">Northridge High</a>
        &nbsp;we have a wide variety of technology classes for students
        to take; said classes even extend into the realm of&nbsp;
        <a href="https://apstudent.collegeboard.org/home">Advanced Placement</a>
        &nbsp;and Concurrent Enrollment classes, allowing students to earn college
        credit while still in High School (thereby cutting the price of college
        down significantly).
      </p>
      <p>
        Of the many teachers, there are a special few who we believe stand out
        when it comes to technology classes. Without any ado, here they are:
      </p>

      <hr />
    </section>

    <div className="teacher-list content">
      {northridgeTeachers.map(teacher => (
        <div key={teacher.id} className="teacher-row">
          <Link to={`/about/northridge/${teacherNameToId(teacher.name)}`}>
            <img src={teacher.photoSquare} alt={teacher.name} />
            <div className="name">{teacher.name}</div>
            <div className="short-desc">{teacher.shortDesc}</div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.course = props.teacher.courses[props.name];

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={`course ${this.state.open ? 'open' : ''}`}>
        <div className="course-name" onClick={this.toggle}>
          {this.props.name}
        </div>
        {this.state.open ? (
          <div>
            <ul>
              <li>
                <b>Prerequisets:</b>
                <ul>
                  {this.course.prerequisites.map(className => <li key={className}>{className}</li>)}
                </ul>
              </li>
            </ul>
            {/* eslint-disable react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: md.render(this.course.description) }} />
            {/* eslint-enable react/no-danger */}
          </div>
        ) : (<ul />)}
      </div>
    );
  }
}
Course.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  teacher: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
};

const TeacherInfo = ({ match }) => {
  const teacher = northridgeTeachers
    .find(findTeacher => findTeacher.id === match.params.id);

  if (teacher == null) {
    return <Redirect to="/about/northridge" />;
  }

  return (
    <div>
      <section className="jumbo-image">
        <img
          src={teacher.room ? teacher.room : '/static/images/northridge/commons1.jpg'}
          alt="Northridge Commons"
        />
        <div className="title">Northridge</div>
      </section>

      <section className="teacher content">
        <div className="teacher-half-and-half">
          <div>
            <img src={teacher.photo} alt={teacher.name} />
            <div><a href={teacher.website}>Website</a></div>
            <div>
              Email: <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
            </div>
          </div>
          <div>
            <Link to="/about/northridge" className="back-link">
              <span className="arrow">&lt;</span> Back
            </Link>
            <h2>{teacher.name}</h2>
            {/* eslint-disable react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: md.render(teacher.description) }} />
            {/* eslint-enable react/no-danger */}
          </div>
        </div>

        <hr />

        <h3>Classes</h3>
        <div className={`course-list course-amount-${Object.keys(teacher.courses).length}`}>
          {Object.keys(teacher.courses).map(courseName => (
            <Course key={courseName} teacher={teacher} name={courseName} />
          ))}
        </div>
      </section>
    </div>
  );
};
TeacherInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: React.PropTypes.object
};

export default () => (
  <div id="AboutNorthridgePage">
    <Route exact path="/about/northridge" component={TeacherList} />
    <Route path="/about/northridge/:id" component={TeacherInfo} />
  </div>
);
