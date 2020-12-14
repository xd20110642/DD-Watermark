
/**
 * 判断是否存在宽和高
 * @param key 
 */
export function handleHasWidthAndHeight(key:number):boolean{
    if(key !== null && key !== undefined && typeof key === 'number'){
        return true;
    }else{
        return false
    }
}