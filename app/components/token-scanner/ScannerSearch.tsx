'use client'

type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScannerSearch = ({handleChange}: Props) => {
    return (
        <input onChange={(e) => handleChange(e)} type="text" className="w-full py-2 px-5 bg-surface-primary/20 text-text-primary border-2 xl:border-4 border-accent-primary/20 rounded-xl focus:outline-none" />   
    )
}

export default ScannerSearch;