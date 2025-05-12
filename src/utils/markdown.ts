import fs from 'fs';
import path from 'path';

export function getMarkdownContent(id: string): string {
  const filePath = path.join(process.cwd(), 'notes', `${id}.md`);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading markdown file ${id}:`, error);
    return '';
  }
} 