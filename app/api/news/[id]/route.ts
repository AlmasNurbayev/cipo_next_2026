import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split('/').pop();

  await new Promise((resolve) => setTimeout(resolve, 300));
  
  return NextResponse.json({
      id: id || "n1",
      title: "Новая коллекция обуви для школы",
      text: "Поступила новая коллекция удобной и стильной обуви для школьников. Ортопедическая стелька, натуральная кожа. В наших магазинах вы найдете широкий ассортимент обуви, которая соответствует всем стандартам качества и ортопедии.",
      date: "2023-08-15",
      imageUrl: "https://placehold.co/800x600/ef6419/white?text=News+Detail"
  });
}
