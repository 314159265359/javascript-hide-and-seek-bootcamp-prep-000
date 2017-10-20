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

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
