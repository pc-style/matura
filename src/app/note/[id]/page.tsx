import React from 'react';
import Link from 'next/link';
import { getMarkdownContent } from '@/utils/markdown';
import Note from '@/components/Note';
import Layout from '@/components/Layout';
import questions from '../../../../matura_2025_links.json';
import { Questions } from '@/types';

interface NotePageProps {
  params: {
    id: string;
  };
}

export default function NotePage({ params }: NotePageProps) {
  const content = getMarkdownContent(params.id);
  const question = (questions as Questions)[params.id];

  if (!content || !question) {
    return (
      <Layout>
        <div className="text-center animate-fade-in">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">Note not found</h1>
          <Link href="/" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
            Back to questions
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300 animate-fade-in">
          ← Back to questions
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-8 animate-slide-up bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{question.text}</h1>
        <Note content={content} />
      </div>
    </Layout>
  );
} 