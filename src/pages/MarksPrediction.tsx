import { useState } from "react";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Info, Users, BarChart3 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// --- Prediction Logic ---
function predictMarks(mockAvg: number, assignmentAvg: number, attendance: number): number {
  // Weighted: Mock 50%, Assignment 30%, Attendance 20% — out of 50
  return Math.round((mockAvg * 0.5 + assignmentAvg * 0.3 + attendance * 0.2) * 0.5);
}

function getRisk(predicted: number): "safe" | "warning" | "danger" {
  if (predicted >= 35) return "safe";
  if (predicted >= 25) return "warning";
  return "danger";
}

function getRange(predicted: number): string {
  const low = Math.max(0, predicted - 2);
  const high = Math.min(50, predicted + 2);
  return `${low}–${high}`;
}

// --- Student Data ---
const studentSubjects = [
  { name: "Data Structures", mockAvg: 82, assignmentAvg: 88, attendance: 78 },
  { name: "Operating Systems", mockAvg: 68, assignmentAvg: 72, attendance: 75 },
  { name: "Database Systems", mockAvg: 90, assignmentAvg: 85, attendance: 92 },
  { name: "Computer Networks", mockAvg: 55, assignmentAvg: 60, attendance: 65 },
];

// --- Faculty Class Data ---
const facultyStudents = [
  { name: "Arjun Kumar", regNo: "20CS101", mockAvg: 82, assignmentAvg: 88, attendance: 78 },
  { name: "Sneha Rajan", regNo: "20CS102", mockAvg: 90, assignmentAvg: 92, attendance: 95 },
  { name: "Vikram Singh", regNo: "20CS103", mockAvg: 75, assignmentAvg: 70, attendance: 80 },
  { name: "Rahul Verma", regNo: "20CS115", mockAvg: 45, assignmentAvg: 50, attendance: 55 },
  { name: "Deepa Nair", regNo: "20CS108", mockAvg: 52, assignmentAvg: 60, attendance: 62 },
  { name: "Karthik S", regNo: "20CS112", mockAvg: 58, assignmentAvg: 55, attendance: 70 },
  { name: "Meena L", regNo: "20CS118", mockAvg: 55, assignmentAvg: 65, attendance: 68 },
  { name: "Pradeep R", regNo: "20CS120", mockAvg: 88, assignmentAvg: 80, attendance: 90 },
];

export function MarksPrediction() {
  const [view, setView] = useState("student");

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="gradient-hero px-5 md:px-8 pt-12 pb-8 md:pb-10 rounded-b-3xl md:rounded-b-[3rem]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Internal Marks Prediction</h1>
          <p className="text-primary-foreground/70 text-xs md:text-sm mt-1">AI-powered prediction based on your performance metrics</p>
        </div>
      </header>

      <div className="px-5 md:px-8 -mt-4 max-w-5xl mx-auto">
        <Tabs value={view} onValueChange={setView} className="w-full">
          <TabsList className="w-full grid grid-cols-2 h-12 mb-6 bg-card shadow-card rounded-2xl p-1">
            <TabsTrigger value="student" className="rounded-xl text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">Student View</TabsTrigger>
            <TabsTrigger value="faculty" className="rounded-xl text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">Faculty View</TabsTrigger>
          </TabsList>

          {/* ===== STUDENT VIEW ===== */}
          <TabsContent value="student" className="space-y-4 animate-fade-in">
            {/* Prediction Formula Info */}
            <div className="bg-card rounded-2xl p-4 md:p-5 shadow-card flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">How it works</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Predicted = (Mock Tests × 50% + Assignments × 30% + Attendance × 20%) scaled to 50 marks
                </p>
              </div>
            </div>

            {/* Subject Cards */}
            <div className="grid gap-3 md:gap-4 md:grid-cols-2">
              {studentSubjects.map((sub, i) => {
                const predicted = predictMarks(sub.mockAvg, sub.assignmentAvg, sub.attendance);
                const risk = getRisk(predicted);
                const range = getRange(predicted);

                return (
                  <div key={i} className="bg-card rounded-2xl p-5 md:p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground text-sm md:text-base">{sub.name}</h3>
                      <Badge className={`border-0 text-xs ${
                        risk === "safe" ? "bg-success/10 text-success" :
                        risk === "warning" ? "bg-warning/10 text-warning" :
                        "bg-destructive/10 text-destructive"
                      }`}>
                        {risk === "safe" ? "Safe" : risk === "warning" ? "Needs Improvement" : "At Risk"}
                      </Badge>
                    </div>

                    {/* Predicted Score */}
                    <div className="text-center py-4 mb-4 bg-muted/30 rounded-xl">
                      <p className="text-3xl md:text-4xl font-bold text-foreground">{predicted}<span className="text-lg text-muted-foreground">/50</span></p>
                      <p className="text-xs text-muted-foreground mt-1">Expected range: {range}</p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3">
                      {[
                        { label: "Mock Test Avg", value: sub.mockAvg, weight: "50%" },
                        { label: "Assignment Avg", value: sub.assignmentAvg, weight: "30%" },
                        { label: "Attendance", value: sub.attendance, weight: "20%" },
                      ].map((metric, j) => (
                        <div key={j}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">{metric.label} ({metric.weight})</span>
                            <span className="font-medium text-foreground">{metric.value}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-700 ${
                                metric.value >= 75 ? "gradient-success" :
                                metric.value >= 50 ? "gradient-primary" :
                                "bg-destructive"
                              }`}
                              style={{ width: `${metric.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Suggestions */}
                    {risk !== "safe" && (
                      <div className={`mt-4 p-3 rounded-xl text-xs ${
                        risk === "warning" ? "bg-warning/5 text-warning" : "bg-destructive/5 text-destructive"
                      }`}>
                        <p className="font-medium mb-1">💡 Improvement Tips:</p>
                        <ul className="space-y-0.5 list-disc list-inside">
                          {sub.mockAvg < 70 && <li>Focus on mock test practice</li>}
                          {sub.assignmentAvg < 70 && <li>Complete assignments on time</li>}
                          {sub.attendance < 75 && <li>Improve class attendance</li>}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* ===== FACULTY VIEW ===== */}
          <TabsContent value="faculty" className="space-y-4 animate-fade-in">
            {/* Class Summary */}
            {(() => {
              const predictions = facultyStudents.map(s => predictMarks(s.mockAvg, s.assignmentAvg, s.attendance));
              const avg = Math.round(predictions.reduce((a, b) => a + b, 0) / predictions.length);
              const atRisk = predictions.filter(p => getRisk(p) === "danger").length;
              const needsImprovement = predictions.filter(p => getRisk(p) === "warning").length;

              return (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { label: "Class Avg Predicted", value: `${avg}/50`, icon: BarChart3, color: "primary" },
                    { label: "Students At Risk", value: atRisk.toString(), icon: AlertTriangle, color: "destructive" },
                    { label: "Needs Improvement", value: needsImprovement.toString(), icon: TrendingDown, color: "warning" },
                    { label: "Total Students", value: facultyStudents.length.toString(), icon: Users, color: "accent" },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="bg-card rounded-2xl p-4 md:p-5 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                          stat.color === "primary" ? "bg-primary/10" :
                          stat.color === "destructive" ? "bg-destructive/10" :
                          stat.color === "warning" ? "bg-warning/10" :
                          "bg-accent/10"
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            stat.color === "primary" ? "text-primary" :
                            stat.color === "destructive" ? "text-destructive" :
                            stat.color === "warning" ? "text-warning" :
                            "text-accent"
                          }`} />
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Student List */}
            <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Student Predictions — Data Structures</h3>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Student</th>
                      <th className="text-center py-3 px-2 text-muted-foreground font-medium">Mock Avg</th>
                      <th className="text-center py-3 px-2 text-muted-foreground font-medium">Assignment</th>
                      <th className="text-center py-3 px-2 text-muted-foreground font-medium">Attendance</th>
                      <th className="text-center py-3 px-2 text-muted-foreground font-medium">Predicted</th>
                      <th className="text-center py-3 px-2 text-muted-foreground font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facultyStudents.map((student, i) => {
                      const predicted = predictMarks(student.mockAvg, student.assignmentAvg, student.attendance);
                      const risk = getRisk(predicted);
                      return (
                        <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                          <td className="py-3 px-2">
                            <p className="font-medium text-foreground">{student.name}</p>
                            <p className="text-xs text-muted-foreground">{student.regNo}</p>
                          </td>
                          <td className="text-center py-3 px-2 text-foreground">{student.mockAvg}%</td>
                          <td className="text-center py-3 px-2 text-foreground">{student.assignmentAvg}%</td>
                          <td className="text-center py-3 px-2 text-foreground">{student.attendance}%</td>
                          <td className="text-center py-3 px-2 font-bold text-foreground">{predicted}/50</td>
                          <td className="text-center py-3 px-2">
                            <Badge className={`border-0 text-xs ${
                              risk === "safe" ? "bg-success/10 text-success" :
                              risk === "warning" ? "bg-warning/10 text-warning" :
                              "bg-destructive/10 text-destructive"
                            }`}>
                              {risk === "safe" ? "Safe" : risk === "warning" ? "Warning" : "At Risk"}
                            </Badge>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {facultyStudents.map((student, i) => {
                  const predicted = predictMarks(student.mockAvg, student.assignmentAvg, student.attendance);
                  const risk = getRisk(predicted);
                  return (
                    <div key={i} className="p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium text-foreground">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.regNo}</p>
                        </div>
                        <Badge className={`border-0 text-xs ${
                          risk === "safe" ? "bg-success/10 text-success" :
                          risk === "warning" ? "bg-warning/10 text-warning" :
                          "bg-destructive/10 text-destructive"
                        }`}>
                          {risk === "safe" ? "Safe" : risk === "warning" ? "Warning" : "At Risk"}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div>
                          <p className="text-xs text-muted-foreground">Mock</p>
                          <p className="text-sm font-semibold text-foreground">{student.mockAvg}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Assign</p>
                          <p className="text-sm font-semibold text-foreground">{student.assignmentAvg}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Attend</p>
                          <p className="text-sm font-semibold text-foreground">{student.attendance}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Predicted</p>
                          <p className="text-sm font-bold text-primary">{predicted}/50</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
