"use client";
import { useStore } from "@/libs/zustand";
import { css } from "@/styled-system/css";

const ColorModeButton = () => {
	const setTheme = useStore((state) => state.setTheme);
	const theme = useStore((state) => state.theme);

	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				setTheme(theme === "light" ? "dark" : "light");
			}}
			className={css({ color: "secondary", borderRadius: "full" })}
		>
			{theme === "light" ? "Dark Mode" : "Light Mode"}
		</button>
	);
};

export default ColorModeButton;
