import React from 'react';
import $ from 'jquery';
import img from '../../img/avatar_profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

class Teacher extends React.Component {
  state = {};

  render() {
    return (
      <div className='teacher'>
        {/* Start Header */}

        <div class='header'>
          <div class='overlay'>
            <div class='container table'>
              <div class='navbar'>
                <span>
                  <span class='main-color wl'>Edu</span>Me
                </span>
              </div>
              <div class='table-row'>
                <div class='intro text-center'>
                  <h1 class='upper'>
                    Welcome <span class='main-color wl'>Ibrahim</span>
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

        <div class='features'>
          <div class='container'>
            <div data-feat='#courses' class='box'>
              <FontAwesomeIcon icon={faFilm} />
              <h3>Courses</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat='#questions' class='box'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <h3>Questions</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat='#students' class='box'>
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
          <div id='courses' className='feat active'>
            <h1>feature one</h1>
          </div>
          <div id='questions' className='feat'>
            <h1>feature two</h1>
          </div>
          <div id='students' className='feat'>
            <h1>feature three</h1>
          </div>
        </div>

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

$(document).ready(function () {
  // Change Header Height

  $('.header').height($(window).height());

  // Features tab
  $('.features .box').click(function () {
    var feat = $(this).data('feat');
    $(feat).addClass('active').siblings().removeClass('active');
  });
});
