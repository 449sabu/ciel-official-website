import { css } from "@/styled-system/css";

interface BadgeProps {
  text: string
}

const Badge = (props: BadgeProps) => {
  return (
    <div className={css({
      display:"inline-flex",
      bg: "teal.100",
      color: "teal.800",
      borderRadius: "xl",
      p: "1px 8px",
    })}>
      # {props.text}
    </div>
  );
}

export default Badge;