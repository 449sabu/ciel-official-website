import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/app/providers";
import { Navigation, Footer } from "@/components";

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
			<Providers>
				<header>
					<Navigation pages={pages} />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</Providers>
		</html>
	);
}

const pages = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "Blog",
		link: "/blog",
	},
];
