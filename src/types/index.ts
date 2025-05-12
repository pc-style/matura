export interface Question {
  text: string;
  href: string;
  // Add any other properties that exist in your questions data
}

export interface Questions {
  [key: string]: Question;
} 