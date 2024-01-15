'use client'
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import SplashScreen from "@components/SplashScreen";
import { usePathname } from "next/navigation";


const RootLayout = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome) 

  useEffect(() => {
    if(isLoading )
    return
  }, [isLoading ])
  return (
    <html>
      <head>
        <title>Splash Screen - NextJs with Tailwind CSS</title>
      </head>
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={()=>setIsLoading(false)}/>
          ): (
            <div>
        <Nav />
        <h2>Welcome</h2>
      </div>
          )
        }
      
      </body>
    </html>
  );
};
``
export default RootLayout;
