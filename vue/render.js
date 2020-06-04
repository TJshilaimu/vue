import compile from './compile.js'

//根据一个虚拟节点进行渲染
export default function render(vnode,envObj){
    if(vnode.realDom.nodeType === 3){
        let result = compile(vnode.template,envObj);
        vnode.realDom.nodeValue = result;
    }
    for(let i=0;i<vnode.children.length;i++){
        let child = vnode.children[i];
        render(child,envObj);
    }
}