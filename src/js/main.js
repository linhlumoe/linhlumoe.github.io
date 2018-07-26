$(function() {
  // Init Controller
  var controller = new ScrollMagic.Controller();

  // Parallax background
  var homeFadeOut = TweenMax.to("#home", 2, { scale: 0.8 });
  new ScrollMagic.Scene({
    triggerElement: "#home",
    triggerHook: "onLeave",
    offset: "200"
  })
    .duration('1000')
    .setTween(homeFadeOut)
    .addTo(controller);

  // Greeting
  var greetingBackgroundTimeline = new TimelineMax()
    .add(TweenMax.from("#greeting--background", 1, { y: 400 }))
    .add(TweenMax.to("#greeting--background", 1, { y: 0 }));  

  new ScrollMagic.Scene({
    triggerElement: "#greeting",
    offset: 120
  })
    .setTween(greetingBackgroundTimeline)
    .duration(400)
    .addTo(controller);

  var greetingBoxTimeline = new TimelineMax()
    .add(TweenMax.from("#greeting--box", 1, { y: 1000 }))
    .add(TweenMax.to("#greeting--box", 1, { y: 0 }));

  new ScrollMagic.Scene({
    triggerElement: "#greeting",
    offset: 180
  })
    .setTween(greetingBoxTimeline)
    .duration(900)
    .addTo(controller);

  var greetingOverlayTextTimeline = new TimelineMax()
    .add(TweenMax.from("#overlay--text", 1, { y: 800 }))
    .add(TweenMax.to("#overlay-text", 1, { y: 0 }));

  new ScrollMagic.Scene({
    triggerElement: "#greeting",
    offset: 130
  })
    .setTween(greetingOverlayTextTimeline)
    .duration(800)
    .addTo(controller);
    
  // 
});
