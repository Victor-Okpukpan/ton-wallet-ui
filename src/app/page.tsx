"use client";

import {
  MdOutlineSettings,
  MdOutlineQrCodeScanner,
  MdOutlineContentCopy,
  MdOutlineSwapVert,
} from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [active, setActive] = useState("activity");

  return (
    <main>
      <div className="">
        <div className="px-4 py-6">
          <div
            style={{
              background:
                "linear-gradient(112.43deg, #6AA3EA 4.97%, #446BB8 99.13%)",
            }}
            className="p-7 rounded-[20px] text-white"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-medium">TonWallet</h1>
              <div className="flex items-center space-x-4">
                <MdOutlineSettings className="w-6 h-6 cursor-pointer" />
                <MdOutlineQrCodeScanner className="w-6 h-6 cursor-pointer" />
              </div>
            </div>

            <div className="mt-6">
              <p className="font-bold text-5xl">$1,000</p>
            </div>

            <div className="flex items-center space-x-1 mt-4">
              <p className="font-medium text-xs">UQAbhW....JIAkM1</p>
              <MdOutlineContentCopy className="w-4 h-4 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-[10px] mt-5">
            <button
              onClick={() => router.push("/receive")}
              className="flex flex-col items-center bg-[#202633] py-3 w-full rounded-[20px]"
            >
              <IoMdAdd className="text-[#399DD1] w-6 h-6 mb-2" />
              <span className="text-white font-semibold text-sm">Add/Buy</span>
            </button>
            <button
              onClick={() => router.push("/send")}
              className="flex flex-col items-center bg-[#202633] py-3 w-full rounded-[20px]"
            >
              <IoShareOutline className="text-[#399DD1] w-6 h-6 mb-2" />
              <span className="text-white font-semibold text-sm">Send</span>
            </button>
            <button className="flex flex-col items-center bg-[#202633] py-3 w-full rounded-[20px]">
              <MdOutlineSwapVert className="text-[#399DD1] w-6  h-6 mb-2" />
              <span className="text-white font-semibold text-sm">Swap</span>
            </button>
          </div>

          <div className="mt-5 bg-[#202633] p-5 rounded-[20px] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="">
                <Image src="/ton.svg" alt="Ton logo" width={45} height={45} />
              </div>
              <div className="">
                <h2 className="font-medium text-lg text-white">
                  Toncoin{" "}
                  <span className="text-[#57BE93] rounded-[5px] text-xs bg-[#40A06F33] px-2">
                    APY 2.27%
                  </span>
                </h2>
                <p className="font-medium text-xs text-[#FFFFFF80]">
                  $6.74 <span className="text-[#57BE93]">7.56%</span>
                </p>
              </div>
            </div>
            <div className="">
              <p className="font-medium text-lg text-white text-right">
                6000 TON
              </p>
              <p className="font-medium text-xs text-[#FFFFFF80] text-right">
                $1000.00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#202633] py-5 h-full">
          <div className="flex items-center space-x-10 w-max mx-auto">
            <button
              onClick={() => setActive("activity")}
              className={`${
                active === "activity" ? "text-[#399DD1]" : "text-white"
              } font-medium text-lg`}
            >
              <span>Activity</span>
              <div
                className={`${
                  active === "activity" ? "bg-[#399DD1]" : "bg-transparent"
                } h-[1px] rounded-[20px] mt-3`}
              ></div>
            </button>
            <button
              onClick={() => setActive("nft")}
              className={`${
                active === "nft" ? "text-[#399DD1]" : "text-white"
              } font-medium text-lg`}
            >
              <span>NFTs</span>
              <div
                className={`${
                  active === "nft" ? "bg-[#399DD1]" : "bg-transparent"
                } h-[1px] rounded-[20px] mt-3`}
              ></div>
            </button>
          </div>

          {active === "activity" && (
            <div className="">
              <Image
                src="/wallet.svg"
                alt="wallet"
                height={176}
                width={178}
                className="mx-auto mt-12"
              />
              <div className="mt-6 text-center">
                <p className="text-white font-bold text-lg">
                  You have just created a new wallet
                </p>
                <p className="text-[#FFFFFF80] font-medium text-lg">
                  You can now transfer your tokens
                  <br />
                  from another wallet or exchange
                </p>
              </div>
            </div>
          )}

          {active === "nft" && (
            <div className="">
              <Image
                src="/ape.svg"
                alt="wallet"
                height={159}
                width={159}
                className="mx-auto mt-12"
              />
              <div className="mt-6 text-center">
                <p className="text-white font-bold text-lg">No NFTs yet</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
