"use client";

import Image from "next/image";
import Link from "next/link";
import {
    LayoutDashboard,
    BarChart3,
    Calendar,
    Package,
    MapPin,
    Warehouse,
    Truck,
    Users,
    FileText,
    MessageSquare,
    Bell,
    Settings,
    ChevronDown,
} from "lucide-react";

const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Analytics", icon: BarChart3, href: "/dashboard" },
    { name: "Calendar", icon: Calendar, href: "/dashboard" },
    { name: "Shipments", icon: Package, href: "/shipments" },
    { name: "Tracking", icon: MapPin, href: "/dashboard" },
    { name: "Warehouse", icon: Warehouse, href: "/warehouse" },
    { name: "Fleets", icon: Truck, href: "/dashboard" },
    { name: "Drivers", icon: Users, href: "/dashboard" },
    { name: "Invoices & Billing", icon: FileText, href: "/invoices" },
];

export default function DashboardSidebar({ active }: { active: string }) {
    return (
        <aside className="w-[260px] bg-white border-r border-gray-100 flex flex-col justify-between py-6 px-4 shrink-0">
            <div className="flex flex-col gap-6">
                <Link href="/dashboard" className="flex items-center gap-2 px-3">
                    <Image src="/logo-vivid.png" alt="ShipNow Logo" width={24} height={24} className="h-6 w-6 object-contain" />
                    <span className="text-xl font-black italic tracking-wider text-[#1A1A1A]">SHIPNOW</span>
                </Link>

                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="relative h-9 w-9 rounded-full overflow-hidden bg-purple-200">
                            <Image src="https://picsum.photos/id/1027/100/100" alt="User avatar" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-800 leading-tight">John Doe</span>
                            <span className="text-[10px] text-gray-400 font-medium">Admin</span>
                        </div>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                </div>

                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = active === item.name;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${isActive ? "bg-[#E8E4FD] text-[#856DF3]" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <Icon size={16} className={isActive ? "text-[#856DF3]" : "text-gray-400"} />
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="h-px bg-gray-100 my-1" />

                <div className="flex flex-col gap-1">
                    <button type="button" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50">
                        <div className="flex items-center gap-2.5">
                            <MessageSquare size={16} className="text-gray-400" />
                            <span>Message</span>
                        </div>
                        <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#856DF3] rounded-full">19</span>
                    </button>
                    <button type="button" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50">
                        <div className="flex items-center gap-2.5">
                            <Bell size={16} className="text-gray-400" />
                            <span>Notification</span>
                        </div>
                        <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#856DF3] rounded-full">5</span>
                    </button>
                    <button type="button" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50">
                        <Settings size={16} className="text-gray-400" />
                        <span>Settings</span>
                    </button>
                </div>
            </div>

            <div className="bg-[#1A1A1A] text-white p-4 rounded-2xl flex flex-col gap-3 relative overflow-hidden shadow-lg mt-4">
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/5 rounded-full" />
                <div className="flex flex-col gap-1.5 z-10">
                    <h4 className="text-xs font-bold leading-snug">Loving ShipNow Free?</h4>
                    <p className="text-[10px] text-gray-400 leading-normal">Go Pro to access priority support, real-time tracking, and full analytics.</p>
                </div>
                <button type="button" className="w-full bg-white text-gray-900 py-2 rounded-xl text-[10px] font-bold hover:bg-gray-100 z-10">Go Pro Today</button>
            </div>
        </aside>
    );
}
