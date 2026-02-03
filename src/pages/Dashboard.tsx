import { Bell, Search } from "lucide-react";
import { AttendanceCard } from "@/components/dashboard/AttendanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { MarksCard } from "@/components/dashboard/MarksCard";
import { AssignmentCard } from "@/components/dashboard/AssignmentCard";
import { UpcomingCard } from "@/components/dashboard/UpcomingCard";

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

const mockSubjects = [
  { name: "Data Structures", marks: 42, total: 50 },
  { name: "Operating Systems", marks: 38, total: 50 },
  { name: "Database Systems", marks: 45, total: 50 },
];

const mockAssignments = [
  { id: "1", title: "DSA Problem Set 5", subject: "Data Structures", dueDate: "Feb 5", status: "pending" as const },
  { id: "2", title: "OS Case Study", subject: "Operating Systems", dueDate: "Feb 7", status: "pending" as const },
  { id: "3", title: "ER Diagram Project", subject: "Database Systems", dueDate: "Feb 3", status: "submitted" as const },
];

const mockEvents = [
  { id: "1", title: "Mid-Semester Exam", date: "Feb 15, 2026", type: "exam" as const },
  { id: "2", title: "Project Submission", date: "Feb 10, 2026", type: "deadline" as const },
  { id: "3", title: "Tech Fest", date: "Feb 20, 2026", type: "event" as const },
  { id: "4", title: "Placement Drive", date: "Feb 25, 2026", type: "event" as const },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-primary px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/80 text-sm">Good Morning 👋</p>
            <h1 className="text-xl font-bold text-primary-foreground">Arjun Kumar</h1>
            <p className="text-primary-foreground/70 text-xs mt-1">B.Tech CSE • IV Year</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors">
              <Search className="w-5 h-5 text-primary-foreground" />
            </button>
            <button className="p-2.5 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors relative">
              <Bell className="w-5 h-5 text-primary-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full" />
            </button>
          </div>
        </div>
        
        {/* College Badge */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-sm">ABC</span>
          </div>
          <div>
            <p className="text-primary-foreground font-medium text-sm">ABC Engineering College</p>
            <p className="text-primary-foreground/70 text-xs">Chennai, Tamil Nadu</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-5 -mt-4 space-y-4">
        <AttendanceCard percentage={78} present={62} total={80} />
        <QuickActions onAction={onNavigate} />
        <MarksCard subjects={mockSubjects} average={83} trend="up" />
        <AssignmentCard assignments={mockAssignments} />
        <UpcomingCard events={mockEvents} />
      </div>
    </div>
  );
}
