$(document).ready(function(){
    $('.menu>li').on('click',function(e){
        $('.container>.'+ e.target.classList[0]).show().siblings().hide();
    });
});