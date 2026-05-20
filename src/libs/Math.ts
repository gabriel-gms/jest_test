export const Math = {
    sum: (a: number, b: number) => a + b,
    sub: (a: number, b: number) => a - b,
    mult: (a: number, b: number) => a * b,
    div: (a: number, b: number) => {
        if (b === 0) {
            return false
        } 
        return a / b; 
    }
}