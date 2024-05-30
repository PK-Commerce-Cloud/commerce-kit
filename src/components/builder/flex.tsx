import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    space_x: {
      default: "space-x-4",
      sm: "space-x-2",
      lg: "space-x-8",
    },
    space_y: {
      default: "space-y-4",
      sm: "space-y-2",
      lg: "space-y-8",
    },
  },
  defaultVariants: {
    direction: "row",
    space_x: "default",
  },
});

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

export default function Flex({
  children,
  direction,
  space_x,
  space_y,
  className,
}: FlexProps) {
  return (
    <div
      className={cn(flexVariants({ direction, space_x, space_y, className }))}
    >
      {children}
    </div>
  );
}
