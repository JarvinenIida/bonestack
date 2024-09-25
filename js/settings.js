const settingsContent = document.querySelector('.footer-wrapper');
const settingsButton = document.querySelector('.settings');
const contentOpacity = document.querySelector('.js-opacity');
const contentOpacity2 = document.querySelector('.js-opacity2');
const contentOpacity3 = document.querySelector('.js-opacity3');

  


function toggleSettings() {

  settingsButton.classList.toggle('settings-button-active');


        if (settingsButton.classList.contains('settings-button-active')) {
          settingsContent.style.height = '200px';
          showContent();   
        } else {
          settingsContent.style.height = '30px';
          hideContent();
        };

      };


function showContent() {
  contentOpacity.style.opacity = 1.0
  contentOpacity2.style.opacity = 1.0
  contentOpacity3.style.opacity = 1.0
}

function hideContent() {
  contentOpacity.style.removeProperty("opacity");
  contentOpacity2.style.removeProperty("opacity");
  contentOpacity3.style.removeProperty("opacity");
};



function toggleAnimations() {

  const animationButton = document.querySelector('.toggle-animations');
  const image1 = document.querySelector('.image1');
  const image2 = document.querySelector('.image2');
  const image3 = document.querySelector('.image3');
  const image4 = document.querySelector('.image4');
  const image5 = document.querySelector('.image5');
  const image6 = document.querySelector('.image6');



  animationButton.classList.toggle('animation-button-active');

  if (animationButton.classList.contains('animation-button-active')) {
          animationButton.classList.add('off')
          image1.classList.remove('img-ani')
          image2.classList.remove('img-ani')
          image3.classList.remove('img-ani')
          image4.classList.remove('img-ani')
          image5.classList.remove('img-ani')
          image6.classList.remove('img-ani')

        } else {
          animationButton.classList.remove('off')
          image1.classList.add('img-ani')
          image2.classList.add('img-ani')
          image3.classList.add('img-ani')
          image4.classList.add('img-ani')
          image5.classList.add('img-ani')
          image6.classList.add('img-ani')
        };

};