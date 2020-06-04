
/***
 * 将原始对象提取到代理对象中
 */
export default function createResponse(target,origin,callback){
    for(let prop in origin){
        propProxy(target,origin,prop,callback);
    }
}

function propProxy(target,origin,prop,callback){
    if(prop instanceof Array){
        let result = {}
        createResponse(result,origin[prop],callback);
    }
    Object.defineProperty(target,prop,{
        get(){
            return origin[prop]
        },
        set(val){
            origin[prop]=val;
            callback(prop)
        }
    })
}