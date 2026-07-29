"use client";

import { useState } from "react";

function Logo({ variant = "purple" }: { variant?: "purple" | "white" }) {
    const color = variant === "white" ? "bg-white" : "bg-[#856DF3]";
    return (
        <div className="flex h-6 w-4 flex-col gap-[3px]">
            <span className={`h-[10px] w-4 skew-x-[-20deg] ${color}`} />
            <span className={`h-[10px] w-4 skew-x-[-20deg] ${color} self-end`} />
        </div>
    );
}

function EyeIcon({ open }: { open: boolean }) {
    if (open) {
        return (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        );
    }
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.6 21.6 0 0 1 5.06-6.06M9.9 4.24A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.34 3.36M14.12 14.12a3 3 0 1 1-4.24-4.24" />
            <path d="M1 1l22 22" />
        </svg>
    );
}

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

    return (
        <div className="flex min-h-screen w-full bg-white">
            {/* Left panel */}
            <div className="relative hidden w-1/2 flex-col items-center justify-center bg-[#856DF3] px-12 py-16 lg:flex">
                <div className="absolute left-14 top-14 flex items-center gap-2">
                    <Logo variant="white" />
                    <span className="text-lg font-bold tracking-wide text-white">
                        SHIPNOW
                    </span>
                </div>

                <div className="flex w-full max-w-sm flex-col items-center">
                    <div className="relative mb-10 w-full max-w-[300px]">
                        <img
                            src="https://picsum.photos/id/1071/500/380"
                            alt="Delivery truck loaded with packages"
                            className="h-[210px] w-full rounded-2xl object-cover"
                        />
                        <img
                            src="https://picsum.photos/id/1027/300/300"
                            alt="Courier checking phone"
                            className="absolute -top-8 right-[-16px] h-[130px] w-[110px] rounded-xl border-4 border-[#856DF3] object-cover shadow-lg"
                        />
                    </div>

                    <h1 className="text-center text-2xl font-bold text-white">
                        Welcome to ShipNow
                    </h1>
                    <p className="mt-2 max-w-[280px] text-center text-sm leading-relaxed text-white/80">
                        Manage your shipments, fleet, and warehouse in one smart
                        dashboard.
                    </p>
                </div>
            </div>

            {/* Right panel */}
            <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2">
                <div className="w-full max-w-[300px]">
                    <div className="mb-6 flex justify-center">
                        <Logo variant="purple" />
                    </div>

                    <h2 className="text-center text-xl font-bold text-[#1A1A1A]">
                        Welcome Back
                    </h2>
                    <p className="mt-1.5 text-center text-sm text-gray-400">
                        Log in to continue managing your logistics with ShipNow
                    </p>

                    <form className="mt-7 flex flex-col gap-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-xs font-medium text-gray-500"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter a valid email address"
                                className="w-full rounded-lg bg-[#F1F1F1] px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none ring-1 ring-transparent focus:ring-[#856DF3]"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1.5 block text-xs font-medium text-gray-500"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
                                    className="w-full rounded-lg bg-[#F1F1F1] px-3.5 py-2.5 pr-10 text-sm text-gray-800 placeholder:text-gray-400 outline-none ring-1 ring-transparent focus:ring-[#856DF3]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    <EyeIcon open={showPassword} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-0.5">
                            <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-3.5 w-3.5 rounded accent-[#856DF3]"
                                />
                                Remember Me
                            </label>
                            <a
                                href="#"
                                className="text-xs font-medium text-[#856DF3] hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 w-full rounded-lg bg-[#1A1A1A] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-5 text-center text-xs text-gray-500">
                        Don&apos;t have an account?{" "}
                        <a href="#" className="font-medium text-[#856DF3] hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}