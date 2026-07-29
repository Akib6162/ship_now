"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Search,
    Plus,
    Filter,
    ChevronDown,
    Plane,
    Truck,
    TrainFront,
    Ship,
    MapPin,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import CreateShipmentPage from "@/components/pages/CreateShipmentPage";

type Status = "In Transit" | "Delivered" | "Processing" | "Out for Delivery";
type Transport = "plane" | "truck" | "train" | "ship";

const statusStyle: Record<Status, string> = {
    "In Transit": "bg-[#EDE9FE] text-[#7C5DFA]",
    Delivered: "bg-[#DCFCE7] text-[#16A34A]",
    Processing: "bg-[#FEF9C3] text-[#CA8A04]",
    "Out for Delivery": "bg-[#F3F4F6] text-[#6B7280]",
};

const transportIcon: Record<Transport, typeof Plane> = {
    plane: Plane,
    truck: Truck,
    train: TrainFront,
    ship: Ship,
};

const shipments = [
    { id: "#SH9283746", status: "In Transit" as Status, transport: "plane" as Transport, company: "TechGear Inc", category: "Electronics", origin: "Los Angeles, CA", originTime: "Mar 20, 2035 - 10:00 AM", dest: "Chicago, IL", destTime: "Mar 22, 2035 - 4:30 PM", progress: 68, carrier: "FedEx", logo: "/TechGear Inc.png" },
    { id: "#SH8273645", status: "Delivered" as Status, transport: "truck" as Transport, company: "FreshNest", category: "Groceries", origin: "Houston, TX", originTime: "Mar 18, 2035 - 8:00 AM", dest: "Dallas, TX", destTime: "Mar 19, 2035 - 2:00 PM", progress: 100, carrier: "UPS", logo: "/FreshNest.png" },
    { id: "#SH7362514", status: "Processing" as Status, transport: "train" as Transport, company: "Eco Lights", category: "Lighting", origin: "Detroit, MI", originTime: "Mar 21, 2035 - 6:00 AM", dest: "Cleveland, OH", destTime: "Mar 23, 2035 - 11:00 AM", progress: 25, carrier: "DHL", logo: "/Eco Lights.png" },
    { id: "#SH6451303", status: "Out for Delivery" as Status, transport: "truck" as Transport, company: "StyleHub", category: "Fashion", origin: "New York, NY", originTime: "Mar 19, 2035 - 9:30 AM", dest: "Boston, MA", destTime: "Mar 20, 2035 - 5:00 PM", progress: 92, carrier: "USPS", logo: "/StyleHub.png" },
    { id: "#SH5540292", status: "In Transit" as Status, transport: "ship" as Transport, company: "SunCore Panales", category: "Solar Energy", origin: "Miami, FL", originTime: "Mar 15, 2035 - 7:00 AM", dest: "Seattle, WA", destTime: "Mar 28, 2035 - 3:00 PM", progress: 45, carrier: "FedEx", logo: "/SunCore Panales.png" },
    { id: "#SH4639181", status: "Delivered" as Status, transport: "plane" as Transport, company: "VitaFresh", category: "Health Food", origin: "Phoenix, AZ", originTime: "Mar 17, 2035 - 11:00 AM", dest: "Denver, CO", destTime: "Mar 18, 2035 - 1:00 PM", progress: 100, carrier: "DHL", logo: "/VitaFresh.png" },
    { id: "#SH3728070", status: "Processing" as Status, transport: "truck" as Transport, company: "QuickParts", category: "Auto Parts", origin: "Atlanta, GA", originTime: "Mar 22, 2035 - 5:00 AM", dest: "Charlotte, NC", destTime: "Mar 24, 2035 - 10:00 AM", progress: 15, carrier: "UPS", logo: "/QuickParts.png" },
    { id: "#SH2816969", status: "In Transit" as Status, transport: "train" as Transport, company: "AutoParts Pro", category: "Automotive", origin: "San Diego, CA", originTime: "Mar 20, 2035 - 3:00 PM", dest: "Las Vegas, NV", destTime: "Mar 21, 2035 - 8:00 PM", progress: 55, carrier: "FedEx", logo: "/AutoParts Pro.png" },
    { id: "#SH1905858", status: "Out for Delivery" as Status, transport: "plane" as Transport, company: "ModaWear", category: "Fashion", origin: "San Francisco, CA", originTime: "Mar 19, 2035 - 2:00 PM", dest: "Portland, OR", destTime: "Mar 20, 2035 - 6:00 PM", progress: 88, carrier: "UPS", logo: "/ModaWear.png" },
    { id: "#SH0894747", status: "Delivered" as Status, transport: "truck" as Transport, company: "GreenHaven", category: "Home & Garden", origin: "Kansas City, MO", originTime: "Mar 16, 2035 - 7:30 AM", dest: "Omaha, NE", destTime: "Mar 17, 2035 - 4:00 PM", progress: 100, carrier: "USPS", logo: "/GreenHaven.png" },
    { id: "#SH9783636", status: "In Transit" as Status, transport: "ship" as Transport, company: "StyleDepot", category: "Retail", origin: "Baltimore, MD", originTime: "Mar 14, 2035 - 9:00 AM", dest: "Los Angeles, CA", destTime: "Mar 30, 2035 - 12:00 PM", progress: 38, carrier: "DHL", logo: "/StyleDepot.png" },
    { id: "#SH8672525", status: "Processing" as Status, transport: "plane" as Transport, company: "FitPlus Gear", category: "Fitness", origin: "Nashville, TN", originTime: "Mar 23, 2035 - 10:00 AM", dest: "Memphis, TN", destTime: "Mar 24, 2035 - 3:00 PM", progress: 10, carrier: "FedEx", logo: "/FitPlus Gear.png" },
];

const tabs = ["All", "Delivered", "In Transit", "Processing", "Out for Delivery"];

function ShipmentFooter() {
    return (
        <footer className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-bold">
            <span>Copyright © 2025 Peterdraw</span>
            <div className="flex items-center gap-6">
                <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600">Term and conditions</a>
                <a href="#" className="hover:text-gray-600">Contact</a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
                {["M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"].map((d, i) => (
                    <a key={i} href="#" className="hover:text-gray-600"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d={d} /></svg></a>
                ))}
                <a href="#" className="hover:text-gray-600"><svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                <a href="#" className="hover:text-gray-600"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                <a href="#" className="hover:text-gray-600"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
            </div>
        </footer>
    );
}

export default function ShipmentsPage() {
    const [filterTab, setFilterTab] = useState("All");
    const [search, setSearch] = useState("");
    const [showCreate, setShowCreate] = useState(false);

    const filtered = shipments.filter((s) => {
        const matchTab = filterTab === "All" || s.status === filterTab;
        const q = search.toLowerCase();
        const matchSearch = !q || s.id.toLowerCase().includes(q) || s.company.toLowerCase().includes(q);
        return matchTab && matchSearch;
    });

    if (showCreate) {
        return <CreateShipmentPage onBack={() => setShowCreate(false)} />;
    }

    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FD] text-gray-800 font-sans">
            <DashboardSidebar active="Shipments" />
            <main className="flex-1 flex flex-col overflow-y-auto max-h-screen py-6 px-8">
                <header className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">Shipments</h1>
                        <p className="text-[11px] font-semibold text-[#856DF3] mt-1">
                            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                            <span className="text-gray-300 mx-1.5">/</span>
                            <span className="text-gray-400">Shipments</span>
                        </p>
                    </div>
                    <button type="button" onClick={() => setShowCreate(true)} className="bg-[#1A1A1A] hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer">
                        <Plus size={14} /> New Shipment
                    </button>
                </header>

                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setFilterTab(tab)}
                                className={`px-4 py-2 rounded-full text-[11px] font-bold border transition-colors ${filterTab === tab ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative w-56">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search Shipment"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-xl border border-gray-100 bg-white pl-9 pr-4 py-2.5 text-xs outline-none focus:border-[#856DF3]/40 shadow-sm"
                            />
                        </div>
                        <button type="button" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-600 shadow-sm">
                            <Filter size={14} /> Filter
                        </button>
                        <button type="button" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-600 shadow-sm">
                            Sort by: Newest <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8">
                    {filtered.map((s) => {
                        const TIcon = transportIcon[s.transport];
                        return (
                            <article key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3 hover:border-[#856DF3]/20 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-extrabold text-gray-900">{s.id}</p>
                                        <span className={`inline-block mt-1.5 px-2 py-0.5 rounded-md text-[9px] font-bold ${statusStyle[s.status]}`}>{s.status}</span>
                                    </div>
                                    <div className="h-9 w-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                                        <TIcon size={16} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 min-h-9">
                                    <div className="relative h-8 w-24 shrink-0">
                                        <Image src={s.logo} alt={s.company} fill className="object-contain object-left" />
                                    </div>
                                    <p className="text-[9px] text-gray-400 font-semibold">{s.category}</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex flex-col items-center pt-1">
                                        <div className="h-2 w-2 rounded-full bg-[#856DF3]" />
                                        <div className="w-px flex-1 bg-gray-200 my-0.5 min-h-[28px]" />
                                        <MapPin size={12} className="text-[#856DF3]" />
                                    </div>
                                    <div className="flex flex-col gap-3 flex-1">
                                        <div>
                                            <p className="text-[8px] font-bold text-gray-400 uppercase">Origin</p>
                                            <p className="text-[10px] font-bold text-gray-800">{s.origin}</p>
                                            <p className="text-[9px] text-gray-400 font-medium">{s.originTime}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-bold text-gray-400 uppercase">Destination</p>
                                            <p className="text-[10px] font-bold text-gray-800">{s.dest}</p>
                                            <p className="text-[9px] text-gray-400 font-medium">{s.destTime}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-1 border-t border-gray-50">
                                    <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-[9px] font-bold text-gray-500">Progres {s.progress}%</span>
                                        <span className="text-[9px] font-bold text-gray-400">Carriers {s.carrier}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#856DF3] rounded-full" style={{ width: `${s.progress}%` }} />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
                        Show
                        <select className="border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white outline-none">
                            <option>12</option>
                        </select>
                        of 520 results
                    </div>
                    <div className="flex items-center gap-1">
                        <button type="button" className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white"><ChevronLeft size={14} /></button>
                        {[1, 2, 3].map((p) => (
                            <button key={p} type="button" className={`h-8 w-8 rounded-lg text-xs font-bold ${p === 1 ? "bg-[#856DF3] text-white" : "border border-gray-200 text-gray-500 hover:bg-white"}`}>{p}</button>
                        ))}
                        <span className="px-1 text-gray-400 text-xs">...</span>
                        <button type="button" className="h-8 w-8 rounded-lg border border-gray-200 text-xs font-bold text-gray-500">16</button>
                        <button type="button" className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white"><ChevronRight size={14} /></button>
                    </div>
                </div>

                <ShipmentFooter />
            </main>
        </div>
    );
}
