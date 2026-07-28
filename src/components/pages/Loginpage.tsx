"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Default login credentials:
// Email: admin@shipnow.com
// Password: Password123

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

    const handleManualLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        // Validate credentials
        if (email === "admin@shipnow.com" && password === "Password123") {
            router.push("/dashboard");
        } else {
            setError("Invalid email or password. Use: admin@shipnow.com / Password123");
        }
    };

    const handleDummyLogin = () => {
        router.push("/dashboard");
    };

    return (
        <div className="flex min-h-screen w-full bg-white">
            {/* Left panel */}
            <div className="relative hidden w-1/2 flex-col items-center justify-center bg-[#856DF3] px-12 py-16 lg:flex">
                <div className="absolute top-14 left-0 right-0 flex items-center justify-center gap-2">
                    <Image
                        src="/logo-bw.png"
                        alt="ShipNow Logo"
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                    />
                    <span className="text-2xl font-black italic tracking-wider text-white">
                        SHIPNOW
                    </span>
                </div>

                <div className="flex relative w-full flex-col items-center">
                    <div className="relative mb-10 w-full flex justify-center">
                        <div className="relative">
                            <Image
                                src="/login 2.png"
                                alt="Delivery truck loaded with packages"
                                width={410}
                                height={386}
                                className="w-[410px] h-[386px] rounded-[28px] object-cover shadow-md"
                                priority
                            />
                            <Image
                                src="/login.png"
                                alt="Courier checking phone"
                                width={177}
                                height={224}
                                className="absolute -top-15 -right-10 h-[228px] w-[178px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    <h1 className="text-center text-[40px] font-extrabold tracking-tight text-white">
                        Welcome to ShipNow
                    </h1>
                    <p className="mt-3 text-center text-xs truncate leading-relaxed text-white/90">
                        Manage your shipments, fleet, and warehouse in one smart
                        dashboard.
                    </p>
                </div>
            </div>

            {/* Right panel */}
            <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2">
                <div className="w-full max-w-[370px]">
                    <div className="mb-6 flex justify-center">
                        <Image
                            src="/logo-vivid.png"
                            alt="ShipNow Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                        />
                    </div>

                    <h2 className="text-center text-2xl font-bold text-[#1A1A1A]">
                        Welcome Back
                    </h2>
                    <p className="mt-1.5 text-center text-sm text-gray-400 truncate">
                        Log in to continue managing your logistics with ShipNow
                    </p>

                    <form onSubmit={handleManualLogin} className="mt-7 flex flex-col gap-4">
                        {error && (
                            <div className="rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-500 border border-red-200">
                                {error}
                            </div>
                        )}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter a valid email address"
                                className="w-full rounded-lg bg-[#F1F1F1] px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none border border-transparent focus:border-[#856DF3] focus:bg-white focus:ring-2 focus:ring-[#856DF3]/20 transition-all duration-200"
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a strong password"
                                    className="w-full rounded-lg bg-[#F1F1F1] px-3.5 py-2.5 pr-10 text-sm text-gray-800 placeholder:text-gray-400 outline-none border border-transparent focus:border-[#856DF3] focus:bg-white focus:ring-2 focus:ring-[#856DF3]/20 transition-all duration-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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

                        <div className="flex flex-col gap-2 mt-2">
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-[#1A1A1A] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black cursor-pointer text-center"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={handleDummyLogin}
                                className="w-full rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer text-center"
                            >
                                Dummy Login
                            </button>
                        </div>
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
