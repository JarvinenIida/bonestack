const header = document.querySelector('header');

const slider = document.querySelector('#wrapper-three-slider');

const sliderOptions = {
  threshold: 0.5,

}

const sliderObserver = new IntersectionObserver(function(entries, sliderObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add('header-slider') 
    } else {
      header.classList.remove('header-slider')
    }
  });
}, 
sliderOptions);

sliderObserver.observe(slider);




