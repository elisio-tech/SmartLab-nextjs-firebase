import { collection } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { BaseService } from "@/app/service/base/base-service";
import { MedicalRecord } from "@/app/types/medicalRecord";

class MedicalRecordService extends BaseService<MedicalRecord> {
  protected collectionName = "records";
  protected collectionRef = collection(db, "records");
}

export const medicalRecordService = new MedicalRecordService();
