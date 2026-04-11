import { BaseService } from "../base/base-service";
import { collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { MedicalRecord } from "@/types/medicalRecord";

export class MedicalRecordService extends BaseService<MedicalRecord> {
  protected collectionName = "medicalRecords";
  protected collectionRef = collection(db, "medicalRecords");
}
