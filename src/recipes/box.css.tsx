import { cva, RecipeVariantProps } from "@/styled-system/css";

type PageProps = {
  children: React.ReactNode;
} & RecipeVariantProps<typeof box>;

export const box = cva({
  base: {
    bgColor: "light",
    borderRadius: "10px",
    shadow: "outLight",
    alignItems: "center",
  },
});

export const Box = ({children, ...RecipeVariantProps}: PageProps) => {
  return (
    <div className={box(RecipeVariantProps)}>
      {children}
    </div>
  );
}

export default Box;