const forms = () => {
  const forms = document.querySelectorAll('form')
  const inputs = document.querySelectorAll('input')
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]')

  console.log(phoneInputs)
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

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(form)
      let statusMsg = document.createElement('div')
      statusMsg.classList.add('status')
      form.appendChild(statusMsg)

      const formData = new FormData(form)

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res)
          statusMsg.textContent = msg.success
        })
        .catch(() => statusMsg.textContent = msg.fail)
        .finally(() => {
          clearInputs()
          setTimeout(() => {
            statusMsg.remove()
          }, 5000)
        })
    })
  })

  phoneInputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, '')
    })
  })
}
export default forms