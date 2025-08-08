// components/navbar/NavbarInteractive.tsx
'use client'

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

type NavLink = {
    text: string;
    link: string;
}

type NavbarInteractiveProps = {
    navLinks: NavLink[];
}

const NavbarInteractive = ({ navLinks }: NavbarInteractiveProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Desktop menu */}
            <ul className="hidden sm:flex flex-row items-center justify-center gap-4 md:gap-7 lg:gap-10 text-lg md:text-xl text-text-primary">
                {navLinks.map(({ text, link }) => (
                    <li key={link}>
                        <Link href={link} className="hover:underline block">
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            <div className="relative sm:hidden z-100">
				
                <button onClick={() => setOpen(!open)} className="text-3xl" aria-label={open ? "Close menu" : "Open menu"}>
                    <RxHamburgerMenu/>
                </button>

				<div className={`
				fixed bg-bg-primary top-0 left-0 w-full h-full
				transform transition-transform duration-300 ease-in-out
				${open ? "translate-x-0" : "-translate-x-full"}
				`}>
					<div className="relative w-full py-15">

						<button onClick={() => setOpen(false)} className="absolute right-4 top-3 text-4xl text-accent-primary cursor-pointer" aria-label="Close menu">
							<IoMdClose />
						</button>

						<ul className="flex flex-col gap-2 text-2xl px-5 text-accent-primary">
							{navLinks.map(({ text, link }) => (
								<li key={link}>
									<Link href={link} className="hover:underline block border py-2 px-4 rounded-xl" onClick={() => setOpen(false)}>
										{text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

            </div>
        </>
    );
};

export default NavbarInteractive;
