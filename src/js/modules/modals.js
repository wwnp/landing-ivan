const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)

    triggers.forEach(i => {
      i.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }
        modal.style.display = 'block'
        document.body.classList.add('modal-open')
      })
    })
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none'
        document.body.classList.remove('modal-open')
      }
    })
    close.addEventListener('click', () => {
      modal.style.display = 'none'
      document.body.classList.remove('modal-open')
    })
  }

  function showModalByTime(modalSelector, time) {
    const modal = document.querySelector(modalSelector)
    setTimeout(() => {
      modal.style.display = 'block'
      document.body.classList.add('modal-open')
    }, time)
  }
  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')

  bindModal('.phone_link', '.popup', '.popup .popup_close')

  // showModalByTime('.popup', 60000)
}
export default modals