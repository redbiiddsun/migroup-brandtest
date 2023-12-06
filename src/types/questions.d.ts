type Question = {
  locale: string;
  type: string;
  title: string;
  description: string;
  progressBarType: string;
  showProgressBar: string;
  showQuestionNumbers: string;
  pages: QuestionPage[];
};

type QuestionPage = {
  name: string;
  title?: string;
  description?: string;
  elements: QuestionElement[];
};

type QuestionElement = {
  type: string;
  name: string;
  title: string;
  displayMode: string;
  description: string;
  autoGenerate: boolean;
  rateCount: number;
  isRequired: boolean;
  rateValues: number[];
};
