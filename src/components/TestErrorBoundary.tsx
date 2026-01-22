import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function TestErrorBoundary() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Test error: This is a simulated error to test the Error Boundary!');
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Error Boundary Test</h2>
      <Button 
        onClick={() => setShouldError(true)}
        variant="destructive"
      >
        Trigger Error
      </Button>
    </div>
  );
}