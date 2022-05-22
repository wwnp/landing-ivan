const modals = () => {
  function bindModal(trigger, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(trigger)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)

    triggers.forEach(i => {
      i.addEventListener('click', (e) => {
        e.preventDefault()
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
      })
    })
    modal.addEventListener('click', function (e) {
      if (e.target == modal) {
        modal.style.display = 'none'
        document.body.style.overflow = 'auto'
      }
    })
    close.addEventListener('click', function (e) {
      if (e.target.parentNode == close) {
        modal.style.display = 'none'
        document.body.style.overflow = 'auto'
      }
    })
  }

  function showModalByTime(modalSelector, ms) {
    const modal = document.querySelector(modalSelector)
    setTimeout(() => {
      modal.style.display = 'block'
    }, ms);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
  bindModal('.phone_link', '.popup', '.popup .popup_close')
  // showModalByTime('.popup_engineer', 60000)
}
export default modals