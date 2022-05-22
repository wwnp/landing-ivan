import checkNumInputs from './checkNumInputs';
const forms = (state) => {

  const forms = document.querySelectorAll('form')
  const inputs = document.querySelectorAll('input')
  const modalCalcEnd = document.querySelector('[data-modal-calc-end]')
  console.log(modalCalcEnd)
  checkNumInputs('input[name="user_phone"]')

  const msg = {
    loading: 'Загрузка...',
    success: 'Thanks',
    fail: 'Error'
  }

  const postData = async (url, data) => {
    document.querySelector('.status').innerHTML = msg.loading
    let res = await fetch(url, {
      method: 'POST',
      body: data
    })
    return await res.text()
  }

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = ''
    })
  }

  const clearState = (state) => {
    for (const prop of Object.getOwnPropertyNames(state)) {
      delete state[prop];
    }
  }

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let statusMsg = document.createElement('div')
      statusMsg.classList.add('status')
      form.appendChild(statusMsg)

      const formData = new FormData(form)

      if (form.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key])
        }
      }

      postData('assets/server.php', formData)
        .then(res => {
          statusMsg.textContent = msg.success
        })
        .catch(() => statusMsg.textContent = msg.fail)
        .finally(() => {
          clearState(state)
          clearInputs()
          setTimeout(() => {
            statusMsg.remove()
            modalCalcEnd.style.display = 'none'
          }, 5000)
        })
    })
  })



}
export default forms