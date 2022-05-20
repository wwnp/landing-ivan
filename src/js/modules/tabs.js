const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector)
  const tabs = document.querySelectorAll(tabSelector)
  const content = document.querySelectorAll(contentSelector)

  function hideTabAndContent() {
    content.forEach(i => {
      i.style.display = 'none'
    })
    tabs.forEach(i => {
      i.classList.remove(activeClass)
    })
  }
  function showTabAndContent(i = 0) {
    content[i].style.display = 'block'
    tabs[i].classList.add(activeClass)
  }

  hideTabAndContent()
  showTabAndContent()

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tabs.forEach((i, index) => {
        if (target == i || target.parentNode == i) {
          hideTabAndContent()
          showTabAndContent(index)
        }
      })
    }
  })
}
export default tabs