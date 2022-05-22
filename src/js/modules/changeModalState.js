import checkNumInputs from "./checkNumInputs"

const changeModalState = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img')
  const windowWidth = document.querySelectorAll('#width')
  const windowHeight = document.querySelectorAll('#height')
  const windowType = document.querySelectorAll('#view_type')
  const windowProfile = document.querySelectorAll('.checkbox')

  checkNumInputs('#width')
  checkNumInputs('#height')

  function bindActionToEl(event, el, prop) {
    el.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = index
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0
                ? state[prop] = 'cold'
                : state[prop] = 'hot'
              el.forEach((checkbox, index2) => {
                checkbox.checked = false
                if (index == index2) {
                  checkbox.checked = true
                }
              })
            } else {
              state[prop] = item.value
            }
            break;
          case 'SELECT':
            state[prop] = item.value
            break;
        }
        console.log(state)
      })
    })
  }

  bindActionToEl('click', windowForms, 'form')
  bindActionToEl('input', windowWidth, 'width')
  bindActionToEl('input', windowHeight, 'height')
  bindActionToEl('change', windowType, 'type')
  bindActionToEl('change', windowProfile, 'profile')
}
export default changeModalState