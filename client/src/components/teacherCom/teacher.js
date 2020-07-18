import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import waterMellon from '../../main';
import $ from 'jquery';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

// import img from '../../img/avatar_profile.jpg';

class Teacher extends React.Component {
  state = {
    title: '',
    type: '',
    videoUrl: '',
    description: '',
    userName: '',
    gitUser: '',
    allStudents: [],
    courses: [],
  };

  async componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push('/');
      return;
    }

    const { fName, gitUser } = this.props.location.state;
    this.setState({
      userName: fName,
      gitUser,
    });

    await axios
      .get('/api/users')
      .then(res => {
        this.setState({
          allStudents: res.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
    waterMellon();

    await axios
      .get('/api/courses')
      .then(res => {
        this.setState({
          courses: res.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // this function to handle Data From add videos Form
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setTypeVal() {
    this.setState({
      type: $('.custom-select').val(),
    });
  }

  // this function to send data to serve to save it in database
  async handleSubmit(e) {
    e.preventDefault();

    const { title, type, videoUrl, description } = this.state;
    ///// post an video
    await axios
      .post('/api/courses/addCourse', {
        title,
        type,
        videoUrl,
        description,
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          title: '',
          type: '',
          videoUrl: '',
          description: '',
          userName: '',
          gitUser: '',
          allStudents: [],
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  logOut() {
    localStorage.removeItem('token');
    this.props.history.push('/sign-in');
  }

  render() {
    return (
      <div className='teacher'>
        {/* Start Header */}

        <div className='header'>
          <div className='overlay'>
            <div className='container table'>
              <div className='navbar'>
                <span>
                  <span className='main-color wl'>Edu</span>Me
                </span>
                <span className='links' onClick={this.logOut.bind(this)}>
                  Logout
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </span>
              </div>
              <div className='table-row'>
                <div className='intro text-center'>
                  <h1 className='upper'>
                    Welcome{' '}
                    <span className='main-color wl'>{this.state.userName}</span>
                  </h1>
                </div>
              </div>
            </div>
            {/* <span class="arrow">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span> */}
          </div>
        </div>

        {/* End Header */}

        {/* Start Our Features */}

        <div className='features'>
          <div className='container'>
            <div data-feat='#courses' className='box'>
              <FontAwesomeIcon icon={faFilm} />
              <h3>Courses</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat='#questions' className='box'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <h3>Questions</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat='#students' className='box'>
              <FontAwesomeIcon icon={faUniversity} />
              <h3>Our Students</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div id='courses' className='feat text-center active'>
            <h4>Courses</h4>
            <p className='h1'>
              In this section you can edit, delete or add videos
            </p>
            <div className='course-tabs'>
              <div className='sections'>
                <div className='vid' data-section='#add'>
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Video
                </div>
                <div className='vid' data-section='#view'>
                  <FontAwesomeIcon icon={faEye} /> View Video
                </div>
                <div className='vid' data-section='#edit'>
                  <FontAwesomeIcon icon={faEdit} /> Edit Video
                </div>
              </div>

              {/* Start Dashboard Section */}
              <section>
                <div id='add'>
                  {/* Start Add Video Section */}
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='form-group'>
                      <label>Enter Video Title</label>
                      <input
                        type='text'
                        name='title'
                        className='form-control'
                        placeholder='Enter Video Title'
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>

                    <div className='choice'>
                      <div className='choice-head'>
                        <label>Video Type</label>
                      </div>
                      <select
                        onChange={this.setTypeVal.bind(this)}
                        className='custom-select'
                        name='type'
                      >
                        <option value>Choose...</option>
                        <option value='technical-skills'>
                          Technical Skills
                        </option>
                        <option value='non-technical'>Non Technical</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>Enter Video URL</label>
                      <input
                        type='text'
                        name='videoUrl'
                        className='form-control'
                        placeholder='Enter Video URL'
                        value={this.state.videoUrl}
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Enter Video Description</label>
                      <textarea
                        name='description'
                        placeholder='Enter Video Description'
                        className='form-control'
                        value={this.state.description}
                        onChange={this.handleChange.bind(this)}
                      ></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                      Add Video
                    </button>
                  </form>

                  {/* End Add Video Section */}
                </div>
                <div id='view'>
                  {/* Start View Video Section */}
                  <h2>view Video</h2>
                  {/* End View Video Section */}
                </div>
                <div id='edit'>
                  {/* Start Edit Video Section */}

                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='choice'>
                      <div className='choice-head'>
                        <label>Video Title</label>
                      </div>
                      <select
                        onChange={this.setTypeVal.bind(this)}
                        className='custom-select'
                      >
                        <option value>Choose...</option>
                        {this.state.courses.map((element, index) => {
                          return (
                            <option value={element.title} key={index}>
                              {element.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className='choice'>
                      <div className='choice-head'>
                        <label>Video Type</label>
                      </div>
                      <select
                        onChange={this.setTypeVal.bind(this)}
                        className='custom-select'
                      >
                        <option value>Choose...</option>
                        <option value='technical-skills'>
                          Technical Skills
                        </option>
                        <option value='non-technical'>Non Technical</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>Enter Video URL</label>
                      <input
                        type='text'
                        name='videoUrl'
                        className='form-control'
                        placeholder='Enter Video URL'
                        value={this.state.videoUrl}
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Enter Video Description</label>
                      <textarea
                        name='description'
                        placeholder='Enter Video Description'
                        className='form-control'
                        value={this.state.description}
                        onChange={this.handleChange.bind(this)}
                      ></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                      Edit Video
                    </button>
                  </form>

                  {/* End Edit Video Section */}
                </div>
              </section>
              {/* End Dashboard Section */}
            </div>
          </div>

          {/* Start Add Question Section */}
          <div id='questions' className='feat'>
            <h1>feature two</h1>
          </div>
          {/* End Add Question Section */}

          {/*we need map on the students*/}
          <div id='students' className='feat'>
            <div className='students-container'>
              {this.state.allStudents.map((student, ind) => {
                return (
                  <div className='show-students' key={ind}>
                    <div className='student-info-front'>
                      <div className='img-std'>
                        <img
                          src='https://bit.ly/3eBREZQ'
                          width='150'
                          alt='...'
                        />
                      </div>
                      <div className='info-std'>
                        <h4>{student.fName}</h4>
                        <p>
                          <span>email :</span> {student.email}
                        </p>
                        <p>
                          <span>Major :</span> {student.type}
                        </p>
                        <p>
                          <span>Github :</span> {student.gitUser}
                        </p>
                      </div>
                    </div>
                    <div className='student-info-back'>
                      <ul>
                        <li>
                          <a href={student.gitHubLink} target='_blank'>
                            <FontAwesomeIcon icon={faGithubSquare} />
                          </a>
                        </li>
                        <li>
                          <a href='https://codepen.io/' target='_blank'>
                            <FontAwesomeIcon icon={faCodepen} />
                          </a>
                        </li>
                        <li>
                          <a href='https://www.linkedin.com/' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank'>
                            <FontAwesomeIcon icon={faTwitterSquare} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* this div for clear float */}
        <div className='clearFix'></div>

        {/* End Our Features */}

        {/* Start Footer */}
        <footer className='text-center'>
          Copyright &copy; <span>EduMe</span> 2020
        </footer>
        {/* Start Footer */}
      </div>
    );
  }
}

export default Teacher;
