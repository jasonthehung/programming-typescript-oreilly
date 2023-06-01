type TreeNode = {
  value: string
}

type LeafNode = TreeNode & {
  isLeaf: true
}

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

// let a is treeNode and value is 'a'
let a: TreeNode = {value: 'a'}

// let b is LeafNode and value is 'b' and isLeaf is true
let b: LeafNode = {value: 'b', isLeaf: true}

let c: InnerNode = {value: 'c', children: [b, a]}

let a1 = mapNode(a, (_) => _.toUpperCase())
let b1 = mapNode(b, (_) => _.toUpperCase())
let c1 = mapNode(c, (_) => _.toUpperCase())

console.log(c1)

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  }
}

export = {}
