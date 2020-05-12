export default {
  bind(el) {
    const dragBox = el
    dragBox.onmousedown = e => {
      dragBox.style.cursor = 'move'
      const disX = e.clientX - dragBox.offsetLeft
      const disY = e.clientY - dragBox.offsetTop
      document.onmousemove = e => {
        const left = e.clientX - disX
        const top = e.clientY - disY
        dragBox.style.left = left + 'px'
        dragBox.style.top = top + 'px'
      }
      document.onmouseup = e => {
        dragBox.style.cursor = 'auto'
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
