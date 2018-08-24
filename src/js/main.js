$(function() {
  setTimeout(function(){
    var mouseX = 0;
    var mouseY = 0;
    var imageTop = $('#image-container').offset().top;
    var imageBottom = imageTop + $('#image-container').height();
    var imageLeft = $('#image-container').offset().left;
    var imageRight = imageLeft + $('#image-container').width();

    $('#introduce').on('mousemove', getMousePosition);
    function getMousePosition(event){
      mouseX = event.pageX;
      mouseY = event.pageY + 1000;

      if(mouseX >= imageLeft && mouseX <= imageRight && mouseY <= imageTop){
        $('#image-container').attr('class','top');
      } else if(mouseX < imageLeft && mouseY < imageTop){
        $('#image-container').attr('class','left-top');
      } else if(mouseX <= imageLeft && mouseY >= imageTop && mouseY <= imageBottom){
        $('#image-container').attr('class','left');
      } else if(mouseX < imageLeft && mouseY > imageBottom){
        $('#image-container').attr('class','left-bottom');
      } else if(mouseX >= imageLeft && mouseX <= imageRight && mouseY >= imageBottom){
        $('#image-container').attr('class','bottom');
      } else if(mouseX > imageRight && mouseY > imageBottom){
        $('#image-container').attr('class','right-bottom');
      } else if(mouseX >= imageRight && mouseY >= imageTop && mouseY <= imageBottom){
        $('#image-container').attr('class','right');
      } else if(mouseX > imageRight && mouseY < imageTop){
        $('#image-container').attr('class','right-top');
      } else {
        $('#image-container').attr('class','center');
      }
    }
    $('#image-container').click(function () {
      $('#image-container').attr('class','center-smile');
    });
    $('#introduce').on('mouseleave', function () {
      $('#image-container').attr('class','bottom');
    });
  }, 1000);
  // Toggle sidebar
  function toggleSidebar() {
    $('#nav-icon').toggleClass('active');
    $('.sidebar').toggleClass('move-to-right');
    $('.__portfolio-wrapper').toggleClass('disabled');
    $('.sidebar-item').toggleClass('active');
  }

  $('#nav-icon').on('click tap', function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

  $('.sidebar-item').on('click', function () {
    toggleSidebar();
  });
  // Init Controller
  var controller = new ScrollMagic.Controller();

  var windowWidth = $(window).innerWidth();
  if (windowWidth < 1280) controller.enabled(false);

  $(window).resize(function() {
    var sizeWidth = $(window).innerWidth();
    if (sizeWidth < 1280) controller.enabled(false);
  });

  if (windowWidth >= 1280) {
    // Home
    new ScrollMagic.Scene({ triggerElement: '#home', offset: '10' })
      .duration(600)
      .setClassToggle('#home-dot', 'active')
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '#home', triggerHook: 'onLeave', offset: '400' })
      .duration(800)
      .setTween(TweenMax.to('#home', 2, { scaleX: 0.85, ease: Power3.easeOut, opacity: 0 }))
      .addTo(controller);

    // Greeting
    var greetingBackgroundTimeline = new TimelineMax()
      .add(TweenMax.from('#greeting--background', 1, { y: 400, ease: Power0.easeInOut }))
      .add(TweenMax.to('#greeting--background', 1, { y: 0, ease: Power0.easeInOut }));
    new ScrollMagic.Scene({ triggerElement: '#greeting', offset: 20 })
      .setTween(greetingBackgroundTimeline)
      .duration(600)
      .setClassToggle('#greeting-dot', 'active')
      .addTo(controller);

    var greetingBoxTimeline = new TimelineMax()
      .add(TweenMax.from('#greeting--box', 1, { y: 800, ease: Power0.easeIn }))
      .add(TweenMax.to('#greeting--box', 1, { y: 0, ease: Power0.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#greeting', offset: 70 })
      .setTween(greetingBoxTimeline)
      .duration(windowWidth >= 1920 ? 1100 : 700)
      .addTo(controller);

    var greetingOverlayTextTimeline = new TimelineMax()
      .add(TweenMax.from('#overlay--text', 1, { y: 800, ease: Power0.easeIn }))
      .add(TweenMax.to('#overlay-text', 1, { y: 0, ease: Power0.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#greeting', offset: 140 })
      .setTween(greetingOverlayTextTimeline)
      .duration(windowWidth >= 1920 ? 1000 : 600)
      .addTo(controller);

    // Banner
    var bannerBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#banner--below-layer', 1, { y: 400, ease: Power0.easeIn }))
      .add(TweenMax.to('#banner--below-layer', 1, { y: 0, ease: Power0.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#banner', offset: 80 })
      .setTween(bannerBelowTimeline)
      .duration(800)
      .setClassToggle('#banner-dot', 'active')
      .addTo(controller);

    var bannerContentTimeline = new TimelineMax()
      .add(TweenMax.from('#banner--content', 2, { y: 600, ease: Power1.easeIn }))
      .add(TweenMax.to('#banner--content', 2, { y: 0, ease: Power1.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#banner', offset: 100 })
      .setTween(bannerContentTimeline)
      .duration(800)
      .addTo(controller);

    // Introduce
    var introduceBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#introduce--below-layer', 1, { opacity: 0 }))
      .add(TweenMax.to('#introduce--below-layer', 1, { opacity: 1 }));

    new ScrollMagic.Scene({ triggerElement: '#introduce', offset: 100 })
      .setTween(introduceBelowTimeline)
      .duration(1000)
      .setClassToggle('#introduce-dot', 'active')
      .addTo(controller);

    var introduceImageTimeline = new TimelineMax()
      .add(TweenMax.from('#introduce--image', 1, { y: 1000, ease: Power1.easeIn }))
      .add(TweenMax.to('#introduce--image', 1, { y: 0, ease: Power1.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#introduce', offset: 250 })
      .setTween(introduceImageTimeline)
      .duration(windowWidth >= 1920 ? 1500 : 900)
      .addTo(controller);

    var introduceImageContainerTimeline = new TimelineMax()
      .add(TweenMax.from('#image-container', 3, { opacity: 0 }))
      .add(TweenMax.to('#image-container', 3, { opacity: 1 }));

    new ScrollMagic.Scene({ triggerElement: '#introduce--image', delay: 500 })
      .setTween(introduceImageContainerTimeline)
      .addTo(controller);

    var introduceTextTimeline = new TimelineMax()
      .add(TweenMax.from('#introduce--text', 1, { y: 1000, ease: Power0.easeIn }))
      .add(TweenMax.to('#introduce--text', 1, { y: 0, ease: Power0.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#introduce', offset: 130 })
      .setTween(introduceTextTimeline)
      .duration(windowWidth >= 1920 ? 1500 : 900)
      .addTo(controller);

    // Addition
    var additionBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#addition--below-layer', 1, { opacity: 0 }))
      .add(TweenMax.to('#addition--below-layer', 1, { opacity: 1 }));

    new ScrollMagic.Scene({ triggerElement: '#addition', offset: 50 })
      .setTween(additionBelowTimeline)
      .duration(1000)
      .setClassToggle('#addition-dot', 'active')
      .addTo(controller);

    var additionImageTimeline = new TimelineMax()
      .add(TweenMax.from('#addition--image', 1, { y: 1000, ease: Power0.easeIn }))
      .add(TweenMax.to('#addition--image', 1, { y: 0, ease: Power0.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#addition', offset: 200 })
      .setTween(additionImageTimeline)
      .duration(windowWidth >= 1920 ? 1000 : 800)
      .addTo(controller);

    var additionTextTimeline = new TimelineMax()
      .add(TweenMax.from('#addition--text', 1, { y: 1000, ease: Power0.easeIn }))
      .add(TweenMax.to('#addition--text', 1, { y: 0, ease: Power0.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#addition', offset: 130 })
      .setTween(additionTextTimeline)
      .duration(windowWidth >= 1920 ? 1500 : 1000)
      .addTo(controller);

    // Footer
    var footerBelowTimeline = new TimelineMax()
      .add(TweenMax.from('#footer--below-layer', 1, { opacity: 0 }))
      .add(TweenMax.to('#footer--below-layer', 1, { opacity: 1 }));

    new ScrollMagic.Scene({ triggerElement: '#footer', offset: 150 })
      .setTween(footerBelowTimeline)
      .duration(1000)
      .setClassToggle('#footer-dot', 'active')
      .addTo(controller);

    var footerContentTimeline = new TimelineMax()
      .add(TweenMax.from('#footer--content', 1, { y: 1000, ease: Power0.easeIn }))
      .add(TweenMax.to('#footer--content', 1, { y: 0, ease: Power0.easeIn }));

    new ScrollMagic.Scene({ triggerElement: '#footer', offset: 200 })
      .setTween(footerContentTimeline)
      .duration(windowWidth >= 1920 ? 1000 : 700)
      .addTo(controller);

    // Fadeout
    new ScrollMagic.Scene({
      triggerElement: '#main-content',
      triggerHook: 'onLeave',
      offset: windowWidth >= 1920 ? 1200 : 1100
    })
      .setTween(TweenMax.to('#greeting', 1, { opacity: 0 }))
      .duration(800)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#main-content',
      triggerHook: 'onLeave',
      offset: windowWidth >= 1920 ? 2300 : windowWidth >= 1440 ? 2000 : 1700
    })
      .setTween(TweenMax.to('#banner', 1, { opacity: 0 }))
      .duration(800)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#main-content',
      triggerHook: 'onLeave',
      offset: windowWidth >= 1920 ? 3500 : windowWidth >= 1440 ? 3000 : 2600
    })
      .setTween(TweenMax.to('#introduce', 1, { opacity: 0 }))
      .duration(800)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#main-content',
      triggerHook: 'onLeave',
      offset: windowWidth >= 1920 ? 4700 : windowWidth >= 1440 ? 4300 : 3500
    })
      .setTween(TweenMax.to('#addition', 1, { opacity: 0 }))
      .duration(800)
      .addTo(controller);
  }
});