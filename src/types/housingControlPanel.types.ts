export type AreaItemType = {
  id: number;
  name: string;
  media: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
};

export type QueueItemType = {
  id: number;
  user_id: number;
  queue_id: number;
  queue: BestQueueType;
  createdAt: string;
  updatedAt: string;
};

export type housingControlType = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  previous: number | null;
  next: number | null;
  count: number;
  queueImageUrl: string;
  rows: QueueItemType[];
};

export type HousingControlCountDetailsType = {
  inactiveQueues: number;
  totalJoinedQueues: number;
  activeQueues: number;
  bestRank: number;
  bestQueue: BestQueueType;
  landlords: number;
};

export type HousingControlPaginationData = {
  isPaginate: boolean;
  currentPage?: number;
  pageSize?: number;
  search: string;
};

export type BestQueueType = {
  id: number;
  area_id: number;
  title: string;
  description: string;
  image: string;
  status: boolean;
  area: AreaItemType;
  createdAt: string;
  updatedAt: string;
};
