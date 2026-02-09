import { useState } from "react";
import { Plus, Edit2, Trash2, CheckCircle2, Clock, AlertCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Assignment {
  id: string;
  title: string;
  subject: string;
  section: string;
  dueDate: string;
  submitted: number;
  total: number;
  status: "active" | "closed" | "draft";
}

const mockAssignments: Assignment[] = [
  { id: "1", title: "DSA Problem Set 5", subject: "Data Structures", section: "A", dueDate: "Feb 10, 2026", submitted: 48, total: 62, status: "active" },
  { id: "2", title: "OS Process Scheduling Report", subject: "Operating Systems", section: "B", dueDate: "Feb 12, 2026", submitted: 30, total: 58, status: "active" },
  { id: "3", title: "ER Diagram Design", subject: "Database Management", section: "A", dueDate: "Feb 5, 2026", submitted: 64, total: 64, status: "closed" },
  { id: "4", title: "Binary Tree Implementation", subject: "Data Structures", section: "A", dueDate: "Feb 15, 2026", submitted: 0, total: 62, status: "draft" },
];

export function FacultyAssignments() {
  const [showCreate, setShowCreate] = useState(false);

  const getStatusBadge = (status: Assignment["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success/10 text-success border-0 text-xs">Active</Badge>;
      case "closed":
        return <Badge className="bg-muted text-muted-foreground border-0 text-xs">Closed</Badge>;
      case "draft":
        return <Badge className="bg-warning/10 text-warning border-0 text-xs">Draft</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-lg md:text-xl font-bold text-foreground">Assignment Management</h2>
        <Button onClick={() => setShowCreate(!showCreate)} className="gradient-primary text-primary-foreground rounded-xl gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" />
          New Assignment
        </Button>
      </div>

      {/* Create Form */}
      {showCreate && (
        <div className="bg-card rounded-2xl p-5 md:p-6 shadow-card animate-slide-up border border-border">
          <h3 className="font-semibold text-foreground mb-4">Create New Assignment</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Title</label>
              <Input placeholder="Assignment title" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
              <Input placeholder="Select subject" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Section</label>
              <Input placeholder="Class / Section" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Due Date</label>
              <Input type="date" className="rounded-xl" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button className="gradient-primary text-primary-foreground rounded-xl hover:opacity-90">Create</Button>
            <Button variant="outline" className="rounded-xl" onClick={() => setShowCreate(false)}>Cancel</Button>
          </div>
        </div>
      )}

      {/* Assignment Cards */}
      <div className="grid gap-3 md:gap-4">
        {mockAssignments.map((assignment) => {
          const progress = assignment.total > 0 ? (assignment.submitted / assignment.total) * 100 : 0;
          return (
            <div key={assignment.id} className="bg-card rounded-2xl p-4 md:p-5 shadow-card hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground text-sm md:text-base truncate">{assignment.title}</h4>
                    {getStatusBadge(assignment.status)}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{assignment.subject} • Section {assignment.section}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{assignment.submitted}/{assignment.total}</p>
                    <p className="text-[10px] text-muted-foreground">submitted</p>
                  </div>
                  <div className="w-20 md:w-24">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <Edit2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors">
                      <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
