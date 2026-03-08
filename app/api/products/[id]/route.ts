import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split('/').pop();

  await new Promise((resolve) => setTimeout(resolve, 400));
  
  return NextResponse.json({
      id: id || "p1",
      name: "Кроссовки детские Air Comfort",
      price: 18500,
      article: "AC-2023-KIDS",
      upperMaterial: "Натуральная кожа, текстиль",
      innerMaterial: "Текстиль (хлопок 100%)",
      soleMaterial: "ЭВА (EVA)",
      sizes: ["25", "26", "27", "28"],
      images: [
        "https://placehold.co/800x800/eaeaea/333333?text=Image+1",
        "https://placehold.co/800x800/eaeaea/333333?text=Image+2",
        "https://placehold.co/800x800/eaeaea/333333?text=Image+3"
      ],
      description: "Легкие и удобные кроссовки для активных детей. Специальная анатомическая колодка и гибкая подошва обеспечивают комфорт при длительных прогулках."
  });
}
