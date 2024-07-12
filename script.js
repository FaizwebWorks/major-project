feather.replace();

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function breakTheText() {
  let h1Text = document.querySelector(".animateText");

  let Text = h1Text.textContent;

  let splittedText = Text.split("");
  clutter = "";
  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });

  h1Text.innerHTML = clutter;
}

document.addEventListener("DOMContentLoaded", () => {
  loco();
  breakTheText();
  const main = document.querySelector(".main");
  const cursor = document.querySelector(".cursor");
  const hoverElements = document.querySelectorAll(".hoverElements");

  hoverElements.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      cursor.style.display = "none";
    });

    elem.addEventListener("mouseleave", () => {
      cursor.style.display = "block";
    });
  });

  main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    });
  });

  gsap.to(".scaleUpHeroImg", {
    scale: 1.4,
    scrollTrigger: {
      trigger: ".scaleUpHeroImg",
      scroller: ".main",
      // markers: true,
      start: "bottom bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".animateText span", {
    y: "-100%",
    duration: 0.5,
    ease: "power4.out",
    stagger: 0.1,
  });


  function animateText(elements, triggerElement, scrollElement) {
    const text = new SplitType(elements, { types: "chars" });
    const chars = text.chars;

    gsap.from(chars, {
      opacity: 0.2,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: triggerElement,
        scroller: scrollElement,
        // markers: true,
        start: "top 80%",
        end: "top 5%",
        scrub: true,
      },
    });
  }

  gsap.from(".aboutbtn", {
    left: "-10%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".aboutbtn",
      scroller: ".main",
      start: "top bottom",
      end: "top 90%",
      scrub: true,
    },
  });

  gsap.from(".animateUp", {
    y: "100%",
    opacity: 0,
    duration: 0.25,
    ease: Linear,
    scrollTrigger: {
      trigger: ".animateUp",
      scroller: ".main",
      start: "top 90%",
      end: "top 80%",
      // markers: true,
      scrub: true,
    },
  });

  gsap.from(".scaleUp", {
    scale: 0.9,
    // opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".scaleUp",
      scroller: ".main",
      scrub: true,
      // markers: true,
      start: "top 85%",
      end: "top 50%",
    },
  });
  gsap.from(".scaleUp2", {
    scale: 0.9,
    // opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".scaleUp2",
      scroller: ".main",
      scrub: true,
      // markers: true,
      start: "top 85%",
      end: "top 50%",
    },
  });

  gsap.from(".animateSus", {
    x: "-10%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".animateSus",
      scroller: ".main",
      // markers: true,
      start: "top 100%",
      end: "top 80%",
      scrub: true,
    },
  });

  gsap.from(".btn3", {
    y: "100%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".btn3",
      scroller: ".main",
      // markers: true,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    },
  });

  let video = document.querySelector(".contactVideo video");
  let contactText = document.querySelector(".contactText");

  contactText.addEventListener("mouseenter", () => {
    video.style.opacity = 1;
    video.currentTime = 0;
    video.play();
  });

  contactText.addEventListener("mouseleave", () => {
    video.style.opacity = 0;
    video.pause();
  });

  let revealText = document.querySelectorAll(".reveal-text");
  animateText(revealText, revealText, ".main");

  let revealText2 = document.querySelectorAll(".reveal-text2");
  animateText(revealText2, revealText2, ".main");

  let revealText3 = document.querySelectorAll(".reveal-text3");
  animateText(revealText3, revealText3, ".main");
});
