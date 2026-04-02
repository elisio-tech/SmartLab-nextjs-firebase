import { createPatient } from "../service/pacientesService";
import { Patient } from "../types/patient";

export function useCreatePatient(reload?: () => void) {
    async function create(data: Omit<Patient, "id" | "createdAt">) {
        await createPatient(data);

        if (reload) {
            reload(); 
        }
    }

    return { create };
}