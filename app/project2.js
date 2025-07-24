document.addEventListener("DOMContentLoaded", function () {
  var skyImages = [
    "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/chupanh360dodanang.jpg?v=1700322534763",
    //   //"https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/chupanh360dodanang.jpg?v=1700322534763",
    //   // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/53319019544_545e710006_o.jpg?v=1700323169760",
    //   // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/49829809438_c8dfe8a930_o.jpg?v=1700323166867",
    //   // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/360-vr-0.jpg?v=1700323149605",
  ];
  var pic3D = JSON.parse(localStorage.getItem("pic3D"));
  var sky = document.getElementById("sky");
  // sky.setAttribute("src", pic3D[0].src);
  console.log(pic3D, " ok");
  var addHP = document.querySelector("#addHP");
  //   addHP.addEventListener("click", function () {
  
       var userInput = JSON.parse(localStorage.getItem("information"));
    function convertSpecialCharactersToHTML(inputText) {
              var htmlString = inputText
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
                  .replace(/\n/g, '<br>');

              return htmlString;
          }
  userInput = convertSpecialCharactersToHTML(userInput);
  
  {
          var idArrow = 0;
      sky.setAttribute("src", pic3D[idArrow].src);
      //xoa hospost cũ
      var length = pic3D[idArrow].muiTen.length;
      var Hospost = pic3D[idArrow].muiTen;
      for (let i = 0; i < length; i++) {
        var flatEntity = document.createElement("a-image");
        flatEntity.setAttribute(
          "src",
"https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/location%20(1).png?v=1702389921752"
        );
        flatEntity.id = Hospost[i].id;
        flatEntity.classList.add("draggable", "hospost");

        document.querySelector("a-scene").appendChild(flatEntity);

        // var entity = document.getElementById(Hospost[i].id);
        // var imgSrc =
        //   "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/up-arrow.png?v=1702116140571";
        // flatEntity.setAttribute("src", imgSrc);
        // skyImages.push( Hospost[i].img)
        flatEntity.setAttribute("position", {
          x: Hospost[i].x,
          y: Hospost[i].y,
          z: Hospost[i].z,
        });
        flatEntity.setAttribute("rotation", {
          x: 0,
          y: 90,
          z: 0,
        });
        flatEntity.setAttribute("scale", {
          x: Hospost[i].sclX,
          y: Hospost[i].sclY,
          z: Hospost[i].sclZ,
        });
        // flatEntity.setAttribute("rotation", {
        //   x: Hospost[i].qX,
        //   y: Hospost[i].qY,
        //   z: Hospost[i].qZ,
        //   w: Hospost[i].qW,
        // });
        // flatEntity.object3D.position.set(Hospost[i].x, Hospost[i].y, Hospost[i].z);
        // console.log(Hospost[i].x, " ", Hospost[i].y, " ", Hospost[i].z);

        // console.log(entity.getAttribute("rotation"));
        // var quaternion = new THREE.Quaternion(Hospost[i].qX, Hospost[i].qY, Hospost[i].qZ, Hospost[i].qW);


        // flatEntity._onChange(onQuaternionChange);
        // quaternion.x = Hospost[i].qX
        // quaternion.y = Hospost[i].qY
        // quaternion.z = Hospost[i].qZ
        // quaternion.w = Hospost[i].qW
        // console.log(quaternion.x); // Giá trị x của quaternion
        // console.log(quaternion.y); // Giá trị y của quaternion
        // console.log(quaternion.z); // Giá trị z của quaternion
        // console.log(quaternion.w); // Giá trị w của quaternion
        //         flatEntity.setAttribute("rotation", `${quaternion.x} ${quaternion.y} ${quaternion.z} ${quaternion.w}`);

        // flatEntity.object3D.quaternion._x =null;
        // flatEntity.object3D.quaternion._y = Hospost[i].qY;
        // flatEntity.object3D.quaternion._z = Hospost[i].qZ;
         flatEntity.object3D.quaternion._w = 5;
        // console.log(flatEntity.object3D.quaternion._y,"ư");
            console.log(Hospost[i].qW);

        // console.log(linkImg);
        // linkImg.addEventListener("click", function () {
        //   sky.setAttribute("src", Hospost[i].img);
        //   console.log("ok");
        // });
      }
  }
  

  
  

  document.getElementById("scene").addEventListener("mouseup", function (event) {
  // var x = event.button
  // console.log("a")
    // for(var t = 1;t<=3;t++){console.log(event.button)}
//   if(x!==undefined && x === 0){ 
//     console.log(x)
// }
 // Kiểm tra xem phần tử được click có class "clickable" không


      if (event.target.classList.contains("hospost")) {
                  console.log("in ",event.button)

      // if(x!==undefined && x === 0){
      //     console.log("in ",event.button)
      var idArrow = event.target.id;

      
      var images = document.querySelectorAll('a-image');
        

      // Lặp qua từng thẻ a-image và loại bỏ chúng
      images.forEach(function(image) {
        image.remove();
        console.log("removed")
      });
      var nextIMG = document.getElementById("nextIMG");
        nextIMG.style.display = "none";
      sky.setAttribute("src", pic3D[idArrow].src);
      
      //xoa hospost cũ
      var length = pic3D[idArrow].muiTen.length;
      var Hospost = pic3D[idArrow].muiTen;
      for (let i = 0; i < length; i++) {
        
        var flatEntity = document.createElement("a-image");
        flatEntity.setAttribute(
          "src",
"https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/location%20(1).png?v=1702389921752"
        );
        flatEntity.id = Hospost[i].id;
        flatEntity.classList.add("draggable", "hospost");

        document.querySelector("a-scene").appendChild(flatEntity);

        // var entity = document.getElementById(Hospost[i].id);
        // var imgSrc =
        //   "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/up-arrow.png?v=1702116140571";
        // flatEntity.setAttribute("src", imgSrc);
        // skyImages.push( Hospost[i].img)
        flatEntity.setAttribute("position", {
          x: Hospost[i].x,
          y: Hospost[i].y,
          z: Hospost[i].z,
        });
        flatEntity.setAttribute("rotation", {
          x: 0,
          y: 90,
          z: 0,
        });
        flatEntity.setAttribute("scale", {
          x: Hospost[i].sclX,
          y: Hospost[i].sclY,
          z: Hospost[i].sclZ,
        });
        // flatEntity.setAttribute("rotation", {
        //   x: Hospost[i].qX,
        //   y: Hospost[i].qY,
        //   z: Hospost[i].qZ,
        //   w: Hospost[i].qW,
        // });
        // flatEntity.object3D.position.set(Hospost[i].x, Hospost[i].y, Hospost[i].z);
        // console.log(Hospost[i].x, " ", Hospost[i].y, " ", Hospost[i].z);

        // console.log(entity.getAttribute("rotation"));
        // var quaternion = new THREE.Quaternion(Hospost[i].qX, Hospost[i].qY, Hospost[i].qZ, Hospost[i].qW);

        // quaternion.x = Hospost[i].qX
        // quaternion.y = Hospost[i].qY
        // quaternion.z = Hospost[i].qZ
        // quaternion.w = Hospost[i].qW
        // console.log(quaternion.x); // Giá trị x của quaternion
        // console.log(quaternion.y); // Giá trị y của quaternion
        // console.log(quaternion.z); // Giá trị z của quaternion
        // console.log(quaternion.w); // Giá trị w của quaternion
        //         flatEntity.setAttribute("rotation", `${quaternion.x} ${quaternion.y} ${quaternion.z} ${quaternion.w}`);

        // flatEntity.object3D.quaternion._x =null;
        // flatEntity.object3D.quaternion._y = Hospost[i].qY;
        // flatEntity.object3D.quaternion._z = Hospost[i].qZ;
        // flatEntity.object3D.quaternion._w = Hospost[i].qW;
        // console.log(flatEntity.object3D.quaternion._y,"ư");
        //     console.log(flatEntity.object3D,"o");

        // console.log(linkImg);
        // linkImg.addEventListener("click", function () {
        //   sky.setAttribute("src", Hospost[i].img);
        //   console.log("ok");
        // });
      }
    }
// }
  });

  document
    .getElementById("scene")
    .addEventListener("mouseenter", function (event) {
      if (event.target.classList.contains("hospost")) {
        var idArrow = event.target.id;

        var nextPIC = document.getElementById("nextPIC");
        var nextIMG = document.getElementById("nextIMG");

        nextPIC.setAttribute("src", pic3D[idArrow].src);
        nextIMG.style.display = "flex";

        //  linkImg.addEventListener("mouseleave", function () {
        //   nextIMG.style.display = "none";
        // });
      }
    });

  document
    .getElementById("scene")
    .addEventListener("mouseleave", function (event) {
      if (event.target.classList.contains("hospost")) {
        var nextIMG = document.getElementById("nextIMG");
        nextIMG.style.display = "none";
      }
    });

  // {
  //     var length = Hospost.length;
  //   for (let i = 0; i < length; i++) {
  //     var flatEntity = document.createElement("a-image");
  //     flatEntity.setAttribute(
  //       "src",
  //       "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/up-arrow.png?v=1702116140571"
  //     );
  //     flatEntity.id = Hospost[i].id;
  //     flatEntity.classList.add("draggable","hospost");

  //     document.querySelector("a-scene").appendChild(flatEntity);

  //     var entity = document.getElementById(Hospost[i].id);
  //     var imgSrc =
  //       "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/up-arrow.png?v=1702116140571";
  //     flatEntity.setAttribute("src", imgSrc);
  //     // skyImages.push( Hospost[i].img)
  //     flatEntity.setAttribute("position", {
  //       x: Hospost[i].x,
  //       y: Hospost[i].y,
  //       z: Hospost[i].z,
  //     });
  //     flatEntity.setAttribute("rotation", {
  //       x: Hospost[i].rX,
  //       y: Hospost[i].rY,
  //       z: Hospost[i].rZ,
  //     });
  //     flatEntity.setAttribute("scale", {
  //       x: Hospost[i].sclX,
  //       y: Hospost[i].sclY,
  //       z: Hospost[i].sclZ,
  //     });
  //     // flatEntity.setAttribute("rotation", {
  //     //   x: Hospost[i].qX,
  //     //   y: Hospost[i].qY,
  //     //   z: Hospost[i].qZ,
  //     //   w: Hospost[i].qW,
  //     // });
  //     // flatEntity.object3D.position.set(Hospost[i].x, Hospost[i].y, Hospost[i].z);
  //     // console.log(Hospost[i].x, " ", Hospost[i].y, " ", Hospost[i].z);

  //     // console.log(entity.getAttribute("rotation"));
  //     // var quaternion = new THREE.Quaternion(Hospost[i].qX, Hospost[i].qY, Hospost[i].qZ, Hospost[i].qW);

  //     // quaternion.x = Hospost[i].qX
  //     // quaternion.y = Hospost[i].qY
  //     // quaternion.z = Hospost[i].qZ
  //     // quaternion.w = Hospost[i].qW
  //     // console.log(quaternion.x); // Giá trị x của quaternion
  //     // console.log(quaternion.y); // Giá trị y của quaternion
  //     // console.log(quaternion.z); // Giá trị z của quaternion
  //     // console.log(quaternion.w); // Giá trị w của quaternion
  //     //         flatEntity.setAttribute("rotation", `${quaternion.x} ${quaternion.y} ${quaternion.z} ${quaternion.w}`);

  //     // flatEntity.object3D.quaternion._x =null;
  //     // flatEntity.object3D.quaternion._y = Hospost[i].qY;
  //     // flatEntity.object3D.quaternion._z = Hospost[i].qZ;
  //     // flatEntity.object3D.quaternion._w = Hospost[i].qW;
  //     // console.log(flatEntity.object3D.quaternion._y,"ư");
  //     //     console.log(flatEntity.object3D,"o");
  //     var linkImg = document.getElementById(Hospost[i].id);
  //      var nextPIC = document.getElementById("nextPIC");
  //     var nextIMG = document.getElementById("nextIMG");
  //     linkImg.addEventListener("mouseenter", function () {
  //       nextPIC.setAttribute(
  //       "src",
  //       Hospost[i].img
  //     );
  //       nextIMG.style.display = "flex";
  //     });
  //      linkImg.addEventListener("mouseleave", function () {
  //       nextIMG.style.display = "none";
  //     });

  //     console.log(linkImg);
  //     linkImg.addEventListener("click", function () {
  //       sky.setAttribute("src", Hospost[i].img);
  //       console.log("ok");
  //     });
  //   }
  // }

  var mp3 = JSON.parse(localStorage.getItem("mp3"));
  var sound = document.getElementById("sound");
  var audio = document.getElementById("audio");
  audio.setAttribute("src", mp3);
  // localStorage.removeItem("mp3");
  //    var userInput = JSON.parse(localStorage.getItem("information"));
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
  var del = pic3D.length;
  var audioArr = [
    "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/mix_2m44s%20(audio-joiner.com).mp3?v=1701363121599",
  ];
  var tempPic = [
    "https://bizweb.dktcdn.net/100/438/408/files/anh-dep-3d-yodyvn7.jpg?v=1683534904084",
  ];
  var delimg = tempPic.length;
  
  var currentSkyIndex = 0;
  var changeNextSky = function () {
    currentSkyIndex++;
    if (currentSkyIndex === pic3D.length) {
      currentSkyIndex = 0;
    }
    currentSkyIndex = currentSkyIndex % pic3D.length;
    var newSkyImage = pic3D[currentSkyIndex].src;
    sky.setAttribute("src", newSkyImage);
    console.log(pic3D.length);
  };
  var changePrevSky = function () {
    currentSkyIndex--;

    if (currentSkyIndex === -1) {
      currentSkyIndex = pic3D.length - 1;
    }
    currentSkyIndex = currentSkyIndex % pic3D.length;
    var newSkyImage = pic3D[currentSkyIndex].src;
    sky.setAttribute("src", newSkyImage);
  };

  

  function delpic() {
    if (del < 2) {
      alert("Cần ít nhất 2 ảnh để xoá");
    } else {
      del--;
      pic3D.splice(currentSkyIndex, 1);
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
    console.log("okro")
   showText.innerHTML = userInput;
  });
  closeText.addEventListener("click", function () {
    infor.style.display = "none";
  });
  var trashText = document.getElementById("trashText");
  trash.addEventListener("click", delpic);
  trash.addEventListener("mouseover", function () {
    trashText.style.display = "none";
  });
  trash.addEventListener("mouseout", function () {
    trashText.style.display = "none";
  });

  // Lấy entity theo ID
});

