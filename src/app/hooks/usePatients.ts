import { useEffect, useState } from "react";
import {
  createPatient,
  deletePatient,
  getPatients,
  updatePatient,
} from "../service/pacientesService";
import { Patient } from "../types/patient";

export function useGetPatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const data = await getPatients();
      setPatients(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { patients, loading, reload: load };
}

export function useCreatePatient(reload?: () => void) {
  async function create(data: Omit<Patient, "id" | "createdAt">) {
    await createPatient(data);

    if (reload) {
      reload();
    }
  }

  return { create };
}

export function useUpdatePatient(reload?: () => void) {
  async function update(id: string, data: Partial<Patient>) {
    await updatePatient(id, data);
    reload?.();
  }
  return { update };
}

export function useDeletePatient(reload?: () => void) {
  async function remove(id: string) {
    await deletePatient(id);
    reload?.();
  }
  return { remove };
}
