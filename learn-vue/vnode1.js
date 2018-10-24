class VNode {
  constructor(tag, data, children, text, elm) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
  }
}

function createEmptyVNode() {
  const node = new Node();
  node.text = "";
  return node;
}

function createTextVNode(val) {
  return new VNode(undefined, undefined, [], "");
}

function cloneVNode(node) {
  return new VNode(node.tag, node.data, node.children, node.text, node.elm);
}
