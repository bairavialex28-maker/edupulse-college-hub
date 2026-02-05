import { useState } from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { MockTests } from "./MockTests";
import { AIAssistant } from "./AIAssistant";
import { Placements } from "./Placements";
import { Profile } from "./Profile";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Sidebar } from "@/components/layout/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const isMobile = useIsMobile();

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Dashboard onNavigate={setActiveTab} />;
      case "tests":
        return <MockTests />;
      case "ai":
        return <AIAssistant />;
      case "placements":
        return <Placements />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
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
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
};

export default Index;
