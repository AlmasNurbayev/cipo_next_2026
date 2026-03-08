import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  return NextResponse.json([
    {
      id: "n1",
      title: "Новая коллекция обуви для школы",
      text: "Поступила новая коллекция удобной и стильной обуви для школьников. Ортопедическая стелька, натуральная кожа.",
      date: "2023-08-15",
      imageUrl: "https://placehold.co/800x600/ef6419/white?text=School+Collection"
    },
    {
      id: "n2",
      title: "Скидки на зимнюю обувь до 30%",
      text: "Распродажа зимней коллекции прошлого сезона. Успейте купить теплые сапоги и ботинки по выгодной цене.",
      date: "2024-02-01",
      imageUrl: "https://placehold.co/800x600/ef6419/white?text=Winter+Sale"
    },
    {
      id: "n3",
      title: "Как выбрать первую обувь малышу?",
      text: "Советы ортопедов о том, на что обратить внимание при выборе первой пары обуви для вашего ребенка.",
      date: "2024-03-05",
      imageUrl: "https://placehold.co/800x600/ef6419/white?text=First+Shoes"
    }
  ]);
}
