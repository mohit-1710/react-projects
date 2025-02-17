import React from 'react';
import DifficultySection from '@/components/DifficultySection';
import { ThemeToggle } from '@/components/ThemeToggle';
import ProgressTracker from '@/components/ProgressTracker';
import Navbar from '@/components/Navbar';

const PROJECTS_DATA = {
  beginner: [
    {
      id: 'todo-app',
      title: 'Todo App',
      description: 'Build a simple todo application to learn React basics, components, and state management.',
      difficulty: 'beginner' as const,
      duration: '2-3 hours',
      progress: 0,
    },
    {
      id: 'counter-app',
      title: 'Counter App',
      description: 'Create a counter application to understand React state and events.',
      difficulty: 'beginner' as const,
      duration: '1-2 hours',
      progress: 0,
    },
    {
      id: 'weather-widget',
      title: 'Weather Widget',
      description: 'Build a weather widget to learn about props and basic API integration.',
      difficulty: 'beginner' as const,
      duration: '2-3 hours',
      progress: 0,
    },
  ],
  intermediate: [
    {
      id: 'shopping-cart',
      title: 'Shopping Cart',
      description: 'Create a shopping cart to learn about complex state management and context.',
      difficulty: 'intermediate' as const,
      duration: '4-5 hours',
      progress: 0,
    },
    {
      id: 'movie-search',
      title: 'Movie Search',
      description: 'Build a movie search app to master API integration and custom hooks.',
      difficulty: 'intermediate' as const,
      duration: '3-4 hours',
      progress: 0,
    },
    {
      id: 'task-manager',
      title: 'Task Manager',
      description: 'Develop a task manager to understand CRUD operations and data persistence.',
      difficulty: 'intermediate' as const,
      duration: '5-6 hours',
      progress: 0,
    },
  ],
  advanced: [
    {
      id: 'social-media-dashboard',
      title: 'Social Media Dashboard',
      description: 'Create a social media dashboard with real-time updates and complex data visualization.',
      difficulty: 'advanced' as const,
      duration: '8-10 hours',
      progress: 0,
    },
    {
      id: 'code-editor',
      title: 'Code Editor',
      description: 'Build a code editor with syntax highlighting and file system integration.',
      difficulty: 'advanced' as const,
      duration: '10-12 hours',
      progress: 0,
    },
    {
      id: 'video-chat',
      title: 'Video Chat App',
      description: 'Develop a video chat application using WebRTC and socket connections.',
      difficulty: 'advanced' as const,
      duration: '12-15 hours',
      progress: 0,
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar onSearch={(query) => {
        // Implement search functionality here
        console.log('Searching for:', query);
      }} />
      
      <main className="container py-12">
        {/* Progress Section */}
        <section className="mb-12">
          <ProgressTracker
            progress={33}
            completed={1}
            total={3}
            level="Beginner"
          />
        </section>

        {/* Projects Sections */}
        <div className="space-y-20">
          <DifficultySection
            title="Beginner Projects"
            description="Start your React journey with these fundamental projects."
            projects={PROJECTS_DATA.beginner}
          />
          <DifficultySection
            title="Intermediate Projects"
            description="Level up your React skills with more complex applications."
            projects={PROJECTS_DATA.intermediate}
          />
          <DifficultySection
            title="Advanced Projects"
            projects={PROJECTS_DATA.advanced}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;