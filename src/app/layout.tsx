import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/app/providers";
import Navigation from "@/components//Navigation";
import Footer from '@/components/Footer'

export const metadata: Metadata = {
	title: "CIEL Stake Pool",
	description: "CIEL Stake Pool Official Site.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<header>
					<Navigation pages={pages} />
				</header>
				<Providers>
					<main>{children}</main>
				</Providers>
				<footer>
				<Footer />
				</footer>
			</body>
		</html>
	);
}

const pages = [
	{
		title: "Home",
		link: "/",
	},
	// {
	// 	title: "Blog",
	// 	link: "/blog",
	// },
];
