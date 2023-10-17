$(function(){
  var he;
  $(window).resize(function(){
    he = $(window).height();
    //현재 브라우저 높이를 he에 저장
    $('section>div').height(he);
    //저장한 높이 he를 section > div에 각각 넣는다.
  });
  $(window).trigger('resize');
  //브라우저 시작시 강제로 resize를 실행

  $(window).scroll(function(){
    var sct = $(window).scrollTop();
    $('#sTop').text(sct);
    if(sct >= 100){
        $('nav').addClass('fixed');
    }else{
        $('nav').removeClass('fixed'); 
    }


  });


  $('#popup').draggable();
  // 'pop이라는 쿠기가 존재하고 그값이 no와 다르면'
  if($.cookie('pop')!="no"){
    $('#popup').show();
  }
  $('#popup area:eq(0)').click(function(){
    $('#popup').fadeOut('fast');
});

$('#popup area:eq(1)').click(function(){
    $.cookie('pop','no',{expires:7});
    $('#popup').fadeOut('fast'); 
});

if($.cookie('popup')=='none'){
    $('#notice_wrap').hide();
}

var chk = $('#expiresChk');

$('.closeBtn').on('click',closePop);

function closePop(){
   if(chk.is(":checked")){ //체크가 되어있으면
    $.cookie('popup','none',{expires:3});
    //chk 변수가 checked를 가지고 있으면
    //popup에  none을 3일동안 저장한 값을 가지고 있어라
   } 
   $('#notice_wrap').fadeOut('fast');
}




});