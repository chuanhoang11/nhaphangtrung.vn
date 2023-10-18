export default function CommonModule() {
  if (window.innerWidth > 1200) {
    gsap.registerPlugin(ScrollTrigger);
    const txtGs = document.querySelectorAll(".bns-name");
    if (txtGs) {
      var timeLineChar = new TimelineMax();
      timeLineChar.staggerFrom(
        ".bns-name .char",
        0.5,
        { translateX: 500, scale: 1, opacity: 0 },
        0.03
      );
      timeLineChar.staggerFrom(
        ".bns-tt-cc",
        0.2,
        { scale: 0, opacity: 0 },
        0.03
      );
      // timeLineChar.staggerFrom(".bns-tt-line.one", 0.2, { height: 0 }, 0.03);
      // timeLineChar.staggerFrom(".bns-tt-line.two", 0.2, { width: 0 }, 0.03);
      // timeLineChar.staggerFrom(".bns-tt-line.three", 0.2, { height: 0 }, 0.03);
      // timeLineChar.staggerFrom(".bns-tt-line.four", 0.2, { width: 0 }, 0.03);
      // timeLineChar.staggerFrom(".bns-tt-line.five", 0.2, { height: 0 }, 0.03);
      // timeLineChar.staggerFrom(".bns-tt-cc.two", 0.2, { opacity: 0 }, 0.03);

      timeLineChar.reverse();
      gsap.to(".bns-name .char", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".bns-tt",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLineChar.play();
            } else {
              timeLineChar.reverse();
            }
          },
        },
      });
    }

    const bnsBox = document.querySelector(".bns-box");
    if (bnsBox) {
      var timeLine = new TimelineMax();
      timeLine.staggerFrom(
        ".bns-box",
        0.3,
        { translateX: -500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine.staggerFrom(
        ".bns-phone",
        0.3,
        { translateY: 50, scale: 1, opacity: 0 },
        0.1
      );
      timeLine.staggerFrom(
        ".bns-plane",
        0.3,
        { translateX: 50, scale: 1, opacity: 0 },
        0.1
      );
      timeLine.staggerFrom(
        ".bns-car",
        0.3,
        { translateX: 50, scale: 1, opacity: 0 },
        0.1
      );
      timeLine.reverse();
      gsap.to(".bns-list", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".bns-list",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine.play();
            } else {
              timeLine.reverse();
            }
          },
        },
      });
    }

    if (document.querySelectorAll(".bns-phone-ms")) {
      gsap.utils.toArray(".bns-phone-ms").forEach(function (container, index) {
        let tl = gsap.timeline({
          scrollTrigger: {
            markers: false,
            trigger: container,
            start: "top center+=200",
            scrub: true,
            pin: false,
          },
        });
        tl.from(container, {
          scale: 0.5,
          opacity: 0,
          ease: "ease",
        }).to(container, {
          scale: 1,
          opacity: 1,
          ease: "ease",
        });
      });
    }

    if (document.querySelectorAll(".cm-sqr")) {
      gsap.utils.toArray(".cm-sqr").forEach(function (container, index) {
        let tl = gsap.timeline({
          scrollTrigger: {
            markers: false,
            trigger: container,
            start: "top center+=200",
            scrub: true,
            pin: false,
          },
        });
        tl.from(container, {
          scale: 0.5,
          opacity: 0,
          ease: "ease",
        }).to(container, {
          scale: 1,
          opacity: 1,
          ease: "ease",
        });
      });
    }

    const ckOne = document.querySelectorAll(".ck-one");
    if (ckOne) {
      var timeLine2 = new TimelineMax();
      timeLine2.staggerFrom(
        ".ck-one-person",
        0.3,
        { translateX: 500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine2.staggerFrom(
        ".ck-one-circle",
        0.3,
        { translateX: 500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine2.staggerFrom(
        ".ck-one-card",
        0.3,
        { translateX: 500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine2.staggerFrom(
        ".ck-one-mn1",
        0.3,
        { translateY: 50, scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine2.staggerFrom(
        ".ck-one-mn2",
        0.3,
        { translateY: 50, scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine2.reverse();
      gsap.to(".ck-one", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".ck-one",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine2.play();
            } else {
              timeLine2.reverse();
            }
          },
        },
      });
    }

    const ckTwo = document.querySelectorAll(".ck-two");
    if (ckTwo) {
      var timeLine3 = new TimelineMax();
      timeLine3.staggerFrom(
        ".ck-two-mess",
        0.3,
        { translateX: 500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine3.staggerFrom(
        ".ck-two-dc",
        0.3,
        { translateY: 10, scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine3.staggerFrom(
        ".ck-two-ar",
        0.3,
        { with: 0, scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine3.staggerFrom(
        ".ck-two-mn",
        0.3,
        { translateY: 100, scale: 0.6, opacity: 0 },
        0.1
      );
      timeLine3.reverse();
      gsap.to(".ck-two", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".ck-two",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine3.play();
            } else {
              timeLine3.reverse();
            }
          },
        },
      });
    }

    const ckThree = document.querySelectorAll(".ck-three");
    if (ckThree) {
      var timeLine4 = new TimelineMax();
      timeLine4.staggerFrom(
        ".ck-three-person",
        0.6,
        { translateX: 500, scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine4.staggerFrom(".ck-three-bd", 0.3, { scale: 0, opacity: 0 }, 0.1);
      timeLine4.staggerFrom(
        ".ck-three-dc",
        0.3,
        { translateY: 10, scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine4.staggerFrom(
        ".ck-three-ic",
        0.1,
        { scale: 0.5, opacity: 0 },
        0.05
      );

      timeLine4.reverse();
      gsap.to(".ck-three", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".ck-three",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine4.play();
            } else {
              timeLine4.reverse();
            }
          },
        },
      });
    }

    const lh = document.querySelectorAll(".lh");
    if (lh) {
      var timeLine7 = new TimelineMax();
      timeLine7.staggerFrom(
        ".lh-left-inner",
        0.3,
        { translateX: -500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine7.reverse();
      gsap.to(".lh", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".lh",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine7.play();
            } else {
              timeLine7.reverse();
            }
          },
        },
      });
    }

    const set = document.querySelectorAll(".set");
    if (set) {
      var timeLine8 = new TimelineMax();
      timeLine8.staggerFrom(
        ".set-wrap",
        0.3,
        { translateX: -500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine8.staggerFrom(
        ".set .re-setting-btn",
        0.3,
        { translateY: 100, scale: 1, opacity: 0 },
        0.1
      );
      timeLine8.staggerFrom(
        ".set-fly",
        0.3,
        { translateX: -500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine8.reverse();
      gsap.to(".set-wrap", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".set-wrap",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine8.play();
            } else {
              timeLine8.reverse();
            }
          },
        },
      });
    }
    const faq = document.querySelectorAll(".faq");
    if (faq) {
      var timeLine9 = new TimelineMax();
      timeLine9.staggerFrom(
        ".faq-top .t-title",
        0.3,
        { scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine9.staggerFrom(".faq-txt", 0.3, { scale: 0.5, opacity: 0 }, 0.1);
      timeLine9.reverse();
      gsap.to(".faq-txt", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".faq-txt",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine9.play();
            } else {
              timeLine9.reverse();
            }
          },
        },
      });
    }
    const media = document.querySelectorAll(".media");
    if (media) {
      var timeLine10 = new TimelineMax();
      timeLine10.staggerFrom(
        ".media .t-title",
        0.3,
        { scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine10.staggerFrom(".faq-txt", 0.3, { scale: 0.5, opacity: 0 }, 0.1);
      timeLine10.reverse();
      gsap.to(".media .t-title", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".media .t-title",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine10.play();
            } else {
              timeLine10.reverse();
            }
          },
        },
      });
    }

    const news = document.querySelectorAll(".news");
    if (news) {
      var timeLine11 = new TimelineMax();
      timeLine11.staggerFrom(
        ".news-title-sub",
        0.3,
        { scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine11.staggerFrom(
        ".news-title",
        0.3,
        { scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine11.reverse();
      gsap.to(".news-left-inner", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".news-left-inner",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine11.play();
            } else {
              timeLine11.reverse();
            }
          },
        },
      });
    }
    const serTitle = document.querySelectorAll(".ser .t-title-second");
    if (serTitle) {
      var timeLine13 = new TimelineMax();
      timeLine13.staggerFrom(
        ".ser .t-title-second",
        0.3,
        { scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine13.reverse();
      gsap.to(".ser .t-title-second", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".ser .t-title-second",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine13.play();
            } else {
              timeLine13.reverse();
            }
          },
        },
      });
    }
    const ftDc = document.querySelectorAll(".ft-dc");
    if (ftDc) {
      var timeLine12 = new TimelineMax();
      timeLine12.staggerFrom(
        ".ft-dc",
        0.3,
        { translateX: -100, scale: 0.5, opacity: 0 },
        0.1
      );
      timeLine12.reverse();
      gsap.to(".ft-dc", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".ft-dc",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine12.play();
            } else {
              timeLine12.reverse();
            }
          },
        },
      });
    }

    const rs = document.querySelectorAll(".rs");
    if (rs) {
      var timeLine5 = new TimelineMax();
      timeLine5.staggerFrom(
        ".rs-title",
        0.3,
        { translateX: -500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine5.staggerFrom(
        ".rs-top .des",
        0.3,
        { translateX: -500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine5.staggerFrom(
        ".rs-box",
        0.3,
        { translateX: -500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine5.staggerFrom(
        ".rs-img",
        0.3,
        { translateX: 500, scale: 1, opacity: 0 },
        0.1
      );
      timeLine5.reverse();
      gsap.to(".rs", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".rs",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine5.play();
            } else {
              timeLine5.reverse();
            }
          },
        },
      });
    }

    const bgg = document.querySelectorAll(".bgg");
    if (bgg) {
      var timeLine6 = new TimelineMax();
      timeLine6.staggerFrom(
        ".bgg-item",
        0.3,
        { translateX: 50, scale: 1, opacity: 0 },
        0.1
      );
      timeLine6.reverse();
      gsap.to(".bgg-item", {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".bgg-item",
          scrub: true,
          start: "top bottom-=150",
          end: "bottom+=200 center",
          onToggle: (self) => {
            if (self.isActive) {
              timeLine6.play();
            } else {
              timeLine6.reverse();
            }
          },
        },
      });
    }

    const roadItem = document.querySelectorAll(".road-item");
    if (roadItem) {
      roadItem.forEach((item) => {
        var timeLine6 = new TimelineMax();
        timeLine6.staggerFrom(
          item,
          0.6,
          { translateY: -100, scale: 1, opacity: 0 },
          0.1
        );
        timeLine6.reverse();
        gsap.to(item, {
          scrollTrigger: {
            pin: false,
            markers: false,
            trigger: item,
            scrub: true,
            start: "top center",
            end: "bottom+=500 center",
            onToggle: (self) => {
              if (self.isActive) {
                timeLine6.play();
              } else {
                timeLine6.reverse();
              }
            },
          },
        });
      });
    }

    const road = document.querySelector(".road");
    if (road) {
      const roadPlane = document.querySelector(".road-line .plane");
      gsap.to(road, {
        scrollTrigger: {
          pin: false,
          markers: false,
          trigger: ".road",
          scrub: false,
          start: "top center",
          end: "bottom center",
          onEnter: (self) => {
            if (self.direction != -1) {
              roadPlane.classList.remove('revert')
            } else {
              roadPlane.classList.add('revert')

            }
          },
          onUpdate: (self) => {
            if (self.direction != -1) {
              roadPlane.classList.remove('revert')
            } else {
              roadPlane.classList.add('revert')

            }
            roadPlane.style;
            roadPlane.style = `offset-distance:${self.progress * 100}%`;
          },
        },
      });
    }

    // const ckWrapper = document.querySelectorAll(".ck-wrapper")
    // if (ckWrapper) {
    //   ckWrapper.forEach(item => {
    //     gsap.to(item, {
    //       yPercent: (-100 * 2),
    //       scrollTrigger: {
    //         pin: true,
    //         markers: false,
    //         trigger: item,
    //         scrub: true,
    //         start: "top top+=200",
    //         end: "bottom center",
    //         onEnter: (e) => {
    //           console.log(e);
    //         },
    //         onUpdate: (self) => {

    //         },
    //       },
    //     });
    //   })
    // }
  }
}
