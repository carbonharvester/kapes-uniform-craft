import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface MobileFormFieldProps {
  label: string;
  id: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export const MobileFormField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  MobileFormFieldProps
>(({ 
  label, 
  id, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  error, 
  required, 
  rows = 4,
  className,
  ...props 
}, ref) => {
  const baseFieldClasses = cn(
    "w-full rounded-lg border border-input bg-background px-4 py-3",
    "text-base leading-6", // Prevent zoom on iOS
    "min-h-[48px]", // Touch-friendly height
    "transition-colors duration-200",
    "focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20",
    "disabled:cursor-not-allowed disabled:opacity-50",
    error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
    className
  );

  return (
    <div className="space-y-2">
      <Label 
        htmlFor={id}
        className="text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      
      {type === "textarea" ? (
        <Textarea
          id={id}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={baseFieldClasses}
          {...props}
        />
      ) : (
        <Input
          id={id}
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseFieldClasses}
          {...props}
        />
      )}
      
      {error && (
        <p className="text-sm text-red-500 font-medium mt-1">
          {error}
        </p>
      )}
    </div>
  );
});

MobileFormField.displayName = "MobileFormField";