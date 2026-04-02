"use client";

import { useEffect, useState } from "react";
import { Patient } from "../types/patient";
import { getPatients } from "../service/pacientesService";

export function usePatients() {
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