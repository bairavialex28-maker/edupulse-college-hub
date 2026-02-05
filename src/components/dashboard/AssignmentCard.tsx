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
    <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="font-semibold text-foreground text-base md:text-lg">Assignments</h3>
        <span className="text-xs md:text-sm text-muted-foreground px-2 py-1 bg-warning/10 text-warning rounded-full">
          {assignments.filter(a => a.status === "pending").length} pending
        </span>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        {assignments.slice(0, 3).map((assignment) => {
          const status = statusConfig[assignment.status];
          const StatusIcon = status.icon;
          
          return (
            <div 
              key={assignment.id}
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-xl md:rounded-2xl hover:bg-muted transition-all cursor-pointer group hover:scale-[1.02]"
            >
              <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl ${status.className} group-hover:scale-110 transition-transform`}>
                <StatusIcon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm md:text-base text-foreground truncate">
                  {assignment.title}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {assignment.subject} • Due {assignment.dueDate}
                </p>
              </div>
              
              <span className={`text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full ${status.className}`}>
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-5 md:mt-6 text-sm md:text-base text-primary font-medium hover:text-primary/80 transition-colors">
        View all assignments →
      </button>
    </div>
  );
}
