'use client';

import { useEffect, useState } from "react";
import ScannerSearch from "./ScannerSearch";
import TokenScanner from "./TokenScanner";
import { isAddress, zeroAddress } from "@/app/utils/handleAddress";
import { ScanResponse } from "@/app/types/ScanResponse";

/**
 * 0x2859e4544C4bB03966803b044A93563Bd2D0DD4D
 * 0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3
 * 
 * 0xFD58735256a1efEba4cc2fCd7C1AdC123e2dA999
 * 0xA5bD388024c756F507ccbB38AdFbeDc465DB5172
 */


const SearchableScanner = () => {

    const [input, setInput] = useState<string>(zeroAddress);
    const [address, setAddress] = useState<string>(zeroAddress);
    
    const [data, setData] = useState<ScanResponse | null>(null);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value.trim())
    }

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (isAddress(input) && input !== zeroAddress) {
                setIsSearching(true);
                setAddress(input);

                try {
                    const res = await fetch(`/api/scan?address=${input}`);
                    const data: ScanResponse = await res.json();
                    if (data.status !== 200) {
                        throw new Error(`API Error: ${JSON.stringify(data)}`);
                    }
                    console.log('API Response:', data);
                    setData(data);
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            } 
            else if (input !== '' && input !== zeroAddress) {
                console.log('Enter correct address.');
            }

            setIsSearching(false);
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [input]);

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
