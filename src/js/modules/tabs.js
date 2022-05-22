const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector)
  const tabs = document.querySelectorAll(tabSelector)
  const contents = document.querySelectorAll(contentSelector)
  const tabSelectorSliced = tabSelector.slice(1, tabSelector.length)

  function hideContentAndTabs() {
    tabs.forEach(tab => {
      tab.classList.remove(activeClass)
    })
    contents.forEach(content => {
      content.style.display = 'none'
    })
  }

  function showContentAndTabs(index = 1) {
    tabs[index].classList.add(activeClass)
    contents[index].style.display = 'block'
  }
  hideContentAndTabs()
  showContentAndTabs()

  header.addEventListener('click', function (e) {
    const target = e.target
    if (target.parentNode.classList.contains(tabSelectorSliced)) {
      hideContentAndTabs()
      tabs.forEach((tab, index) => {
        if (tab === target.parentNode) {
          showContentAndTabs(index)
        }
      })
    }
  })
}
export default tabs