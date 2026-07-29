"use client";

import Link from "next/link";
import { useState } from "react";
import { MoreHorizontal, Filter, ChevronDown, Truck, Train, Ship, Plane } from "lucide-react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

function Footer() {
    return (
        <footer className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-bold">
            <span>Copyright © 2025 Peterdraw</span>
            <div className="flex items-center gap-6">
                <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600">Term and conditions</a>
                <a href="#" className="hover:text-gray-600">Contact</a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
                {["M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z",
                    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                ].map((d, i) => (
                    <a key={i} href="#"><svg className="w-3.5 h-3.5 fill-current hover:text-gray-600" viewBox="0 0 24 24"><path d={d} /></svg></a>
                ))}
                <a href="#"><svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2 hover:text-gray-600" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                <a href="#"><svg className="w-3.5 h-3.5 fill-current hover:text-gray-600" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                <a href="#"><svg className="w-3.5 h-3.5 fill-current hover:text-gray-600" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
            </div>
        </footer>
    );
}

const inventoryData = [
    { cat: "Electronics", pct: 25, qty: 2500 },
    { cat: "Apparel", pct: 20, qty: 2000 },
    { cat: "Home & Kitchen", pct: 18, qty: 1800 },
    { cat: "Beauty & Health", pct: 15, qty: 1500 },
    { cat: "Automotive Parts", pct: 12, qty: 1200 },
    { cat: "Sports Equipment", pct: 10, qty: 1000 },
];

const storageRows = [
    { floor: 1, section: "A1 – A10", cat: "Electronics", used: 80, avail: 20 },
    { floor: 2, section: "B1 – B10", cat: "Apparel", used: 60, avail: 40 },
    { floor: 1, section: "C1 – C10", cat: "Home & Kitchen", used: 90, avail: 10 },
    { floor: 3, section: "D1 – D10", cat: "Automotive Parts", used: 50, avail: 50 },
    { floor: 2, section: "E1 – E10", cat: "Beauty & Health", used: 70, avail: 30 },
];

const packages = [
    { id: "PKG-HK77420", date: "March 20, 2035 – 05:30 PM", status: "Sent" },
    { id: "PKG-A50812", date: "March 21, 2035 – 01:45 PM", status: "Received" },
    { id: "PKG-E10293", date: "March 22, 2035 – 09:00 AM", status: "Expected" },
];

const activityLog = [
    { color: "bg-gray-800", initial: "LF", text: "Leo Fernandez confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)", time: "01:45 PM" },
    { color: "bg-[#856DF3]", initial: "AM", text: "Ava Martinez added 25 units of Smart Router Kit to Section A1 (Electronics)", time: "09:15 AM" },
    { color: "bg-gray-700", initial: "OL", text: "Oscar Liem dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)", time: "05:30 PM" },
    { color: "bg-[#856DF3]/70", initial: "DC", text: "Dina Choi created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)", time: "04:10 PM" },
];

const mapSections = [
    { name: "Electronics", shelves: ["A1","A2","A3"], avail: 20, full: false },
    { name: "Home & Kitchen", shelves: ["C1","C2","C3"], avail: 10, full: false },
    { name: "Automotive Parts", shelves: ["D1","D2","D3"], avail: 50, full: false },
    { name: "Sports Equipment", shelves: ["F1","F2","F3"], avail: 45, full: false },
    { name: "Apparel", shelves: ["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10"], avail: 20, full: false },
    { name: "Beauty & Health", shelves: ["E1","E2","E3","E4"], avail: 30, full: false },
];

const freightTabs = [
    { label: "Road Freight", Icon: Truck },
    { label: "Rail Freight", Icon: Train },
    { label: "Ocean Freight", Icon: Ship },
    { label: "Air Freight", Icon: Plane },
];

const pkgStatusStyle: Record<string, string> = {
    Sent: "text-[#856DF3] bg-[#EDE9FE]",
    Received: "text-emerald-600 bg-emerald-50",
    Expected: "text-gray-600 bg-gray-100",
};

export default function WarehousePage() {
    const [freight, setFreight] = useState("Road Freight");
    const [pkgTab, setPkgTab] = useState("All");
    const [mapFloor, setMapFloor] = useState("Floor 1");

    const filteredPkgs = pkgTab === "All" ? packages : packages.filter(p => p.status === pkgTab);

    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FD] text-gray-800 font-sans">
            <DashboardSidebar active="Warehouse" />
            <main className="flex-1 flex flex-col overflow-y-auto max-h-screen py-6 px-6">

                {/* Header */}
                <header className="flex justify-between items-start mb-5">
                    <div>
                        <h1 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">Warehouse</h1>
                        <p className="text-[11px] font-semibold text-[#856DF3] mt-0.5">
                            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                            <span className="text-gray-300 mx-1">/</span>
                            <span className="text-gray-400">Warehouse</span>
                        </p>
                    </div>
                    <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs font-semibold">
                        {freightTabs.map(({ label, Icon }) => (
                            <button
                                key={label}
                                onClick={() => setFreight(label)}
                                className={`flex items-center gap-1.5 px-3 py-2 transition-colors ${freight === label ? "bg-[#1A1A1A] text-white" : "text-gray-500 hover:bg-gray-50"}`}
                            >
                                <Icon size={12} />
                                {label}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Main grid */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 items-start">

                    {/* Left (3 cols) */}
                    <div className="xl:col-span-3 flex flex-col gap-5">

                        {/* Top Row: Stats + Inventory */}
                        <div className="grid grid-cols-12 gap-5">

                            {/* Stats column */}
                            <div className="col-span-3 flex flex-col gap-4">
                                {[
                                    { label: "Total SKU", val: "285", badge: "+2.58%" },
                                    { label: "Quantity on Hand", val: "12,450", sub: "units", badge: "+4.37%" },
                                    { label: "Capacity Usage", val: "62.5%", sub: "Full", badge: "+1.54%" },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                        <span className="text-[10px] font-semibold text-gray-400 block mb-1">{s.label}</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-xl font-extrabold text-gray-900">{s.val}</span>
                                            {s.sub && <span className="text-[10px] text-gray-400 font-semibold">{s.sub}</span>}
                                        </div>
                                        <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
                                            ↑ {s.badge}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Inventory Chart */}
                            <div className="col-span-9 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xs font-bold text-gray-800">Warehouse Inventory</h3>
                                    <MoreHorizontal size={14} className="text-gray-400" />
                                </div>
                                <div className="flex items-baseline gap-2 mb-5">
                                    <span className="text-2xl font-extrabold text-gray-900">10,000</span>
                                    <span className="text-xs text-gray-400 font-semibold">packages</span>
                                </div>
                                <div className="flex items-end justify-between gap-2 h-36">
                                    {inventoryData.map((item, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1 flex-1">
                                            <span className="text-[9px] text-gray-500 font-semibold">{item.pct}%</span>
                                            <div className="w-full relative flex flex-col justify-end" style={{ height: "88px" }}>
                                                <div
                                                    className="w-full rounded-t-sm"
                                                    style={{
                                                        height: `${(item.pct / 25) * 88}px`,
                                                        background: i === 0 ? "#856DF3" : i === 1 ? "repeating-linear-gradient(45deg,#856DF3,#856DF3 3px,#D8D4FC 3px,#D8D4FC 6px)" : i === 2 ? "#1A1A1A" : i === 3 ? "repeating-linear-gradient(45deg,#9CA3AF,#9CA3AF 3px,#E5E7EB 3px,#E5E7EB 6px)" : i === 4 ? "#D1D5DB" : "#F3F4F6",
                                                    }}
                                                />
                                            </div>
                                            <span className="text-[8px] text-gray-400 font-semibold text-center leading-tight">{item.cat}</span>
                                            <span className="text-[8px] text-gray-500 font-bold">{item.qty.toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Storage Table */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xs font-bold text-gray-800">Warehouse Storage</h3>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-[10px] font-bold text-gray-600 hover:bg-gray-50">
                                        <Filter size={11} /> Filter <ChevronDown size={10} />
                                    </button>
                                    <span className="text-[10px] text-gray-400 font-semibold">Sort by:</span>
                                    <button className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 text-[10px] font-bold text-gray-600 hover:bg-gray-50">
                                        Section <ChevronDown size={10} />
                                    </button>
                                </div>
                            </div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-[9px] text-gray-400 font-bold uppercase border-b border-gray-50">
                                        {["Floor", "Section", "Category", "Storage Used", "Percentage", "Available Space"].map(h => (
                                            <th key={h} className="py-2 px-2 font-bold">{h} {h !== "Storage Used" && h !== "Category" ? <span className="text-gray-300">↕</span> : ""}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {storageRows.map((row, i) => (
                                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 text-xs">
                                            <td className="py-3 px-2 font-semibold text-gray-700">{row.floor}</td>
                                            <td className="py-3 px-2 font-semibold text-gray-700">{row.section}</td>
                                            <td className="py-3 px-2 font-semibold text-gray-700">{row.cat}</td>
                                            <td className="py-3 px-2">
                                                <div className="h-2 w-36 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#856DF3] rounded-full" style={{ width: `${row.used}%` }} />
                                                </div>
                                            </td>
                                            <td className="py-3 px-2 font-bold text-gray-700">{row.used}%</td>
                                            <td className="py-3 px-2 text-gray-500 font-semibold">{row.avail}/100</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Warehouse Map */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xs font-bold text-gray-800">Warehouse Map</h3>
                                <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden p-0.5">
                                    {["Floor 1","Floor 2","Floor 3"].map(f => (
                                        <button key={f} onClick={() => setMapFloor(f)} className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-colors ${mapFloor === f ? "bg-[#1A1A1A] text-white" : "text-gray-500 hover:text-gray-700"}`}>{f}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {mapSections.map((sec, i) => (
                                    <div key={i} className="border border-gray-100 rounded-xl p-3">
                                        <p className="text-[11px] font-bold text-gray-800 mb-2">{sec.name}</p>
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {sec.shelves.map(s => (
                                                <span key={s} className="px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-[9px] font-bold text-gray-600">{s}</span>
                                            ))}
                                        </div>
                                        <p className="text-[9px] text-gray-400 font-semibold">
                                            Available Space <span className="font-bold text-gray-600">{sec.avail}/100</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 mt-3">
                                <span className="flex items-center gap-1.5 text-[10px] text-gray-500 font-semibold">
                                    <span className="w-3 h-3 rounded border border-gray-300 bg-gray-50 block" /> Available
                                </span>
                                <span className="flex items-center gap-1.5 text-[10px] text-gray-500 font-semibold">
                                    <span className="w-3 h-3 rounded border border-gray-300 bg-gray-200 block" /> Full
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="xl:col-span-1 flex flex-col gap-5">

                        {/* Capacity Usage Donut - Dark */}
                        <div className="bg-[#1A1A1A] text-white rounded-2xl p-5 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xs font-bold">Capacity Usage</h3>
                                <MoreHorizontal size={14} className="text-gray-500" />
                            </div>
                            <div className="relative h-36 w-36 mx-auto flex items-center justify-center">
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-[9px] text-gray-400 font-semibold">Total Usage</span>
                                    <span className="text-2xl font-extrabold text-white leading-tight">62.5%</span>
                                </div>
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="38" stroke="#2D2D2D" strokeWidth="10" fill="transparent" />
                                    <circle cx="50" cy="50" r="38" stroke="#856DF3" strokeWidth="10" fill="transparent"
                                        strokeDasharray={`${2 * Math.PI * 38 * 0.625} ${2 * Math.PI * 38 * 0.375}`}
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-between text-center">
                                <div>
                                    <p className="text-[9px] text-gray-500 font-semibold">Loaded</p>
                                    <p className="text-sm font-extrabold text-white">40 shelves</p>
                                </div>
                                <div className="w-px bg-gray-700" />
                                <div>
                                    <p className="text-[9px] text-gray-500 font-semibold">Empty</p>
                                    <p className="text-sm font-extrabold text-white">24 shelves</p>
                                </div>
                            </div>
                        </div>

                        {/* Package Status */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xs font-bold text-gray-800">Package Status</h3>
                                <MoreHorizontal size={14} className="text-gray-400" />
                            </div>
                            <div className="flex items-center bg-gray-100 rounded-xl p-0.5 mb-4">
                                {["All","Expected","Received","Sent"].map(t => (
                                    <button key={t} onClick={() => setPkgTab(t)} className={`flex-1 py-1.5 text-[9px] font-bold rounded-lg transition-colors ${pkgTab === t ? "bg-[#1A1A1A] text-white" : "text-gray-500 hover:text-gray-700"}`}>{t}</button>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3">
                                {filteredPkgs.map((pkg, i) => (
                                    <div key={i} className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4 text-[#856DF3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-800">{pkg.id}</p>
                                                <p className="text-[9px] text-gray-400 font-medium">{pkg.date}</p>
                                            </div>
                                        </div>
                                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md shrink-0 ${pkgStatusStyle[pkg.status]}`}>{pkg.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Activity Log */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xs font-bold text-gray-800">Warehouse Activity Log</h3>
                                <MoreHorizontal size={14} className="text-gray-400" />
                            </div>
                            <div className="flex flex-col gap-4">
                                {activityLog.map((log, i) => (
                                    <div key={i} className="flex gap-2.5">
                                        <div className={`w-7 h-7 ${log.color} rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0`}>{log.initial}</div>
                                        <div>
                                            <p className="text-[10px] text-gray-700 font-semibold leading-snug">{log.text}</p>
                                            <p className="text-[9px] text-gray-400 font-medium mt-0.5">{log.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
}
