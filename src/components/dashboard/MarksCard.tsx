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
    <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="font-semibold text-foreground text-base md:text-lg">Internal Marks</h3>
        <div className={`flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium ${
          trend === "up" 
            ? "bg-success/10 text-success" 
            : "bg-warning/10 text-warning"
        }`}>
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
          ) : (
            <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />
          )}
          <span>{average}% avg</span>
        </div>
      </div>
      
      <div className="space-y-4 md:space-y-5">
        {subjects.slice(0, 3).map((subject, index) => {
          const percentage = (subject.marks / subject.total) * 100;
          return (
            <div key={index} className="group cursor-pointer">
              <div className="flex justify-between text-sm md:text-base mb-1.5">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate mr-2">{subject.name}</span>
                <span className="font-medium text-foreground">{subject.marks}<span className="text-muted-foreground">/{subject.total}</span></span>
              </div>
              <div className="h-2 md:h-2.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-primary rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-5 md:mt-6 text-sm md:text-base text-primary font-medium hover:text-primary/80 transition-colors">
        View all subjects →
      </button>
    </div>
  );
}
