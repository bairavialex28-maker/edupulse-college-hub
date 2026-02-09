import { 
  Mail, Phone, GraduationCap, Building2, BookOpen,
  Edit2, Camera, Award, Users, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  { icon: Users, label: "Students", value: "156" },
  { icon: FileText, label: "Tests Created", value: "18" },
  { icon: Award, label: "Experience", value: "12 yrs" },
];

const subjects = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Management Systems",
];

export function FacultyProfile() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <header className="gradient-primary px-5 pt-12 pb-24 md:pb-32 rounded-b-3xl md:rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-primary-foreground">Faculty Profile</h1>
        </div>
      </header>

      <div className="px-5 -mt-16 md:-mt-24 max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative group">
                <Avatar className="w-20 h-20 md:w-28 md:h-28 border-4 border-background shadow-lg">
                  <AvatarImage src="" alt="Dr. Priya Sharma" />
                  <AvatarFallback className="gradient-hero text-primary-foreground text-2xl md:text-3xl font-bold">PS</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Dr. Priya Sharma</h2>
                <p className="text-sm md:text-base text-muted-foreground">Associate Professor</p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-full">CSE Department</span>
              </div>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Edit2 className="w-4 h-4" /> Edit Profile
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6 pt-6 border-t border-border">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-3 md:p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <p className="text-lg md:text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="md:hidden mt-4">
            <Button variant="outline" className="w-full gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <Edit2 className="w-4 h-4" /> Edit Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="px-5 mt-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Contact & Academic Info */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Contact Information</h3>
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "priya.sharma@abc.edu.in" },
              { icon: Phone, label: "Phone", value: "+91 98765 12345" },
              { icon: GraduationCap, label: "Qualification", value: "Ph.D. Computer Science" },
              { icon: Building2, label: "College", value: "ABC Engineering College" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-muted/50 transition-colors group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-sm md:text-base font-medium text-foreground truncate">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subjects Handled */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Subjects Handled</h3>
          <div className="space-y-3">
            {subjects.map((subject, i) => (
              <div key={i} className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm md:text-base font-medium text-foreground">{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
