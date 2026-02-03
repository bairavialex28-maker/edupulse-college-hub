import { useState } from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { MockTests } from "./MockTests";
import { AIAssistant } from "./AIAssistant";
import { Placements } from "./Placements";
import { Profile } from "./Profile";
import { BottomNav } from "@/components/ui/bottom-nav";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

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
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
