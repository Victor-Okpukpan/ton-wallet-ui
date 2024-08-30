"use client";
import { useState } from "react";

export default function Send() {
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  return (
    <main>
      <div className="h-screen px-4 py-9">
        <form action="" className="flex flex-col h-full">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Recipient
          </h1>
          <div className="">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address or name"
              className="rounded-[20px] py-6 px-5 bg-[#202633] text-white font-medium text-xl w-full"
            />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment"
              className="rounded-[20px] py-6 px-5 mt-6 bg-[#202633] text-white font-medium text-xl w-full"
            />
          </div>
          <button
            disabled={!address}
            className="bg-[#399DD1] w-full py-6 font-medium text-lg text-white disabled:cursor-not-allowed disabled:text-[#FFFFFF80] rounded-[20px] mt-auto"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
