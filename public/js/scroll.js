// Horizontal Scroll Sections //
gsap.registerPlugin(Draggable, ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

// Scroll Down Arrow //
gsap.to(".arrow", {y: 22, ease: "power1.inOut", repeat: -1, yoyo: true});
