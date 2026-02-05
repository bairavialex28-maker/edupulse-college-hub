import { useState } from "react";
import { GraduationCap, User, Users, ArrowRight, Eye, EyeOff, Sparkles, BookOpen, BrainCircuit, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginProps {
  onLogin: () => void;
}

const features = [
  { icon: BookOpen, label: "Attendance" },
  { icon: Sparkles, label: "Mock Tests" },
  { icon: BrainCircuit, label: "AI Tutor" },
  { icon: Briefcase, label: "Placements" },
];

export function Login({ onLogin }: LoginProps) {
  const [userType, setUserType] = useState<"student" | "faculty">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [collegeCode, setCollegeCode] = useState("");
  const [registerId, setRegisterId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Hero Section */}
      <div className="gradient-hero px-6 md:px-8 pt-16 md:pt-20 pb-12 md:pb-16 rounded-b-[2.5rem] md:rounded-b-[3rem] lg:rounded-none lg:rounded-r-[3rem] relative overflow-hidden lg:w-1/2 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-primary-foreground/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 lg:max-w-lg lg:mx-auto">
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 animate-float">
            <GraduationCap className="w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 text-primary-foreground" />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2 md:mb-3">
            EduPulse
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg lg:text-xl max-w-md">
            Smart College Management & Learning
          </p>
          
          {/* Desktop Features */}
          <div className="hidden lg:grid grid-cols-2 gap-4 mt-12">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i}
                  className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 hover:bg-primary-foreground/15 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground font-medium">{feature.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 px-6 md:px-8 py-8 md:py-12 -mt-4 lg:mt-0 lg:flex lg:items-center lg:justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card hover:shadow-xl transition-shadow duration-300 animate-slide-up">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">Welcome Back!</h2>
            
            {/* User Type Toggle */}
            <div className="flex gap-2 p-1.5 bg-muted rounded-xl md:rounded-2xl mb-6 md:mb-8">
              <button
                onClick={() => setUserType("student")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-medium transition-all ${
                  userType === "student"
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="w-4 h-4 md:w-5 md:h-5" />
                Student
              </button>
              <button
                onClick={() => setUserType("faculty")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-medium transition-all ${
                  userType === "faculty"
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                Faculty
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 md:space-y-5">
              <div>
                <label className="text-sm md:text-base font-medium text-foreground mb-2 block">
                  College Code
                </label>
                <Input
                  placeholder="Enter college code (e.g., ABC123)"
                  value={collegeCode}
                  onChange={(e) => setCollegeCode(e.target.value)}
                  className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-muted border-0 focus-visible:ring-2 focus-visible:ring-primary text-base"
                />
              </div>
              
              <div>
                <label className="text-sm md:text-base font-medium text-foreground mb-2 block">
                  {userType === "student" ? "Register Number" : "Employee ID"}
                </label>
                <Input
                  placeholder={userType === "student" ? "Enter register number" : "Enter employee ID"}
                  value={registerId}
                  onChange={(e) => setRegisterId(e.target.value)}
                  className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-muted border-0 focus-visible:ring-2 focus-visible:ring-primary text-base"
                />
              </div>
              
              <div>
                <label className="text-sm md:text-base font-medium text-foreground mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-muted border-0 pr-12 focus-visible:ring-2 focus-visible:ring-primary text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="text-sm md:text-base text-primary font-medium hover:text-primary/80 transition-colors">
                Forgot Password?
              </button>
            </div>

            <Button 
              className="w-full h-12 md:h-14 mt-6 gradient-primary text-primary-foreground rounded-xl md:rounded-2xl shadow-glow text-base md:text-lg font-semibold hover:opacity-90 hover:scale-[1.02] transition-all"
              onClick={onLogin}
            >
              Sign In
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </Button>

            <p className="text-center text-sm md:text-base text-muted-foreground mt-6">
              Don't have an account?{" "}
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                Contact Admin
              </button>
            </p>
          </div>
          
          {/* Mobile Features Preview */}
          <div className="mt-8 animate-slide-up lg:hidden" style={{ animationDelay: "0.2s" }}>
            <p className="text-xs md:text-sm text-muted-foreground text-center mb-3">
              Everything you need in one place
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={i}
                    className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-card rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs md:text-sm font-medium text-foreground">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
