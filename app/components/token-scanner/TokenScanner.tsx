'use client'

import { useEffect, useState } from "react";
import CircularProgressBar from "../progress-bars/CircularProgressBar";
import { LinearProgress } from "@mui/material";
import { zeroAddress } from "@/app/utils/handleAddress";

type Props = {
    address?: string
    data?: object
    firstAnimation?: boolean;
    isSearching: boolean;
} 

const TokenScanner = ({firstAnimation = false, data = {}, isSearching, address = zeroAddress}: Props) => {


    const [progress, setProgress] = useState<number>(0);
    const [inProgress, setInProgress] = useState<boolean>(firstAnimation);

    useEffect(() => {
        setInProgress(isSearching);
    }, [isSearching])

    // -- First animation --
    // Deactivate first animation
    const isFirstAnimation: boolean = firstAnimation;
    useEffect(() => {
        if (isFirstAnimation) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 76) {
                        clearInterval(interval);
                        setInProgress(false);
                        return 76;
                    }
                    return prev + 1;
                });
            }, 30); // 10ms * 100 = 1000ms = 1s
    
            return () => clearInterval(interval); 
        }
    }, [isFirstAnimation]);
    // ------------------------------

    return (
        <div className="flex flex-col gap-4 border-2 xl:border-4 border-accent-primary/20 rounded-2xl py-6 px-3 md:px-8 w-full sm:w-[90%] md:w-[80%] xl:w-[60%] ">
            
            <div className="flex justify-between font-semibold sm:py-5">
                <span className="text-accent-primary/50 sm:text-xl 2xl:text-2xl">{address ? address : ''}</span>
                <span className="sm:text-xl 2xl:text-2xl">{inProgress ? 'Scanning...' : 'Success'}</span>
            </div>

            <div className="flex items-center bg-surface-primary/20 border-2 border-accent-primary/5 rounded-lg py-4 sm:py-8 px-4">
                <div className="flex-4/5 flex flex-col gap-2 py-2 pr-3 text-accent-primary/10">
                    <span className="text-start text-text-primary sm:text-xl 2xl:text-2xl">CryptoShield Score</span>
                    {/* <div className="w-full border border-accent-primary/20 "></div> */}
                    <LinearProgress variant={`${inProgress ? 'indeterminate' :  'determinate'}`} value={100} color="inherit" />
                </div>
                <div className="relative flex-1/5 flex justify-center items-center text-accent-primary ">
                    <CircularProgressBar progress={progress} />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 min-h-[100px] sm:min-h-[150px] 2xl:min-h-[180px]">
                <div className="flex flex-col justify-center items-center gap-3 py-2 px-2 bg-surface-primary/20 border-2 border-accent-primary/5 rounded-lg">
                    <span className="text-sm sm:text-xl 2xl:text-2xl text-center">Honeypot Check</span>
                    <div className="flex justify-center items-center gap-1 mt-auto sm:mt-0">
                        {inProgress ? 
                            <div role="status">
                                <svg aria-hidden="true" className="w-5 sm:w-6 h-5 sm:h-6 text-accent-primary animate-spin fill-bg-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                            : 
                            <div className="bg-accent-primary w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full"> </div>
                        }
                        <span className="text-text-primary text-xs sm:text-lg 2xl:text-xl">{inProgress ? 'Scanning' : 'Passed'}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 py-2 px-2 bg-surface-primary/20 border-2 border-accent-primary/5 rounded-lg">
                    <span className="text-sm sm:text-xl 2xl:text-2xl text-center">Rug Pull Risk</span>
                    <div className="flex justify-center items-center gap-1 mt-auto sm:mt-0">
                        {inProgress ? 
                            <div role="status">
                                <svg aria-hidden="true" className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300 animate-spin fill-bg-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                            : 
                            <div className="bg-yellow-300 w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full"></div>
                        }
                        <span className="text-yellow-300 text-xs sm:text-lg 2xl:text-xl">{inProgress ? 'Scanning' : 'Medium'}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 py-2 px-2 bg-surface-primary/20 border-2 border-accent-primary/5 rounded-lg">
                    <span className="text-sm sm:text-xl 2xl:text-2xl text-center">Liquidity Health</span>
                    <div className="flex justify-center items-center gap-1 mt-auto sm:mt-0">
                        {inProgress ? 
                            <div role="status">
                                <svg aria-hidden="true" className="w-5 sm:w-6 h-5 sm:h-6 text-red-400 animate-spin fill-bg-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                            : 
                            <div className="bg-red-400 w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full "> </div>
                        }
                        <span className="text-red-400 text-xs sm:text-lg 2xl:text-xl">{inProgress ? 'Scanning' : 'Low'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenScanner;