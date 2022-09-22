function mudarBarra() {
    var checked = 0;
    var myBar = document.getElementById("myBar")
    var porcentagemBar = document.getElementById("porcentagemBar")

    boxes = document.querySelectorAll("input[type='checkbox']:checked");
    checked = boxes.length
  
  
  myBar.style.width = ((checked / 2) * 100) + "%"
  porcentagemBar.innerText = `${(checked / 2) * 100 + "%"}`
  return true
  }
  
  checks = document.querySelectorAll("input[type='checkbox']")
  checks.forEach(function(box) {
    box.addEventListener("change", function(e) {
        mudarBarra()
    })
  })