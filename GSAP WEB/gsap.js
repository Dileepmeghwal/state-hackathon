var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    // markers: true,
    start: "1% 1%",
    end: "100% 100%",
    scrub: 5,
    duration: 1,
    pin: true,
  },
});

Shery.imageEffect(".images-designss", {
  style: 6,
  debug: false,
  gooey: true,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".tech",
    // markers:true,
    start: "5% 50%",
    end: "100% 50%",
    scrub: 5,
    duration: 1,
    pin: true,
  },
});
tl.to(".img", {
  width: "80%",
  height: "80vh",
  borderRadius: "10%",

  scrub: 5,
  duration: 1,
  pin: true,
  overflow: "hidden",
});
tl.to(".text", {
  display: "block",
});
