"use strict"

// FAQ

const questions = document.querySelectorAll('.faq__question')
const questionsBtns = document.querySelectorAll('.faq__question-btn')

for (let i = 0; i < questions.length; i++) {
	questions[i].style.maxHeight =
		questions[i].querySelector('.faq__question-head').clientHeight + 40 + 'px'
}
window.addEventListener('resize', function () {
	for (let i = 0; i < questions.length; i++) {
		if (questionsBtns[i].style.transform != 'rotate(90deg)') {
			questions[i].style.maxHeight =
				questions[i].querySelector('.faq__question-head').clientHeight +
				40 +
				'px'
		} else {
			questions[i].style.maxHeight = questions[i].scrollHeight + 'px'
		}
	}
})

function questionToggle(index) {
	const headHeight = questions[index].querySelector(
		'.faq__question-head'
	).clientHeight // Получаем высоту faq__question-head

	if (questionsBtns[index].style.transform == 'rotate(90deg)') {
		questionsBtns[index].style.transform = 'rotate(45deg)'
		if (window.innerWidth <= 720) {
			questions[index].style.maxHeight = headHeight + 40 + 'px'
		} else {
			questions[index].style.maxHeight = headHeight + 40 + 'px'
		}
	} else {
		questionsBtns[index].style.transform = 'rotate(90deg)'
		questions[index].style.maxHeight = questions[index].scrollHeight + 'px'
	}
}

for (let i = 0; i < questionsBtns.length; i++) {
	questionsBtns[i].addEventListener('click', () => {
		questionToggle(i)
	})
}
