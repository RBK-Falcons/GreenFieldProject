// import jQuery
import $ from 'jquery';

$(document).ready(function () {
  // Change Header Height

  $('.header').height($(window).height());

  // Main Features tab
  $('.features .box').click(function () {
    var feat = $(this).data('feat');
    $(feat).slideDown().siblings().slideUp();
  });

  // Section Of Features Tab

  $('.teacher .feat .course-tabs .sections .vid').click(function () {
    var section = $(this).data('section');
    $(section).parent().slideDown();
    $(section).slideDown().siblings().slideUp();
    console.log(section);
  });

  // Pop Up Videos In Student Page (Courses)

  $('.video-popup').on('click', function (e) {
    e.preventDefault();
    var videoUrl = $(this).attr('data-media');
    var popupIframe = $('#popup-frame');

    popupIframe.attr('src', videoUrl);
    $('.popup').addClass('show-popup');
  });

  $('.popup').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('#popup-frame').attr('src', '');
    $('.popup').removeClass('show-popup');
  });

  $('.popup > iframe').on('click', function (e) {
    e.stopPropagation();
  });

  // Trigger MixitUp
  // $('.feat .course-videos .sections div').click(function () {
  //     var type = $(this).data('filter')
  //     console.log(type)
  //     if (type == 'all') {
  //         $('.feat .course-videos section ').show()
  //     } else if (type == 'technical-skills') {
  //         $('.' + type).show().siblings().hide()
  //     } else if (type == 'non-technical') {
  //         $('.' + type).show().siblings().hide()
  //     } else if (type == 'other') {
  //         $('.' + type).show().siblings().hide()
  //     }
  // })

  // var mixer = mixitup('.feat .course-videos section', {
  //     animation: {
  //         effectsOut: 'fade translateX(-100%)'
  //     }
  // })
});
