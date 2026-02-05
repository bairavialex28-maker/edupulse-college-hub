import { useState } from "react";
import { ArrowLeft, Clock, CheckCircle2, Play, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const subjects = [
  { id: "dsa", name: "Data Structures", questions: 30, time: 45, completed: 12, total: 20 },
  { id: "os", name: "Operating Systems", questions: 25, time: 40, completed: 8, total: 15 },
  { id: "dbms", name: "Database Systems", questions: 25, time: 35, completed: 10, total: 15 },
  { id: "cn", name: "Computer Networks", questions: 20, time: 30, completed: 5, total: 12 },
];

const recentScores = [
  { subject: "DSA", score: 85, date: "Jan 30" },
  { subject: "OS", score: 72, date: "Jan 28" },
  { subject: "DBMS", score: 90, date: "Jan 25" },
];

export function MockTests() {
  const [activeTest, setActiveTest] = useState<string | null>(null);

  if (activeTest) {
    return <TestInterface subject={activeTest} onBack={() => setActiveTest(null)} />;
  }

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="gradient-primary px-5 md:px-8 pt-12 pb-6 md:pb-8 rounded-b-3xl md:rounded-b-[3rem]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground mb-2">Mock Tests</h1>
          <p className="text-primary-foreground/80 text-sm md:text-base">Practice and improve your scores</p>
        </div>
      </header>

      <div className="px-5 md:px-8 -mt-4 space-y-4 md:space-y-6 max-w-5xl mx-auto">
        {/* Stats Card */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto gradient-primary rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-glow">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-4xl font-bold text-foreground">82%</p>
              <p className="text-xs md:text-sm text-muted-foreground">Avg Score</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto gradient-accent rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-4xl font-bold text-foreground">35</p>
              <p className="text-xs md:text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto gradient-success rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-4xl font-bold text-foreground">5</p>
              <p className="text-xs md:text-sm text-muted-foreground">This Week</p>
            </div>
          </div>
        </div>

        {/* Recent Scores */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">Recent Scores</h3>
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3">
            {recentScores.map((score, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-muted/50 rounded-xl md:rounded-2xl p-3 md:p-4 min-w-[100px] md:min-w-0 hover:bg-muted transition-colors cursor-pointer group"
              >
                <p className="text-xs md:text-sm text-muted-foreground">{score.date}</p>
                <p className="font-semibold text-foreground text-base md:text-lg">{score.subject}</p>
                <p className={`text-lg md:text-2xl font-bold ${score.score >= 80 ? 'text-success' : score.score >= 60 ? 'text-warning' : 'text-destructive'}`}>
                  {score.score}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Tests */}
        <div>
          <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">Subject-wise Tests</h3>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {subjects.map((subject) => (
              <div 
                key={subject.id}
                className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-base md:text-lg">{subject.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {subject.questions} questions • {subject.time} mins
                    </p>
                  </div>
                  <Button 
                    size="sm"
                    className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                    onClick={() => setActiveTest(subject.id)}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Start
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 h-2 md:h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full gradient-primary rounded-full transition-all duration-700"
                      style={{ width: `${(subject.completed / subject.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {subject.completed}/{subject.total}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestInterface({ subject, onBack }: { subject: string; onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  const questions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
    },
    {
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: 1,
    },
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="bg-card border-b border-border px-5 md:px-8 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
            <span className="font-mono font-semibold text-destructive text-base md:text-lg">{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        {/* Progress */}
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full gradient-primary rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question */}
      <div className="px-5 md:px-8 py-6 max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-card mb-6">
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
            {questions[currentQuestion].question}
          </p>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`w-full p-4 md:p-5 rounded-xl md:rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${
                selectedAnswer === index
                  ? "border-primary bg-primary/5 shadow-glow"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-medium text-sm md:text-base ${
                  selectedAnswer === index
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-foreground text-base md:text-lg">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 px-5 md:px-8 pb-4 md:pb-8 bg-gradient-to-t from-background via-background to-transparent pt-8">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            className="flex-1 h-12 md:h-14 text-base hover:bg-muted transition-colors"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
          >
            Previous
          </Button>
          <Button 
            className="flex-1 h-12 md:h-14 text-base gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            onClick={() => {
              if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
              }
            }}
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
