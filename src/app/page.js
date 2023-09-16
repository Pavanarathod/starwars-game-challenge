"use client";

import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header";
import { starWarsCharacters } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(function () {
    async () => {
      const res = await fetch("https://www.jsonkeeper.com/b/IKQQ");
      const data = await res.json();
      setPlayers(data);
    };
  }, []);

  return (
    <AppLayout>
      <Header>Star wars Blaster tournament</Header>
      {/* content */}
      <div className="mt-15">
        <ul className="flex flex-col">
          {starWarsCharacters.map((char) => (
            <Link key={char.id} href={`/mathes?player=${char.name}`}>
              <li
                key={char.id}
                className="px-3 py-3 flex items-center justify-between"
              >
                <div className="flex items-center space-x-5">
                  <img src={char.icon} className="h-14 w-14" />
                  <span>{char.name}</span>
                </div>
                <span>{char.id}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </AppLayout>
  );
}
