import { BarChart, Book, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface ProgressTrackerProps {
  progress: number;
  completed: number;
  total: number;
  level: string;
}

const levelRequirements = {
  'Beginner': { next: 'Intermediate', required: 3 },
  'Intermediate': { next: 'Advanced', required: 6 },
  'Advanced': { next: 'Expert', required: 9 },
  'Expert': { next: null, required: null },
};

const ProgressTracker = ({
  progress = 33,
  completed = 1,
  total = 3,
  level = "Beginner",
}: ProgressTrackerProps) => {
  const nextLevel = levelRequirements[level as keyof typeof levelRequirements];
  const remainingForNextLevel = nextLevel?.required ? nextLevel.required - completed : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Progress Card */}
      <Card className="bg-card border-border shadow-lg">
        <CardContent className="pt-6 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-cyan-500/10">
            <BarChart className="w-6 h-6 text-cyan-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Progress</p>
            <p className="text-2xl font-bold text-foreground">{progress}%</p>
          </div>
        </CardContent>
      </Card>

      {/* Completed Card */}
      <Card className="bg-card border-border shadow-lg">
        <CardContent className="pt-6 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Book className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold text-foreground">{completed} / {total}</p>
          </div>
        </CardContent>
      </Card>

      {/* Next Level Card */}
      <Card className="bg-card border-border shadow-lg">
        <CardContent className="pt-6 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <Trophy className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Next Level</p>
            {nextLevel?.next ? (
              <div>
                <p className="text-2xl font-bold text-foreground">{nextLevel.next}</p>
                <p className="text-sm text-muted-foreground">
                  {remainingForNextLevel} more {remainingForNextLevel === 1 ? 'project' : 'projects'} to go
                </p>
              </div>
            ) : (
              <p className="text-2xl font-bold text-foreground">Max Level!</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker;