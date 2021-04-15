$(() => {
    const mobileBtn = $('#mobile-cta'),
            nav = $('nav'),
            mobileBtnExit = $('#mobile-exit');

    let show =  false;

 mobileBtn.on('click', ()=> {
     if(!show){
         nav.css('display','block');
         show = true;
     }
 })

 mobileBtnExit.on('click',() => {
     if(show) {
         nav.css('display' ,'none');
         show = false;
     }
 })



})


