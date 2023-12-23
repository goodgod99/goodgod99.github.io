// loginanimation

window.onload = function() {
  $(".logobox").addClass("active1");
  $(".logobackground").addClass("active2");
};

// nav

window.addEventListener('scroll', function() {
  var winscrolltop = window.scrollY;

  if (winscrolltop <= 60) {

      $(".navbar").removeClass("Sticky");

  } else {
      $(".navbar").addClass("Sticky");
  }

});

// animation

function titleanimation(){
  var textbox = document.querySelectorAll(".titleanimation");
  for (var i = 0; i < textbox.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = textbox[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
          textbox[i].style.opacity = 1;
          textbox[i].style.transform = "translateY(0%)";
      } else {
          textbox[i].style.opacity = 0;
          textbox[i].style.transform = "translateY(7rem)";
      }
  }
}

window.addEventListener("scroll", titleanimation);

function textanimation(){
  var textbox = document.querySelectorAll(".textanimation");
  for (var i = 0; i < textbox.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = textbox[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
          textbox[i].style.opacity = 1;
          textbox[i].style.transform = "translateY(0%)";
      } else {
          textbox[i].style.opacity = 0;
          textbox[i].style.transform = "translateY(7rem)";
      }
  }
}

window.addEventListener("scroll", textanimation);

// droneshot
const dragContainer = document.getElementById("droneshot");

let timer = null;
let callback = ([entry]) => {
  const toast = document.querySelector(".touchhide");
  if (entry.isIntersecting) {
    toast.classList.add("active");
    timer = setTimeout(() => {
      toast.classList.remove("active");
    }, 2 * 1000);
    return;
  }
  clearTimeout(timer);
  toast.classList.remove("active");
};

const options = { threshold: 0 };

const observer = new IntersectionObserver(callback, options);

const section = document.querySelector("#droneshot");

function initPositionImg() {
    const dragImg = document.getElementById("droneshotimg");
    const positionLeft = (dragImg.clientWidth - dragContainer.clientWidth) / 2;
    dragContainer.scrollLeft = positionLeft;
}

const ImgObserver = new ResizeObserver(([entry]) => {
    if (entry && entry.target) {
      initPositionImg();
    }
});

window.addEventListener("load", function () {
    const width = window.innerWidth;
    if (width < 1024) {
        observer.observe(section);
      ImgObserver.observe(dragContainer, { box: "border-box" });
    }
});
