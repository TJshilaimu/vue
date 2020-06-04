function VNode(realDom, template) {
    this.template = template;
    this.realDom = realDom;
    this.children = [];

}

export default function createVNode(realDom) {
    let root = new VNode(realDom, "");
    if (realDom.nodeType === Node.TEXT_NODE) {
        // 是文本节点
        root.template = realDom.nodeValue
    }
    for (let i = 0; i < realDom.childNodes.length; i++) {
        let child = realDom.childNodes[i];
        let my = createVNode(child);
        root.children.push(my);
    }
    return root;
}

// for (var i = 0; i < realDom.childNodes.length; i++) {
//     let child = realDom.childNodes[i];
//     this.childNode.push(child);

//     if (child.nodeType === node.NODE_TEXT) {
//         let template = child.nodeValue
//     }
//     VNode(child, template)

// }