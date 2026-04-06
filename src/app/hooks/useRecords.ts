import { useEffect, useState } from "react";
import { MedicalRecord } from "../types/medicalRecord";
import { medicalRecordService } from "../service/tests/medicalRecords_tests";

export function useRecords() {
  const [records, setRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    async function load() {
      const data = await medicalRecordService.getAll();
      setRecords(data);
    }

    load();
  }, []);

  return { records };
}
