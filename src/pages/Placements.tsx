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
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="gradient-accent px-5 md:px-8 pt-12 pb-6 md:pb-8 rounded-b-3xl md:rounded-b-[3rem]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground mb-2">Placement Prep</h1>
          <p className="text-primary-foreground/80 text-sm md:text-base">Ace your interviews with targeted practice</p>
          
          {/* Stats */}
          <div className="flex gap-4 mt-4 md:mt-6">
            <div className="flex-1 bg-primary-foreground/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-primary-foreground/15 transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                <span className="text-primary-foreground/80 text-xs md:text-sm">Readiness</span>
              </div>
              <p className="text-2xl md:text-4xl font-bold text-primary-foreground mt-1">72%</p>
            </div>
            <div className="flex-1 bg-primary-foreground/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-primary-foreground/15 transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                <span className="text-primary-foreground/80 text-xs md:text-sm">Problems</span>
              </div>
              <p className="text-2xl md:text-4xl font-bold text-primary-foreground mt-1">156</p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-5 md:px-8 -mt-4 max-w-5xl mx-auto">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Upcoming Drives */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground text-base md:text-lg">Upcoming Drives</h3>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                View all
              </Button>
            </div>
            
            <div className="space-y-3">
              {upcomingDrives.map((drive, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-xl md:rounded-2xl hover:bg-muted transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 gradient-primary rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-base md:text-lg">{drive.company}</p>
                    <p className="text-xs md:text-sm text-muted-foreground truncate">{drive.role} • {drive.date}</p>
                  </div>
                  <span className={`text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full flex-shrink-0 ${
                    drive.status === "registered" 
                      ? "bg-success/10 text-success" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {drive.status === "registered" ? (
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> Registered
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" /> Upcoming
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <h3 className="font-semibold text-foreground text-base md:text-lg">Your Progress</h3>
            </div>
            
            <div className="space-y-4 md:space-y-5">
              {categories.map((cat) => (
                <div key={cat.id} className="group cursor-pointer">
                  <div className="flex justify-between text-sm md:text-base mb-1.5">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{cat.name}</span>
                    <span className="font-medium text-foreground">{cat.progress}%</span>
                  </div>
                  <div className="h-2 md:h-3 bg-muted rounded-full overflow-hidden">
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
        </div>

        {/* Categories */}
        <div className="mt-4 md:mt-6">
          <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">Practice by Category</h3>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all hover:scale-105 ${
                    isActive 
                      ? "gradient-primary shadow-glow" 
                      : "bg-card shadow-card hover:shadow-xl"
                  }`}
                >
                  <Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${
                    isActive ? "text-primary-foreground" : "text-primary"
                  }`} />
                  <p className={`text-xs md:text-sm font-medium ${
                    isActive ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {cat.name}
                  </p>
                  <p className={`text-[10px] md:text-xs mt-1 ${
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {cat.progress}% done
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Company-specific Prep */}
        <div className="mt-4 md:mt-6">
          <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">Company Preparation</h3>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {companies.map((company) => (
              <div 
                key={company.id}
                className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-card hover:shadow-xl transition-all duration-300 flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="font-bold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">{company.logo}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-base md:text-lg">{company.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {company.tests} practice tests • {company.difficulty}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
