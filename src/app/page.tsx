import Image from "next/image";

export default function Home() {
  return (
   <div className=" space-y-2 mt-4 ">
     <h1 className=" text-2xl font-bold sm:text-3xl ">🔐 Partage JSON sécurisé</h1>
     <p className=' max-w-[800px] text-muted-foreground md:text-xl '>
     Centralisez, visualisez et partagez vos données JSON en toute simplicité.
     Un outil fiable pour les développeurs, les équipes techniques et les entreprises.
     </p>
   </div>
  );
}
