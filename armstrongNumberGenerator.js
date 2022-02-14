function printArmstrong(n)
{
    let array=[]
    if(Array.isArray(n) || n<0 || typeof(n)==="string")
        return "invalid input"
    if(n>1000)
        throw new Error('Invalid exceeds the valid range')
    for(let number=0;number<=n;number++)
    {
        if(isArmstrong(number))
            array.push(number)
    }   
    return array
}
function isArmstrong(number)
{
    if(Array.isArray(number) || number<0 || typeof(number)==="string")
        return "invalid input"
    if(number>1000)
        throw new Error('Invalid exceeds the valid range');
    let ans=0
    let currentNum=number
    while(currentNum!=0)
    {
        let digit=currentNum%10
        ans+=parseInt(Math.pow(digit,3))
        currentNum=parseInt(currentNum/10)
    }
    if(ans===number)
    {
        return 1
    }
    return 0
}
//var input=407;
//printArmstrong(input)
module.exports ={
    printArmstrong,
    isArmstrong
    
}