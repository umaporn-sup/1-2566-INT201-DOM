//HTMLCollection (Only Element Nodes) vs. NodeList (including elements nodes, attribute nodes, and text nodes )
const myApp = document.getElementById('app')

//.children returns HTMLCollection
const childrensHTML = myApp.children
//.childNodes returns NodeList
const childNodesList = myApp.childNodes
console.log('HTMLCollection(2) [div, div]')

//HTMLCollection cannot use forEach but can use for..of
for (const el of childrensHTML) {
  console.log(el)
}
//In case you want to use forEach with HTMLCollection object
Array.from(childrensHTML).forEach((element) => console.log(element))

//NodeList object can use forEach
console.log('NodeList(5) [text, div, text, div, text]')
childNodesList.forEach((element) => console.log(element))

//HTMLCollection(live) vs. NodeList (static)
const sectionDiv = document.getElementById('sections')
const sectionsbySelectorAll = document.querySelectorAll('.section')
const sectionsByClassName = document.getElementsByClassName('section')

//create a new div section
// <div class="section">Section 5</div>
const div = document.createElement('div')
div.classList = 'section'
div.innerHTML = 'section 5'

sectionDiv.appendChild(div)

//getElementsByClassName returns HTMLCollection (live)
console.log(sectionsByClassName.length)

//querySelectorAll returns NodeList (static)
console.log(sectionsbySelectorAll.length)
