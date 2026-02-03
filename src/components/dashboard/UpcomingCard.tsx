import { Calendar, Bell } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  type: "exam" | "deadline" | "event";
}

interface UpcomingCardProps {
  events: Event[];
}

const typeColors = {
  exam: "border-l-destructive",
  deadline: "border-l-warning",
  event: "border-l-primary",
};

export function UpcomingCard({ events }: UpcomingCardProps) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-card animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Upcoming</h3>
        </div>
        <button className="p-2 rounded-full hover:bg-muted transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      
      <div className="space-y-2">
        {events.slice(0, 4).map((event) => (
          <div 
            key={event.id}
            className={`pl-3 py-2 border-l-2 ${typeColors[event.type]} bg-muted/30 rounded-r-lg`}
          >
            <p className="font-medium text-sm text-foreground">{event.title}</p>
            <p className="text-xs text-muted-foreground">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
