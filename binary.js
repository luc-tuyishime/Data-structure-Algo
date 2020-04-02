// Factorial of 4! = 4 * 3 * 2 * 1;

function factorial(num) {
  return num === 1 ? num === 1 : num * factorial(num - 1)
}

// console.log(factorial(4));


const multiply = (array) => {
  var sum = 1;
  for (var i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
}

///////////////////    BINARY SEARCH TREE  //////////////////

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value)
  }
}

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value); // if we have the value return it
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
}

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  iteratorFunc(this.value);
}



var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(49);
bst.insert(45);
bst.insert(13);
bst.insert(54);
bst.insert(54);
bst.insert(104);


console.log('HERE ARE THE VALUES ====>>>', bst.depthFirstTraversal(log));

function log(value) {
  console.log(value);
}