import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="text-sm font-medium text-gray-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
