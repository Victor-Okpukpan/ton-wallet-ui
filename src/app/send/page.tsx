"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Send() {
  const router = useRouter();

  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  const [page, setPage] = useState("address");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setAddress(text);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleBackToHome = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <main>
      <div className="h-screen px-4 py-9">
        {page === "address" && (
          <form action="" className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div className=""></div>
              <h1 className="text-2xl font-bold text-white text-center">
                Recipient
              </h1>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
                className="bg-[#202633] text-white rounded-full p-3"
              >
                <FaX />
              </button>
            </div>
            <div className="w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address or name"
                  className="rounded-[20px] outline-[#399DD1] border-0 py-6 px-5 bg-[#202633] text-white font-medium text-xl w-full"
                />
                {address.length === 0 && (
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="absolute right-6 top-6 text-[#399DD1] font-medium text-lg"
                  >
                    Paste
                  </button>
                )}
              </div>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment"
                className="rounded-[20px] outline-[#399DD1] py-6 px-5 mt-6 bg-[#202633] text-white font-medium text-xl w-full"
              />
            </div>
            <button
              disabled={!address}
              onClick={() => setPage("transfer")}
              className="bg-[#399DD1] w-full py-6 font-medium text-lg text-white disabled:cursor-not-allowed disabled:text-[#FFFFFF80] rounded-[20px] mt-auto"
            >
              Continue
            </button>
          </form>
        )}

        {page === "transfer" && (
          <form action="">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setPage("address")}
                className="bg-[#202633] text-white rounded-full p-3"
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <div className="">
                <h1 className="text-2xl font-bold text-white mb-1 text-center">
                  Amount
                </h1>
                <p className="text-[#FFFFFF80] text-lg text-center font-medium">
                  To: {address}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
                className="bg-[#202633] text-white rounded-full p-3"
              >
                <FaX />
              </button>
            </div>

            <div className="p-6 bg-[#202633] rounded-[20px]">
                
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
