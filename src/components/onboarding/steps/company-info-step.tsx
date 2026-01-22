import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CompanyInfoStepProps {
  initialData?: {
    companyName?: string;
    companySize?: string;
  };
  onNext: (data: { companyName: string; companySize: string }) => void;
  isLastStep?: boolean;
}

export function CompanyInfoStep({ initialData, onNext, isLastStep }: CompanyInfoStepProps) {
  const [companyName, setCompanyName] = useState(initialData?.companyName || "");
  const [companySize, setCompanySize] = useState(initialData?.companySize || "");
  const [errors, setErrors] = useState<{ companyName?: string; companySize?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { companyName?: string; companySize?: string } = {};
    
    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    
    if (!companySize) {
      newErrors.companySize = "Please select your company size";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onNext({ 
      companyName: companyName.trim(), 
      companySize
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            type="text"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              if (errors.companyName) {
                setErrors(prev => ({ ...prev, companyName: undefined }));
              }
            }}
            className={errors.companyName ? "border-red-500" : ""}
          />
          {errors.companyName && (
            <p className="text-sm text-red-500">{errors.companyName}</p>
          )}
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="companySize">Company Size</Label>
          <Select
            value={companySize}
            onValueChange={(value) => {
              setCompanySize(value);
              if (errors.companySize) {
                setErrors(prev => ({ ...prev, companySize: undefined }));
              }
            }}
          >
            <SelectTrigger 
              id="companySize"
              className={errors.companySize ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Select your company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="only-me">Only me</SelectItem>
              <SelectItem value="2-10">2-10</SelectItem>
              <SelectItem value="11-50">11-50</SelectItem>
              <SelectItem value="51-200">51-200</SelectItem>
              <SelectItem value="200+">200+</SelectItem>
            </SelectContent>
          </Select>
          {errors.companySize && (
            <p className="text-sm text-red-500">{errors.companySize}</p>
          )}
        </div>
      </div>
      
      <Button type="submit" className="w-full">
        {isLastStep ? "Complete Setup" : "Continue"}
      </Button>
    </form>
  );
}