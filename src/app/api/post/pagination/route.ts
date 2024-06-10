import prisma from "@/lib/prisma";

// offset base pagination base on giving query params

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const pgnum = +(searchParams.get("pgnum") ?? 0);
//   const pgsize = +(searchParams.get("pgsize") ?? 4);

//   const posts = await prisma.post.findMany({
//     skip: pgnum * pgsize,
//     take: pgsize,
//   });
//   return new Response(JSON.stringify(posts));
// }

// Cursor base pagination for postgres (id should be autoinctemental)
// in the cursor section first need to target a veriable then sort accending or decending order

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const cursor = +(searchParams.get("cursor") ?? 0);
//   const pgsize = +(searchParams.get("pgsize") ?? 4);

//   const posts = await prisma.post.findMany({
//     cursor: {
//       id: cursor,
//     },
//     take: pgsize,
//   });
//   return new Response(JSON.stringify(posts));
// }
