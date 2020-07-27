let headerContentWrapper = document.querySelector('.header-container .content-wrapper')
let cvSummary = document.querySelector('.header-container .content-wrapper .cv-summary')

headerContentWrapper.addEventListener('mouseover', function onMouseOver() {
  cvSummary.classList.add('show'), headerContentWrapper.removeEventListener('mouseover', onMouseOver)
})
headerContentWrapper.addEventListener('click', () => {
  cvSummary.classList.toggle('show')
})
