export type AreaType = {
  id: number;
  value: number;
  label: string;
};

export type QueueItemType = {
  id: number;
  area_id: number;
  title: string;
  description: string;
  image: string;
  status: boolean;
  joined: boolean;
  createdAt: string;
  updatedAt: string;
};

export type QueueRowsType = {
  list: QueueItemType[];
  mediaUrl: string;
};

export type QueueType = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  previous: number | null;
  next: number | null;
  count: number;
  rows: QueueRowsType;
};

export type QueueDataType = {
  daysPassed: number;
  yourAreas: number;
  points: number;
  activeQueues: number;
  areas: AreaType[];
  queue: QueueType;
  chartData: {
    months: string[];
    forecastPoints: number[];
    gainedPoints: number[];
  };
};

export type QueuePaginationData = {
  areaId?: number | "";
  isPaginate: boolean;
  currentPage?: number;
  pageSize?: number;
};

export type QueueDetailType = {
  url: string;
  area_id: number;
  title: string;
  description: string;
  image: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
};
