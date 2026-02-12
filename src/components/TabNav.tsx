"use client";

import { useState, useEffect } from "react";

type TabId = "success" | "intro" | "faq";

export default function TabNav() {
  const [activeTab, setActiveTab] = useState<TabId>("intro");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const tabs: { id: TabId; label: string; sectionId: string }[] = [
    { id: "success", label: "온라인 셀러 성공 공식", sectionId: "success-area" },
    { id: "intro", label: "레비오사 AI 소개", sectionId: "intro-area" },
    { id: "faq", label: "레비오사 AI FAQ", sectionId: "faq-area" },
  ];

  return (
    <section className="sticky left-0 right-0 top-[50px] z-[10] bg-[#272727] md:top-[60px]">
      <div className="mx-auto max-w-[1502px]">
        <div className="relative mx-auto max-w-[900px]">
          <ul className="flex items-center justify-between" id="tab-area">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`relative flex-1 text-sm font-medium md:text-[20px] ${
                  activeTab === tab.id ? "text-white" : "text-[#919191]"
                }`}
              >
                <button
                  onClick={() => {
                    setActiveTab(tab.id);
                    scrollToSection(tab.sectionId);
                  }}
                  className="block w-full py-2 text-center md:py-4"
                >
                  {tab.label}
                </button>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-red-500 md:h-[2px]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
