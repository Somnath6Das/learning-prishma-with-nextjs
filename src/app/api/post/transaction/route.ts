import prisma from "@/lib/prisma";


export async function POST() {
    const withdrowUpdate = prisma.post.update({
        where: {
            id: "6665aa8d2934b771e1c1e099"
        },
        data: {
            likeNum: {
                decrement: 1
            }
        }
    });
    const depositeUpdate = prisma.post.update({
        where: {
            id: "6665aa9d2934b771e1c1e09e"
        },
        data: {
            likeNum: {
                increment: 1
            }
        }
    })
    const result = await prisma.$transaction([withdrowUpdate, depositeUpdate])
    return new Response(JSON.stringify(result))
}