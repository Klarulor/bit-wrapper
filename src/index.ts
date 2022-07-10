export function shiftBits(...opt: boolean[]): number{
    if(Array.isArray(opt[0]))
        opt = opt[0]
    let number = 0;
    opt = opt.reverse();
    for(let i = 0; i < opt.length; i++){
        const mod = (opt[i] ? 1 : 0) * degree(2, i);
        number += mod;
    }
    return number;
}
export function unShiftBits(number: number, size: number){
    const bits = [];
    let maxDegree = 0;
    while(degree(2, maxDegree-1) < number)
        maxDegree++;
    maxDegree--;
    let less = number;
    for(let i = maxDegree; i >= 1; i--){
        const rest = less - degree(2, i-1) >= 0;
        bits.push(rest)
        if(rest)
            less -= degree(2, i-1)
    }
    const arrayLength = bits.length;
    for(let i = 0; i < size-arrayLength; i++){
        bits.unshift(false);
    }
    return bits;
}
function degree(num: number, degree: number){
    let out = num;
    if(degree === 0)  return 1;
    for(let i = 1; i < degree; i++){
        out *= num;
    }
    return out;
}