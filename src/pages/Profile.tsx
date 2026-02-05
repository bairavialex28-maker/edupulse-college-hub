import { 
  User, Mail, Phone, GraduationCap, Building2,
  Bell, Shield, LogOut, ChevronRight, Edit2,
  Award, BookOpen, Target, Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="gradient-primary px-5 pt-12 pb-24 md:pb-32 rounded-b-3xl md:rounded-b-[3rem] relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-primary-foreground">Profile</h1>
        </div>
      </header>

      {/* Profile Card */}
      <div className="px-5 -mt-16 md:-mt-24 max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card hover:shadow-xl transition-shadow duration-300">
          {/* Profile Header - Responsive Grid */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            {/* Avatar Section */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative group">
                <Avatar className="w-20 h-20 md:w-28 md:h-28 border-4 border-background shadow-lg">
                  <AvatarImage src="" alt="Arjun Kumar" />
                  <AvatarFallback className="gradient-hero text-primary-foreground text-2xl md:text-3xl font-bold">
                    AK
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </button>
              </div>
              
              {/* User Info */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Arjun Kumar</h2>
                <p className="text-sm md:text-base text-muted-foreground">20CS101</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-full">
                    B.Tech CSE
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs md:text-sm font-medium rounded-full">
                    IV Year
                  </span>
                </div>
              </div>
            </div>
            
            {/* Edit Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                variant="outline" 
                className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6 pt-6 border-t border-border">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-3 md:p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <p className="text-lg md:text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
          
          {/* Edit Button - Mobile */}
          <div className="md:hidden mt-4">
            <Button 
              variant="outline" 
              className="w-full gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Content Grid - Responsive */}
      <div className="px-5 mt-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Academic Info */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-foreground mb-4 md:mb-6 text-base md:text-lg">Academic Information</h3>
            
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "arjun.kumar@abc.edu.in" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: GraduationCap, label: "Department", value: "Computer Science & Engineering" },
                { icon: Building2, label: "College", value: "ABC Engineering College" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-sm md:text-base font-medium text-foreground truncate">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-card hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-foreground mb-4 md:mb-6 text-base md:text-lg">Settings</h3>
            
            <div className="space-y-3">
              {settingsItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center justify-between py-3 px-2 md:px-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-foreground">{item.label}</span>
                    </div>
                    {item.type === "toggle" ? (
                      <Switch defaultChecked={item.value} />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Logout */}
            <div className="mt-6 pt-6 border-t border-border">
              <Button 
                variant="outline" 
                className="w-full h-12 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
