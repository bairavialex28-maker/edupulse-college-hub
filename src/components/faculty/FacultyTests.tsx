import { useState } from "react";
import { Plus, Clock, Users, CheckCircle2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface MockTest {
  id: string;
  title: string;
  subject: string;
  questions: number;
  duration: number;
  marks: number;
  avgScore: number;
  attempts: number;
  total: number;
  status: "live" | "completed" | "draft";
}

const mockTests: MockTest[] = [
  { id: "1", title: "DSA Mid-Semester Mock", subject: "Data Structures", questions: 30, duration: 60, marks: 50, avgScore: 36, attempts: 58, total: 62, status: "completed" },
  { id: "2", title: "OS Unit 3 Quiz", subject: "Operating Systems", questions: 20, duration: 30, marks: 25, avgScore: 0, attempts: 12, total: 58, status: "live" },
  { id: "3", title: "DBMS Normalization Test", subject: "Database Management", questions: 25, duration: 45, marks: 40, avgScore: 0, attempts: 0, total: 64, status: "draft" },
];

export function FacultyTests() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-lg md:text-xl font-bold text-foreground">Mock Test Management</h2>
        <Button onClick={() => setShowCreate(!showCreate)} className="gradient-accent text-accent-foreground rounded-xl gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" />
          New Mock Test
        </Button>
      </div>

      {showCreate && (
        <div className="bg-card rounded-2xl p-5 md:p-6 shadow-card animate-slide-up border border-border">
          <h3 className="font-semibold text-foreground mb-4">Create MCQ Test</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Test Title</label>
              <Input placeholder="Enter test title" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
              <Input placeholder="Select subject" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Number of Questions</label>
              <Input type="number" placeholder="30" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Duration (minutes)</label>
              <Input type="number" placeholder="60" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Total Marks</label>
              <Input type="number" placeholder="50" className="rounded-xl" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">* Auto-evaluation enabled for MCQ format</p>
          <div className="flex gap-3 mt-4">
            <Button className="gradient-accent text-accent-foreground rounded-xl hover:opacity-90">Create Test</Button>
            <Button variant="outline" className="rounded-xl" onClick={() => setShowCreate(false)}>Cancel</Button>
          </div>
        </div>
      )}

      <div className="grid gap-3 md:gap-4">
        {mockTests.map((test) => (
          <div key={test.id} className="bg-card rounded-2xl p-4 md:p-5 shadow-card hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground text-sm md:text-base truncate">{test.title}</h4>
                  <Badge className={`border-0 text-xs ${
                    test.status === "live" ? "bg-success/10 text-success" :
                    test.status === "completed" ? "bg-primary/10 text-primary" :
                    "bg-warning/10 text-warning"
                  }`}>
                    {test.status === "live" ? "Live" : test.status === "completed" ? "Completed" : "Draft"}
                  </Badge>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{test.subject}</p>
              </div>

              <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{test.questions} Qs</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{test.duration} min</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="w-3.5 h-3.5" />
                  <span>{test.attempts}/{test.total}</span>
                </div>
                {test.status === "completed" && (
                  <div className="flex items-center gap-1.5 text-primary font-medium">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Avg: {test.avgScore}/{test.marks}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
