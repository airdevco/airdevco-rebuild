import { DataTable } from "@/components/dashboard/data-table";
import type { z } from "zod";
import { schema } from "@/components/dashboard/data-table";

// Sample team data
const teamData: z.infer<typeof schema>[] = [
  {
    id: 1,
    header: "Engineering Team",
    type: "Department",
    status: "Active",
    target: "50",
    limit: "60",
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    header: "Product Design",
    type: "Department",
    status: "Active",
    target: "20",
    limit: "25",
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 3,
    header: "Marketing",
    type: "Department",
    status: "In Progress",
    target: "15",
    limit: "20",
    reviewer: "Assign reviewer",
  },
  {
    id: 4,
    header: "Sales Team",
    type: "Department",
    status: "Active",
    target: "30",
    limit: "35",
    reviewer: "Eddie Lake",
  },
  {
    id: 5,
    header: "Customer Success",
    type: "Department",
    status: "Done",
    target: "25",
    limit: "30",
    reviewer: "Jamik Tashpulatov",
  },
];

export default function Team() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-muted-foreground">Manage your team members and departments</p>
      </div>
      <DataTable data={teamData} />
    </div>
  );
}