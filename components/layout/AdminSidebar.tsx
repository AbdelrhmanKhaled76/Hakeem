"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const DoctorsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" x2="19" y1="8" y2="14" />
    <line x1="22" x2="16" y1="11" y2="11" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LogsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

import { useSidebarStore } from "@/store/useSidebarStore";
import { useLanguage } from "@/localization/LanguageContext";

export function AdminSidebar() {
  const { t, isRTL } = useLanguage();
  const pathname = usePathname();
  const { logout } = useAuth();
  const { isCollapsed, toggleCollapse, isMobileMenuOpen, closeMobileMenu } = useSidebarStore();

  const navItems = [
    { label: t('nav.dashboard'), href: "/admin/dashboard", icon: <DashboardIcon /> },
    { label: t('nav.doctors'), href: "/admin/doctors", icon: <DoctorsIcon /> },
    { label: t('nav.users'), href: "/admin/users", icon: <UsersIcon /> },
    { label: t('nav.auditLogs'), href: "/admin/logs", icon: <LogsIcon /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
      <aside 
        className={`fixed ltr:left-0 rtl:right-0 top-0 block h-screen ltr:border-r-2 rtl:border-l-2 border-slate-100 bg-white/80 backdrop-blur-2xl z-50 transition-all duration-300 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] ${
          isCollapsed ? "w-[260px] md:w-[80px]" : "w-[260px] md:w-[80px] lg:w-[260px]"
        } ${isMobileMenuOpen ? "translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full ltr:md:translate-x-0 rtl:md:translate-x-0"}`}
      >
        <div className="flex h-full flex-col relative">
          {/* Toggle Button */}
          <button 
            onClick={toggleCollapse}
            className={`absolute top-10 hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-primary transition-colors z-50 ${
              isRTL ? "-left-3" : "-right-3"
            }`}
            aria-label={t('nav.toggleSidebar')}
          >
            {isRTL 
              ? (isCollapsed ? <ChevronLeftIcon /> : <ChevronRightIcon />) 
              : (isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />)
            }
          </button>

          <div className={`flex items-center px-6 py-8 ${isCollapsed ? "justify-start md:justify-center px-6 md:px-0" : "gap-3"}`}>
            <div className="flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-xl">
              <Image 
                src="/icon.png" 
                alt="Hakeem Logo" 
                width={40} 
                height={40} 
                className="object-contain w-full h-full"
                priority
              />
            </div>
            
            <div className={`overflow-hidden whitespace-nowrap transition-opacity duration-300 ml-3 md:ml-0 ${isCollapsed ? "block md:hidden" : "block md:hidden lg:block"}`}>
              <div className="text-lg font-bold font-heading tracking-tight text-primary">
                {t('common.appName')}
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-400">
                {t('common.brandTagline')}
              </div>
            </div>
          </div>

          <nav className="mt-4 flex-1 px-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    title={isCollapsed ? item.label : undefined}
                    className={`flex items-center rounded-[24px] py-4 font-bold transition-all duration-300 ${
                      isCollapsed ? "justify-start md:justify-center px-6 md:px-0 mx-2" : "gap-3 px-6 text-[15px]"
                    } ${
                      isActive
                        ? "bg-primary text-white shadow-xl shadow-primary/30 -translate-y-1 mx-2"
                        : "text-slate-500 hover:bg-white hover:shadow-md hover:text-slate-900 mx-2"
                    }`}
                  >
                    <span className={isActive ? "text-white shrink-0" : "text-slate-400 shrink-0"}>
                      {item.icon}
                    </span>
                    <span className={`ml-3 md:ml-0 ${isCollapsed ? "block md:hidden" : "block md:hidden lg:block"}`}>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="px-4 py-6">
            <button 
              onClick={() => { closeMobileMenu(); logout(); }}
              title={isCollapsed ? t('nav.logout') : undefined}
              className={`flex w-full items-center rounded-[20px] py-4 font-bold text-rose-500 transition-all hover:bg-rose-50 hover:shadow-sm cursor-pointer mx-2 ${
                isCollapsed ? "justify-start md:justify-center px-6 md:px-0 w-auto" : "gap-3 px-6 text-[15px] w-auto"
              }`}
            >
              <span className="shrink-0"><LogoutIcon /></span>
              <span className={`ml-3 md:ml-0 ${isCollapsed ? "block md:hidden" : "block md:hidden lg:block"}`}>{t('nav.logout')}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
