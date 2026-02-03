import { TrendingUp, TrendingDown } from "lucide-react";

interface Subject {
  name: string;
  marks: number;
  total: number;
}

interface MarksCardProps {
  subjects: Subject[];
  average: number;
  trend: "up" | "down";
}

export function MarksCard({ subjects, average, trend }: MarksCardProps) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Internal Marks</h3>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          trend === "up" 
            ? "bg-success/10 text-success" 
            : "bg-warning/10 text-warning"
        }`}>
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{average}% avg</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {subjects.slice(0, 3).map((subject, index) => {
          const percentage = (subject.marks / subject.total) * 100;
          return (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground truncate mr-2">{subject.name}</span>
                <span className="font-medium text-foreground">{subject.marks}/{subject.total}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-primary rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 text-sm text-primary font-medium hover:underline">
        View all subjects →
      </button>
    </div>
  );
}
