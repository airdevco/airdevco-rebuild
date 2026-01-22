import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import { TestErrorBoundary } from "@/components/TestErrorBoundary";

export default function Dashboard() {
  return (
    <div>
      <TestErrorBoundary />
      <ChartAreaInteractive />
    </div>
  );
}