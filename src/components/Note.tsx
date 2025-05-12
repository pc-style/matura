import React from 'react';
import ReactMarkdown from 'react-markdown';

interface NoteProps {
  content: string;
}

export default function Note({ content }: NoteProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in transition-colors duration-300">
      <div className="prose dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:text-blue-600 dark:prose-headings:text-blue-400">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
} 