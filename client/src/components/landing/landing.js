import React from "react";

class Landing extends React.Component {
    state = {}

    render() {
        return (
            <div className="landing">

                {/* Start Header */}

                <div className="header">
                    <div className="overlay">
                        <div className="container table">
                            <div className="navbar">
                                <span><span className="main-color wl">Edu</span>Me</span>
                            </div>
                            <div className="table-row">
                                <div className="intro text-center">
                                    <h1 className="upper">Welcome to <span className="main-color wl">Edu<span>Me</span></span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <div className="buttons">
                                        <a className="upper" href="/sign-in">sign in</a>
                                        <a className="upper" href="/sign-up">Sign up</a>
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
