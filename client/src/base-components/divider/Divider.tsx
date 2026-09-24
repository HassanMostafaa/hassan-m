import { FunctionComponent } from "react";

interface IDividerProps {
  color?: string;
  className?: string;
  height?: string;
  orientation?: "horizontal" | "vertical";
  gap?: string;
}

export const Divider: FunctionComponent<IDividerProps> = ({
  color = "#e5e7eb",
  className = "",
  height,
  orientation = "horizontal",
  gap = "0",
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`shrink-0 ${className}`}
      style={{
        backgroundColor: color,
        width: isHorizontal ? "100%" : "1px",
        height: isHorizontal ? (height ?? "1px") : (height ?? "auto"),
        alignSelf: isHorizontal ? undefined : "stretch",
        margin: isHorizontal ? `${gap} 0` : `0 ${gap}`,
      }}
    />
  );
};
