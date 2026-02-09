import { TrendingUp, TrendingDown, AlertTriangle, Users, Award, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StudentPerformance {
  name: string;
  regNo: string;
  mockAvg: number;
  assignmentAvg: number;
  attendance: number;
  predicted: number;
  risk: "safe" | "warning" | "danger";
}

const classStats = {
  avgPredicted: 37.2,
  highest: 48,
  lowest: 18,
  atRisk: 8,
  total: 62,
};

const subjectPerformance = [
  { subject: "Data Structures", classAvg: 78, topPerformer: "Arjun K", topScore: 96 },
  { subject: "Operating Systems", classAvg: 72, topPerformer: "Sneha R", topScore: 92 },
  { subject: "Database Management", classAvg: 82, topPerformer: "Vikram S", topScore: 95 },
];

const studentsAtRisk: StudentPerformance[] = [
  { name: "Rahul Verma", regNo: "20CS115", mockAvg: 45, assignmentAvg: 50, attendance: 55, predicted: 24, risk: "danger" },
  { name: "Deepa Nair", regNo: "20CS108", mockAvg: 52, assignmentAvg: 60, attendance: 62, predicted: 28, risk: "danger" },
  { name: "Karthik S", regNo: "20CS112", mockAvg: 58, assignmentAvg: 55, attendance: 70, predicted: 30, risk: "warning" },
  { name: "Meena L", regNo: "20CS118", mockAvg: 55, assignmentAvg: 65, attendance: 68, predicted: 31, risk: "warning" },
];

export function StudentAnalytics() {
  const getRiskBadge = (risk: StudentPerformance["risk"]) => {
    switch (risk) {
      case "danger": return <Badge className="bg-destructive/10 text-destructive border-0 text-xs">At Risk</Badge>;
      case "warning": return <Badge className="bg-warning/10 text-warning border-0 text-xs">Needs Improvement</Badge>;
      default: return <Badge className="bg-success/10 text-success border-0 text-xs">Safe</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-bold text-foreground">Student Performance Analytics</h2>

      {/* Class Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {[
          { label: "Class Avg Predicted", value: `${classStats.avgPredicted}/50`, icon: Target, color: "primary" },
          { label: "Highest Predicted", value: `${classStats.highest}/50`, icon: Award, color: "success" },
          { label: "Students At Risk", value: classStats.atRisk.toString(), icon: AlertTriangle, color: "destructive" },
          { label: "Total Students", value: classStats.total.toString(), icon: Users, color: "accent" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-card rounded-2xl p-4 md:p-5 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                stat.color === "primary" ? "bg-primary/10" :
                stat.color === "success" ? "bg-success/10" :
                stat.color === "destructive" ? "bg-destructive/10" :
                "bg-accent/10"
              }`}>
                <Icon className={`w-5 h-5 ${
                  stat.color === "primary" ? "text-primary" :
                  stat.color === "success" ? "text-success" :
                  stat.color === "destructive" ? "text-destructive" :
                  "text-accent"
                }`} />
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Subject-wise Performance */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Subject-wise Performance</h3>
          <div className="space-y-4">
            {subjectPerformance.map((sub, i) => (
              <div key={i} className="group">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{sub.subject}</span>
                  <span className="font-medium text-foreground">{sub.classAvg}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full gradient-primary rounded-full transition-all duration-700" style={{ width: `${sub.classAvg}%` }} />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">Top: {sub.topPerformer} ({sub.topScore}%)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Students At Risk */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <h3 className="font-semibold text-foreground text-base md:text-lg">Students At Risk</h3>
          </div>
          <div className="space-y-3">
            {studentsAtRisk.map((student, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.regNo} • Predicted: {student.predicted}/50</p>
                </div>
                {getRiskBadge(student.risk)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
