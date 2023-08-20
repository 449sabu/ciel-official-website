import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreProps {
	theme: string;
	setTheme: (payload: string) => void;
}

export const useStore = create(
	devtools<StoreProps>((set) => ({
		theme: "light",
		setTheme: (payload) => set({ theme: payload }),
	}))
);
