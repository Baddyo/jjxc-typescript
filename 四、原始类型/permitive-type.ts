const isTrue: boolean = true;

const binaryNum: number = 0b11;
const octNum: number = 0o77;
const decimalNum: number = 10;
const hexNum: number = 0xff;

const str: string = 'Just string';

function log(): void {
    console.log('Just a log.')
}
// const voidNull: void = null; // 报错？--strictNullChecks 决定的
const voidUndefined: void = undefined;

const nl: null = null;
const udf: undefined = undefined;

const smb: symbol = Symbol('smb');

const bg: bigint = 100n;