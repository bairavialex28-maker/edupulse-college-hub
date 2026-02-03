import { useState } from "react";
import { 
  Building2, Code, Calculator, MessageSquare, 
  TrendingUp, Award, Target, ChevronRight,
  CheckCircle2, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "aptitude", name: "Aptitude", icon: Calculator, progress: 65, total: 50 },
  { id: "coding", name: "Coding", icon: Code, progress: 45, total: 100 },
  { id: "verbal", name: "Verbal", icon: MessageSquare, progress: 80, total: 40 },
];

const companies = [
  { id: "1", name: "TCS", logo: "TCS", tests: 5, difficulty: "Medium" },
  { id: "2", name: "Infosys", logo: "INF", tests: 4, difficulty: "Medium" },
  { id: "3", name: "Wipro", logo: "WIP", tests: 3, difficulty: "Easy" },
  { id: "4", name: "Cognizant", logo: "CTS", tests: 4, difficulty: "Medium" },
];

const upcomingDrives = [
  { company: "TCS", date: "Feb 15, 2026", role: "Software Engineer", status: "registered" },
  { company: "Infosys", date: "Feb 20, 2026", role: "System Engineer", status: "upcoming" },
];

export function Placements() {
  const [activeCategory, setActiveCategory] = useState("aptitude");

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-accent px-5 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-xl font-bold text-primary-foreground mb-2">Placement Prep</h1>
        <p className="text-primary-foreground/80 text-sm">Ace your interviews with targeted practice</p>
        
        {/* Stats */}
        <div className="flex gap-4 mt-4">
          <div className="flex-1 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground/80 text-xs">Readiness</span>
            </div>
            <p className="text-2xl font-bold text-primary-foreground mt-1">72%</p>
          </div>
          <div className="flex-1 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground/80 text-xs">Problems</span>
            </div>
            <p className="text-2xl font-bold text-primary-foreground mt-1">156</p>
          </div>
        </div>
      </header>

      <div className="px-5 -mt-4 space-y-4">
        {/* Upcoming Drives */}
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Upcoming Drives</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View all
            </Button>
          </div>
          
          <div className="space-y-3">
            {upcomingDrives.map((drive, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl"
              >
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{drive.company}</p>
                  <p className="text-xs text-muted-foreground">{drive.role} • {drive.date}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  drive.status === "registered" 
                    ? "bg-success/10 text-success" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {drive.status === "registered" ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Registered
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Upcoming
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Practice by Category</h3>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-4 rounded-2xl transition-all ${
                    isActive 
                      ? "gradient-primary shadow-glow" 
                      : "bg-card shadow-card"
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${
                    isActive ? "text-primary-foreground" : "text-primary"
                  }`} />
                  <p className={`text-xs font-medium ${
                    isActive ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {cat.name}
                  </p>
                  <p className={`text-[10px] mt-1 ${
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {cat.progress}% done
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Your Progress</h3>
          </div>
          
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{cat.name}</span>
                  <span className="font-medium text-foreground">{cat.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 ${
                      cat.id === "aptitude" ? "gradient-primary" :
                      cat.id === "coding" ? "gradient-accent" :
                      "gradient-success"
                    }`}
                    style={{ width: `${cat.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company-specific Prep */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Company Preparation</h3>
          <div className="space-y-3">
            {companies.map((company) => (
              <div 
                key={company.id}
                className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <span className="font-bold text-foreground text-sm">{company.logo}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{company.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {company.tests} practice tests • {company.difficulty}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
