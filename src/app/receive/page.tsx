import Image from "next/image";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";

export default function Receive() {
  return (
    <main>
      <div className="min-h-screen px-4 py-9">
        <div className="text-center">
          <h1 className="text-white font-bold text-2xl">Recieve Toncoin</h1>
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
          <button className="text-white py-4 px-6 flex items-center space-x-1 bg-[#FFFFFF4A] rounded-[100px] text-base font-medium">
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
