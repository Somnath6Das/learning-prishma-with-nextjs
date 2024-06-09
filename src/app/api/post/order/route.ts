import prisma from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: {
      likeNum: "desc", // asc for asending, desc for desending
    },
  });
  return new Response(JSON.stringify(posts));
}
