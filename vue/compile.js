/***
 * 将文本内容提取出来
 */
// name:{{name}} 年龄：{{age}} >> ['{{name}}',"{{age}}"]

function getFrags(template) {
    let result = template.match(/{{[^}]+}}/g)
    return result || [];
}

function getValue(frag, envObj) {
    let obj = envObj;
    let arr = frag.replace("{{", "").replace("}}", "").split('.');
   for(let i=0;i<arr.length;i++){
       obj=obj[arr[i]]
   }
   return obj;
}



export default function Compile(template, envObj) {
    let frags = getFrags(template);
    let result = template; //保存经过变换的数据
    for (let i = 0; i < frags.length; i++) {
        let frag = frags[i];
        result=result.replace(frag,getValue(frag,envObj))
    //    result.push(getValue(frag, envObj)) ;
    }
    return result;
}