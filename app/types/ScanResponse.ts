
type HoneyPot = {
    passed: boolean;
}

type Liquidity = {
    passed: boolean;
}

type Rugpull = {
    passed: boolean;
}

type ScanData = {
    honeypot: HoneyPot;
    liquidity: Liquidity;
    rugpull: Rugpull;
    verdict: string;
    score: number;
}

export type ScanResponse = {
    data?: ScanData | null;
    status: number;
    statusText: string
}