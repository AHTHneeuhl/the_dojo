import { useEffect, useState } from "react";
import { database } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = database.collection(collection).doc(id);

    const unsub = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("No Such Document Exist");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Fail to get document!");
      }
    );

    return () => unsub();
  }, [collection, id]);

  return { error, document };
};
