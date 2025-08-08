import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
	title: "Crypto Shield",
	description: "BNB Chain token scanner application.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body className="w-full h-screen text-text-primary accent bg-bg-primary">

				<header className="flex items-center">
					<Navbar />
				</header>
				<main>
					{children}
				</main>
				<footer>

				</footer>
			</body>
		</html>
	);
}
