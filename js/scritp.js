
const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const bars = document.querySelector('.burger-btn__bars');
const barBefore = document.querySelector('.burger-btn__bars', '::before');
const barAfter = document.querySelector('.burger-btn__bars','::after');
const question=document.querySelector('.question')
const island=document.querySelector('.island_one')
const info=document.querySelector('.island__info')
const active=document.querySelector('.active')

 const questionTwo=document.querySelector('.question__two')
 const islandTwo=document.querySelector('.island_2')
 const infoTwo=document.querySelector('.island__info_two')
 const activeTwo=document.querySelector('.active_two')







const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};
burgerBtn.addEventListener('click', handleNav);

const redBtn = () => {
	barBefore.style.backgroundColor = 'red';
	barAfter.style.backgroundColor = 'red';
	
}
const tranBtn = (params) => {
	barBefore.style.backgroundColor = 'transparent';
	barAfter.style.backgroundColor = 'transparent';
}

// const changeBtnColor=()=>{
// 	if (scrollY >= 471) {
		
// redBtn()
// 	} else {
// 		tranBtn()
	
// 	}
// }
// 	dom.addEventListener("scroll", changeBtnColor);

const showInfo = () => {

	
	island.classList.toggle('island__info')
	
}

question.addEventListener('click', showInfo)


const showInfo2 = () => {

islandTwo.classList.toggle('island__info_two')
}


questionTwo.addEventListener('click', showInfo2)

