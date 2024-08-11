$(function(){
    $('#family button').on('click',function(){
        $('#family ul').toggleClass('slide')
    });

    $('#popup-box > span').on('click',function(){
        $('#popup-box').fadeOut('show')
    })
});