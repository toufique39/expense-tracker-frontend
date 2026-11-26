import Link from "next/link";
import { Wallet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:gap-5 sm:text-left">
        <Link href="/" className="flex items-center gap-2">
          <Wallet className="text-indigo-600" />
          <span className="font-bold">ExpenseTrack</span>
        </Link>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ExpenseTrack. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">Manage your money smarter.</p>
      </div>
    </footer>
  );
}
