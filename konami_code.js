const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', onKeyDownHandle)

  let index = 0;

  function onKeyDownHandle(e){
    //e.stopPropagation()
    const key = parseInt(e.detail || e.which);

    if (key === code[index]){
      index++
      if (index === code.length) {
        alert("You did it!")
        index = 0
      }
    }else {
      index = 0
    }
  }
}
