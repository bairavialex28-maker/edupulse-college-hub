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
    <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          <h3 className="font-semibold text-foreground text-base md:text-lg">Upcoming</h3>
        </div>
        <button className="p-2 md:p-2.5 rounded-full hover:bg-muted transition-colors group">
          <Bell className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-2 md:gap-3">
        {events.slice(0, 4).map((event) => (
          <div 
            key={event.id}
            className={`pl-3 md:pl-4 py-2.5 md:py-3 border-l-2 ${typeColors[event.type]} bg-muted/30 rounded-r-lg md:rounded-r-xl hover:bg-muted/50 transition-colors cursor-pointer`}
          >
            <p className="font-medium text-sm md:text-base text-foreground">{event.title}</p>
            <p className="text-xs md:text-sm text-muted-foreground">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
