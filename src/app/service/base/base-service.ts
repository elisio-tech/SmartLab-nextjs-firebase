import {
  CollectionReference,
  DocumentData,
  Timestamp,
} from "firebase/firestore";

export interface BaseEntity {
  id?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export abstract class BaseService<T extends BaseEntity> {
  protected abstract collectionName: string;
  protected abstract collectionRef: CollectionReference<DocumentData>;

  protected handleError(error: unknown, operation: string): never {
    console.log(`Error in ${operation}`, error);

    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";

    
  }
}
