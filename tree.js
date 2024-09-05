/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if the tree is empty return 0
    if (!this.root) return 0;

    let sum = 0;
    // start with the root node 
    const stack = [this.root];

    while (stack.length) {
      const current = stack.pop();
      // add each node value to the sum 
      sum += current.val;
      // loop continues until it's added all nodes 
      for (let child of current.children) {
        stack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if the tree is empty return 0
    if (!this.root) return 0;

    let count = 0;
    // start with the root node 
    const stack = [this.root];

    while (stack.length) {
      const current = stack.pop();
      // if the node value is divisible by 2 it's even therefore count it 
      if (current.val % 2 === 0) count ++;
      // loop continues until its gone through all nodes 
      for (let child of current.children) {
        stack.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // if the tree is empty return 0
    if (!this.root) return 0;

    let count = 0;
    // start with the root node
    const stack = [this.root];

    while (stack.length) {
      const current = stack.pop();
      // if node value is greater than lowerBound add to count
      if (current.val > lowerBound) count ++;
      // loop continues until its gone through all nodes 
      for (let child of current.children) {
        stack.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
