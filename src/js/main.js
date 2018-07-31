$(function() {
  // Init Controller
  var controller = new ScrollMagic.Controller();

  var windowWidth = $(window).innerWidth();
  if (windowWidth < 1366) controller.enabled(false);

  $(window).resize(function() {
    var sizeWidth = $(window).innerWidth();
    if (sizeWidth < 1366) controller.enabled(false);
  });

  if (windowWidth >= 1366) {
    // Home
    var homeScale = TweenMax.to('#home', 2, { scale: 0.8 });
    new ScrollMagic.Scene({ triggerElement: '#home', triggerHook: 'onLeave', offset: '400' })
      .duration(800)
      .setTween(homeScale)
      .addTo(controller);

    // Greeting
    var greetingBackgroundTimeline = new TimelineMax()
      .add(TweenMax.from('#greeting--background', 1, { y: 400 }))
      .add(TweenMax.to('#greeting--background', 1, { y: 0 }));
    new ScrollMagic.Scene({ triggerElement: '#greeting', offset: 100 })
      .setTween(greetingBackgroundTimeline)
      .duration(800)
      .addTo(controller);

    var greetingBoxTimeline = new TimelineMax()
      .add(TweenMax.from('#greeting--box', 1, { y: 800 }))
      .add(TweenMax.to('#greeting--box', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#greeting', offset: 120 })
      .setTween(greetingBoxTimeline)
      .duration(900)
      .addTo(controller);

    var greetingOverlayTextTimeline = new TimelineMax()
      .add(TweenMax.from('#overlay--text', 1, { y: 1500 }))
      .add(TweenMax.to('#overlay-text', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#greeting', offset: 120 })
      .setTween(greetingOverlayTextTimeline)
      .duration(900)
      .addTo(controller);

    // Banner
    var bannerBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#banner--below-layer', 1, { y: 800 }))
      .add(TweenMax.to('#banner--below-layer', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#banner', offset: 140 })
      .setTween(bannerBelowTimeline)
      .duration(1000)
      .addTo(controller);

    var bannerContentTimeline = new TimelineMax()
      .add(TweenMax.from('#banner--content', 2, { y: 1200 }))
      .add(TweenMax.to('#banner--content', 2, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#banner', offset: 150 })
      .setTween(bannerContentTimeline)
      .duration(1000)
      .addTo(controller);

    // Introduce
    var introduceBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#introduce--below-layer', 1, { opacity: 0 }))
      .add(TweenMax.to('#introduce--below-layer', 1, { opacity: 1 }));

    new ScrollMagic.Scene({ triggerElement: '#introduce', offset: 100 })
      .setTween(introduceBelowTimeline)
      .duration(1000)
      .addTo(controller);

    var introduceImageTimeline = new TimelineMax()
      .add(TweenMax.from('#introduce--image', 1, { y: 1000 }))
      .add(TweenMax.to('#introduce--image', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#introduce', offset: 250 })
      .setTween(introduceImageTimeline)
      .duration(1500)
      .addTo(controller);

    var introduceTextTimeline = new TimelineMax()
      .add(TweenMax.from('#introduce--text', 1, { y: 1000 }))
      .add(TweenMax.to('#introduce--text', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#introduce', offset: 130 })
      .setTween(introduceTextTimeline)
      .duration(1500)
      .addTo(controller);

    // Addition
    var additionBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#addition--below-layer', 1, { opacity: 0 }))
      .add(TweenMax.to('#addition--below-layer', 1, { opacity: 1 }));

    new ScrollMagic.Scene({ triggerElement: '#addition', offset: 50 })
      .setTween(additionBelowTimeline)
      .duration(1000)
      .addTo(controller);

    var additionImageTimeline = new TimelineMax()
      .add(TweenMax.from('#addition--image', 1, { y: 1000 }))
      .add(TweenMax.to('#addition--image', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#addition', offset: 200 })
      .setTween(additionImageTimeline)
      .duration(1000)
      .addTo(controller);

    var additionTextTimeline = new TimelineMax()
      .add(TweenMax.from('#addition--text', 1, { y: 1000 }))
      .add(TweenMax.to('#addition--text', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#addition', offset: 130 })
      .setTween(additionTextTimeline)
      .duration(1500)
      .addTo(controller);

    // Footer
    var footerBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#footer--below-layer', 1, { opacity: 0 }))
      .add(TweenMax.to('#footer--below-layer', 1, { opacity: 1 }));

    new ScrollMagic.Scene({ triggerElement: '#footer', offset: 150 })
      .setTween(footerBelowTimeline)
      .duration(1000)
      .addTo(controller);

    var footerContentTimeline = new TimelineMax()
      .add(TweenMax.from('#footer--content', 1, { y: 1000 }))
      .add(TweenMax.to('#footer--content', 1, { y: 0 }));

    new ScrollMagic.Scene({ triggerElement: '#footer', offset: 200 })
      .setTween(footerContentTimeline)
      .duration(1000)
      .addTo(controller);
  }
});
