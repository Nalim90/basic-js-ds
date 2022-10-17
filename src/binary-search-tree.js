const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rooT = null
  }

  root() {
    return this.rooT
  }

  add(data) {
    function addIn(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addIn(node.left, data)
      } else {
        node.right = addIn(node.right, data)
      }
      return node
    }
    this.rooT = addIn(this.rooT, data)
  }  

  has(data) {
    function searchIn(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if(data < node.data) { 
        return searchIn(node.left, data)
      } else { 
        return searchIn(node.right, data)
      }
    }
    return searchIn(this.rooT, data) 
  }

  find(data) {
    function findIn(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        return findIn(node.left, data)
      } else {
        return findIn(node.right, data)
      }
    }
    return findIn(this.rooT, data)
  }

  remove(data) {   
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {        
        if (!node.left && !node.right) {          
          return null
        }
        if (!node.left) {          
          node = node.right
          return node
        }
        if (!node.right) {          
          node = node.left
          return node
        }
        let smaller = node.right
        while (smaller.left) {
          smaller = smaller.left
        }
        node.data = smaller.data
        node.right = removeNode(node.right, smaller.data)
        return node
      }
    }
    this.rooT = removeNode(this.rooT, data)
  }

  min() {
    if (!this.rooT) {
      return
    }
    let node = this.rooT
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rooT) {
      return
    }
    let node = this.rooT
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};