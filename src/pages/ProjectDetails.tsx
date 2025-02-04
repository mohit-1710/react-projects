import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, FileText, Code, AlertCircle, Link as LinkIcon, Play } from 'lucide-react';

interface ProjectStep {
  title: string;
  description: string;
  code?: string;
  pitfalls?: string[];
}

const MOCK_PROJECT_DATA = {
  'todo-app': {
    title: 'Todo App',
    description: 'Build a simple todo application to learn React basics, components, and state management.',
    prerequisites: ['Basic JavaScript', 'HTML & CSS', 'React Fundamentals'],
    duration: '2-3 hours',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    steps: [
      {
        title: 'Setting up the Project',
        description: 'Create a new React project using Vite and install necessary dependencies.',
        code: 'npm create vite@latest my-todo-app -- --template react-ts',
      },
      {
        title: 'Creating the Todo Component',
        description: 'Create a basic component structure for the todo list.',
        code: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // ... implementation
};`,
        pitfalls: [
          'Remember to properly type your state using TypeScript',
          'Ensure unique IDs for each todo item',
        ],
      },
    ],
    repoLink: 'https://github.com/example/todo-app',
    demoLink: 'https://todo-app-demo.example.com',
  },
  // ... other projects would be defined here
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectId ? MOCK_PROJECT_DATA[projectId as keyof typeof MOCK_PROJECT_DATA] : null;

  if (!project) {
    return (
      <div className="container py-12">
        <h1>Project not found</h1>
        <Link to="/" className="text-primary hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <header className="mb-12">
        <h1 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Duration</h3>
            </div>
            <p>{project.duration}</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Prerequisites</h3>
            </div>
            <ul className="list-disc list-inside">
              {project.prerequisites.map((prereq) => (
                <li key={prereq}>{prereq}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Tech Stack</h3>
            </div>
            <ul className="list-disc list-inside">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Card>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-8">
          {project.steps.map((step, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{step.description}</p>
              {step.code && (
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              )}
              {step.pitfalls && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-orange-500 mb-2">
                    <AlertCircle className="h-5 w-5" />
                    <h4 className="font-semibold">Common Pitfalls</h4>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {step.pitfalls.map((pitfall, i) => (
                      <li key={i}>{pitfall}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      <footer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(project.repoLink, '_blank')}
        >
          <LinkIcon className="mr-2 h-4 w-4" />
          View Repository
        </Button>
        <Button
          className="w-full"
          onClick={() => window.open(project.demoLink, '_blank')}
        >
          <Play className="mr-2 h-4 w-4" />
          Live Demo
        </Button>
      </footer>
    </div>
  );
};

export default ProjectDetails;
