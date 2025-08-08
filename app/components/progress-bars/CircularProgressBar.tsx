'use client'

import { CircularProgress } from "@mui/material";

// function getTextSizeByProgress(
//     progress: number,
//     options: {
//         inverse?: boolean;
//         steps?: number;
//         classes?: string[];
//     } = {}
// ): string {
//     const {
//         inverse = false,
//         steps = 5,
//         classes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'],
//     } = options;

//     const safeProgress = Math.max(0, Math.min(progress, 100));
//     const stepSize = 100 / steps;
//     let index = Math.floor(safeProgress / stepSize);

//     if (index >= classes.length) index = classes.length - 1;
//     if (inverse) index = classes.length - 1 - index;

//     return classes[index];
// }

type Props = {
    progress: number;
}

const CircularProgressBar = ({progress}: Props) => {

    return (
        <div className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] xl:w-[140px] xl:h-[140px]">
            <CircularProgress
                thickness={2}
                color="inherit"
                size={'100%'}
                variant="determinate"
                value={progress}
            />
            <div className="absolute top-0 inset-0 flex items-center justify-center">
                <span className={`text-xl sm:text-3xl xl:text-4xl transition-all duration-50`}>
                    {progress}
                </span>
                <span className={`mt-3 text-xs sm:text-sm xl:text-lg text-text-primary transition-all duration-50`}>
                    /100
                </span>
            </div>
        </div>
    );
}

export default CircularProgressBar;
