"use client";
import { useRawStore } from "@/app/store/store";
import { RawState } from "@/app/types";
import Image from "next/image";
export default function ToggleRawNavbarElement() {
  const raw = useRawStore((state: RawState) => state.raw);
  const toggleRaw = useRawStore((state: RawState) => state.toggleRaw);
  console.log(raw);
  return (
    <div
      className="px-3 py-1 hover:bg-gray-300 rounded-xl inline-block"
      onClick={() => toggleRaw()}
    >
      {raw ? (
        <Image
          className=""
          src="../rawoff.svg"
          alt="toggle raw"
          width="32"
          height="32"
        />
      ) : (
        <Image
          className=""
          src="../rawon.svg"
          alt="toggle raw"
          width="32"
          height="32"
        />
      )}
    </div>
  );
}
