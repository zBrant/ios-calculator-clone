let display = document.getElementById("painel")
let num1 = "", num2 = ""
let operator = ""
let dotPlaced = false
let signActive = false

function clearDisplay() {
  display.innerHTML = ""
  num1 = ""
  num2 = ""
  operator = ""
  dotPlaced = false
  signActive = false
}

function addToPanel(n) {
  if(display.innerHTML.length > 11) return 
  if(signActive){
    num2 += n
    display.innerHTML = addToDisplay(num2)
  }else{
    num1 += n
    display.innerHTML = addToDisplay(num1)
  }
}

function addDot() {
  if (signActive) {
    dotPlaced = true
    if (num2.includes(".")) return
  } else {
    dotPlaced = true
    if (num1.includes(".")) return
  }
  addToPanel('.')
}

function invert() {
  if (signActive) {
    num2 *= -1
    display.innerHTML = num2
  } else {
    num1 *= -1
    display.innerHTML = num1
  }
}

function expressionType(t) {
  if (signActive) return
  operator = t
  signActive = true
  dotPlaced = false
}

function doExpression() {
  display.innerHTML = eval(num1 + operator + num2).toLocaleString(undefined)
}

function toPercentage() {
  if (signActive) {
    if (num2 === "") return
    num2 = (num1 / 100) * num2
    display.innerHTML += "%"
  } else {
    num1 /= 100
    display.innerHTML += "%"
  }
}

function addToDisplay(n) {
  return parseFloat(n).toLocaleString(undefined)
}