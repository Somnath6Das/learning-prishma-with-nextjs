import prisma from "@/lib/prisma";


// export async function POST() {
// const user = await prisma.user.create({
//     data: {
//         email: "sakura1@prisma.io",
//         name: "Sakura Dev",
//         role: "USER",
//         Post: {
//             create: [
//                 {
//                     title: "Crash course of prisma",
//                     published: true,

//                 }
//             ]
//         }
//     }
// })

// const user = await prisma.user.createMany({
//     data: [
//         {
//             name: "Yokoshima", email: "yokoshima@sonic.com"
//         }, {
//             name: "Yokoshima1", email: "yokoshima1@sonic.com"
//         }
//     ]

// })




// return new Response(JSON.stringify(user));
// }



// send dada with body

interface Body {
    name: string;
    email: string;
}
export async function POST(request: Request) {
    const body: Body = await request.json();
    const user = await prisma.user.create({
        data: body
    })
    return new Response(JSON.stringify(user));
}