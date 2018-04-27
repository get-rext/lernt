import React, { Component, StrictMode } from 'react';
import Course from './Course.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveCourse, fetchCoursesAsync } from './actions';

class Courses extends Component {

  componentDidMount = () => this.props.fetchCoursesAsync();

  render = () => (
    <StrictMode>
      <div className="container">
        {Object.values(this.props.courses).map(course => (
          <Course
            setActiveCourse={this.props.setActiveCourse}
            {...course}
            course={course}
            key={course.id}
          />
        ))}
      </div>
    </StrictMode>
  );
}

Courses.propTypes = {
  courses: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ courses: state.courses });

const mapDispatchToProps = dispatch => ({
  setActiveCourse: course => dispatch(setActiveCourse(course)),
  fetchCoursesAsync: () => dispatch(fetchCoursesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
