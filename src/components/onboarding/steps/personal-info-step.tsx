import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoStepProps {
  initialData?: {
    firstName?: string;
    lastName?: string;
  };
  onNext: (data: { firstName: string; lastName: string }) => void;
  isLastStep?: boolean;
}

export function PersonalInfoStep({ initialData, onNext, isLastStep }: PersonalInfoStepProps) {
  const [firstName, setFirstName] = useState(initialData?.firstName || "");
  const [lastName, setLastName] = useState(initialData?.lastName || "");
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { firstName?: string; lastName?: string } = {};
    
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onNext({ 
      firstName: firstName.trim(), 
      lastName: lastName.trim() 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (errors.firstName) {
                setErrors(prev => ({ ...prev, firstName: undefined }));
              }
            }}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (errors.lastName) {
                setErrors(prev => ({ ...prev, lastName: undefined }));
              }
            }}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>
      
      <Button type="submit" className="w-full">
        {isLastStep ? "Complete Setup" : "Continue"}
      </Button>
    </form>
  );
}