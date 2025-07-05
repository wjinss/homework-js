/* global gsap, GSDevTools */

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const contentsTl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.8, ease: "back.inOut(3)" },
    });
    contentsTl
      .from("#likelion-link", { y: -400 })
      .from("#title", { x: -400 })
      .from("#description", { x: -300 }, 1.3);
  });

  const graphicTl = gsap.timeline({
    defaults: { opacity: 0, duration: 1.2, ease: "back.inOut(1.5)" },
  });
  graphicTl
    .from("#first-verical-line", { y: 600, duration: 0.8 })
    .from("#second-verical-line", { y: 800 }, 0)
    .from("#third-verical-line", { y: 300, duration: 1.2 }, 0)
    .from("#first-horizontal-line", { x: 800 }, 0.5)
    .from("#second-horizontal-line", { x: 600 }, 0)
    .from("#third-horizontal-line", { x: 600, duration: 1.2 }, "0.8")
    .from("#yellow-circle", { y: -600 }, "0.2")
    .from(
      "#orange-quarter-circle",
      { transformOrigin: "bottom right", rotation: 180 },
      "0.2"
    )
    .from(
      "#brown-quarter-circle",
      {
        transformOrigin: "top right",
        rotation: -270,
      },
      0.6
    )
    .from("#red-vertical-ring", { scaleY: 0 }, "-=1")
    .from(
      "#black-quarter-circle1",
      {
        transformOrigin: "bottom left",
        scale: 0,
        rotate: 180,
      },
      0.5
    )
    .from(
      "#black-quarter-circle2",
      {
        transformOrigin: "top right",
        scale: 1.2,
        rotate: 360,
        duration: 1.5,
      },
      "-=1.5"
    )
    .from(
      "#ivory-quarter-circle",
      {
        transformOrigin: "top right",
        rotate: -180,
        duration: 1.2,
      },
      "-=1"
    )
    .from("#red-circle", { x: -1200 }, "-=1.5")
    .from(
      "#red-half-circle",
      {
        transformOrigin: "top center",
        rotate: 720,
        duration: 2,
        ease: "back.inOut(4)",
      },
      0
    )
    .from(
      "#orange-half-circle",
      { transformOrigin: "center right", rotate: 180 },
      0
    )
    .from(
      "#yellow-half-circle",
      { transformOrigin: "center right", rotate: 540, duration: 1.2 },
      0
    )
    .from(
      "#red-ring",
      { y: -300, transformOrigin: "center", scale: 0.1, duration: 1.2 },
      "-=2"
    )
    .from(
      "#red-stroke-ring",
      {
        x: -300,
        transformOrigin: "-50% 10%",
        rotate: 270,
        duration: 1.7,
        ease: "power1.out",
      },
      "-=2"
    )
    .from("#ivory-opener", { scaleY: 2, yPercent: 50 }, "<")
    .from("#red-opener", { xPercent: -80 }, 0.5)
    .from(
      "#orange-angled-ring",
      {
        y: -100,
        transformOrigin: "40% 7%",
        rotate: -360,
        duration: 2,
        ease: "back.inOut(3)",
      },
      0.3
    )
    .from("#image0_102_121", { duration: 2 }, 0.5)
    .from("#image1_102_121", { duration: 2 }, 2)
    .from("#image2_102_121", { duration: 2 }, 3.5);
})();
