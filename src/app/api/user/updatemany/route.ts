import prisma from '../../../../lib/prisma';


export async function PUT() {
    const updateUsers = await prisma.user.updateMany({
        where: {
            name: {
                contains: "u",
                mode: "insensitive"
            }
        },
        data: {
            name: "UpdateMany",
            role: "ADMIN"
        }

    });
    return new Response(JSON.stringify(updateUsers));
}

