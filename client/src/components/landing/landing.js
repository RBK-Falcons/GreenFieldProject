import React from "react";
import $ from 'jquery';


class Landing extends React.Component {
    state = {}

    render() {
        return (
            <div className="landing">

                {/* Start Header */}

                <div class="header">
                    <div class="overlay">
                        <div class="container table">
                            <div class="navbar">
                                <span><span class="main-color wl">Edu</span>Me</span>
                            </div>
                            <div class="table-row">
                                <div class="intro text-center">
                                    <h1 class="upper">Welcome to <span class="main-color wl">Edu<span>Me</span></span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <div class="buttons">
                                        <a class="upper" href="/sign-in">sign in</a>
                                        <a class="upper" href="/sign-up">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Header */}

            </div>
        );
    }
}

export default Landing;

$(document).ready(function () {

    // Change Header Height

    $('.header').height($(window).height());

})