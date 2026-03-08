import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  return NextResponse.json([
    {
      id: "p1",
      name: "Кроссовки детские Air Comfort",
      price: 18500,
      sizes: ["25", "26", "27", "28"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Sneakers",
    },
    {
      id: "p2",
      name: "Ботинки демисезонные Explorer",
      price: 24000,
      sizes: ["28", "29", "30", "31", "32"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Boots",
    },
    {
      id: "p3",
      name: "Сандалии летние Sun Walk",
      price: 12000,
      sizes: ["22", "23", "24", "25"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Sandals",
    },
    {
      id: "p4",
      name: "Слипоны текстильные Easy",
      price: 9500,
      sizes: ["30", "31", "32", "33", "34"],
      imageUrl: "https://placehold.co/500x500/eaeaea/333333?text=Slipons",
    }
  ]);
}
