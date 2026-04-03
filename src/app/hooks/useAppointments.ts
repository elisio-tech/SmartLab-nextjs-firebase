import { useEffect, useState } from "react";
import { Appointment } from "../types/appointments";
import {
  createAppointment,
  deleteAppointment,
  getAppointments,
  updateAppointment,
} from "../service/appointments-service";

export function useGetAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { appointments, loading, reload: load };
}

export function useCreateAppointment(reload: () => void) {
  async function create(data: Omit<Appointment, "id" | "createdAt">) {
    await createAppointment(data);

    if (reload) {
      reload();
    }
  }

  return { create };
}

export function useUpdateAppointment(reload: () => void) {
  async function update(id: string, data: Partial<Appointment>) {
    await updateAppointment(id, data);
    reload();
  }

  return { update };
}

export function useDeleteAppointment(reload: () => void) {
  async function remove(id: string) {
    await deleteAppointment(id);
    reload();
  }

  return { remove };
}
