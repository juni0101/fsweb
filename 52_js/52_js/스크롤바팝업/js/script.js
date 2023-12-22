$(function(){
  var he;
  $(window).resize(function(){
    he = $(window).height();
    // 현재 브라우저 높이를 he에 저장
    $('section>div').height(he);
    // 저장한 높이 he를 section>div에 각각 넣는다
    
  });
  // 브라우저 시작시 강제로 resize를 실행
  $(window).trigger('resize');

  // 헤더 스크롤 고정 
  $(window).scroll(function(){
    var sct = $(window).scrollTop();
    $('#sTop').text(sct);

    if(sct >= 100) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });

  // 팝업창 드래그
  $('#popup').draggable();
  // pop이라는 쿠키가 존재하고 그 값이 no와 다르면
  if($.cookie('pop')!="no") {
    $('#popup').show();
  }
  $('#popup area:eq(0)').click(function(){ 
    $('#popup').fadeOut('fast'); 
  });
  $('#popup area:eq(1)').click(function(){ 
    // expires : 1 = 하루동안 저장 
    $.cookie('pop', 'no', {expires:1}); 
    $('#popup').fadeOut('fast'); 
  }); 

  
  //3일동안 창닫기
  if($.cookie('popup') == 'none'){
    $('#notice_wrap').hide();
  }

  let chk = $('#expiresChk');

  $('.closeBtn').on('click', closePop);

  function closePop(){
    if(chk.is(":checked")){
      $.cookie('popup','none', {expires:3})
      //chk변수가 checked를 가지고있으면 popup에 none을 3일동안 저장한값을 가지고있어라는 뜻 
    }
    $('#notice_wrap').fadeOut('fast'); 
  }
}); 