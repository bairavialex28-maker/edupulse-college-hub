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
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-primary px-5 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-xl font-bold text-primary-foreground mb-2">Mock Tests</h1>
        <p className="text-primary-foreground/80 text-sm">Practice and improve your scores</p>
      </header>

      <div className="px-5 -mt-4 space-y-4">
        {/* Stats Card */}
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto gradient-primary rounded-xl flex items-center justify-center mb-2">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold text-foreground">82%</p>
              <p className="text-xs text-muted-foreground">Avg Score</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto gradient-accent rounded-xl flex items-center justify-center mb-2">
                <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold text-foreground">35</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto gradient-success rounded-xl flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold text-foreground">5</p>
              <p className="text-xs text-muted-foreground">This Week</p>
            </div>
          </div>
        </div>

        {/* Recent Scores */}
        <div className="bg-card rounded-2xl p-5 shadow-card">
          <h3 className="font-semibold text-foreground mb-3">Recent Scores</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {recentScores.map((score, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-muted/50 rounded-xl p-3 min-w-[100px]"
              >
                <p className="text-xs text-muted-foreground">{score.date}</p>
                <p className="font-semibold text-foreground">{score.subject}</p>
                <p className={`text-lg font-bold ${score.score >= 80 ? 'text-success' : score.score >= 60 ? 'text-warning' : 'text-destructive'}`}>
                  {score.score}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Tests */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Subject-wise Tests</h3>
          <div className="space-y-3">
            {subjects.map((subject) => (
              <div 
                key={subject.id}
                className="bg-card rounded-2xl p-4 shadow-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{subject.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {subject.questions} questions • {subject.time} mins
                    </p>
                  </div>
                  <Button 
                    size="sm"
                    className="gradient-primary text-primary-foreground shadow-glow"
                    onClick={() => setActiveTest(subject.id)}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Start
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full gradient-primary rounded-full"
                      style={{ width: `${(subject.completed / subject.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
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
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border px-5 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-destructive/10 rounded-full">
            <Clock className="w-4 h-4 text-destructive" />
            <span className="font-mono font-semibold text-destructive">{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        {/* Progress */}
        <div className="mt-4">
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
      <div className="px-5 py-6">
        <div className="bg-card rounded-2xl p-5 shadow-card mb-6">
          <p className="text-lg font-medium text-foreground leading-relaxed">
            {questions[currentQuestion].question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                selectedAnswer === index
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                  selectedAnswer === index
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-foreground">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="fixed bottom-20 left-0 right-0 px-5 pb-4 bg-gradient-to-t from-background via-background to-transparent pt-8">
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
          >
            Previous
          </Button>
          <Button 
            className="flex-1 gradient-primary text-primary-foreground"
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
