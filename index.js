const bigInt1 = 12345678901234567890n;
const bigInt2 = 0xffffffffffffffffn; // Hexadecimal literal (with 'n')
const bigInt3 = 0o177777777777777777n; // Octal literal (with 'n')

console.log(typeof bigInt1); // Output: bigint
console.log(typeof bigInt2); // Output: bigint
console.log(typeof bigInt3); // Output: bigint
