"use client"
import { useEffect, useState } from "react";
import { Patient } from "../types/patient";
import { getPatients } from "../service/pacientesService";

export function usePatients() {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(()=> {
        async function load() {
            const data = await getPatients();
            setPatients(data);
        }
        load();
    }, []);

    console.log(patients)
    return patients;
}