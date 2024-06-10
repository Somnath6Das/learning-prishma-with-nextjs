
import prisma from '../../../../../lib/prisma';

interface Body {
    name: string;

}
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const body: Body = await request.json();
    // upsert -> if user found with id then update username else create new user.
    const updatedUser = await prisma.user.upsert({
        where: {
            id: params.id,
        },
        update: {
            name: "userFound"
        },
        create: {
            name: "newUser",
            email: "newUser@prisma.io"
        }


    })

    return new Response(JSON.stringify(updatedUser));

}