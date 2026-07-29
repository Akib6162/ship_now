"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Calendar, ChevronUp } from "lucide-react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

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

const FlagUS = () => (
    <span className="flex items-center gap-1 text-xs text-gray-700 shrink-0">
        <svg className="w-4 h-3 rounded-sm" viewBox="0 0 28 20" fill="none">
            <rect width="28" height="20" rx="2" fill="#B22234" />
            <rect y="1.54" width="28" height="1.54" fill="white" />
            <rect y="4.62" width="28" height="1.54" fill="white" />
            <rect y="7.69" width="28" height="1.54" fill="white" />
            <rect y="10.77" width="28" height="1.54" fill="white" />
            <rect y="13.85" width="28" height="1.54" fill="white" />
            <rect y="16.92" width="28" height="1.54" fill="white" />
            <rect width="11.2" height="10.77" fill="#3C3B6E" />
        </svg>
        +1
        <ChevronDown size={11} className="text-gray-400" />
    </span>
);

interface Props {
    onBack: () => void;
}

export default function CreateShipmentPage({ onBack }: Props) {
    const [freightType, setFreightType] = useState("Road Freight");
    const [quantity, setQuantity] = useState(40);
    const [shippingMethod, setShippingMethod] = useState("");
    const [methodError, setMethodError] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [deliveryError, setDeliveryError] = useState(false);
    const [additionalServices, setAdditionalServices] = useState({
        insurance: true,
        signature: true,
        temperature: true,
        fragile: false,
    });
    const [notifyRecipient, setNotifyRecipient] = useState(true);

    const freightOptions = ["Road Freight", "Rail Freight", "Ocean Freight", "Air Freight"];

    function handleSubmit() {
        let hasError = false;
        if (!shippingMethod) { setMethodError(true); hasError = true; } else setMethodError(false);
        if (!deliveryAddress.trim()) { setDeliveryError(true); hasError = true; } else setDeliveryError(false);
        if (!hasError) alert("Shipment submitted successfully!");
    }

    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FD] text-gray-800 font-sans">
            <DashboardSidebar active="Shipments" />
            <main className="flex-1 flex flex-col overflow-y-auto max-h-screen py-6 px-8">
                <header className="flex items-start mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <button onClick={onBack} className="text-gray-500 hover:text-gray-800 transition-colors">
                                <ArrowLeft size={18} />
                            </button>
                            <h1 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">Create New Shipment</h1>
                        </div>
                        <p className="text-[11px] font-semibold text-[#856DF3] ml-7">
                            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                            <span className="text-gray-300 mx-1.5">/</span>
                            <button onClick={onBack} className="hover:underline text-[#856DF3]">Shipments</button>
                            <span className="text-gray-300 mx-1.5">/</span>
                            <span className="text-gray-400">Create New Shipment</span>
                        </p>
                    </div>
                </header>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-6">
                    <h2 className="text-sm font-bold text-gray-800">Shipment Form</h2>

                    {/* Sender & Recipient */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="border border-gray-100 rounded-xl p-4 flex flex-col gap-4">
                            <h3 className="text-xs font-bold text-gray-700">Sender Info</h3>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Company</label>
                                <input defaultValue="GreenHaven" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Email</label>
                                    <input defaultValue="logistics@greenhaven.com" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Phone Number</label>
                                    <div className="flex items-center border border-gray-200 rounded-lg bg-white px-2 gap-1 h-[34px]">
                                        <FlagUS />
                                        <input defaultValue="408-555-7210" className="flex-1 py-2 text-xs outline-none min-w-0" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Pickup Address</label>
                                <input defaultValue="1120 Birch Street, Portland, OR 97205, USA" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                            </div>
                        </div>

                        <div className="border border-gray-100 rounded-xl p-4 flex flex-col gap-4">
                            <h3 className="text-xs font-bold text-gray-700">Recipient Info</h3>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Company</label>
                                <input defaultValue="FreshNest" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Email</label>
                                    <input defaultValue="warehouse@freshnest.com" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Phone Number</label>
                                    <div className="flex items-center border border-gray-200 rounded-lg bg-white px-2 gap-1 h-[34px]">
                                        <FlagUS />
                                        <input defaultValue="786-555-4432" className="flex-1 py-2 text-xs outline-none min-w-0" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Delivery Address</label>
                                <input
                                    value={deliveryAddress}
                                    onChange={e => { setDeliveryAddress(e.target.value); if (e.target.value) setDeliveryError(false); }}
                                    placeholder="Street address, city, state/province, ZIP code"
                                    className={`w-full border rounded-lg px-3 py-2 text-xs outline-none bg-white ${deliveryError ? "border-[#856DF3]" : "border-gray-200 focus:border-[#856DF3]/50"}`}
                                />
                                {deliveryError && <p className="text-[10px] text-[#856DF3] font-semibold mt-1">Address is required.</p>}
                            </div>
                        </div>
                    </div>

                    {/* Package & Shipping Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* Package Details */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xs font-bold text-gray-700">Package Details</h3>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Item Description</label>
                                <input defaultValue="Premium Garden Tool Set" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Quantity</label>
                                    <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden h-[34px]">
                                        <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="flex-1 px-3 text-xs outline-none min-w-0 h-full" />
                                        <div className="flex flex-col border-l border-gray-200 h-full">
                                            <button onClick={() => setQuantity(q => q + 1)} className="px-2 flex-1 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 border-b border-gray-200"><ChevronUp size={10} /></button>
                                            <button onClick={() => setQuantity(q => Math.max(0, q - 1))} className="px-2 flex-1 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50"><ChevronDown size={10} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Value</label>
                                    <input defaultValue="$3,200" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Weight</label>
                                    <input defaultValue="125" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Units</label>
                                    <div className="flex items-center border border-gray-200 rounded-lg bg-white px-3 py-2 cursor-pointer h-[34px]">
                                        <span className="text-xs flex-1 text-gray-700">Kg</span>
                                        <ChevronDown size={12} className="text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Dimensions</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[{ val: "80", label: "Length" }, { val: "60", label: "Width" }, { val: "", placeholder: "ex. 20", label: "Height" }].map((d, i) => (
                                        <div key={i}>
                                            <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden h-[34px]">
                                                <input defaultValue={d.val} placeholder={d.placeholder} className="flex-1 px-2 text-xs outline-none min-w-0 h-full" />
                                                <span className="text-[10px] text-gray-400 pr-2 font-semibold shrink-0">cm</span>
                                            </div>
                                            <span className="text-[9px] text-gray-400 mt-1 block">{d.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Shipping Details */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xs font-bold text-gray-700">Shipping Details</h3>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-2">Freight Type</label>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    {freightOptions.map(opt => (
                                        <label key={opt} onClick={() => setFreightType(opt)} className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-gray-600">
                                            <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors ${freightType === opt ? "border-[#856DF3]" : "border-gray-300"}`}>
                                                {freightType === opt && <span className="w-2 h-2 rounded-full bg-[#856DF3] block" />}
                                            </span>
                                            {opt}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Carrier</label>
                                    <div className="flex items-center border border-gray-200 rounded-lg bg-white px-3 cursor-pointer h-[34px]">
                                        <span className="text-xs flex-1 text-gray-700">FedEx</span>
                                        <ChevronDown size={12} className="text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Shipping Method</label>
                                    <div
                                        className={`flex items-center border rounded-lg bg-white px-3 cursor-pointer h-[34px] ${methodError ? "border-[#856DF3]" : "border-gray-200"}`}
                                        onClick={() => { setShippingMethod("Standard"); setMethodError(false); }}
                                    >
                                        <span className={`text-xs flex-1 ${shippingMethod ? "text-gray-700" : "text-gray-400"}`}>{shippingMethod || "Select Method"}</span>
                                        <ChevronDown size={12} className="text-gray-400" />
                                    </div>
                                    {methodError && <p className="text-[10px] text-[#856DF3] font-semibold mt-1">Shipping method is required.</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Shipment ID</label>
                                    <input defaultValue="#SH9583742" readOnly className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none bg-white text-gray-500" />
                                    <span className="text-[9px] text-gray-400 mt-1 block">Auto-generated</span>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-1">Shipment Date</label>
                                    <div className="flex items-center border border-gray-200 rounded-lg bg-white px-3 cursor-pointer h-[34px] gap-2">
                                        <span className="text-xs flex-1 text-gray-700">March 21, 2035</span>
                                        <Calendar size={13} className="text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Notes</label>
                                <textarea placeholder="Add special delivery notes (optional)" rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#856DF3]/50 bg-white resize-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-2">Additional Services</label>
                                    <div className="flex flex-col gap-2">
                                        {([
                                            { key: "insurance", label: "Insurance Coverage" },
                                            { key: "signature", label: "Signature on Delivery" },
                                            { key: "temperature", label: "Temperature Control" },
                                            { key: "fragile", label: "Fragile Item Handling" },
                                        ] as const).map(({ key, label }) => (
                                            <label key={key} className="flex items-center gap-2 cursor-pointer text-[11px] font-semibold text-gray-700" onClick={() => setAdditionalServices(s => ({ ...s, [key]: !s[key] }))}>
                                                <span className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${additionalServices[key] ? "bg-[#856DF3] border-[#856DF3]" : "border-gray-300 bg-white"}`}>
                                                    {additionalServices[key] && (
                                                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                                                            <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    )}
                                                </span>
                                                {label}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-500 mb-2">Tracking & Status Updates</label>
                                    <label className="flex items-center gap-2 cursor-pointer text-[11px] font-semibold text-gray-700">
                                        <button
                                            type="button"
                                            onClick={() => setNotifyRecipient(v => !v)}
                                            className={`relative w-9 h-5 rounded-full transition-colors shrink-0 ${notifyRecipient ? "bg-[#856DF3]" : "bg-gray-200"}`}
                                        >
                                            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${notifyRecipient ? "translate-x-4" : "translate-x-0"}`} />
                                        </button>
                                        Notify Recipient via Email/SMS
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
                        <button type="button" onClick={onBack} className="px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                            Delete Form
                        </button>
                        <button type="button" onClick={handleSubmit} className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-black transition-colors">
                            Submit Shipment
                        </button>
                    </div>
                </div>

                <ShipmentFooter />
            </main>
        </div>
    );
}
