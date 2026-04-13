"use client";
import { logOut } from "@/service/auth-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navMenu = [
  {
    menu: "Visão Geral", // Main
    items: [
      { name: "Painel de Controle", path: "/", icon: "/icons/dashboard1.png" },
      {
        name: "Raio-X",
        path: "/ia-assistant",
        icon: "/icons/award.png",
      }, // Focado em análise de imagem
      {
        name: "Notificações",
        path: "/notifications",
        icon: "/icons/shield.png",
      }, // Alertas de casos novos
    ],
  },
  {
    menu: "Gestão Clínica", // Doctor
    items: [
      {
        name: "Pacientes",
        path: "/patients",
        icon: "/icons/patients.png",
      },
      {
        name: "Exames",
        path: "/exames",
        icon: "/icons/icon1.png",
      },
      {
        name: "Terapêutico",
        path: "/medications",
        icon: "/icons/Note.png",
      }, // Medicamentos
      {
        name: "Agenda",
        path: "/calendar",
        icon: "/icons/Calendar1.png",
      },
    ],
  },
  {
    menu: "Laboratório",
    items: [
      {
        name: "Baciloscopia",
        path: "/lab-results",
        icon: "/icons/folder.png",
      },
      {
        name: "Estoque",
        path: "/inventory",
        icon: "/icons/shield.png",
      },
    ],
  },
];

export default function Sidebar() {
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 w-64">
      <nav className="h-full flex flex-col justify-between px-4">
        <div>
          <Link href={"/dashboard"}>
            <Image
              src={"/logo/logo_01.png"}
              className="mb-14 mt-4"
              alt="logo"
              width={30}
              height={30}
            />
          </Link>

          {navMenu.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="mb-4 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {section.menu}
              </h2>
              <div className="flex flex-col gap-2">
                {section.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <Image
                      src={item.icon}
                      width={22}
                      height={22}
                      alt={item.name}
                      className="filter brightness-0 opacity-70 group-hover:opacity-100"
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-black capitalize">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleLogOut}
          className="flex items-center gap-3 p-2 mt-auto rounded-lg mb-8"
        >
          <Image
            src="/icons/logOut.svg"
            width={22}
            height={22}
            className="filter brightness-0 opacity-70 group-hover:invert-[0.2] group-hover:sepia-[1] group-hover:saturate-[5000%] group-hover:hue-rotate-[350deg]"
            alt="LogOut"
          />
          <span className="text-sm font-medium">Encerrar Sessao</span>
        </button>
      </nav>
    </div>
  );
}
