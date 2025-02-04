import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  progress: number;
}

interface DifficultySectionProps {
  title: string;
  description: string;
  projects: Project[];
}

const DifficultySection: React.FC<DifficultySectionProps> = ({
  title,
  description,
  projects,
}) => {
  return (
    <section className="mb-12 animate-slide-up">
      <h2 className="mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default DifficultySection;