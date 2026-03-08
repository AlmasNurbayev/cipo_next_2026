import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // В реальном API здесь была бы фильтрация по season, size и т.д.
  
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json([
    {
      id: "p1",
      name: "Кроссовки детские Air Comfort",
      price: 18500,
      sizes: ["25", "26", "27", "28"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Sneakers",
      season: "Лето",
      type: "Кроссовки"
    },
    {
      id: "p2",
      name: "Ботинки демисезонные Explorer",
      price: 24000,
      sizes: ["28", "29", "30", "31", "32"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Boots",
      season: "Демисезон",
      type: "Ботинки"
    },
    {
      id: "p3",
      name: "Сандалии летние Sun Walk",
      price: 12000,
      sizes: ["22", "23", "24", "25"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Sandals",
      season: "Лето",
      type: "Сандалии"
    },
    {
      id: "p4",
      name: "Слипоны текстильные Easy",
      price: 9500,
      sizes: ["30", "31", "32", "33", "34"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Slipons",
      season: "Лето",
      type: "Слипоны"
    },
    {
      id: "p5",
      name: "Зимние сапоги Snow Master",
      price: 28000,
      sizes: ["30", "31", "32", "33"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Winter",
      season: "Зима",
      type: "Сапоги"
    },
    {
      id: "p6",
      name: "Туфли классические First Step",
      price: 15000,
      sizes: ["26", "27", "28", "29"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Classic",
      season: "Осень",
      type: "Туфли"
    }
  ]);
}
