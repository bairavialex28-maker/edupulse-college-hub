import { 
  User, Mail, Phone, GraduationCap, Building2,
  Bell, Shield, LogOut, ChevronRight, Edit2,
  Award, BookOpen, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const stats = [
  { icon: Award, label: "Tests Taken", value: "47" },
  { icon: BookOpen, label: "Hours Studied", value: "126" },
  { icon: Target, label: "Accuracy", value: "82%" },
];

const settingsItems = [
  { icon: Bell, label: "Notifications", type: "toggle", value: true },
  { icon: Shield, label: "Privacy Settings", type: "link" },
];

export function Profile() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-primary px-5 pt-12 pb-20 rounded-b-3xl relative">
        <h1 className="text-xl font-bold text-primary-foreground">Profile</h1>
      </header>

      {/* Profile Card */}
      <div className="px-5 -mt-14">
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-card border-2 border-border rounded-full flex items-center justify-center shadow-sm">
                <Edit2 className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">Arjun Kumar</h2>
              <p className="text-sm text-muted-foreground">20CS101</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  B.Tech CSE
                </span>
                <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  IV Year
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-border">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 mt-4 space-y-4">
        {/* Academic Info */}
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <h3 className="font-semibold text-foreground mb-4">Academic Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">arjun.kumar@abc.edu.in</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Department</p>
                <p className="text-sm font-medium text-foreground">Computer Science & Engineering</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">College</p>
                <p className="text-sm font-medium text-foreground">ABC Engineering College</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <h3 className="font-semibold text-foreground mb-4">Settings</h3>
          
          <div className="space-y-3">
            {settingsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  {item.type === "toggle" ? (
                    <Switch defaultChecked={item.value} />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Logout */}
        <Button 
          variant="outline" 
          className="w-full h-12 border-destructive text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
