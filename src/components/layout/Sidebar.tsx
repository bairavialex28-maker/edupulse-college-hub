 import { Home, FileText, Bot, Briefcase, User, GraduationCap } from "lucide-react";
 import { cn } from "@/lib/utils";
 
 interface SidebarProps {
   activeTab: string;
   onTabChange: (tab: string) => void;
 }
 
 const navItems = [
   { id: "home", label: "Dashboard", icon: Home },
   { id: "tests", label: "Mock Tests", icon: FileText },
   { id: "ai", label: "AI Assistant", icon: Bot },
   { id: "placements", label: "Placements", icon: Briefcase },
   { id: "profile", label: "Profile", icon: User },
 ];
 
 export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
   return (
     <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col z-50">
       {/* Logo */}
       <div className="p-6 border-b border-border">
         <div className="flex items-center gap-3">
           <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
             <GraduationCap className="w-6 h-6 text-primary-foreground" />
           </div>
           <div>
             <h1 className="text-xl font-bold text-gradient">EduPulse</h1>
             <p className="text-xs text-muted-foreground">Smart Learning</p>
           </div>
         </div>
       </div>
 
       {/* Navigation */}
       <nav className="flex-1 p-4">
         <ul className="space-y-2">
           {navItems.map((item) => {
             const isActive = activeTab === item.id;
             const Icon = item.icon;
             
             return (
               <li key={item.id}>
                 <button
                   onClick={() => onTabChange(item.id)}
                   className={cn(
                     "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                     "hover:bg-muted/80 group",
                     isActive 
                       ? "gradient-primary text-primary-foreground shadow-glow" 
                       : "text-muted-foreground hover:text-foreground"
                   )}
                 >
                   <Icon className={cn(
                     "w-5 h-5 transition-transform group-hover:scale-110",
                     isActive && "text-primary-foreground"
                   )} />
                   <span className="font-medium">{item.label}</span>
                 </button>
               </li>
             );
           })}
         </ul>
       </nav>
 
       {/* Footer */}
       <div className="p-4 border-t border-border">
         <div className="bg-muted/50 rounded-xl p-4">
           <p className="text-xs text-muted-foreground mb-2">Current Semester</p>
           <p className="font-semibold text-foreground">VII Semester</p>
           <p className="text-xs text-muted-foreground">B.Tech CSE • 2022-2026</p>
         </div>
       </div>
     </aside>
   );
 }