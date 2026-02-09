import { Home, FileText, Bot, Briefcase, User, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userRole?: "student" | "faculty";
}

const studentNav = [
  { id: "home", label: "Home", icon: Home },
  { id: "tests", label: "Tests", icon: FileText },
  { id: "ai", label: "AI", icon: Bot },
  { id: "prediction", label: "Predict", icon: BarChart3 },
  { id: "profile", label: "Profile", icon: User },
];

const facultyNav = [
  { id: "home", label: "Home", icon: Home },
  { id: "prediction", label: "Predict", icon: BarChart3 },
  { id: "profile", label: "Profile", icon: User },
];

export function BottomNav({ activeTab, onTabChange, userRole = "student" }: BottomNavProps) {
  const navItems = userRole === "faculty" ? facultyNav : studentNav;
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border safe-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "p-2 rounded-xl transition-all duration-200",
                isActive && "gradient-primary shadow-glow"
              )}>
                <Icon 
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive && "text-primary-foreground"
                  )} 
                />
              </div>
              <span className={cn(
                "text-[10px] font-medium",
                isActive && "text-primary"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
