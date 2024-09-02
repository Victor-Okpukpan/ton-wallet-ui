"use client";

import { useState } from "react";
import Image from "next/image";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaX } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Receive() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = () => {
    const textToCopy = "UQAaihBgkQvEngiOT1eiGAJ10 31OE3g1EE2KxarCMjCMNx3R";
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <main>
      <div className="min-h-screen px-4 py-9 relative">
        {showNotification && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white text-center py-2 px-4 rounded-[100px] mt-4">
            Text copied to clipboard!
          </div>
        )}
        <div className="flex justify-end">
          <button
            onClick={() => router.push("/")}
            className="bg-[#202633] text-white rounded-full p-3"
          >
            <FaX />
          </button>
        </div>
        <div className="text-center">
          <h1 className="text-white font-bold text-2xl">Receive Toncoin</h1>
          <p className="text-[#FFFFFF80] font-medium text-lg mt-2">
            Send only Toncoin TON and tokens in
            <br />
            TON network to this address, or you
            <br />
            might lose your funds.
          </p>
        </div>

        <div className="mt-11 bg-white rounded-[20px] px-6 py-8">
          <Image
            src="/qr-code.svg"
            alt="QR Code"
            width={272}
            height={262}
            className="mx-auto"
          />
          <p className="text-center mt-4 text-black text-base">
            UQAaihBgkQvEngiOT1eiGAJ10 31OE3g1EE2KxarCMjCMNx3R
          </p>
        </div>

        <div className="mt-5 flex items-center space-x-3 w-max mx-auto">
          <button
            onClick={handleCopy}
            className="text-white py-4 px-6 flex items-center space-x-1 bg-[#FFFFFF4A] rounded-[100px] text-base font-medium"
          >
            <MdOutlineContentCopy className="w-[20px] h-[20px] mb-2" />
            <span>Copy</span>
          </button>
          <button className="text-white py-4 px-6 flex items-center space-x-1 bg-[#FFFFFF4A] rounded-[100px] text-base font-medium">
            <IoShareOutline className="w-[20px] h-[20px] mb-2" />
          </button>
        </div>
      </div>
    </main>
  );
}
