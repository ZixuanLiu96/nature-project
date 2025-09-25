import { useEffect, useState } from "react";
import axios from "axios";

export default function ExplorePage() {
  const [imgs, setImgs] = useState(() => {
    const spots = localStorage.getItem("spots");
    return spots
      ? JSON.parse(spots).filter((spot) => spot.isPrivate == false)
      : [];
  });
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:5005/spot")
        .then((res) => {
          console.log(res.data);
          // console.log(res.data[0].imgUrl);
          const copyData = [
            ...res.data.filter((spot) => spot.isPrivate == false),
          ];
          setImgs(copyData);
          localStorage.setItem("spots", JSON.stringify(copyData));
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  // console.log(imgs);
  // console.log(imgs[0]?.imgUrl);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {imgs &&
        imgs.map((img) => (
          <div
            key={img.id}
            className="w-100 h-100 text-[#fff]"
            style={{
              backgroundImage: `url(${img.imgUrl})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {img.title}
          </div>
        ))}
    </div>
  );
}
