"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
   console.log(router);
  const navigateToAbout = () => {
    router.push("/users");
  };

  return (
    <div>
      <button onClick={navigateToAbout}>Go to About Page</button>
    </div>
  );
}
