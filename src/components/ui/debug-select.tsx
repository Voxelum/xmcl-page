
import * as React from "react"
import { SelectItem as OriginalSelectItem } from "@/components/ui/select"

interface DebugSelectItemProps {
  value: string;
  children: React.ReactNode;
  [key: string]: any;
}

const DebugSelectItem = React.forwardRef<
  React.ElementRef<typeof OriginalSelectItem>,
  DebugSelectItemProps
>(({ value, children, ...props }, ref) => {
  // Log any problematic values to help debug
  if (!value || value === "") {
    console.error("SelectItem received empty value:", { value, children });
    console.trace("SelectItem empty value trace");
    return null; // Don't render items with empty values
  }

  return (
    <OriginalSelectItem ref={ref} value={value} {...props}>
      {children}
    </OriginalSelectItem>
  );
});

DebugSelectItem.displayName = "DebugSelectItem";

export { DebugSelectItem };
