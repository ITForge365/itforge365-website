import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-6xl font-bold mb-6">
          ITForge365 DEV
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-2xl">
           Scripts, automatisation et outils Microsoft 365
            pour les administrateurs IT.
        </p>
     </main>
  );
}
