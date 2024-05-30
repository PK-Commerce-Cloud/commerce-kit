import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const modelVariants = cva(
  "container justify-center items-center flex flex-col gap-2",
  {
    variants: {
      color: {
        default: "text-white",
        dark: "text-black",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

interface ModelSectionProps extends VariantProps<typeof modelVariants> {
  model: string;
  price: string;
  description?: string;
}

export default function ModelSection({
  model,
  price,
  description,
  color,
}: ModelSectionProps) {
  return (
    <div className={cn(modelVariants({ color }))}>
      <h1 className="text-4xl">{model}</h1>
      <div className="flex flex-col justify-center text-center">
        <h3 className="text-xl">{price}</h3>
        {description && <p className="text-xs">{description}</p>}
      </div>
    </div>
  );
}
