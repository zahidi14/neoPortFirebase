import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../../firebase";
import React, { useState } from "react";

const Fetch = async (limitNumber, lastVisible = null) => {
  let q = query(
    collection(db, "port"),
    orderBy("timestamp"),
    limit(limitNumber)
  );
  if (lastVisible) {
    q = query(
      collection(db, "port"),
      orderBy("timestamp"),
      startAfter(lastVisible),
      limit(limitNumber)
    );
  }
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  const lastData = querySnapshot.docs[querySnapshot.docs.length - 1];
  return { data, lastData };
};

export { Fetch };