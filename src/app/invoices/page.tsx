"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, MoreHorizontal, ChevronDown } from "lucide-react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

function Footer() {
    return (
        <footer className="mt-6 pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-gray-400 font-bold">
            <span>Copyright © 2025 Peterdraw</span>
            <div className="flex items-center gap-5">
                <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600">Term and conditions</a>
                <a href="#" className="hover:text-gray-600">Contact</a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
                {["M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z","M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"].map((d,i)=>(
                    <a key={i} href="#"><svg className="w-3.5 h-3.5 fill-current hover:text-gray-600" viewBox="0 0 24 24"><path d={d}/></svg></a>
                ))}
                <a href="#"><svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2 hover:text-gray-600" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                <a href="#"><svg className="w-3.5 h-3.5 fill-current hover:text-gray-600" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
                <a href="#"><svg className="w-3.5 h-3.5 fill-current hover:text-gray-600" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
        </footer>
    );
}

const statusStyle: Record<string, string> = {
    Paid: "text-emerald-600 bg-emerald-50 border border-emerald-100",
    Unpaid: "text-[#856DF3] bg-[#EDE9FE] border border-[#856DF3]/20",
    Overdue: "text-rose-600 bg-rose-50 border border-rose-100",
    Pending: "text-amber-600 bg-amber-50 border border-amber-100",
};

const invoices = [
    { id: "INV-1001", company: "TechGear Inc.", shipping: "#SH9283746", issued: "Mar 15, 2035", due: "Mar 22, 2035", amount: "$1,250.00", status: "Paid" },
    { id: "INV-1002", company: "StyleHub Co.", shipping: "#SH9182635", issued: "Mar 16, 2035", due: "Mar 23, 2035", amount: "$980.00", status: "Unpaid" },
    { id: "INV-1003", company: "FreshNest", shipping: "#SH9037821", issued: "Mar 14, 2035", due: "Mar 21, 2035", amount: "$1,320.00", status: "Paid" },
    { id: "INV-1004", company: "FitPlus Gear", shipping: "#SH9374652", issued: "Mar 17, 2035", due: "Mar 24, 2035", amount: "$1,150.00", status: "Unpaid" },
    { id: "INV-1005", company: "AutoParts Pro", shipping: "#SH9457830", issued: "Mar 15, 2035", due: "Mar 22, 2035", amount: "$1,480.00", status: "Overdue" },
    { id: "INV-1006", company: "EcoLights", shipping: "#SH8821349", issued: "Mar 13, 2035", due: "Mar 20, 2035", amount: "$790.00", status: "Paid" },
    { id: "INV-1007", company: "GreenHaven", shipping: "#SH8967432", issued: "Mar 14, 2035", due: "Mar 21, 2035", amount: "$875.00", status: "Paid" },
    { id: "INV-1008", company: "ModaWear", shipping: "#SH8893247", issued: "Mar 16, 2035", due: "Mar 23, 2035", amount: "$910.00", status: "Unpaid" },
    { id: "INV-1009", company: "SunCore Panels", shipping: "#SH9018723", issued: "Mar 17, 2035", due: "Mar 24, 2035", amount: "$1,600.00", status: "Unpaid" },
    { id: "INV-1010", company: "VitaFresh", shipping: "#SH8881190", issued: "Mar 15, 2035", due: "Mar 22, 2035", amount: "$1,120.00", status: "Overdue" },
    { id: "INV-1011", company: "SmartAppliance", shipping: "#SH8923752", issued: "Mar 18, 2035", due: "Mar 25, 2035", amount: "$1,050.00", status: "Paid" },
];

// Company initials/icon colors
const companyColors: Record<string, string> = {
    "TechGear Inc.": "bg-blue-100 text-blue-700",
    "StyleHub Co.": "bg-pink-100 text-pink-700",
    "FreshNest": "bg-emerald-100 text-emerald-700",
    "FitPlus Gear": "bg-orange-100 text-orange-700",
    "AutoParts Pro": "bg-red-100 text-red-700",
    "EcoLights": "bg-green-100 text-green-700",
    "GreenHaven": "bg-teal-100 text-teal-700",
    "ModaWear": "bg-[#EDE9FE] text-[#856DF3]",
    "SunCore Panels": "bg-yellow-100 text-yellow-700",
    "VitaFresh": "bg-lime-100 text-lime-700",
    "SmartAppliance": "bg-gray-100 text-gray-700",
};

const packageItems = [
    { desc: "Lightweight Hoodie Pack", type: "Road Freight", sub: "Express", price: "$120.00", qty: 3, amount: "$360.00" },
    { desc: "Autumn Jacket Set", type: "Road Freight", sub: "Standard", price: "$180.00", qty: 2, amount: "$360.00" },
    { desc: "Lightweight Hoodie Pack", type: "Road Freight", sub: "Express", price: "$95.00", qty: 2, amount: "$190.00" },
];

const statCards = [
    { label: "Paid Invoices", val: "$28,890", from: "350", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Unpaid Invoices", val: "$16,700", from: "120", icon: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" },
    { label: "Pending Invoices", val: "$8,050", from: "80", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Overdue Invoices", val: "$22,110", from: "245", icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function InvoicesBillingPage() {
    const [selected, setSelected] = useState("INV-1008");
    const [search, setSearch] = useState("");

    const filtered = invoices.filter(inv =>
        inv.id.toLowerCase().includes(search.toLowerCase()) ||
        inv.company.toLowerCase().includes(search.toLowerCase()) ||
        inv.shipping.toLowerCase().includes(search.toLowerCase())
    );

    const selectedInv = invoices.find(i => i.id === selected);

    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FD] text-gray-800 font-sans">
            <DashboardSidebar active="Invoices & Billing" />
            <main className="flex-1 flex flex-col overflow-y-auto max-h-screen py-6 px-6">

                {/* Header */}
                <header className="flex justify-between items-start mb-5">
                    <div>
                        <h1 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">Invoices & Billing</h1>
                        <p className="text-[11px] font-semibold text-[#856DF3] mt-0.5">
                            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                            <span className="text-gray-300 mx-1">/</span>
                            <span className="text-gray-400">Invoices & Billing</span>
                        </p>
                    </div>
                    <div className="relative w-60">
                        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input placeholder="Search anything" className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-xs outline-none focus:border-[#856DF3]/40 shadow-sm" />
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-4 mb-5">
                    {statCards.map((c, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-[#856DF3]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={c.icon} /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-semibold">{c.label}</p>
                                <p className="text-xl font-extrabold text-gray-900 leading-tight">{c.val}</p>
                                <p className="text-[9px] text-gray-400 font-semibold mt-0.5">
                                    from <span className="text-[#856DF3] font-bold bg-[#EDE9FE] px-1 rounded">{c.from}</span> Invoices
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main: Table + Detail */}
                <div className="flex gap-4 flex-1 min-h-0">

                    {/* Invoices Table */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col overflow-hidden min-w-0">
                        <div className="flex justify-between items-center mb-4 gap-3">
                            <h3 className="text-xs font-bold text-gray-800 shrink-0">Invoices</h3>
                            <div className="relative flex-1 max-w-xs">
                                <Search size={11} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search invoices"
                                    className="w-full border border-gray-200 rounded-lg pl-8 pr-3 py-1.5 text-[10px] outline-none focus:border-[#856DF3]/40"
                                />
                            </div>
                            <button className="bg-[#1A1A1A] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-black transition-colors shrink-0">New Invoice</button>
                        </div>

                        <div className="overflow-y-auto flex-1">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-white">
                                    <tr className="border-b border-gray-100 text-[9px] text-gray-400 font-bold uppercase">
                                        <th className="py-2 px-2"><input type="checkbox" className="rounded" /></th>
                                        <th className="py-2 px-2">Invoice ID <ChevronDown size={8} className="inline" /></th>
                                        <th className="py-2 px-2">Company <ChevronDown size={8} className="inline" /></th>
                                        <th className="py-2 px-2">Shipping ID <ChevronDown size={8} className="inline" /></th>
                                        <th className="py-2 px-2">Date <ChevronDown size={8} className="inline" /></th>
                                        <th className="py-2 px-2">Amount <ChevronDown size={8} className="inline" /></th>
                                        <th className="py-2 px-2">Status <ChevronDown size={8} className="inline" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map(inv => {
                                        const isActive = inv.id === selected;
                                        const initials = inv.company.split(" ").map(w => w[0]).join("").slice(0, 2);
                                        return (
                                            <tr
                                                key={inv.id}
                                                onClick={() => setSelected(inv.id)}
                                                className={`border-b border-gray-50 cursor-pointer text-[10px] transition-colors ${isActive ? "bg-[#EDE9FE]/40" : "hover:bg-gray-50"}`}
                                            >
                                                <td className="py-2.5 px-2">
                                                    <input type="checkbox" checked={isActive} onChange={() => {}} className="rounded accent-[#856DF3]" />
                                                </td>
                                                <td className="py-2.5 px-2">
                                                    <span className={`font-bold ${isActive ? "text-[#856DF3]" : "text-[#856DF3]"}`}>{inv.id}</span>
                                                    <span className="ml-1 text-gray-300 text-[9px]">📄</span>
                                                </td>
                                                <td className="py-2.5 px-2">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black shrink-0 ${companyColors[inv.company] || "bg-gray-100 text-gray-600"}`}>{initials}</span>
                                                        <span className="font-semibold text-gray-700 whitespace-nowrap">{inv.company}</span>
                                                    </div>
                                                </td>
                                                <td className="py-2.5 px-2 text-gray-500 font-medium">{inv.shipping}</td>
                                                <td className="py-2.5 px-2 text-gray-500 font-medium leading-tight">
                                                    <div>{inv.issued} <span className="text-[8px] text-gray-400">(Issued)</span></div>
                                                    <div>{inv.due} <span className="text-[8px] text-gray-400">(Due)</span></div>
                                                </td>
                                                <td className="py-2.5 px-2 font-bold text-gray-800">{inv.amount}</td>
                                                <td className="py-2.5 px-2">
                                                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${statusStyle[inv.status]}`}>{inv.status}</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Invoice Details */}
                    <div className="w-72 shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-4 overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xs font-bold text-gray-800">Invoice Details</h3>
                            <div className="flex items-center gap-1.5">
                                <button className="px-2.5 py-1 text-[9px] font-bold border border-gray-200 rounded-lg hover:bg-gray-50">Edit</button>
                                <button className="px-2.5 py-1 text-[9px] font-bold border border-gray-200 rounded-lg hover:bg-gray-50">Hold</button>
                                <button className="px-2.5 py-1 text-[9px] font-bold bg-[#1A1A1A] text-white rounded-lg hover:bg-black">Send Invoice</button>
                            </div>
                        </div>

                        {selectedInv && (
                            <>
                                {/* Invoice ID + dates */}
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[11px] font-extrabold text-[#856DF3]">Invoice #{selectedInv.id}</p>
                                            <span className={`inline-block mt-1 px-2 py-0.5 text-[8px] font-bold rounded ${statusStyle[selectedInv.status]}`}>{selectedInv.status}</span>
                                        </div>
                                        <div className="text-right text-[9px] text-gray-500">
                                            <p>Issue Date: <span className="font-bold text-gray-700">{selectedInv.issued}</span></p>
                                            <p>Due Date: <span className="font-bold text-gray-700">{selectedInv.due}</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bill From / To */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-[9px] text-gray-400 font-semibold mb-1">Bill From</p>
                                        <p className="text-[11px] font-extrabold text-gray-900">ModaWear</p>
                                        <p className="text-[9px] text-[#856DF3]">billing@modawear.com</p>
                                        <p className="text-[8px] text-gray-500 mt-1 leading-tight">89 Franklin St, Boston, MA 02110, USA</p>
                                        <p className="text-[8px] text-gray-500">+1 617-555-2290</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-gray-400 font-semibold mb-1">Bill To</p>
                                        <p className="text-[11px] font-extrabold text-gray-900">ShipNow Logistics</p>
                                        <p className="text-[9px] text-[#856DF3]">accounts@shipnow.com</p>
                                        <p className="text-[8px] text-gray-500 mt-1 leading-tight">901 Distribution Ave, Charlotte, NC 28217, USA</p>
                                        <p className="text-[8px] text-gray-500">+1 704-555-9911</p>
                                    </div>
                                </div>

                                {/* Package Summary */}
                                <div>
                                    <p className="text-[11px] font-bold text-gray-800 mb-2">Package Summary</p>
                                    <table className="w-full text-[9px]">
                                        <thead>
                                            <tr className="bg-gray-50 text-gray-400 font-bold uppercase">
                                                <th className="py-1.5 px-1.5 text-left">Description</th>
                                                <th className="py-1.5 px-1 text-left">Shipment Type</th>
                                                <th className="py-1.5 px-1 text-right">Price</th>
                                                <th className="py-1.5 px-1 text-right">Qty</th>
                                                <th className="py-1.5 px-1 text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {packageItems.map((item, i) => (
                                                <tr key={i} className="border-b border-gray-50">
                                                    <td className="py-2 px-1.5 font-semibold text-gray-700 leading-tight">{item.desc}</td>
                                                    <td className="py-2 px-1 text-gray-500 leading-tight">{item.type}<br /><span className="text-[8px]">{item.sub}</span></td>
                                                    <td className="py-2 px-1 text-right font-semibold text-gray-700">{item.price}</td>
                                                    <td className="py-2 px-1 text-right font-semibold text-gray-700">{item.qty}</td>
                                                    <td className="py-2 px-1 text-right font-bold text-gray-800">{item.amount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Totals */}
                                    <div className="mt-2 space-y-1 text-[10px]">
                                        {[["Sub Total","$910.00"],["Tax (8%)","$72.80"],["Fee","$10.00"]].map(([k,v])=>(
                                            <div key={k} className="flex justify-between text-gray-500">
                                                <span>{k}</span><span className="font-semibold text-gray-700">{v}</span>
                                            </div>
                                        ))}
                                        <div className="flex justify-between font-extrabold text-gray-900 border-t border-gray-100 pt-1.5">
                                            <span>Total</span><span>$992.80</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Note */}
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-[9px] font-bold text-gray-500 mb-1">Note</p>
                                    <p className="text-[9px] text-gray-600 leading-snug">Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
}
