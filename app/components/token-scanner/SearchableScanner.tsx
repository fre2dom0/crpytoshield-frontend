'use client';

import { useEffect, useState } from "react";
import ScannerSearch from "./ScannerSearch";
import TokenScanner from "./TokenScanner";
import { isAddress, zeroAddress } from "@/app/utils/handleAddress";

const SearchableScanner = () => {

    const [address, setAddress] = useState<string>(zeroAddress);
    const [data, setData] = useState<object>({});
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.currentTarget.value.trim())
    }

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (isAddress(address) && address !== zeroAddress) {
                setIsSearching(true);

                try {
                    const res = await fetch(`/api/scan?address=${address}`);
                    const data = await res.json();
                    console.log('API Response:', data);
                    setData(data);
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            } 
            else if (address !== '' && address !== zeroAddress) {
                console.log('Enter correct address.');
            }
        setIsSearching(false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [address]);

    return (
        <>
            <div className="flex justify-center px-2 py-5 w-full sm:w-[90%] md:w-[80%] xl:w-[60%] ">
                <ScannerSearch handleChange={handleChange}/>
            </div>
            
			<div className="w-full flex justify-center px-2 lg:mt-0">
				<TokenScanner isSearching={isSearching} address={address} data={data} />
			</div>
        </>
    )
}

export default SearchableScanner;