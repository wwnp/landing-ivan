
const test = (blockSelector) => {
  let direction = ""
  let oldY = 0

  const testBlock = document.querySelector(blockSelector)

  testBlock.addEventListener('mousedown', function (e) {
    const modMoveEventHandler = moveEventHandler.bind(e)

    testBlock.addEventListener('mousemove', modMoveEventHandler)


    testBlock.addEventListener('mouseup', () => {
      console.log(123)
      testBlock.removeEventListener('mousemove', modMoveEventHandler)
    })
  })

  function moveEventHandler(e) {
    if (e.pageY < oldY) {
      direction = "top"
    } else if (e.pageY > oldY) {
      direction = "bottom"
    }

    if (direction === 'top') {
      e.target.style.backgroundColor = 'red'
    }
    if (direction === 'bottom') {
      e.target.style.backgroundColor = 'green'
    }

    oldY = e.pageY;
  }


}
export default test