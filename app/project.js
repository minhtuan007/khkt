document.addEventListener("DOMContentLoaded", function () {
  // var skyImages = [
  //   "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/chupanh360dodanang.jpg?v=1700322534763",
  //   //"https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/chupanh360dodanang.jpg?v=1700322534763",
  //   // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/53319019544_545e710006_o.jpg?v=1700323169760",
  //   // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/49829809438_c8dfe8a930_o.jpg?v=1700323166867",
  //   // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/360-vr-0.jpg?v=1700323149605",
  // ];
  var skyImages = JSON.parse(localStorage.getItem("skyArr"));
  var mp3 = JSON.parse(localStorage.getItem("mp3"));
  var sound = document.getElementById("sound");
  var audio = document.getElementById("audio");
  audio.setAttribute("src", mp3);
  // localStorage.removeItem("mp3");
   var userInput ="";
//   function convertSpecialCharactersToHTML(inputText) {
//             var htmlString = inputText
//                 .replace(/&/g, '&amp;')
//                 .replace(/</g, '&lt;')
//                 .replace(/>/g, '&gt;')
//                 .replace(/"/g, '&quot;')
//                 .replace(/'/g, '&#39;')
//                 .replace(/\n/g, '<br>');

//             return htmlString;
//         }
//    userInput = convertSpecialCharactersToHTML(userInput);
// localStorage.clear();
  var del = skyImages.length;
  var audioArr = [
    "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/mix_2m44s%20(audio-joiner.com).mp3?v=1701363121599",
  ];
  var tempPic = [
    "https://bizweb.dktcdn.net/100/438/408/files/anh-dep-3d-yodyvn7.jpg?v=1683534904084",
  ];
  var delimg = tempPic.length;
  var sky = document.getElementById("sky");
  var arrow2 = document.getElementById("arrow2");
  var arrow1 = document.getElementById("arrow1");
  var currentSkyIndex = 0;
  var changeNextSky = function () {
    currentSkyIndex++;
    if (currentSkyIndex === skyImages.length) {
      currentSkyIndex = 0;
    }
    currentSkyIndex = currentSkyIndex % skyImages.length;
    var newSkyImage = skyImages[currentSkyIndex];
    sky.setAttribute("src", newSkyImage);
    console.log(skyImages.length);
  };
  var changePrevSky = function () {
    currentSkyIndex--;

    if (currentSkyIndex === -1) {
      currentSkyIndex = skyImages.length - 1;
    }
    currentSkyIndex = currentSkyIndex % skyImages.length;
    var newSkyImage = skyImages[currentSkyIndex];
    sky.setAttribute("src", newSkyImage);
  };

  arrow2.addEventListener("click", changeNextSky);

  arrow1.addEventListener("click", changePrevSky);
  function delpic() {
    if (del < 2) {
      alert("Cần ít nhất 2 ảnh để xoá");
    } else {
      del--;
      skyImages.splice(currentSkyIndex, 1);
      changeNextSky();
    }
    console.log("xoa");
  }
  var trash = document.getElementById("trash");
  trash.addEventListener("click", delpic);
  var play = false;

  var mute = false;
  var text = document.getElementById("text");
  var text2 = document.getElementById("text2");
  var mute1 = document.getElementById("mute1");
  var stop = function () {
    var computedStyle = window.getComputedStyle(sound);
    var backgroundPos = computedStyle.getPropertyValue("background-position");
    if (mute1.style.width === "57px") {
      mute1.style.width = "37px";
      audio.components.sound.stopSound();
      mute = true;
      if (backgroundPos === "60px 125px") {
        sound.style.backgroundPosition = "-2px 125px";
        text.innerHTML = "Pausing";
        play = false;
        console.log("pause");
      }
    } else {
      mute1.style.width = "57px";
      audio.components.sound.playSound();
      mute = false;
      if (backgroundPos === "-2px 125px") {
        //dừng
        sound.style.backgroundPosition = "60px 125px";
        audio.components.sound.playSound();
        text.innerHTML = "Playing";
        play = true;
        console.log("play");
      }
    }
  };
  var pause = function () {
    var computedStyle = window.getComputedStyle(sound);
    var backgroundPos = computedStyle.getPropertyValue("background-position");
    if (backgroundPos === "-2px 125px") {
      //dừng
      sound.style.backgroundPosition = "60px 125px";
      audio.components.sound.playSound();
      text.innerHTML = "Playing";
      play = true;
      console.log("play");
      if (mute1.style.width === "37px") {
        mute1.style.width = "57px";
        mute = false;
      }
    } else {
      sound.style.backgroundPosition = "-2px 125px";
      audio.components.sound.pauseSound();
      text.innerHTML = "Pausing";
      play = false;
      console.log("pause");
    }
  };
  mute1.addEventListener("click", stop);

  sound.addEventListener("click", pause);

  sound.addEventListener("mouseover", function (e) {
    if (play) {
      text.innerHTML = "Playing";
    } else {
      text.innerHTML = "Stopping";
    }
    text.style.display = "block";
  });
  sound.addEventListener("mouseout", function (e) {
    text.style.display = "none";
  });
  mute1.addEventListener("mouseover", function (e) {
    text2.innerHTML = "Stop/Start";
    text2.style.display = "block";
  });
  mute1.addEventListener("mouseout", function (e) {
    text2.style.display = "none";
  });
  var closeText = document.getElementById("closeText");

  var openText = document.getElementById("openText");
  var infor = document.getElementById("infor");
  var showText = document.getElementById("showText");

  openText.addEventListener("click", function () {
    infor.style.display = "flex";
    showText.innerHTML = userInput;
  });
  closeText.addEventListener("click", function () {
    infor.style.display = "none";
  });
  var trashText = document.getElementById("trashText");
trash.addEventListener("click", delpic);
    trash.addEventListener("mouseover", function(){
          trashText.style.display = "flex";
    });
  trash.addEventListener("mouseout", function(){
          trashText.style.display = "none";
    });

  
  // Lấy entity theo ID


});
