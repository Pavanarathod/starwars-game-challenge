"use client";

import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header";
import { matchList, mathes, starWarsCharacters } from "@/utils/utils";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import clax from "clsx";

function MathesPage() {
  const paras = useSearchParams();

  const [data, setData] = useState([]);
  const memoizedMatchList = useCallback(
    (players, matches) => matchList(players, matches),
    []
  );
  useEffect(() => {
    const res = memoizedMatchList(starWarsCharacters, mathes);
    if (res.length > 0) {
      const playerData = res.filter((item) => {
        return (
          item.left.playerOne.name === paras.get("player") ||
          item.right.playerTwo.name === paras.get("player")
        );
      });

      setData(playerData);
    }
  }, []);

  console.log(data);

  return (
    <AppLayout>
      {" "}
      <Header>
        <Link href="/" className="absolute left-0 text-blue-500 ml-2">
          Back
        </Link>
        Mathces
      </Header>
      <div className="mt-15">
        <ul className="flex w-full flex-col">
          {data?.map((item, index) => {
            const {
              left: { playerOne, palyer1Score },
              right: { playerTwo, palyer2Score },
            } = item;

            const curPlayer =
              playerOne.name === paras.get("player") ||
              playerTwo.name === paras.get("player");

            return (
              <li
                key={index}
                className={clax(
                  "flex items-center justify-evenly py-3 px-3",
                  palyer1Score > palyer2Score && "bg-green-600",
                  palyer1Score < palyer2Score && "bg-red-600",
                  palyer1Score === palyer2Score && "bg-white"
                )}
              >
                <span>{playerOne.name}</span>
                <div className="flex-1 items-center justify-center flex">
                  <span>{palyer1Score} - </span>
                  <span> {palyer2Score}</span>
                </div>
                <span>{playerTwo.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </AppLayout>
  );
}

export default MathesPage;
