"use server";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { CreateDancerFormType } from "@/app/components/CreateDancerModal/form";
import { Dancer } from "@/types/dancer";

const getDancers = async (): Promise<Dancer[]> => {
  try {
    const dancersCollection = collection(db, "dancers");
    const dancersSnapshot = await getDocs(dancersCollection);

    const dancers = dancersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return dancers as Dancer[];
  } catch (error) {
    console.error("Error fetching dancers:", error);
    throw new Error("Failed to fetch dancers.");
  }
};

const addDancer = async (data: CreateDancerFormType) => {
  const dancersCollection = collection(db, "dancers");

  addDoc(dancersCollection, data);
};

export { getDancers, addDancer };
