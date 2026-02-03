import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: "pending" | "submitted" | "overdue";
}

interface AssignmentCardProps {
  assignments: Assignment[];
}

const statusConfig = {
  pending: {
    icon: Clock,
    label: "Pending",
    className: "bg-warning/10 text-warning",
  },
  submitted: {
    icon: CheckCircle2,
    label: "Submitted",
    className: "bg-success/10 text-success",
  },
  overdue: {
    icon: AlertCircle,
    label: "Overdue",
    className: "bg-destructive/10 text-destructive",
  },
};

export function AssignmentCard({ assignments }: AssignmentCardProps) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-card animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Assignments</h3>
        <span className="text-xs text-muted-foreground">
          {assignments.filter(a => a.status === "pending").length} pending
        </span>
      </div>
      
      <div className="space-y-3">
        {assignments.slice(0, 3).map((assignment) => {
          const status = statusConfig[assignment.status];
          const StatusIcon = status.icon;
          
          return (
            <div 
              key={assignment.id}
              className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
            >
              <div className={`p-2 rounded-lg ${status.className}`}>
                <StatusIcon className="w-4 h-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">
                  {assignment.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {assignment.subject} • Due {assignment.dueDate}
                </p>
              </div>
              
              <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${status.className}`}>
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 text-sm text-primary font-medium hover:underline">
        View all assignments →
      </button>
    </div>
  );
}
