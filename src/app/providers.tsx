"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useStore } from "@/libs/zustand";

const Provider = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient());
	const theme = useStore((state) => state.theme);

	return (
		<QueryClientProvider client={queryClient}>
			<body data-theme={theme}>{children}</body>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Provider;
