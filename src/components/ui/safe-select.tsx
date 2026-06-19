
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SafeSelectItemProps {
  value: string | undefined | null;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const SafeSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectItem>,
  SafeSelectItemProps
>(({ value, children, ...props }, ref) => {
  // More strict validation - don't render items with invalid values
  if (!value || typeof value !== 'string' || value.trim() === "" || value === "undefined" || value === "null") {
    return null;
  }

  return (
    <SelectItem ref={ref} value={value} {...props}>
      {children}
    </SelectItem>
  );
});

SafeSelectItem.displayName = "SafeSelectItem";

interface SafeSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const SafeSelect = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  SafeSelectProps
>(({ children, ...props }, ref) => {
  return (
    <Select value={props.value} onValueChange={props.onValueChange} disabled={props.disabled}>
      <SelectTrigger ref={ref} className={props.className}>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        {children}
      </SelectContent>
    </Select>
  );
});

SafeSelect.displayName = "SafeSelect";

export { SafeSelect, SafeSelectItem };
