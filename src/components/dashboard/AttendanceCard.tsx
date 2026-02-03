import { CalendarCheck } from "lucide-react";

interface AttendanceCardProps {
  percentage: number;
  present: number;
  total: number;
}

export function AttendanceCard({ percentage, present, total }: AttendanceCardProps) {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="bg-card rounded-2xl p-5 shadow-card animate-slide-up">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#attendanceGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="attendanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{percentage}%</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <CalendarCheck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Attendance</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            {present} of {total} classes attended
          </p>
          <p className={`text-xs font-medium ${percentage >= 75 ? 'text-success' : 'text-warning'}`}>
            {percentage >= 75 ? '✓ On track' : '⚠ Needs improvement'}
          </p>
        </div>
      </div>
    </div>
  );
}
