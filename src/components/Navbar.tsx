import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface NavbarProps {
    onSearch?: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(searchQuery);
    };

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 h-16">
                <div className="flex items-center justify-between h-full gap-4">
                    {/* Left - Brand */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            React Projects
                        </h1>
                    </div>

                    {/* Center - Search */}
                    <div className="flex-1 max-w-2xl">
                        <form onSubmit={handleSearch} className="relative">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                <Input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 h-10 bg-background border-muted-foreground/20 focus:border-primary dark:bg-muted/40 dark:hover:bg-muted/60 dark:focus:bg-muted/80 transition-colors focus-visible:ring-primary"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Right - Theme Toggle */}
                    <div className="flex-shrink-0">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;