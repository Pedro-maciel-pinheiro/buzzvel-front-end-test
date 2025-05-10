"use client";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function UserMenu() {
  const { user, isLoaded } = useUser();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || !isLoaded) {
    return (
      <div className="h-5">
        <Loader2 className="animate-spin rounded-full bg-linear-180 from-darkorange to-orange text-white duration-1000" />
      </div>
    );
  }

  return (
    <div className="">
      {user ? (
        <div className="mx-0.5 mb-0.5 flex items-end gap-2 font-medium">
          Welcome, {user.firstName} <UserButton />
        </div>
      ) : (
        <div className="mb-0.5 flex w-50 items-center gap-5">
          <Link
            href={"/sign-in"}
            className="font-medium text-gray-800 hover:text-black"
          >
            Log in
          </Link>

          <Link href={"/sign-up"}>
            <Button className="hover:bg-darkorange cursor-pointer border-2 border-black/50 bg-white text-black transition-all duration-200 hover:text-white">
              Sign Up Now
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
