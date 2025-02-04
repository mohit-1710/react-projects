import { BarChart, Book, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface ProgressTrackerProps {
  progress: number;
  completed: number;
  total: number;
  level: string;
}

const ProgressTracker = ({
  progress = 33,
  completed = 1,
  total = 3,
  level = "Beginner",
}: ProgressTrackerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Progress Card */}
      <Card className="bg-slate-900 border-slate-800 shadow-lg">
        <CardContent className="pt-6 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-cyan-500/10">
            <BarChart className="w-6 h-6 text-cyan-500" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Progress</p>
            <p className="text-2xl font-bold text-slate-50">{progress}%</p>
          </div>
        </CardContent>
      </Card>

      {/* Completed Card */}
      <Card className="bg-slate-900 border-slate-800 shadow-lg">
        <CardContent className="pt-6 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Book className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Completed</p>
            <p className="text-2xl font-bold text-slate-50">{completed} / {total}</p>
          </div>
        </CardContent>
      </Card>

      {/* Next Level Card */}
      <Card className="bg-slate-900 border-slate-800 shadow-lg">
        <CardContent className="pt-6 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <Trophy className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Next Level</p>
            <p className="text-2xl font-bold text-slate-50">{level}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker;