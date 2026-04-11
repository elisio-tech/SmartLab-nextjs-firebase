import { collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BaseService } from "@/service/base/base-service";
import { MedicalRecord } from "@/types/medicalRecord";

class MedicalRecordService extends BaseService<MedicalRecord> {
  protected collectionName = "records";
  protected collectionRef = collection(db, "records");
}

export const medicalRecordService = new MedicalRecordService();
