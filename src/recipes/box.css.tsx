import { cva, RecipeVariantProps } from "@/styled-system/css";

type PageProps = {
  children: React.ReactNode;
} & RecipeVariantProps<typeof box>;

export const box = cva({
  base: {
    bgColor: "theme",
    borderRadius: "10px",
    shadow: "outShadows",
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