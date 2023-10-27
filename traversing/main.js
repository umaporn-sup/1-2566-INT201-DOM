const htmlElement = document.querySelector('html')
console.log(htmlElement.parentNode) //#document root node
console.log(htmlElement.parentElement) //null

const soupMenu = document.querySelector('#soup')
const firstChildNode = soupMenu.firstElementChild
const nextFirstChildNode = firstChildNode.nextElementSibling
const lastChildNode = soupMenu.lastElementChild
const previousLastChildNode = lastChildNode.previousElementSibling
console.log(firstChildNode)
//<li class="meat">Spicy Bacon-Corn Soup</li>
console.log(lastChildNode)
//<li class="vegan">Coconut Soup</li>
console.log(nextFirstChildNode)
//<li class="vegan">Vegetable Soup</li>
console.log(previousLastChildNode)
//<li class="meat">Beef Soup</li>

let currentChildNode = soupMenu.firstElementChild
while (currentChildNode !== null) {
  if (currentChildNode.nodeType === 1) {
    console.log(currentChildNode)
  }
  currentChildNode = currentChildNode.nextElementSibling
}
