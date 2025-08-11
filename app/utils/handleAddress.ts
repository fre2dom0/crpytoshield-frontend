export const zeroAddress = '0x0000000000000000000000000000000000000000';

export function isAddress(value: string): boolean {
    return /^0x[0-9a-fA-F]{40}$/.test(value);
}  