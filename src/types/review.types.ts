export type reviewListTypes = {
  id?: number;
  title?: string;
  description?: string;
  ratings?: number;
  review_by?: string;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type reviewTypes = {
  count?: number;
  currentPage?: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
  next?: number;
  previous?: number;
  rows?: any;
  totalItems?: any;
  totalPages?: number;
  averageRating: number;
};
