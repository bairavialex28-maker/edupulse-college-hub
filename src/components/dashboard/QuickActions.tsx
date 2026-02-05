import { FileText, Briefcase, Bot, BookOpen } from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
}

const actions = [
  { id: "tests", label: "Mock Test", icon: FileText, gradient: "gradient-primary" },
  { id: "placements", label: "Placement", icon: Briefcase, gradient: "gradient-accent" },
  { id: "ai", label: "AI Assistant", icon: Bot, gradient: "gradient-success" },
  { id: "study", label: "Study", icon: BookOpen, gradient: "gradient-primary" },
];

export function QuickActions({ onAction }: QuickActionsProps) {
  return (
    <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300 animate-slide-up h-full" style={{ animationDelay: "0.1s" }}>
      <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Quick Actions</h3>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => onAction(action.id)}
              className="flex flex-col items-center gap-2 md:gap-3 group"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${action.gradient} flex items-center justify-center shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-200 group-active:scale-95`}>
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
