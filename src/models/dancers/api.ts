"use server";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { CreateDancerRequest, Dancer } from "./type";

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
  }
};

const addDancer = async (data: CreateDancerRequest) => {
  const dancersCollection = collection(db, "dancers");

  addDoc(dancersCollection, data);
};

export { getDancers, addDancer };
