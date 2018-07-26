$(function() {
  // Init Controller
  var controller = new ScrollMagic.Controller();

  // Parallax background
  new ScrollMagic.Scene({
    triggerElement: "#home--background",
    triggerHook: "onEnter",
  })
    .duration('200%')
    .setTween("#background-video", {
      backgroundPosition: "80% 100%",
      ease: Linear.easeNone
    })
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // Slide in
  new ScrollMagic.Scene({
    triggerElement: "#slidein",
    triggerHook: "onLeave",
  })
    .setPin("#slidein")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#slidein2",
    triggerHook: "onLeave",
  })
    .setPin("#slidein2")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  //Moving divs
  var fromLeftTimeline = new TimelineMax();
  var fromLeftFrom = TweenMax.from("#opacity", 1, {
    y: 500
  });
  var fromLeftTo = TweenMax.to("#opacity", 1, {
    y: 0
  });
  fromLeftTimeline
    .add(fromLeftFrom)
    .add(fromLeftTo);

  var fromBottomTimeline = new TimelineMax();
  var fromBottomFrom = TweenMax.from("#bottom", 1, {
    y: 500
  });
  var fromBottomTo = TweenMax.to("#bottom", 1, {
    y: 0
  });
  fromBottomTimeline
    .add(fromBottomFrom)
    .add(fromBottomTo);

  new ScrollMagic.Scene({
    triggerElement: "#slidein2",
    offset: 100,
  })
    .setTween(fromLeftTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#slidein2",
    offset: 100
  })
    .setTween(fromBottomTimeline)
    .duration(800)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
