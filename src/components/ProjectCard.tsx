import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  progress: number;
}

const difficultyColors = {
  beginner: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20',
  intermediate: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20',
  advanced: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20',
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  difficulty,
  duration,
  progress,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completedProjects = JSON.parse(localStorage.getItem('completedProjects') || '{}');
    setIsCompleted(!!completedProjects[id]);
  }, [id]);

  return (
    <Link to={`/project/${id}`} className="block">
      <Card className={`p-6 h-full animate-fade-in hover:scale-[1.02] transition-transform bg-card border-border ${isCompleted ? 'bg-green-50 dark:bg-green-900/10' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Badge className={`${difficultyColors[difficulty]} border-none`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Badge>
            {isCompleted && (
              <Badge className="bg-green-100 text-green-700 border-none">
                <CheckCircle className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            )}
          </div>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <h3 className="mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-300 ease-in-out ${isCompleted ? 'bg-green-500' : 'bg-primary'}`}
            style={{ width: isCompleted ? '100%' : `${progress}%` }} 
          />
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;