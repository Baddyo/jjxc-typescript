// const getUserName = user => user.name; // 报错

interface User1 {
    name: string,
        age: number,
        readonly isMale: boolean,
        say1?: () => {}, // 若类型中有函数，可以直接定义
        say2?: Say2 // 也可以单独定义一个接口
}
interface Say2 {
    (words: string): string
}
const getUserName1 = (user: User1) => {
    // user.isMale = false; // 报错
    return user.name;
}
getUserName1({
    name: 'Badd',
    age: 0,
    isMale: true
});
// getUserName1({
//     name:'Badd',
//     isMale:true
// }); // 报错

interface User2 {
    name: string,
        age ? : number,
        isMale: boolean
}
const getUserName2 = (user: User2) => user.name;
getUserName2({
    name: 'Badd',
    age: 0,
    isMale: true
});
getUserName2({
    name: 'Badd',
    isMale: true
}); // 不报错