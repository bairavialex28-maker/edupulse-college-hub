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
    <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => onAction(action.id)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${action.gradient} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-200 group-active:scale-95`}>
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
