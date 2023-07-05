//type2
$("header nav > .gnb > li").mouseenter(function(){
  $(".sub").stop().fadeIn();
  $(".sub-bg").stop().fadeIn();
});
$("header nav > .gnb > li").mouseleave(function(){
  $(".sub").stop().fadeOut();
  $(".sub-bg").stop().fadeOut();
});

//fade in/out
$("#store ul img").hide();
$("#store ul li:first img").fadeIn();

const imgCount = 2;
let nowCount = 0;
setInterval(function(){
  nowCount = (nowCount == imgCount) ? 0 : nowCount += 1;
  $("#store ul img").eq(nowCount - 1).fadeOut();
  $("#store ul img").eq(nowCount).fadeIn();
},3000);


// Scroll Magic
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement : spyEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook : 0.8,
  })
  // show 넣었다가 뺏다가
  // .setClassToggle(토글할요소,'넣었다 뺄 class 이름')
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});


// top 버튼
const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');

// top 버튼을 클릭하면 상단으로 이동
toTopEl.addEventListener('click',function(){
  gsap.to(window,0.7,{
    scrollTo : 0
  })
});