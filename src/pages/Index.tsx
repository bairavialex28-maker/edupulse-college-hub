import { useState } from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { MockTests } from "./MockTests";
import { AIAssistant } from "./AIAssistant";
import { Placements } from "./Placements";
import { Profile } from "./Profile";
import { FacultyDashboard } from "./FacultyDashboard";
import { FacultyProfile } from "@/components/faculty/FacultyProfile";
import { MarksPrediction } from "./MarksPrediction";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Sidebar } from "@/components/layout/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [userRole, setUserRole] = useState<"student" | "faculty">("student");
  const isMobile = useIsMobile();

  if (!isLoggedIn) {
    return <Login onLogin={(role?: string) => {
      setUserRole(role === "faculty" ? "faculty" : "student");
      setActiveTab("home");
      setIsLoggedIn(true);
    }} />;
  }

  const renderContent = () => {
    if (userRole === "faculty") {
      switch (activeTab) {
        case "home": return <FacultyDashboard onNavigate={setActiveTab} />;
        case "prediction": return <MarksPrediction />;
        case "profile": return <FacultyProfile />;
        default: return <FacultyDashboard onNavigate={setActiveTab} />;
      }
    }
    switch (activeTab) {
      case "home": return <Dashboard onNavigate={setActiveTab} />;
      case "tests": return <MockTests />;
      case "ai": return <AIAssistant />;
      case "placements": return <Placements />;
      case "prediction": return <MarksPrediction />;
      case "profile": return <Profile />;
      default: return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
      {/* Desktop Sidebar */}
        {!isMobile && (
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} userRole={userRole} />
        )}
        
        {/* Main Content */}
        <main className={`flex-1 ${!isMobile ? 'ml-64' : ''}`}>
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
      
      {/* Mobile Bottom Nav */}
      {isMobile && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} userRole={userRole} />
      )}
    </div>
  );
};

export default Index;
