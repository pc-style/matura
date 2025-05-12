import React from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeToggle />
      <main className="container mx-auto px-4 py-12 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </div>
  );
} 