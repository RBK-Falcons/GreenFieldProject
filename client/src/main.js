import $ from 'jquery';

const waterMellon = () => {
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

    // this function to handle the value from <a></a> tag and insert it in (hidden input)
    $('.list-group-item-action').click(function () {
      $('#typeOfUser').val($(this).data('type'));
      console.log($('#typeOfUser').val());

      if ($(this).hasClass('std')) {
        $('.scrollspy-example').slideDown();
      } else {
        $('.scrollspy-example').slideUp();
      }
    });

    $('span.list-group-item').click(function () {
      $(this)
        .css({
          background: '#fbc687',
        })
        .siblings()
        .css({
          background: '#fff',
        });
    });
  });
};

export default waterMellon;
