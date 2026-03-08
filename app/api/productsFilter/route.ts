import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  return NextResponse.json({
    seasons: ["Зима", "Весна", "Лето", "Осень", "Демисезон"],
    sizes: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"],
    types: ["Сапоги", "Сандалии", "Кроссовки", "Ботинки", "Туфли", "Слипоны"],
    priceRange: { min: 2000, max: 35000 }
  });
}
