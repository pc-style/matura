import React from 'react';
import Link from 'next/link';
import questions from '../../matura_2025_links.json';
import Layout from '@/components/Layout';
import { Question } from '@/types';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Matura Ustna - j. polski
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg animate-slide-up">
          Practice Questions and Study Materials
        </p>
        
        <div className="grid gap-6">
          {Object.entries(questions).map(([id, question]: [string, Question], index) => (
            <Link
              key={id}
              href={`/note/${id}`}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {question.text}
                  </h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                    Click to view detailed notes and solutions
                  </p>
                </div>
                <div className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
} 