// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });

// const main = document.querySelector(".main");
// const cursor = document.querySelector(".cursor");

// main.addEventListener("mousemove", function (dets) {
//   gsap.to(cursor, {
//     x: dets.x,
//     y: dets.y,
//     ease: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
//   });
// });

// let links = document.querySelectorAll("nav a");

// links.forEach((link) => {
//   link.addEventListener("mouseenter", function () {
//     console.log("Mouse entered");
//     gsap.to(cursor, {
//       scale: 1.5,
//       opacity: 0,
//       display: "none",
//     });
//   });
// });

// links.forEach((link) => {
//   link.addEventListener("mouseleave", function () {
//     gsap.to(cursor, {
//       scale: 1,
//       opacity: 1,
//       display: "block",
//     });
//   });
// });

// // gsap.registerPlugin(ScrollTrigger);

// // let revealText = document.querySelectorAll(".reveal-text")

// // const text = new SplitType(revealText, { types: "chars" });
// // console.log(text.chars);

// // let chars = text.chars;

// // gsap.from(chars, {
// //   opacity: 0.2,
// //   stagger: 0.1,
// //   scrollTrigger: {
// //     trigger: revealText,
// //     scroll: ".main",
// //     markers: true,
// //     start: "top 80%",
// //     end: "top top",
// //     scrub: true,
// //   },
// // });

// // gsap.registerPlugin(ScrollTrigger);

// function animateText(elements, triggerElement, scrollElement) {
//   const text = new SplitType(elements, { types: "chars" });
//   const chars = text.chars;

//   gsap.from(chars, {
//     opacity: 0.2,
//     duration: 1.5,
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: triggerElement,
//       scroll: scrollElement,
//       markers: true,
//       start: "top 80%",
//       end: "top 5%",
//       scrub: true,
//     },
//   });
// }

// // let revealText = document.querySelectorAll(".reveal-text");
// // animateText(revealText, revealText, ".main");

// // let revealText2 = document.querySelectorAll(".reveal-text2");
// // animateText(revealText2, revealText2, ".main");

// // let revealText3 = document.querySelectorAll(".reveal-text3");
// // animateText(revealText3, revealText3, ".main");

// document.addEventListener("DOMContentLoaded", () => {
//   let revealText = document.querySelectorAll(".reveal-text");
//   animateText(revealText, revealText, ".main");

//   let revealText2 = document.querySelectorAll(".reveal-text2");
//   animateText(revealText2, revealText2, ".main");

//   let revealText3 = document.querySelectorAll(".reveal-text3");
//   animateText(revealText3, revealText3, ".main");
// });

// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
//   ScrollTrigger.update();
// });

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", () => {
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

  loco();

  const main = document.querySelector(".main");
  const cursor = document.querySelector(".cursor");

  main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    });
  });

  let links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      console.log("Mouse entered");
      gsap.to(cursor, {
        scale: 1.5,
        opacity: 0,
        display: "none",
      });
    });
  });

  links.forEach((link) => {
    link.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        display: "block",
      });
    });
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
        markers: true, // Enable markers for debugging
        start: "top 80%",
        end: "top 5%",
        scrub: true,
      },
    });
  }

  gsap.from(".aboutbtn", {
    left: "-20px",
    opacity: 0,
    scrollTrigger: {
      trigger: ".aboutbtn",
      scroller: ".main",
      start: "top 80%",
      end: "top 65%",
      scrub: true,
    },
  });

  // gsap.utils.toArray(".parallax-image").forEach((image) => {
  //   gsap.to(image, {
  //     yPercent: -20, // Adjust as needed for the parallax effect
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: image,
  //       scroller: ".main",
  //       scrub: true,
  //       start: "top bottom",
  //       end: "bottom top",
  //     },
  //   });
  // });



  gsap.to(".parallax-image", {
    yPercent: -20, // Adjust as needed for the parallax effect
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-image",
      scroller: ".main",
      scrub: true,
      start: "top bottom",
      end: "bottom top",
    },
  });

  gsap.from(".zoom-in",{
    scale: .95,
    opacity: 0,
    scrollTrigger: {
      trigger: ".zoom-in",
      scroller: ".main",
      scrub: true,
      start: "top 80%",
      end: "top 40%"
    }
  })








  let revealText = document.querySelectorAll(".reveal-text");
  animateText(revealText, revealText, ".main");

  let revealText2 = document.querySelectorAll(".reveal-text2");
  animateText(revealText2, revealText2, ".main");

  let revealText3 = document.querySelectorAll(".reveal-text3");
  animateText(revealText3, revealText3, ".main");
});
