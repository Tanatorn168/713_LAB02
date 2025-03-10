export const findMax = (numbers: number[]): string => {
    const maxNumber = Math.max(...numbers);
    return maxNumber.toString();
}