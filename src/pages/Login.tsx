import { useState } from "react";
import { GraduationCap, User, Users, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [userType, setUserType] = useState<"student" | "faculty">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [collegeCode, setCollegeCode] = useState("");
  const [registerId, setRegisterId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="gradient-hero px-6 pt-16 pb-12 rounded-b-[2.5rem] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 animate-float">
            <GraduationCap className="w-9 h-9 text-primary-foreground" />
          </div>
          
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            EduPulse
          </h1>
          <p className="text-primary-foreground/80 text-base">
            Smart College Management & Learning
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 px-6 py-8 -mt-4">
        <div className="bg-card rounded-2xl p-6 shadow-card animate-slide-up">
          <h2 className="text-xl font-bold text-foreground mb-6">Welcome Back!</h2>
          
          {/* User Type Toggle */}
          <div className="flex gap-2 p-1 bg-muted rounded-xl mb-6">
            <button
              onClick={() => setUserType("student")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                userType === "student"
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-4 h-4" />
              Student
            </button>
            <button
              onClick={() => setUserType("faculty")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                userType === "faculty"
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              Faculty
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                College Code
              </label>
              <Input
                placeholder="Enter college code (e.g., ABC123)"
                value={collegeCode}
                onChange={(e) => setCollegeCode(e.target.value)}
                className="h-12 rounded-xl bg-muted border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                {userType === "student" ? "Register Number" : "Employee ID"}
              </label>
              <Input
                placeholder={userType === "student" ? "Enter register number" : "Enter employee ID"}
                value={registerId}
                onChange={(e) => setRegisterId(e.target.value)}
                className="h-12 rounded-xl bg-muted border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl bg-muted border-0 pr-12 focus-visible:ring-2 focus-visible:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
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

          <Button 
            className="w-full h-12 mt-6 gradient-primary text-primary-foreground rounded-xl shadow-glow text-base font-semibold"
            onClick={onLogin}
          >
            Sign In
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Forgot password?{" "}
            <button className="text-primary font-medium hover:underline">
              Reset here
            </button>
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xs text-muted-foreground text-center mb-3">
            Everything you need in one place
          </p>
          <div className="flex justify-center gap-4">
            {["Attendance", "Mock Tests", "AI Tutor", "Placements"].map((feature, i) => (
              <div 
                key={i}
                className="px-3 py-2 bg-card rounded-lg shadow-sm"
              >
                <span className="text-xs font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
