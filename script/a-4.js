$(function(){
    $('.family button').on('click',function(){
        $('.family ul').toggleClass('slide');
    });

    $('#openBtn').on('click',function(){
        $('#popupBox').addClass('show');
    });
    $('#closeBtn').on('click',function(){
        $('#popupBox').removeClass('show');
    });
});