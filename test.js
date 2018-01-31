/**
 * Given any sentence with no spaces...
 *  1. If all words in sentence, output sentence with spaces
 *  2. If some words not in sentence, output 'Some words were not found'
 *  3. If no sentence given, output 'No sentence given'
 */
 
// Our small dictionary
var dict = ['we', 'i', 'he', 'like', 'likes', 'love', 'eat',
  'eatery', 'eats', 'bacon', 'pizza', 'fries', 'to', 'too'];
  
/**
 * Feel free to use below AngularJS, jQuery, vanilla JS,
 * or other libraries
 */  
$(document).ready(function() {
  var buttonEle = document.getElementById("button");
  buttonEle.addEventListener("click", addSpace);
});


function addSpace() {
    dict.sort(function (ele1, ele2) {
    if (ele1.length > ele2.length) {
      return -1;
    } else {
      return 1;
    }
  });
  
  console.log(dict);
  
  var inputVal = document.getElementById("search").value;
  var final = [];


  inputValCopy = inputVal;
  
  for (var i = 0; i < dict.length; i++) {
      inputValCopy = inputValCopy.replace(dict[i], "");
  }
  
  if (inputValCopy.length > 0) {
    var outputEle = document.getElementById("output");
    outputEle.innerHTML = "error";
    return;
  }


  for (var i = 0; i < dict.length; i++) {
    var matchEle = inputVal.match(dict[i]);
    if (matchEle) {
      var temp = inputVal.indexOf(dict[i]);
      final.push([temp, matchEle[0]]);
    }
  }
  


  
  console.log(final);
  
  final.sort(function (e1, e2) {
    if (e1[0] > e2[0]) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(final);
  
  var output = "";
  final.forEach(function (ele) {
    output += ele[1].concat(" ");
  });
  
  var outputEle = document.getElementById("output");
  outputEle.innerHTML = output;
  
  console.log("final", output); 
  
}


var app = angular.module('tubeApp', []); 
app.controller('MainCtrl', function($scope) {
  // Code here
});

