// src/data/menuData.ts

export type Category =
  | "Antipasti"
  | "Primi"
  | "Secondi Carne"
  | "Secondi Pesce"
  | "Contorni"
  | "Dolci";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price?: string; // Using string to handle "S.Q." (market price)
  description?: string;
  isHighlight?: boolean; // For the Homepage
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export const menuData: MenuItem[] = [
  // --- ANTIPASTI ---
  {
    id: "a1",
    name: "Delizie calde fritte",
    category: "Antipasti",
    price: "12.00",
    isHighlight: true,
  },
  {
    id: "a2",
    name: "Prosciutto di Parma 24 mesi Gran Cru",
    category: "Antipasti",
    price: "16.00",
  },
  {
    id: "a3",
    name: "Sautè di cozze",
    category: "Antipasti",
    price: "14.00",
  },

  // --- PRIMI ---
  {
    id: "p1",
    name: "Tonnarelli cacio e pepe",
    category: "Primi",
    price: "14.00",
    isHighlight: true,
  },
  {
    id: "p2",
    name: "Bucatini all'amatriciana",
    category: "Primi",
    price: "14.00",
    isHighlight: true,
  },
  {
    id: "p3",
    name: "Spaghetti alle vongole veraci",
    category: "Primi",
    price: "18.00",
  },
  {
    id: "p4",
    name: "Fettuccine con funghi porcini",
    category: "Primi",
    price: "18.00",
  },

  // --- SECONDI ---
  {
    id: "s1",
    name: "Saltimbocca alla romana",
    category: "Secondi Carne",
    price: "18.00",
  },
  {
    id: "s2",
    name: "Filetto di manzo al pepe verde",
    category: "Secondi Carne",
    price: "24.00",
  },
  {
    id: "s3",
    name: "Trancio di ricciola alla siciliana",
    category: "Secondi Pesce",
    price: "22.00",
  },

  // --- CONTORNI ---
  {
    id: "c1",
    name: "Carciofo alla romana",
    category: "Contorni",
    price: "8.00",
    isHighlight: true,
  },
  {
    id: "c2",
    name: "Puntarelle (Stagionale)",
    category: "Contorni",
    price: "8.00",
  },

  // --- DOLCI ---
  {
    id: "d1",
    name: "Tiramisù classico",
    category: "Dolci",
    price: "7.00",
  },
  {
    id: "d2",
    name: "Mille foglie con crema chantilly",
    category: "Dolci",
    price: "8.00",
  },
];
