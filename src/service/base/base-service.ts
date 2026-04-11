import { db } from "@/lib/firebase";
import {
  addDoc,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  serverTimestamp,
  Timestamp,
  updateDoc,
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
      return snapshot.docs.map((doc) => this.mapDocumentToEntity(doc));
    } catch (error) {
      return this.handleError(error, "getAll");
    }
  }

  async getByID(id: string): Promise<T | null> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const snapshot = await getDoc(docRef);

      if (!snapshot.exists()) return null;

      return this.mapDocumentToEntity(snapshot);
    } catch (error) {
      return this.handleError(error, "getByID");
    }
  }

  async create(data: Omit<T, "id" | "createdAt">): Promise<string> {
    try {
      const docRef = await addDoc(this.collectionRef, {
        ...data,
        createdAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (error) {
      this.handleError(error, "create");
    }
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      this.handleError(error, "update");
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
