declare type Maybe<T> = T | null;

declare type TPaginatedResponse<T> =
  | {
      success: true;
      page: number;
      total: number;
      data: T[];
    }
  | {
      success: false;
    };
