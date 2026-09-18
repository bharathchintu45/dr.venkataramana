"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface FieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

/** Label + helper/error text wrapper. Pairs with Input/Textarea/Select below. */
export const Field: React.FC<FieldProps> = ({ label, htmlFor, required, error, hint, className, children }) => (
  <div className={cn("space-y-1.5", className)}>
    <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
      {label}
      {required && (
        <span className="ml-0.5 text-annotation" aria-hidden>
          *
        </span>
      )}
    </label>
    {children}
    {hint && !error && (
      <p id={`${htmlFor}-hint`} className="text-xs text-ink-muted">
        {hint}
      </p>
    )}
    {error && (
      <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-state-danger">
        {error}
      </p>
    )}
  </div>
);

const controlClass = (error?: boolean, className?: string) =>
  cn(
    "focus-ring w-full rounded border bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted transition-colors",
    error ? "border-state-danger" : "border-line-strong hover:border-herbarium/60 focus:border-herbarium",
    className
  );

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean };
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, error, ...rest }, ref) => (
  <input ref={ref} className={controlClass(error, className)} {...rest} />
));
Input.displayName = "Input";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean };
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...rest }, ref) => (
  <textarea ref={ref} className={controlClass(error, cn("min-h-[7rem] resize-y", className))} {...rest} />
));
Textarea.displayName = "Textarea";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean };
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, error, children, ...rest }, ref) => (
  <select ref={ref} className={controlClass(error, cn("bg-paper", className))} {...rest}>
    {children}
  </select>
));
Select.displayName = "Select";
