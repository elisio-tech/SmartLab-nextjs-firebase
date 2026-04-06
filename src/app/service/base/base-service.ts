import { db } from "@/app/lib/firebase";
import {
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDocs,
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

    throw new Error(`[Firestore ${operation}] ${message}`);
  }

  async getAll(): Promise<T[]> {
    try {
      const snapshot = await getDocs(this.collectionRef);
      return snapshot.docs.map(this.mapDocumentToEntity);
    } catch (error) {
      return this.handleError(error, "getAll");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      this.handleError(error, "delete");
    }
  }

  private mapDocumentToEntity(doc: DocumentSnapshot<DocumentData>): T {
    return {
      id: doc.id,
      ...(doc.data() as Omit<T, "id">),
    } as T;
  }
}
