const modals = () => {
  function bindModal(trigger, modalSelector, closeSelector, closeClickOverlay = true) {
    const triggers = document.querySelectorAll(trigger)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)
    const windows = document.querySelectorAll('[data-modal]')

    triggers.forEach(i => {
      i.addEventListener('click', (e) => {
        e.preventDefault()

        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
      })
    })
    modal.addEventListener('click', function (e) {
      if (e.target == modal && closeClickOverlay) {
        modal.style.display = 'none'

        windows.forEach(window => {
          window.style.display = 'none'
        })

        document.body.style.overflow = 'auto'
      }
    })
    close.addEventListener('click', function (e) {
      if (e.target.parentNode == close) {
        modal.style.display = 'none'

        windows.forEach(window => {
          window.style.display = 'none'
        })

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

  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close')
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)

}
export default modals