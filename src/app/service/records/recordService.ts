import { BaseService } from "../base/base-service";
import { collection } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { MedicalRecord } from "@/app/types/medicalRecord";

export class MedicalRecordService extends BaseService<MedicalRecord> {
  protected collectionName = "medicalRecords";
  protected collectionRef = collection(db, "medicalRecords");
}
