$(function(){
  $('#sidemenu a').on('click', function(e){
    e.preventDefault();

    if($(this).hasClass('open')) {
      // do nothing because the link is already open
    } else {
      var oldcontent = $('#sidemenu a.open').attr('href');
      var newcontent = $(this).attr('href');

      $(oldcontent).fadeOut('fast', function(){
        $(newcontent).fadeIn().removeClass('hidden');
        $(oldcontent).addClass('hidden');
      });


      $('#sidemenu a').removeClass('open');
      $(this).addClass('open');
    }
  });
});

$(function() {
  $('#highlight-table td').on('mouseover mouseout', function(){
             $(this).prevAll().addBack()
             .add($(this).parent().prevAll()
             .children(':nth-child(' + ($(this).index() + 1) + ')'))
             .toggleClass('tablehover');
      });
});

$(function() {
  $("#sidemenu > li > div").click(function(){

    if(false === $(this).next().is(':visible')) {
        $('#sidemenu li ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
});

$('#sidemenu ul:eq(0)').show();

});
