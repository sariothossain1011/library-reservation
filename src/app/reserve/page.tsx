"use client";

import Link from "next/link";
import ReservationForm from "@/components/forms/reservation-form";



export default function ReservationPage() {


  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-400"
          >
            Readora
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-slate-600 px-4 py-2 hover:bg-slate-800"
          >
            ← Back Home
          </Link>
        </div>
      </header>

      {/* Form */}
      <ReservationForm />
    </main>
  );
}