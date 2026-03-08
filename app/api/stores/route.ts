import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  return NextResponse.json([
    {
      id: "s1",
      name: "Cipo Kids - ТРЦ MEGA Silk Way",
      address: "пр. Кабанбай батыра, 62, 2 этаж",
      workHours: "Ежедневно 10:00 - 22:00",
      imageUrl: "https://placehold.co/600x400/ef6419/white?text=Shop+1",
      twoGisLink: "https://2gis.kz"
    },
    {
      id: "s2",
      name: "Cipo Kids - ТРЦ Хан Шатыр",
      address: "пр. Туран, 37, 3 этаж",
      workHours: "Ежедневно 10:00 - 22:00",
      imageUrl: "https://placehold.co/600x400/ef6419/white?text=Shop+2",
      twoGisLink: "https://2gis.kz"
    }
  ]);
}
