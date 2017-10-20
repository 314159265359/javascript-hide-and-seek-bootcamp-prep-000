function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var element = document.querySelectorAll('#grand-node div')
  for (var i = 0; i < element.length; ++i) {
    var child = element[i]
  }
  return child
}

function increaseRankBy(n){
  var element = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < element.length; ++i) {
    element[i] = toString(parseInt(element[i],10)+n)
  }
}
