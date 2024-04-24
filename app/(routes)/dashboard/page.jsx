"use client";
import { app } from "@/app/config/FirebaseConfig";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
import MeetingCategory from "./meeting-categories/page";

function Dashboard() {
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // Verifique si el usuario existe antes de llamar a isBussinessRegistered
      isBusinessRegistered();
    }
  }, [user]);

  const isBusinessRegistered = async () => {
    const docRef = doc(db, "Business", user.email);
  
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setLoading(false);
      } else {
        console.log("No such document!");
        setLoading(false);
        router.replace("/create-business");
      }
    } catch (error) {
      // Handle potential permission errors
      if (error.code === "permission-denied") {
        console.error("User lacks permissions to access business document.");
        // Display an error message to the user
        // Or redirect to a permission request page
      } else {
        console.error("Error fetching business document:", error);
        // Handle other potential errors
      }
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>
        <MeetingCategory/>
      </div>
    </div>
  );
}

export default Dashboard;
