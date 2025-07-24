document.addEventListener("DOMContentLoaded", function () {
  var skyImages = [
    "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/b22ef579c4116d4f3400.jpg?v=1701331846957",
    // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/chupanh360dodanang.jpg?v=1700322534763",
    //"https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/chupanh360dodanang.jpg?v=1700322534763",
    // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/53319019544_545e710006_o.jpg?v=1700323169760",
    // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/49829809438_c8dfe8a930_o.jpg?v=1700323166867",
    // "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/360-vr-0.jpg?v=1700323149605",
  ];
  // var skyImages = JSON.parse(localStorage.getItem("skyArr"));
  var mp3 = [];
  var pic3D = [];
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
  // userInput = convertSpecialCharactersToHTML(userInput);
  // localStorage.clear();
  var del = pic3D.length;
  // var audioArr = [
  //   "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/mix_2m44s%20(audio-joiner.com).mp3?v=1701363121599",
  // ];
  // var tempPic = [
  //   "https://bizweb.dktcdn.net/100/438/408/files/anh-dep-3d-yodyvn7.jpg?v=1683534904084",
  // ];
  // var delimg = tempPic.length;
  var sky = document.getElementById("sky");
  var arrow2 = document.getElementById("arrow2");
  var arrow1 = document.getElementById("arrow1");
  var currentSkyIndex = 0;
  var changeNextSky = function () {
    var images = document.querySelectorAll("a-image");

    // Lặp qua từng thẻ a-image và loại bỏ chúng
    images.forEach(function (image) {
      image.remove();
    });

    currentSkyIndex++;
    if (currentSkyIndex === pic3D.length) {
      currentSkyIndex = 0;
    }
    currentSkyIndex = currentSkyIndex % pic3D.length;
    var newSkyImage = pic3D[currentSkyIndex].src;
    sky.setAttribute("src", newSkyImage);
    console.log(pic3D.length);
    console.log("crr ", currentSkyIndex);

    // idPic = currentSkyIndex;
    Hospost = pic3D[currentSkyIndex].muiTen;
    showArr(currentSkyIndex);
    stt = Hospost.length - 1;
    if (stt < 0) {
      stt = 0;
    }
  };
  var changePrevSky = function () {
    var images = document.querySelectorAll("a-image");

    // Lặp qua từng thẻ a-image và loại bỏ chúng
    images.forEach(function (image) {
      image.remove();
    });

    currentSkyIndex--;

    if (currentSkyIndex === -1) {
      currentSkyIndex = pic3D.length - 1;
    }
    currentSkyIndex = currentSkyIndex % pic3D.length;
    var newSkyImage = pic3D[currentSkyIndex].src;
    sky.setAttribute("src", newSkyImage);
    // idPic = currentSkyIndex;
    console.log("crr ", currentSkyIndex);
    Hospost = pic3D[currentSkyIndex].muiTen;
    showArr(currentSkyIndex);
    stt = Hospost.length - 1;
    if (stt < 0) {
      stt = 0;
    }
  };

  arrow2.addEventListener("click", changeNextSky);

  arrow1.addEventListener("click", changePrevSky);
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
  // trash.addEventListener("click", delpic);
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
  var saveText = document.getElementById("saveText");
  var information = "";
  saveText.addEventListener("click", function () {
     information = showText.innerHTML;
      localStorage.setItem("information", JSON.stringify(information));

  });
  // openText.addEventListener("click", function () {
  //   infor.style.display = "flex";
  // showText.innerHTML = userInput;
  // });
  closeText.addEventListener("click", function () {
    infor.style.display = "none";
  });
  var trashText = document.getElementById("trashText");
  trash.addEventListener("click", delpic);
  trash.addEventListener("mouseover", function () {
    trashText.style.display = "flex";
  });
  trash.addEventListener("mouseout", function () {
    trashText.style.display = "none";
  });

  var openfile = document.getElementById("openfile");
  var upfile = document.getElementById("upfile");
  var closefile = document.getElementById("closefile");
  // openfile.addEventListener("click", function () {
  //   // upfile.style.display = "flex";
  //   // showText.innerHTML = userInput;
  // });
  closefile.addEventListener("click", function () {
    upfile.style.display = "none";
  });

  var audioInput = document.getElementById("audioInput");
  var audioPlayer = document.getElementById("audioPlayer");
  audioInput.addEventListener("change", function (event) {
    audioPlayer.setAttribute("src", URL.createObjectURL(event.target.files[0]));
  });

  /////
  var btn = document.getElementById("buttonfile");
  var inp = document.getElementById("inpbutton");
  var box = document.getElementById("upfile");
  var headfile = document.getElementById("headfile");
  btn.addEventListener("click", function () {
    inp.click();
  });
  // var changed = true;
  var stt = 0;
  var thumbstt = -1;
  function Upload() {
    var sl = inp.files.length;
    for (var i = 0; i < sl; i++) {
      var reader = new FileReader();
      var file = inp.files[i];
      reader.onload = function (e) {
        var pic = document.getElementById("pic");
        // skyImages.push(e.target.result);
        // console.log(skyImages.length);
        var thumbnail = document.createElement("div");
        thumbnail.className = "thumbnail";
        var img = document.createElement("img");
        img.src = e.target.result;
        img.className = "thumbPic";
        thumbnail.appendChild(img);
        pic.appendChild(thumbnail);
        thumbstt++;
        var id = thumbstt;
        thumbnail.querySelector("img").id = id;
        // stt++;
        // var name = `pic${stt}`
        // thumbnail.onclick = picUrl(e.target.result);
        var objPic = {
          src: e.target.result,
          muiTen: [],
        };
        pic3D.push(objPic);
        del = pic3D.length;
        console.log(pic3D, " l");
        // pic3D[i].muiTen = [1];
        // delimg++;
        // if (changed) {
        //   changed = false;
        //   changeNextTempPic();
        // }
      };
      reader.readAsDataURL(file);

      // if (demo) {
      //   demo = false;
      //   tempPic.splice(0, 1);
      //   delimg--;
      // }

      // if (i === sl - 1) {
      //   alert("Đã tải lên " + sl + " ảnh thành công!");
      // }
    }
    // changed = true;
  }

  // var picUrl = function (url) {
  //   return url;
  // };

  inp.addEventListener("change", function (e) {
    Upload();
    // console.log("is" + demoPic);
  });
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
    headfile.textContent = "Thả để tải ảnh lên";
  });
  box.addEventListener("dragleave", function (e) {
    e.preventDefault();
    headfile.textContent = "Kéo và thả để tải ảnh lên";
  });
  box.addEventListener("drop", function (e) {
    e.preventDefault();
    inp.files = e.dataTransfer.files;

    Upload();

    // tempPic.splice(0, 1);
  });
  var in4HP = document.querySelector("#in4HP");
  var closeHP = document.querySelector("#closeHP");
  var saveHP = document.querySelector("#saveHP");
  saveHP.addEventListener("click", function () {
    in4HP.style.display = "flex";
  });
  closeHP.addEventListener("click", function () {
    in4HP.style.display = "none";
  });
  ///////////////////////////////////////////////////////////////////////////////////
  var Hospost = [];

  var addHP = document.querySelector("#addHP");
  // addHP.addEventListener("click",
  var themHP = function () {
    var flatEntity = document.createElement("a-image");

    flatEntity.setAttribute("position", "1 1 1");
    // flatEntity.setAttribute("scale", "1 1 1");
    flatEntity.classList.add("draggable", "hospost");
    flatEntity.setAttribute(
      "src",
      "https://cdn.glitch.global/a87d9b90-8b77-4913-a6e4-8d059e9b58bf/location%20(1).png?v=1702389921752"
    );
    document.querySelector("a-scene").appendChild(flatEntity);
    var id = stt.toString();
    flatEntity.id = id;
    // console.log(id);
    let flatArrow = {
      id: -1,
      x: 1,
      y: 1,
      z: 1,
      sclX: 1,
      sclY: 1,
      sclZ: 1,
      rX: 0,
      rY: 0,
      rZ: 0,
      img: "",
      qX: null,
      qY: null,
      qZ: null,
      qW: null,
    };
    Hospost.push(flatArrow);
    console.log(Hospost);
  };

  var idArrow = -1;
  var currentNewX = null;
  var currentNewY = null;
  var currentNewZ = null;
  //   document.getElementById("scene").addEventListener("mousedown", function (event) {
  //     // Kiểm tra xem phần tử được click có class "clickable" không
  //     if (event.target.classList.contains("hospost")) {
  //                   console.log(currentNewX," u")

  // currentNewX = document.getElementById(event.target.id).object3D.position.x
  // currentNewY = document.getElementById(event.target.id).object3D.position.y
  // currentNewZ = document.getElementById(event.target.id).object3D.position.z
  //                   console.log(currentNewX," d")

  //     };
  //   });
  var ele = null;
  document.getElementById("scene").addEventListener("click", function (event) {
    // Kiểm tra xem phần tử được click có class "clickable" không
    if (event.target.classList.contains("hospost")) {
      // Xử lý sự kiện cho các phần tử có class "clickable"
      in4HP.style.display = "flex";
      idArrow = event.target.id;
      console.log("id", idArrow);
      // var newX = null;   var newY = null;   var newZ = null;

      // newX = document.getElementById(event.target.id).object3D.el.object3D.position.x
      // newY = document.getElementById(event.target.id).object3D.el.object3D.position.y
      // newZ = document.getElementById(event.target.id).object3D.el.object3D.position.z
      // console.log("in ",idArrow);
      // console.log(newX," ",newY," ",newZ);
      // console.log(currentNewX," o")

      //           if(currentNewX !== null && currentNewY !== null && currentNewZ !== null){
      //             currentNewX += newX
      //             currentNewY += newY
      //             currentNewZ += newZ

      //           }
      // setTimeout(function(){
      //   currentNewX = document.getElementById(event.target.id).object3D.position.x
      // currentNewY = document.getElementById(event.target.id).object3D.position.y
      // currentNewZ = document.getElementById(event.target.id).object3D.position.z
      //   console.log(currentNewX," i")
      // }, 500);

      // console.log(event.srcElement.object3D.position);
      // console.log(currentNewX," a")
      // console.log(document.getElementById(event.target.id).object3D.position," o")
      //       console.log(document.getElementById(event.target.id).object3D.position.x," o")
      //             console.log(currentNewX+document.getElementById(event.target.id).object3D.position.x," t")

      ele = event.target;
    }
  });

  var delArr = document.querySelector("#delArr");
  delArr.addEventListener("click", function (e) {
    if (ele !== null) {
      ele.remove();
      ele = null;
    }
  });

  var idPic = null;

  document.getElementById("pic").addEventListener("click", function (event) {
    // console.log(event);
    if (event.target.classList.contains("thumbPic")) {
      // console.log("a ", event.target);
      idPic = event.target.id;
      console.log("inou ", idPic);
    }
  });
  var save = document.querySelector("#save");
  save.addEventListener("click", function () {
    stt++;
    if (idArrow !== -1 && idPic !== null) {
      console.log("idPic1 ", idPic, " ", idArrow);
      console.log("idPic1 ", pic3D, " ", Hospost);

      Hospost[idArrow].id = idPic;
    }
    // if(currentNewX !== null && currentNewY !== null && currentNewZ !== null)
    {
      Hospost[idArrow].x = document
        .getElementById(idArrow)
        .getAttribute("position").x;
      Hospost[idArrow].y = document
        .getElementById(idArrow)
        .getAttribute("position").y;
      Hospost[idArrow].z = document
        .getElementById(idArrow)
        .getAttribute("position").z;

      Hospost[idArrow].rX = document
        .getElementById(idArrow)
        .getAttribute("rotation").x;
      Hospost[idArrow].rY = document
        .getElementById(idArrow)
        .getAttribute("rotation").y;
      Hospost[idArrow].rZ = document
        .getElementById(idArrow)
        .getAttribute("rotation").z;

      Hospost[idArrow].sclX = document
        .getElementById(idArrow)
        .getAttribute("scale").x;
      Hospost[idArrow].sclY = document
        .getElementById(idArrow)
        .getAttribute("scale").y;
      Hospost[idArrow].sclZ = document
        .getElementById(idArrow)
        .getAttribute("scale").z;

      Hospost[idArrow].qX =
        document.getElementById(idArrow).object3D.quaternion._x;
      Hospost[idArrow].qY =
        document.getElementById(idArrow).object3D.quaternion._y;
      Hospost[idArrow].qZ =
        document.getElementById(idArrow).object3D.quaternion._z;
      Hospost[idArrow].qW =
        document.getElementById(idArrow).object3D.quaternion._w;

      console.log("idPic ", currentSkyIndex);
      pic3D[currentSkyIndex].muiTen = Hospost;
      // Object.assign(pic3D[idPic].objPic, { muiTen: Hospost });
      console.log(pic3D, " a");

      console.log(document.getElementById(idArrow).object3D, " o");
      console.log(
        document.getElementById(idArrow).getAttribute("position").x,
        " t"
      );
    }
    console.log(idArrow, " ", Hospost[idArrow]);
    localStorage.setItem("pic3D", JSON.stringify(pic3D));
  });
  var openWeb = document.querySelector("#openWeb");
  // openWeb.addEventListener("click", function (e) {
  //   window.open("project2.html", "_blank");
  // });

  var showArr = function (id) {
    var idArrow = id;
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
        x: Hospost[i].rX,
        y: Hospost[i].rY,
        z: Hospost[i].rZ,
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
  };
  var xoa = document.getElementById("xoa");
  xoa.addEventListener("click", delpic);
  var note = document.getElementById("note");
  note.addEventListener("click", function () {
    infor.style.display = "flex";
  });
  var opentab = document.getElementById("opentab");
  opentab.addEventListener("click", function (e) {
    window.open("project2.html", "_blank");
  });

  var upload = document.getElementById("upload");
  upload.addEventListener("click", function () {
    upfile.style.display = "flex";
  });
  var addbtn = document.getElementById("addbtn");
  addbtn.addEventListener("click", themHP);
  
});
function hoverNavbar() {
  document.querySelector(".navbar").classList.add("active");
}

// function unhoverNavbar() {
//   document.querySelector(".navbar").classList.remove("active");
// }
// function hideNavbar() {
//   document.querySelector("navbar").classList.remove("active");
// }
var tatnav = document.getElementById("tatnav");
tatnav.addEventListener("click", function () {
  document.querySelector(".navbar").classList.remove("active");
});
// var openMenu = document.getElementById("openMenu");
// var clickCount = 0;

// openMenu.addEventListener("click", function () {
//   clickCount++;
//   var rotationAngle = clickCount * 90;
//   openMenu.style.transform = "rotate(" + rotationAngle + "deg)";
// });
// var xoa = document.getElementById("trash");
// var note = document.getElementById("openText");
// var opentab = document.getElementById("openWeb");
// var upload = document.getElementById("openfile");
// var addbtn = document.getElementById("addHP");