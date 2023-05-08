let bg1_logo = document.getElementById("bgm1-logo");

let bg1 = document.querySelector(".bg1");
let bg1_moon = document.getElementById("bgm1-moon");
let bg1_txt = document.querySelector(".bgm1-text");
let bg1_textcontent =
  "pushing the boundaries of what is possible with space R&D to create more sustainable future.";
let bg2 = document.querySelector(".bg2");
let bg2_logo = document.getElementById("bgm2-logo");
let bg2_txt = document.getElementById("bgm2-text");
let bg2_textcontent =
  "a research platform to support scientific and technological development in crewed space exploration";
let bgm3 = document.querySelector(".bgm3");
let bgm3_plant1 = document.getElementById("bgm3-plant1");
let bgm3_plant2 = document.getElementById("bgm3-plant2");
let bgm3_h2 = document.getElementById("bgm3-h2");
let bgm3_h2Textcontent = "Sustainability Studies";
let bg4_txt = document.getElementById('bgm4-h2');
let bg4_txtContent = "Technology testing and development platform";
let bg4_suit1 = document.getElementById('bgm4-suit12');
let bg4_suit2 = document.getElementById('bgm4-suit13');
let bg4_suit3 = document.getElementById('bgm4-suit2');
let btn1 = document.querySelector('.btn1')
let next = document.querySelector('.next')
let back = document.querySelector('.back')
let footer = document.querySelector('.footer')
var functionsList = [bg2W, bg3W, bg4W, bg5W];

var currentIndex = 0;


// bg1_moon.style.top = "19.04%";
// bgm3_plant1.style.bottom = -700 + "px";
// bgm3_plant2.style.right = -2000 + "px";





window.onload = bg1W();
//   function () {
//   bg2W(function(){
//     bg3W(function(){
//       bg4W(function(){
//         bg5W(bg6W)
//       })
//     })
//   });
// });
hide(footer)
footer.style.display='none'
hide(btn1)
function bg1W() {
  var opacity = 0;

  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.1;
      bg1.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 300);
  // show(bg1_logo)

  addLetter(bg1_txt, bg1_textcontent);
  console.log(bg1_moon.offsetTop);
  console.log(bg1_moon.offsetLeft);

  // setTimeout(function () {
  //   callback();
  // }, 5000);
}

function bg2W() {
  console.log("worked");
  hide(bg1_logo, 3000);
  hide(bg1_txt, 3000);
  show(bg2_logo, 4000);
  // bg1_moon.style.transform = "rotate(500deg) scale(2.8)";
  console.log(bg1_moon.offsetHeight);
  console.log(bg1_moon.offsetWidth);
  console.log(bg1_moon.offsetTop);
  console.log(bg1_moon.offsetLeft);
  bg1_moon.style.animationPlayState = "running, paused, paused, paused";
  addLetter(bg2_txt, bg2_textcontent);


}



function bg3W(){
  show(bgm3);
  hide(bg2_txt);
  bg1_moon.style.animationPlayState='paused, running, paused, paused'
  console.log('bg3worked')
    // bgm3_plant1.style.bottom = -45 + "px";
    bgm3_plant1.style.animationPlayState='running'
    bgm3_plant2.style.animationPlayState='running'

    // bgm3_plant2.style.right = -980 + "px";
    addLetter(bgm3_h2,bgm3_h2Textcontent)
  
}

function bg4W(){
  hide(bgm3_plant1)
  hide(bgm3_plant2)
  hide(bgm3_h2)
  console.log('bg4W shagal')
  bg1_moon.style.animationPlayState='paused, paused,running, paused'

  setTimeout(function () {
    show(bg4_suit1)
    show(bg4_suit2)
    show(bg4_suit3)
    addLetter(bg4_txt,bg4_txtContent)
  }, 1000);

}

function bg5W(){
  hide(bg4_suit1)
  hide(bg4_suit2)
  hide(bg4_suit3)
  hide(bg4_txt)
  console.log('bg5W shagal')
  bg1_moon.style.animationPlayState='paused, paused, paused,running'

  bg1_logo.style.animationPlayState = 'running';

  footer.style.display='block'

  setTimeout(function () {
    show(btn1,1000);
    show(footer)
  }, 1000);
}


function hide(element, time) {
  element.style.transition = `opacity ${time}ms ease-out`;
  element.style.opacity = 0;
}

function show(element, time) {
  element.style.opacity = 0;
  element.style.transition = `opacity ${time}ms ease-in`;
  element.style.opacity = 1;
}

function addLetter(myPar, myTxt) {
  let i = 0;
  function type() {
    myPar.innerHTML += myTxt.charAt(i);
    i++;
    if (i < myTxt.length) {
      setTimeout(type, 30);
    }
  }
  type();
}

// function switchImage(element, newSrc, time) {
//   element.style.opacity = 0;
//   setTimeout(() => {
//     element.style.backgroundImage = newSrc;
//     element.style.opacity = 1;
//   }, time / 2);
// }

function switchImage(element, newSrc, time) {
  var opacity = 0;
  var increment = 0.1;
  var steps = time / 10; // يتم تحديد عدد الخطوات بحيث يتم تغيير الـ opacity بشكل تدريجي خلال الـ time المحددة
  var currentStep = 0;

  var intervalID = setInterval(function () {
    if (currentStep < steps) {
      opacity += increment;
      element.style.opacity = opacity;
      currentStep++;
    } else {
      clearInterval(intervalID);
      element.style.backgroundImage = newSrc;
    }
  }, 10); // يتم تحديد الوقت اللازم لكل خطوة بمقدار 10 مللي ثانية
}

// function fadeInOut(element1, element2, time) {
//   var opacity1 = 1;
//   var opacity2 = 0;

//   var intervalID = setInterval(function () {
//     if (opacity1 > 0) {
//       opacity1 -= 0.1;
//       element1.style.opacity = opacity1;
//     }
//     if (opacity2 < 1) {
//       opacity2 += 0.1;
//       element2.style.opacity = opacity2;
//     } else if (opacity1 <= 0) {
//       clearInterval(intervalID);
//     }
//   }, time / 10);
// }

//////////////////////////////////////////////////////

// function switchDiv(div1, div2, time) {
//   div1.style.opacity = 1;
//   div1.style.width = "100%";
//   div1.style.height = "100%";
//   div2.style.opacity = 0;
//   div2.style.width = "0";
//   div2.style.height = "0";
//   div2.style.display = "none";
//   div1.style.display = "block";

//   var intervalID = setInterval(function () {
//     if (div1.style.opacity > 0) {
//       div1.style.opacity -= 0.1;
//       div1.style.width = parseInt(div1.style.width) - 10 + "%";
//       div1.style.height = parseInt(div1.style.height) - 10 + "%";
//     } else {
//       clearInterval(intervalID);
//       div1.style.display = "none";
//       div2.style.display = "block";
//       var intervalID2 = setInterval(function () {
//         if (div2.style.opacity < 1) {
//           div2.style.opacity = parseFloat(div2.style.opacity) + 0.1;
//           div2.style.width = parseInt(div2.style.width) + 10 + "%";
//           div2.style.height = parseInt(div2.style.height) + 10 + "%";
//         } else {
//           clearInterval(intervalID2);
//         }
//       }, time / 10);
//     }
//   }, time / 10);
// }


// // احصل على الزر من الصفحة
// const stopBtn = document.getElementById('stopBtn');

// // تعيين وظيفة لزر الإيقاف
// stopBtn.addEventListener('click', () => {
//   // إيقاف جميع الوظائف والرسوم المتحركة هنا
//   stopAllFunctionsAndAnimations();

//   // إعادة تشغيل الوظائف والرسوم المتحركة بعد فترة زمنية محددة
//   setTimeout(() => {
//     restartAllFunctionsAndAnimations();
//   }, 5000); // تعيين الوقت الذي تريد فيه إعادة تشغيل الوظائف والرسوم المتحركة بعد النقر على الزر
// });

// function stopAllFunctionsAndAnimations() {
//   // وضع كل الوظائف والرسوم المتحركة التي تريد إيقافها هنا
//   // مثال: توقف كل الانيميشنز في الصفحة
//   document.querySelectorAll('*').forEach(element => {
//     const styles = window.getComputedStyle(element);
//     if (styles.animationPlayState === 'running') {
//       element.style.animationPlayState = 'paused';
//     }
//   });
// }

// function restartAllFunctionsAndAnimations() {
//   // وضع كل الوظائف والرسوم المتحركة التي تريد إعادة تشغيلها هنا
//   // مثال: استئناف جميع الانيميشنز في الصفحة
//   document.querySelectorAll('*').forEach(element => {
//     const styles = window.getComputedStyle(element);
//     if (styles.animationPlayState === 'paused') {
//       element.style.animationPlayState = 'running';
//     }
//   });
// }

// function next(){
//   next.onclick = bg1_moon.keyframes
// }
back.addEventListener("click",function(){
  location.reload();
})
next.addEventListener("click", function() {
  functionsList[currentIndex]();
    // if(currentIndex==1){
      // bg1_logo.animationPlayState = 'running';
    // }
    // else if(currentIndex==2)
    // bg1_moon.animationPlayState = 'running paused paused'
    // else if(currentIndex==3)
    // bg1_moon.animationPlayState ='paused running paused'
    // else 
    // bg1_moon.animationPlayState = 'paused paused running'

  currentIndex++;
  if(currentIndex >= functionsList.length) {
    currentIndex = 0;
    next.style.display='none'
  }
});

$(document).ready(function(){
  $('.sel').on('change', function() {
    var url = $(this).val();
    window.location.href = url;
  });
  });