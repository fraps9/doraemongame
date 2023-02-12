$(function () {
  let countIndex = 0;
  function start() {
    countIndex++;
    $(".timer>img").eq(countIndex).fadeIn(500);
    $(".timer>img").eq(countIndex).siblings().fadeOut(500);
    if (countIndex >= 5) {
      clearInterval(count);
      $(".story").hide();
      $(".play").show();
      timer = setInterval(randomTarget, 1000);
      counter = setInterval(countdown, 1000);
    }
  }
  let count = setInterval(start, 1000);
  $(document).on("touchstart", function () {});
  $("html,body").animate({ scrollTop: "5px" }, 200);
  let second = 60;
  let score = 0;
  let timer;
  let counter;
  let num = 0; // 개체 이름 구분변수 (랜덤)
  let clickable = false; // 연속 클릭 방지 상태변수
  function randomTarget() {
    num = Math.floor(Math.random() * 9); // 0 ~ 8 랜덤 정수
    $(".d" + num)
      .find("img")
      .addClass("active");
    setTimeout(function () {
      $(".d" + num)
        .find("img")
        .removeClass("active");
    }, 600);
    clickable = true;
    setTimeout(function () {
      clickable = false;
    }, 700);
  }
  //timer=setInterval(randomTarget,900);
  $(".doraemon>img").on("click", function () {
    if (clickable) {
      score++;
      $(".play>.score").text(score);
      clickable = false;
    }
    console.log("test");
  });
  function countdown() {
    second--;
    $(".time").text(second);
    if (second == 0) {
      clearInterval(counter);
      clearInterval(timer);
      $(".play").hide();
      $(".end").show();
      $(".end")
        .find(".score")
        .text(score * 10);
    }
  }
  //counter=setInterval(countdown,1000);
  $(".end>.again").on("click", function () {
    second = 60;
    score = 0;
    num = 0;
    clickable = false;
    timer = setInterval(randomTarget, 900);
    counter = (countdown, 1000);
    $(".play").show();
    $(".play").find(".score").text(score);
    $(".paly").find(".time").text(second);
    $(".end").hide();
    counter = setInterval(countdown, 1000);
  });
});