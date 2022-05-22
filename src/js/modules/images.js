const images = () => {
  const imgPopup = document.createElement('div')
  const workSection = document.querySelector('.works')
  const bigImage = document.createElement('img')

  imgPopup.classList.add('popup')
  workSection.appendChild(imgPopup)

  imgPopup.style.display = 'none'
  imgPopup.style.justifyContent = 'center'
  imgPopup.style.alignItems = 'center'

  imgPopup.appendChild(bigImage)

  workSection.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.style.overflow = 'hidden'
    let target = e.target
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex'
      const path = target.parentNode.getAttribute('href')
      bigImage.setAttribute('src', path)
    }

    // if (target.classList.contains('popup')) {
    // or
    if (target.matches('div.popup')) {
      imgPopup.style.display = 'none'
      document.body.style.overflow = 'auto'
    }
  })
}
export default images