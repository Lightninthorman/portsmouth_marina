$(() => {
    $(window).scrollTop(0,0);
//=======
//Nav bar change color and size on scroll
//=======
    $(window).on('scroll', () => {
        if($(window).scrollTop() > 50){
            $('nav').css({'height':'100px','background-color':' rgba(6,66,115,.8)','filter':'drop-shadow(0 3px 3px #064273)'});
            $('.nav-item').css({'font-size':'22px'});
        }else{
            $('nav').css({'height':'150px','background-color':'transparent', 'filter':'none'});
            $('.nav-item').css({'font-size':'24px'});
        };
    })

    $('.hamburger-item').on('click',() => {
        $('#menuModal').modal('hide');
    })

})
