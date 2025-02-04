import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  progress: number;
}

const difficultyColors = {
  beginner: 'badge-beginner',
  intermediate: 'badge-intermediate',
  advanced: 'badge-advanced',
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  difficulty,
  duration,
  progress,
}) => {
  return (
    <Link to={`/project/${id}`} className="block">
      <Card className="card p-6 h-full animate-fade-in hover:scale-[1.02] transition-transform">
        <div className="flex justify-between items-start mb-4">
          <Badge className={difficultyColors[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;