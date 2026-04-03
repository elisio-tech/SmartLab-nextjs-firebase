import { useEffect, useState } from "react";
import { MedicalRecord } from "../types/medicalRecord";
import {
  createRecord,
  deleteRecord,
  getRecords,
  updateRecord,
} from "../service/medicalRecord-service";

export function useGetRecords() {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const data = await getRecords();
      setRecords(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { records, loading, reload: load };
}

export function useCreateRecords(reload: () => void) {
  async function create(data: Omit<MedicalRecord, "id" | "createdAt">) {
    await createRecord(data);

    if (reload) {
      reload();
    }
  }

  return { create };
}

export function useUpdateRecords(reload: () => void) {
  async function update(id: string, data: Partial<MedicalRecord>) {
    await updateRecord(id, data);
    reload();
  }

  return { update };
}

export function useDeleteRecords(reload: () => void) {
  async function remove(id: string) {
    await deleteRecord(id);
    reload();
  }

  return { remove };
}
