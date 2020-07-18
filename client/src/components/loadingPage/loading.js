import React from 'react';
import $ from 'jquery';
class Loading extends React.Component {
  componentDidMount() {
    $(window).on('load', function () {
      //   setTimeout(() => {
      $('.loading').fadeOut(1000);
      //   }, 2000);
    });
  }
  render() {
    return (
      <div className='loading'>
        <div id='load'>
          <div>E</div>
          <div>D</div>
          <div>U</div>
          <div> </div>
          <div>M</div>
          <div>E</div>
        </div>
      </div>
    );
  }
}
export default Loading;
