const swiperMembers = new Swiper('.members__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
      310: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 3,
      }
    }
});





window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiperSteps;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiperSteps = new Swiper(className, settings);
  
        if (callback) {
          callback(swiperSteps);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiperSteps !== undefined) swiperSteps.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    resizableSwiper(
      '(max-width: 400px)',
      '.steps__slider',
      {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      },
    );
  });
