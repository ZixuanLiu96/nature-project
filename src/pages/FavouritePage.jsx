import axios from "axios";
import { useUser } from "../context/user.context";
import { useEffect, useState } from "react";

export default function FavouritePage() {
  const { user } = useUser();
  const [dataCopy, setDataCopy] = useState([]);

  // get the data
  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:5005/spot").then((res) => {
        console.log(res);
      });
    })();
  }, []);
  return <div>I am favorite page</div>;
}
