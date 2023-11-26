const burgerBtn = document.querySelector('.burger-btn');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const videos = document.querySelectorAll('.video__box');
const productsTab = document.querySelectorAll('.products__tab');
const productsItem = document.querySelectorAll('.products__item');
const textarea = document.querySelector('.contacts__textarea');
const characterNums = document.querySelector('.contacts__character>.contacts__num');
const btnModal = document.querySelectorAll('.mod');
const btnDropdown = document.querySelector('a[data-dropdown]');

//Открытие дропдуна в бургере(начало)
const openAccordion = (accordion) => {
  const content = accordion.nextElementSibling;
  accordion.classList.add("nav__link--active");
  content.classList.add("dropdown--visible");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.nextElementSibling;
  accordion.classList.remove("nav__link--active");
  content.classList.remove("dropdown--visible")
  content.style.maxHeight = null;
};

btnDropdown.onclick = (e) => {
  const content = e.target.nextElementSibling;
  console.log(content);
  if (window.innerWidth <= 768) {
    e.preventDefault()
    if (content.style.maxHeight) {
      closeAccordion(btnDropdown);
    } else {
      openAccordion(btnDropdown);
    }
  }
};
//Открытие дропдуна в бургере(конец)

//Функционал модалок(начало)
btnModal.forEach(item => {
  item.addEventListener('click', function (e) {
    disableScroll()
    e.preventDefault();
    const getAttr = e.target.getAttribute('data-modal');
    console.log(getAttr);
    const modal = document.querySelector(`.modal[data-modal="${getAttr}"]`);
    modal.classList.add('modal--visible');
    body.classList.add('body--hidden');
    modal.addEventListener('click', function (e) {
      if (e.target.classList == 'modal__close' || e.target.classList[0] == 'modal') {
        enableScroll()
        modal.classList.remove('modal--visible');
        body.classList.remove('body--hidden');
      }
    })
  })
})

let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  body.style.paddingRight = paddingOffset;
}

let enableScroll = function () {
  body.classList.remove('disable-scroll');
  body.style.paddingRight = '0px';
}
//Функционал модалок(Конец)

//Функционал если изменитстся ширина экна при открытом бургере(начало)
window.addEventListener('resize', function () {
  if (header.classList.contains('header--active') && window.innerWidth > 768) {
    header.classList.remove('header--active');
    body.classList.remove('body--hidden');
    btnDropdown.classList.remove('nav__link--active');
  }
})
//Функционал если изменитстся ширина экна при открытом бургере(Конец)

//Подсчет записанных символов в textarea(начало)
if (textarea) {
  textarea.addEventListener('input', function () {
    characterNums.innerHTML = this.value.length;
  })
};
//Подсчет записанных символов в textarea(конец)

//Открытие-закрытие бургер меню(начало)
burgerBtn.addEventListener('click', function () {
  header.classList.toggle('header--active')
  body.classList.toggle('body--hidden');
});
//Открытие-закрытие бургер меню(конец)


//Табы(начало)
function clearClass() {
  productsTab.forEach(el => {
    el.classList.remove('products__tab--active')
  })
  productsItem.forEach(el => {
    el.classList.remove('products__item--active')
  })
};

productsTab.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    clearClass();
    el.classList.add('products__tab--active');
    const attr = el.getAttribute('href');
    const productsItem = document.querySelector(attr);
    productsItem.classList.add('products__item--active')
  })
});
//Табы(конец)

//Слайдеры(начало)
const heroSwiper = new Swiper('.hero__slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const rewiewsSwiper = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
});

const productsSwiper = new Swiper(".products__slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClicked: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -15,
    depth: 25,
    modifier: 2,
    slideShadows: true
  },
  loop: true,
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
});

const studentReviewsSLider = new Swiper('.student-reviews__slider', {
  loop: true,
  navigation: {
    nextEl: '.student-reviews__next',
    prevEl: '.student-reviews__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80
    }
  }
});
//Слайдеры(конец)

function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less"; 
    moreText.style.display = "inline";
  }
};

function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less"; 
    moreText.style.display = "inline";
  }
}


// Coockies
// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
 
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie
 
function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<p>Our website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in our <a href="/privacy-cookies-policy/" rel="nofollow" title="Privacy &amp; Cookies Policy">privacy and cookies policy</a>. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';    
 // Be advised the Close Banner 'X' link requires jQuery
     
    // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
    // or
    bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
     
    document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
     
    createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}
 
 
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+expires+"; path=/"; 
    }
}
 
function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
 
window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv(); 
    }
}

function removeMe(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}
