"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const PrintButton: React.FC = () => (
  <Button variant="primary" size="sm" iconLeft={<Printer className="h-4 w-4" />} onClick={() => window.print()}>
    Print / Save as PDF
  </Button>
);
