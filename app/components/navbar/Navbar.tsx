// components/navbar/Navbar.tsx

import NavbarInteractive from "./NavbarInteractive";
import Logo from "../logo/Logo";

const navLinks = [
    { text: "Home", link: "/" },
    { text: "Features", link: "/features" },
    { text: "Docs", link: "/docs" },
    { text: "Pricing", link: "/pricing" },
    { text: "Contact", link: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="relative w-full flex items-center py-4 sm:px-10 px-3">
            <div className="flex-1 flex sm:block justify-start">
                <Logo />
            </div>
            <div className="absolute right-3 top-5 sm:left-0 sm:top-0 sm:relative sm:flex-1 flex justify-center items-center mx-auto cursor-pointer">
                <NavbarInteractive navLinks={navLinks} />
            </div>
            <div className="lg:flex-1"></div>
        </nav>
    );
};

export default Navbar;
