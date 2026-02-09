import { useState } from "react";
import { 
  Bell, Search, Users, FileText, ClipboardList, BarChart3,
  Plus, Eye, TrendingUp, TrendingDown, Calendar, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FacultyAssignments } from "@/components/faculty/FacultyAssignments";
import { FacultyTests } from "@/components/faculty/FacultyTests";
import { StudentAnalytics } from "@/components/faculty/StudentAnalytics";
import { FacultyProfile } from "@/components/faculty/FacultyProfile";

interface FacultyDashboardProps {
  onNavigate?: (tab: string) => void;
}

const quickStats = [
  { label: "Total Students", value: "156", icon: Users, color: "primary", trend: "+12" },
  { label: "Assignments", value: "24", icon: ClipboardList, color: "accent", trend: "+3" },
  { label: "Mock Tests", value: "18", icon: FileText, color: "success", trend: "+5" },
  { label: "Avg Performance", value: "74%", icon: BarChart3, color: "warning", trend: "+2%" },
];

const subjectsHandled = [
  { name: "Data Structures & Algorithms", code: "CS301", students: 62, section: "A" },
  { name: "Operating Systems", code: "CS302", students: 58, section: "B" },
  { name: "Database Management", code: "CS303", students: 64, section: "A" },
];

const recentActivity = [
  { action: "Assignment submitted", detail: "DSA Problem Set 5 — 48/62 submitted", time: "2h ago", icon: ClipboardList },
  { action: "Test completed", detail: "OS Mid-term Mock — Avg: 72%", time: "5h ago", icon: FileText },
  { action: "New student enrolled", detail: "3 new students in CS301", time: "1d ago", icon: Users },
];

export function FacultyDashboard({ onNavigate }: FacultyDashboardProps) {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="gradient-primary px-5 md:px-8 pt-12 pb-8 md:pb-10 rounded-b-3xl md:rounded-b-[3rem]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-primary-foreground/80 text-sm md:text-base">Good Morning 👋</p>
              <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Dr. Priya Sharma</h1>
              <p className="text-primary-foreground/70 text-xs md:text-sm mt-1">Associate Professor • CSE Department</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 md:p-3 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 hover:scale-105 transition-all">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </button>
              <button className="p-2.5 md:p-3 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 hover:scale-105 transition-all relative">
                <Bell className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-warning rounded-full animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-5 md:px-8 -mt-4 max-w-5xl mx-auto">
        {/* Tab Navigation */}
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="w-full grid grid-cols-4 h-12 mb-6 bg-card shadow-card rounded-2xl p-1">
            <TabsTrigger value="dashboard" className="rounded-xl text-xs md:text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">Dashboard</TabsTrigger>
            <TabsTrigger value="assignments" className="rounded-xl text-xs md:text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">Assignments</TabsTrigger>
            <TabsTrigger value="tests" className="rounded-xl text-xs md:text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">Tests</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-xl text-xs md:text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-4 md:p-5 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${
                        stat.color === "primary" ? "bg-primary/10" :
                        stat.color === "accent" ? "bg-accent/10" :
                        stat.color === "success" ? "bg-success/10" :
                        "bg-warning/10"
                      } group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${
                          stat.color === "primary" ? "text-primary" :
                          stat.color === "accent" ? "text-accent" :
                          stat.color === "success" ? "text-success" :
                          "text-warning"
                        }`} />
                      </div>
                      <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                        {stat.trend}
                      </span>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button 
                  onClick={() => setActiveSection("assignments")}
                  className="h-12 md:h-14 gradient-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Create Assignment
                </Button>
                <Button 
                  onClick={() => setActiveSection("tests")}
                  className="h-12 md:h-14 gradient-accent text-accent-foreground rounded-xl hover:opacity-90 transition-opacity gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Create Mock Test
                </Button>
                <Button 
                  onClick={() => setActiveSection("analytics")}
                  variant="outline"
                  className="h-12 md:h-14 rounded-xl gap-2 hover:bg-muted/50"
                >
                  <Eye className="w-5 h-5" />
                  View Performance
                </Button>
              </div>
            </div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Subjects Handled */}
              <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Subjects Handled</h3>
                <div className="space-y-3">
                  {subjectsHandled.map((subject, index) => (
                    <div key={index} className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm md:text-base font-medium text-foreground truncate group-hover:text-primary transition-colors">{subject.name}</p>
                        <p className="text-xs text-muted-foreground">{subject.code} • Section {subject.section}</p>
                      </div>
                      <div className="text-right ml-3">
                        <p className="text-sm font-semibold text-foreground">{subject.students}</p>
                        <p className="text-[10px] text-muted-foreground">students</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors">
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground truncate">{activity.detail}</p>
                        </div>
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">{activity.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="animate-fade-in">
            <FacultyAssignments />
          </TabsContent>

          {/* Tests Tab */}
          <TabsContent value="tests" className="animate-fade-in">
            <FacultyTests />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="animate-fade-in">
            <StudentAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
