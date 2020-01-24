$(() => {
    $(window).scrollTop(0,0);
//=======
//Nav bar change color and size on scroll
//=======
    $(window).on('scroll', () => {
        if($(window).scrollTop() > 50){
            $('nav').css({'height':'100px','background-color':' rgba(67,67,67,.8)','filter':'drop-shadow(0 3px 3px #434343)'});
        }else{
            $('nav').css({'height':'150px','background-color':'transparent', 'filter':'none'});
        };
    })

})
