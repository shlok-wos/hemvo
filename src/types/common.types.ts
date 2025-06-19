

type Question = {
   question: string;
   answer: string;
   id: string;
}

// Interface for the main object structure
export type PageContent = {
   type: string;
   description: string;
   slug: string;
   id: string;
   questions: Question[];
}

export type FaqDataTypes = {
   title?: string;
   pageContent?: PageContent[];
   description?: string;
}