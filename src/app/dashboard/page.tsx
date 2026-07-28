"use client";

import Image from "next/image";
import { useState } from "react";
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
    Search,
    Plus,
    TrendingUp,
    TrendingDown,
    ArrowUpRight,
    Filter,
    MoreHorizontal,
    PlusCircle,
    MinusCircle,
    Tag,
    RotateCcw,
    CheckCircle2
} from "lucide-react";

export default function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [shipmentSearch, setShipmentSearch] = useState("");
    const [activeTab, setActiveTab] = useState("Dashboard");

    // Sidebar navigation items
    const navItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Analytics", icon: BarChart3 },
        { name: "Calendar", icon: Calendar },
        { name: "Shipments", icon: Package },
        { name: "Tracking", icon: MapPin },
        { name: "Warehouse", icon: Warehouse },
        { name: "Fleets", icon: Truck },
        { name: "Drivers", icon: Users },
        { name: "Invoices & Billing", icon: FileText },
    ];

    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FD] text-gray-800 font-sans">
            {/* Left Sidebar */}
            <aside className="w-[260px] bg-white border-r border-gray-100 flex flex-col justify-between py-6 px-4 shrink-0">
                <div className="flex flex-col gap-6">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-2 px-3">
                        <Image
                            src="/logo-vivid.png"
                            alt="ShipNow Logo"
                            width={24}
                            height={24}
                            className="h-6 w-6 object-contain"
                        />
                        <span className="text-xl font-black italic tracking-wider text-[#1A1A1A]">
                            SHIPNOW
                        </span>
                    </div>

                    {/* User Profile Card */}
                    <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2">
                            <div className="relative h-9 w-9 rounded-full overflow-hidden bg-purple-200">
                                <Image
                                    src="https://picsum.photos/id/1027/100/100"
                                    alt="User avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-800 leading-tight">John Doe</span>
                                <span className="text-[10px] text-gray-400 font-medium">Admin</span>
                            </div>
                        </div>
                        <ChevronDown size={14} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.name;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveTab(item.name)}
                                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                        isActive
                                            ? "bg-[#E8E4FD] text-[#856DF3]"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <Icon size={16} className={isActive ? "text-[#856DF3]" : "text-gray-400"} />
                                        <span>{item.name}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </nav>

                    <div className="h-[1px] bg-gray-100 my-1" />

                    {/* Secondary Navigation */}
                    <div className="flex flex-col gap-1">
                        <button className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-800 cursor-pointer">
                            <div className="flex items-center gap-2.5">
                                <MessageSquare size={16} className="text-gray-400" />
                                <span>Message</span>
                            </div>
                            <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#856DF3] rounded-full">19</span>
                        </button>
                        <button className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-800 cursor-pointer">
                            <div className="flex items-center gap-2.5">
                                <Bell size={16} className="text-gray-400" />
                                <span>Notification</span>
                            </div>
                            <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-blue-500 rounded-full">5</span>
                        </button>
                        <button className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-800 cursor-pointer">
                            <div className="flex items-center gap-2.5">
                                <Settings size={16} className="text-gray-400" />
                                <span>Settings</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Promo Card */}
                <div className="bg-[#1A1A1A] text-white p-4 rounded-2xl flex flex-col gap-3 relative overflow-hidden shadow-lg mt-4">
                    <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/5 rounded-full" />
                    <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-white/5 rounded-full" />
                    <div className="flex flex-col gap-1.5 z-10">
                        <h4 className="text-xs font-bold leading-snug">Loving ShipNow Free?</h4>
                        <p className="text-[10px] text-gray-400 leading-normal">
                            Go Pro to access priority support, real-time tracking, and full analytics.
                        </p>
                    </div>
                    <button className="w-full bg-white text-gray-900 py-2 rounded-xl text-[10px] font-bold hover:bg-gray-100 transition-colors z-10 cursor-pointer">
                        Go Pro Today
                    </button>
                </div>
            </aside>

            {/* Main Content Pane */}
            <main className="flex-1 flex flex-col overflow-y-auto max-h-screen py-6 px-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <span className="text-xs font-semibold text-gray-400 block">Hello John!</span>
                        <h1 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">Good Morning</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative w-64">
                            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search anything"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-full border border-gray-100 bg-white pl-9 pr-4 py-2 text-xs outline-none focus:border-[#856DF3]/40 focus:ring-2 focus:ring-[#856DF3]/10 transition-all shadow-sm"
                            />
                        </div>
                        <button className="bg-[#1A1A1A] hover:bg-black text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md shadow-black/10 transition-colors cursor-pointer">
                            <Plus size={14} />
                            <span>Add New Shipping</span>
                        </button>
                    </div>
                </header>

                {/* Unified Main Grid Layout (Left Content Column + Right Sidebar Widgets Column) */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start mb-8">
                    
                    {/* Left Column (Spans 3/4) */}
                    <div className="xl:col-span-3 flex flex-col gap-6">
                        
                        {/* Metrics Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Active Shipments Card */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center relative overflow-hidden group hover:border-[#856DF3]/20 transition-all duration-200">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] font-bold text-gray-400 tracking-wide uppercase">Active Shipments</span>
                                    <span className="text-3xl font-extrabold text-gray-900 leading-tight">1,284 <span className="text-xs font-semibold text-gray-400">shipments</span></span>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 mt-2 bg-emerald-50 w-fit px-1.5 py-0.5 rounded">
                                        <TrendingUp size={10} />
                                        <span>+8.7% <span className="text-gray-400 font-medium">from last week</span></span>
                                    </div>
                                </div>
                                <div className="h-10 w-10 bg-[#856DF3] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#856DF3]/20 shrink-0">
                                    <Truck size={18} />
                                </div>
                            </div>

                            {/* Delivery Performance Card */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center relative overflow-hidden group hover:border-blue-500/20 transition-all duration-200">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] font-bold text-gray-400 tracking-wide uppercase">Delivery Performance</span>
                                    <span className="text-3xl font-extrabold text-gray-900 leading-tight">94.3% <span className="text-xs font-semibold text-gray-400">on-time</span></span>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-rose-500 mt-2 bg-rose-50 w-fit px-1.5 py-0.5 rounded">
                                        <TrendingDown size={10} />
                                        <span>-1.2% <span className="text-gray-400 font-medium">from last week</span></span>
                                    </div>
                                </div>
                                <div className="h-10 w-10 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                                    <BarChart3 size={18} />
                                </div>
                            </div>

                            {/* Revenue Card */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center relative overflow-hidden group hover:border-[#856DF3]/20 transition-all duration-200">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] font-bold text-gray-400 tracking-wide uppercase">Revenue</span>
                                    <span className="text-3xl font-extrabold text-gray-900 leading-tight">$82,450</span>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 mt-2 bg-emerald-50 w-fit px-1.5 py-0.5 rounded">
                                        <TrendingUp size={10} />
                                        <span>+12.4% <span className="text-gray-400 font-medium">from last month</span></span>
                                    </div>
                                </div>
                                <div className="h-10 w-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                                    <span className="font-extrabold text-base">$</span>
                                </div>
                            </div>
                        </div>

                        {/* Charts Row */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Shipment Statistic Chart (Spans 7 columns for wider visual weight) */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm md:col-span-7 flex flex-col justify-between">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xs font-bold text-gray-800 tracking-wide">Shipment Statistic</h3>
                                    <div className="relative">
                                        <select className="text-[10px] font-bold bg-gray-50 border border-gray-100 rounded-lg px-2 py-1 outline-none text-gray-600 cursor-pointer">
                                            <option>Last Year</option>
                                            <option>Last Month</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-2xl font-extrabold text-gray-900 leading-none">4,352</span>
                                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1 rounded flex items-center gap-0.5">
                                        <TrendingUp size={8} /> +8.7%
                                    </span>
                                </div>

                                {/* Custom SVG Bar Chart */}
                                <div className="relative h-44 w-full mt-4 flex items-end justify-between pl-10 pr-2">
                                    {/* Y-axis values */}
                                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-bold z-10">
                                        <span>4.8K</span>
                                        <span>3.6K</span>
                                        <span>2.4K</span>
                                        <span>1.2K</span>
                                        <span>0K</span>
                                    </div>

                                    {/* Dotted Grid lines */}
                                    <div className="absolute left-10 right-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                    </div>

                                    {/* Bar Charts */}
                                    {[
                                        { m: "Jan", v: 45 },
                                        { m: "Feb", v: 50 },
                                        { m: "Mar", v: 62 },
                                        { m: "Apr", v: 58 },
                                        { m: "May", v: 85, tooltip: "3,124", active: true },
                                        { m: "Jun", v: 70 },
                                        { m: "Jul", v: 65 },
                                        { m: "Aug", v: 75 },
                                    ].map((bar, index) => (
                                        <div key={index} className="flex flex-col items-center gap-1.5 flex-1 relative group z-10">
                                            {bar.active && (
                                                <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[8px] font-bold px-2 py-1 rounded shadow-md z-20 flex flex-col items-center">
                                                    <span className="text-[7px] text-gray-400 leading-none">May 2035</span>
                                                    <span>{bar.tooltip}</span>
                                                    <div className="w-1.5 h-1.5 bg-[#1A1A1A] rotate-45 -mb-1 mt-0.5" />
                                                </div>
                                            )}
                                            <div className="w-6 bg-gray-100 rounded-t-sm h-[110px] flex items-end relative overflow-hidden">
                                                <div
                                                    style={{ height: `${bar.v}%` }}
                                                    className={`w-full rounded-t-sm transition-all duration-300 ${
                                                        bar.active
                                                            ? "bg-[#856DF3]"
                                                            : "bg-gray-400 group-hover:bg-[#856DF3]/75"
                                                    }`}
                                                />
                                                {bar.active && (
                                                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#856DF3]/15 animate-pulse" />
                                                )}
                                            </div>
                                            <span className="text-[9px] text-gray-400 font-bold leading-none">{bar.m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Profit Summary Chart (Spans 5 columns) */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm md:col-span-5 flex flex-col justify-between">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-xs font-bold text-gray-800 tracking-wide">Profit Summary</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-bold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#856DF3]" /> Revenue
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-bold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" /> Cost
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-2xl font-extrabold text-gray-900 leading-none">$624,550</span>
                                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1 rounded flex items-center gap-0.5">
                                        <TrendingUp size={8} /> 9.62%
                                    </span>
                                </div>

                                {/* Double Bar Chart */}
                                <div className="relative h-44 w-full mt-4 flex items-end justify-between pl-10 pr-2">
                                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-gray-400 font-bold z-10">
                                        <span>$100K</span>
                                        <span>$75K</span>
                                        <span>$50K</span>
                                        <span>$25K</span>
                                        <span>$0</span>
                                    </div>

                                    {/* Dotted Grid lines */}
                                    <div className="absolute left-10 right-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                        <div className="border-b border-gray-100 w-full" />
                                    </div>

                                    {[
                                        { m: "Jan", r: 40, c: 25 },
                                        { m: "Feb", r: 45, c: 28 },
                                        { m: "Mar", r: 35, c: 22 },
                                        { m: "Apr", r: 52, c: 32 },
                                        { m: "May", r: 60, c: 38 },
                                        { m: "Jun", r: 85, c: 45, active: true },
                                        { m: "Jul", r: 55, c: 30 },
                                        { m: "Aug", r: 65, c: 40 },
                                    ].map((bar, index) => (
                                        <div key={index} className="flex flex-col items-center gap-1.5 flex-1 relative z-10">
                                            {bar.active && (
                                                <div className="absolute bottom-[105px] left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[8px] font-bold p-1.5 rounded shadow-lg z-20 flex flex-col gap-0.5 w-[90px] border border-gray-800">
                                                    <div className="flex justify-between items-center text-[7px] text-gray-400">
                                                        <span>Revenue</span>
                                                        <span className="text-[#856DF3] font-extrabold">$87,524</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-[7px] text-gray-400">
                                                        <span>Cost</span>
                                                        <span className="text-white font-extrabold">$45,680</span>
                                                    </div>
                                                    <div className="w-1.5 h-1.5 bg-[#1A1A1A] rotate-45 -mb-2 mt-0.5 mx-auto" />
                                                </div>
                                            )}
                                            <div className="flex gap-[2px] items-end h-[110px]">
                                                <div
                                                    style={{ height: `${bar.r}%` }}
                                                    className={`w-2.5 rounded-t-sm transition-all duration-300 ${
                                                        bar.active ? "bg-[#856DF3]" : "bg-[#D8D4FC] hover:bg-[#856DF3]/85"
                                                    }`}
                                                />
                                                <div
                                                    style={{ height: `${bar.c}%` }}
                                                    className={`w-2.5 rounded-t-sm transition-all duration-300 ${
                                                        bar.active ? "bg-[#1A1A1A]" : "bg-gray-300 hover:bg-gray-400"
                                                    }`}
                                                />
                                            </div>
                                            <span className="text-[9px] text-gray-400 font-bold leading-none">{bar.m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Categories & Map Row */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Product Categories (Spans 5 columns) */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm md:col-span-5 flex flex-col justify-between">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xs font-bold text-gray-800 tracking-wide">Product Categories</h3>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MoreHorizontal size={14} />
                                    </button>
                                </div>
                                <div className="flex justify-between items-baseline mb-3">
                                    <span className="text-[10px] text-gray-400 font-semibold uppercase leading-none">Total Products</span>
                                    <span className="text-xl font-extrabold text-gray-900 leading-none">1,000</span>
                                </div>

                                {/* Combined split indicator bar */}
                                <div className="w-full h-3 rounded-full overflow-hidden flex mb-4">
                                    <div className="h-full bg-[#856DF3] w-[24%]" />
                                    <div className="h-full bg-[#D8D4FC] w-[20%]" />
                                    <div className="h-full bg-[#1A1A1A] w-[18%]" />
                                    <div className="h-full bg-gray-400 w-[14%]" />
                                    <div className="h-full bg-gray-200 w-[12%]" />
                                    <div className="h-full bg-gray-100 w-[12%]" />
                                </div>

                                {/* Category List */}
                                <div className="flex flex-col gap-2">
                                    {[
                                        { n: "Electronics", c: "bg-[#856DF3]", qty: "240 products", pct: "24%" },
                                        { n: "Home & Kitchen", c: "bg-[#D8D4FC]", qty: "200 products", pct: "20%" },
                                        { n: "Apparel", c: "bg-[#1A1A1A]", qty: "180 products", pct: "18%" },
                                        { n: "Beauty & Health", c: "bg-gray-400", qty: "140 products", pct: "14%" },
                                        { n: "Sports & Outdoors", c: "bg-gray-200", qty: "120 products", pct: "12%" },
                                        { n: "Automotive", c: "bg-gray-100", qty: "120 products", pct: "12%" },
                                    ].map((cat, i) => (
                                        <div key={i} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${cat.c}`} />
                                                <span className="text-[10px] font-bold text-gray-800">{cat.n}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[9px] text-gray-400 font-semibold bg-gray-50 px-1.5 py-0.5 rounded">{cat.qty}</span>
                                                <span className="text-[10px] font-extrabold text-gray-800 w-8 text-right">{cat.pct}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Route Tracking Map Illustration (Spans 7 columns) */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm md:col-span-7 flex flex-col justify-between">
                                <div className="relative flex-1 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden p-4 min-h-[220px] flex flex-col justify-between">
                                    {/* Map Mock Grid lines */}
                                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
                                        {Array.from({ length: 36 }).map((_, idx) => (
                                            <div key={idx} className="border border-slate-400 border-dashed" />
                                        ))}
                                    </div>

                                    {/* Floating Map Search controls */}
                                    <div className="flex items-center justify-between gap-1 z-10 w-full">
                                        <div className="relative flex-1">
                                            <Search size={10} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search by Shipping ID..."
                                                className="w-full bg-white border border-gray-100 pl-7 pr-2 py-1 rounded-lg text-[9px] outline-none"
                                                readOnly
                                            />
                                        </div>
                                        <div className="flex flex-col bg-white border border-gray-100 rounded-lg p-0.5 shadow-sm text-gray-500">
                                            <button className="p-0.5 hover:text-gray-800"><PlusCircle size={10} /></button>
                                            <button className="p-0.5 hover:text-gray-800"><MinusCircle size={10} /></button>
                                        </div>
                                    </div>

                                    {/* Center Plane/Route Line */}
                                    <div className="relative my-4 flex items-center justify-center h-16">
                                        <svg className="w-full h-8 overflow-visible" viewBox="0 0 200 40">
                                            <path
                                                d="M10 20 Q100 0, 190 20"
                                                fill="transparent"
                                                stroke="#856DF3"
                                                strokeWidth="2"
                                                strokeDasharray="4 4"
                                            />
                                            {/* Route dot origin */}
                                            <circle cx="10" cy="20" r="4" fill="#856DF3" />
                                            {/* Route dot destination */}
                                            <circle cx="190" cy="20" r="4" fill="#856DF3" />
                                            {/* Plane cursor */}
                                            <g className="translate-x-[110px] -translate-y-[8px]">
                                                <circle cx="0" cy="0" r="8" fill="#856DF3" className="animate-ping absolute inset-0 opacity-20" />
                                                <circle cx="0" cy="0" r="8" fill="#856DF3" />
                                                <path d="M-3 -3 L3 0 L-3 3" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                            </g>
                                        </svg>
                                    </div>

                                    {/* Tracking details */}
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 z-10 flex flex-col gap-1.5 shadow-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-bold text-gray-800">#SH8743921</span>
                                            <span className="text-[8px] font-extrabold text-[#856DF3] bg-[#E8E4FD] px-1.5 py-0.5 rounded-full">In Transit</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[8px] text-gray-400">
                                            <span>Courier: <span className="font-bold text-gray-700">Daniel Cooper</span></span>
                                            <span>SkyLogix Express</span>
                                        </div>
                                        <div className="h-[1px] bg-gray-50 my-0.5" />
                                        <div className="flex justify-between items-center leading-tight">
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-bold text-gray-800">San Francisco, CA, USA</span>
                                                <span className="text-[7px] text-gray-400 font-semibold">Mar 19, 2035 - 10:30 AM</span>
                                            </div>
                                            <div className="flex flex-col text-right">
                                                <span className="text-[8px] font-bold text-gray-800">New York, NY, USA</span>
                                                <span className="text-[7px] text-gray-400 font-semibold">Mar 23, 2035 - 03:00 PM (est.)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Shipments Table (Full-width in left pane) */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
                                <h3 className="text-xs font-bold text-gray-800 tracking-wide">Recent Shipments</h3>
                                <div className="flex items-center gap-2">
                                    <div className="relative w-48">
                                        <Search size={10} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search shipment"
                                            value={shipmentSearch}
                                            onChange={(e) => setShipmentSearch(e.target.value)}
                                            className="w-full rounded-full border border-gray-100 pl-7 pr-3 py-1.5 text-[10px] outline-none"
                                        />
                                    </div>
                                    <button className="border border-gray-100 p-1.5 rounded-full text-gray-400 hover:text-gray-700 bg-gray-50 flex items-center justify-center">
                                        <Filter size={12} />
                                    </button>
                                    <button className="border border-gray-100 p-1.5 rounded-full text-gray-400 hover:text-gray-700 bg-gray-50 flex items-center justify-center">
                                        <MoreHorizontal size={12} />
                                    </button>
                                </div>
                            </div>

                            {/* Shipment list table */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-50 text-[9px] text-gray-400 font-bold uppercase tracking-wider bg-gray-50">
                                            <th className="py-2.5 px-3">Shipping ID</th>
                                            <th className="py-2.5 px-3">Company</th>
                                            <th className="py-2.5 px-3">Carriers</th>
                                            <th className="py-2.5 px-3">Route</th>
                                            <th className="py-2.5 px-3">Shipping Date</th>
                                            <th className="py-2.5 px-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[10px] font-bold text-gray-800">
                                        {[
                                            { id: "#SH9283746", company: "TechGear Inc.", category: "Electronics", carrier: "FedEx", route: "Los Angeles, CA → Chicago, IL", date: "Mar 20, 2035", status: "In Transit", color: "text-purple-600 bg-purple-50 border-purple-100" },
                                            { id: "#SH9182635", company: "StyleHub Co.", category: "Apparel", carrier: "DHL", route: "New York, NY → Atlanta, GA", date: "Mar 19, 2035", status: "Out for Delivery", color: "text-[#856DF3] bg-[#E8E4FD] border-[#856DF3]/20" },
                                            { id: "#SH9037821", company: "FreshNest", category: "Home & Kitchen", carrier: "UPS", route: "Dallas, TX → Miami, FL", date: "Mar 18, 2035", status: "Delivered", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                                            { id: "#SH9374652", company: "FitPlus Gear", category: "Sports & Outdoors", carrier: "USPS", route: "Seattle, WA → Denver, CO", date: "Mar 21, 2035", status: "Processing", color: "text-blue-600 bg-blue-50 border-blue-100" },
                                            { id: "#SH9457830", company: "AutoParts Pro", category: "Automotive", carrier: "Aramex", route: "Detroit, MI → San Diego, CA", date: "Mar 20, 2035", status: "In Transit", color: "text-purple-600 bg-purple-50 border-purple-100" },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors last:border-none">
                                                <td className="py-3 px-3 text-[#856DF3] font-extrabold">{row.id}</td>
                                                <td className="py-3 px-3">
                                                    <div className="flex flex-col">
                                                        <span>{row.company}</span>
                                                        <span className="text-[8px] text-gray-400 font-semibold leading-none mt-0.5">{row.category}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-3 text-gray-500 font-medium">{row.carrier}</td>
                                                <td className="py-3 px-3 text-gray-500 font-medium">{row.route}</td>
                                                <td className="py-3 px-3 text-gray-400 font-semibold">{row.date}</td>
                                                <td className="py-3 px-3">
                                                    <span className={`px-2 py-0.5 rounded text-[8px] font-extrabold border ${row.color}`}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Sidebar Widgets Stacked Vertically, Spans 1/4) */}
                    <div className="xl:col-span-1 flex flex-col gap-6">
                        
                        {/* Shipment Type Donut Card */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xs font-bold text-gray-800 tracking-wide">Shipment Type</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>

                            {/* Circular Donut Diagram */}
                            <div className="relative h-32 w-32 mx-auto flex items-center justify-center my-3">
                                {/* Inner label */}
                                <div className="absolute text-center flex flex-col">
                                    <span className="text-[8px] text-gray-400 font-bold uppercase leading-none">Total Shipment</span>
                                    <span className="text-xl font-extrabold text-gray-900 leading-tight">2,500</span>
                                </div>

                                {/* SVG Donut Chart */}
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    {/* Rail Freight: 9% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#E5E7EB"
                                        strokeWidth="10"
                                        fill="transparent"
                                        strokeDasharray="251.2"
                                        strokeDashoffset="228.6"
                                    />
                                    {/* Ocean Freight: 17% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#9CA3AF"
                                        strokeWidth="10"
                                        fill="transparent"
                                        strokeDasharray="251.2"
                                        strokeDashoffset="185.9"
                                    />
                                    {/* Air Freight: 28% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#1A1A1A"
                                        strokeWidth="10"
                                        fill="transparent"
                                        strokeDasharray="251.2"
                                        strokeDashoffset="115.6"
                                    />
                                    {/* Road Freight: 46% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#856DF3"
                                        strokeWidth="10"
                                        fill="transparent"
                                        strokeDasharray="251.2"
                                        strokeDashoffset="0"
                                    />
                                </svg>
                            </div>

                            {/* Donut Legend */}
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded bg-[#856DF3]" />
                                    <div className="flex flex-col text-[8px] leading-tight">
                                        <span className="font-bold text-gray-800">Road Freight</span>
                                        <span className="text-gray-400 font-semibold">1,150 (46%)</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded bg-gray-400" />
                                    <div className="flex flex-col text-[8px] leading-tight">
                                        <span className="font-bold text-gray-800">Ocean Freight</span>
                                        <span className="text-gray-400 font-semibold">425 (17%)</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded bg-[#1A1A1A]" />
                                    <div className="flex flex-col text-[8px] leading-tight">
                                        <span className="font-bold text-gray-800">Air Freight</span>
                                        <span className="text-gray-400 font-semibold">700 (28%)</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded bg-gray-200" />
                                    <div className="flex flex-col text-[8px] leading-tight">
                                        <span className="font-bold text-gray-800">Rail Freight</span>
                                        <span className="text-gray-400 font-semibold">225 (9%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shipment Alerts Card */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xs font-bold text-gray-800 tracking-wide">Shipment Alerts</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-0.5 mb-3">
                                <span className="text-xl font-extrabold text-gray-900 leading-none">12 <span className="text-[10px] text-rose-500 font-bold bg-rose-50 px-1 rounded ml-1">Delays Detected</span></span>
                            </div>

                            {/* Top quick stats cards */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-purple-50 p-2 rounded-xl border border-purple-100 flex flex-col items-center">
                                    <span className="text-lg font-black text-purple-700 leading-none">5</span>
                                    <span className="text-[6px] text-gray-400 font-bold text-center leading-tight mt-1 uppercase">Customs Delay</span>
                                </div>
                                <div className="bg-blue-50 p-2 rounded-xl border border-blue-100 flex flex-col items-center">
                                    <span className="text-lg font-black text-blue-700 leading-none">4</span>
                                    <span className="text-[6px] text-gray-400 font-bold text-center leading-tight mt-1 uppercase">Incorrect Addr</span>
                                </div>
                                <div className="bg-indigo-50 p-2 rounded-xl border border-indigo-100 flex flex-col items-center">
                                    <span className="text-lg font-black text-indigo-700 leading-none">3</span>
                                    <span className="text-[6px] text-gray-400 font-bold text-center leading-tight mt-1 uppercase">Weather Hold</span>
                                </div>
                            </div>

                            {/* Alert list */}
                            <div className="flex flex-col gap-2">
                                {[
                                    { title: "Customs Clearance Delay", id: "#SH8743921", type: "Ocean Freight", date: "Mar 20" },
                                    { title: "Incorrect Address Provided", id: "#SH85725810", type: "Road Freight", date: "Mar 20" },
                                    { title: "Weather-Related Hold", id: "#SH88790043", type: "Air Freight", date: "Mar 19" },
                                    { title: "Incorrect Address Provided", id: "#SH8716654", type: "Rail Freight", date: "Mar 18" },
                                ].map((alert, i) => (
                                    <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl border border-gray-50 hover:border-gray-100 transition-all">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-gray-800 leading-none">{alert.title}</span>
                                                <span className="text-[8px] text-[#856DF3] font-extrabold mt-1">{alert.id} <span className="text-gray-400 font-semibold">· {alert.type}</span></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[8px] text-gray-400 font-bold">{alert.date}</span>
                                            <ArrowUpRight size={12} className="text-gray-400 hover:text-[#856DF3]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity Timeline Card */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xs font-bold text-gray-800 tracking-wide">Recent Activity</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>

                            {/* Activity Timeline */}
                            <div className="flex flex-col gap-4 relative pl-3 border-l border-gray-100 ml-2">
                                {[
                                    { user: "@TechGuru99", text: "submitted a bulk shipment request", time: "12:00 PM", icon: Package, color: "bg-purple-100 text-[#856DF3] border-purple-200" },
                                    { user: "@SupportKen", text: "added a priority tag to Order ID 77859JKL", time: "11:20 AM", icon: Tag, color: "bg-blue-100 text-blue-600 border-blue-200" },
                                    { user: "@SallyMae88", text: "initiated a return process for Order ID 44556GHI", time: "11:00 AM", icon: RotateCcw, color: "bg-indigo-100 text-indigo-600 border-indigo-200" },
                                    { user: "@AdminLisa", text: "resolved a delivery issue for Order ID 12345XYZ", time: "10:15 AM", icon: CheckCircle2, color: "bg-emerald-100 text-emerald-600 border-emerald-200" },
                                ].map((act, i) => {
                                    const Icon = act.icon;
                                    return (
                                        <div key={i} className="relative flex gap-3 items-start group">
                                            {/* Connector Dot */}
                                            <div className="absolute -left-[20px] top-1 h-3 w-3 rounded-full border-2 border-white bg-gray-300 group-hover:bg-[#856DF3] transition-colors" />

                                            {/* Icon Container */}
                                            <div className={`h-8 w-8 rounded-lg flex items-center justify-center border ${act.color} shrink-0`}>
                                                <Icon size={14} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col leading-snug">
                                                <p className="text-[10px] text-gray-500 font-semibold">
                                                    <span className="text-gray-900 font-extrabold hover:text-[#856DF3] cursor-pointer">{act.user}</span> {act.text}
                                                </p>
                                                <span className="text-[8px] text-gray-400 font-bold mt-1">{act.time}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer (Full Width) */}
                <footer className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-bold">
                    <span>Copyright © 2025 ShipNow</span>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Term and conditions</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
                    </div>
                    {/* Social links */}
                    <div className="flex items-center gap-3 text-gray-300">
                        <a href="#" className="hover:text-gray-600 transition-colors">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-gray-600 transition-colors">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-gray-600 transition-colors">
                            <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-gray-600 transition-colors">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-gray-600 transition-colors">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>
                </footer>
            </main>
        </div>
    );
}
