// Horizontal Scroll Sections //
document.addEventListener("DOMContentLoaded", function(event){
gsap.set("body", { visibility: "visible" });
//rest of your script...

gsap.registerPlugin(ScrollTrigger);

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

const showAnim1 = gsap.from('.title-header', { 
  yPercent: -500,
  paused: true,
  duration: 3
}).progress(1);
const showAnim2 = gsap.from('.title-subtitle', { 
  yPercent: -500,
  paused: true,
  duration: 5
}).progress(1);
const showAnim3 = gsap.from('.main-nav', { 
  xPercent: -200,
  paused: true,
  duration: 1
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim1.play() : showAnim1.reverse()
    self.direction === -1 ? showAnim2.play() : showAnim2.reverse()
    self.direction === -1 ? showAnim3.play() : showAnim3.reverse()


  }
});



});
