'use client'
// import Image from "next/image";
import { GoShieldLock } from "react-icons/go";
import TokenScanner from "./components/token-scanner/TokenScanner";
import Link from "next/link";




export default function Home() {
	return (
		<div className="relative h-screen">
			<section className="w-full flex flex-col gap-6 justify-center items-center text-center text-text-primary px-5 py-5 lg:py-10">
				<h1 className="font-bold text-4xl 2xl:text-5xl ">Protect Your Crypto Instantly</h1>
				<p className="font-light text-lg sm:text-xl 2xl:text-2xl">Scan any BSC token for honeypots, rug pulls, and liquidity traps before you buy.</p>
				<button className="px-4 py-2 lg:px-7 lg:py-3 text-lg lg:text-xl 2xl:text-2xl font-bold text-text-primary-reverse bg-accent-primary rounded-xl cursor-pointer hover:bg-transparent hover:text-accent-primary hover:ring-2 hover:ring-accent-primary transition duration-300"><Link href={'/scan'}>Scan Token Now</Link></button>
				<div className="relative">
					<GoShieldLock className="w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[200px] text-accent-primary "/>
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
						<div className="w-70 h-70 rounded-full bg-accent-primary opacity-10 blur-3xl"></div>
					</div>		
				</div>
			</section>

			<section className="w-full flex justify-center px-2 pb-5 lg:pb-10 mt-10 lg:mt-0">
				<TokenScanner firstAnimation={true} />
			</section>
		</div>
	);
}
