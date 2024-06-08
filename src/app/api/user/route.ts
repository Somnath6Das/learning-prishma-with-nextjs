import prisma from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.findMany({
    // find with actual value
    //   where: {
    //     name: "Somna",
    //   },
    // });
    // find start with
    // where: {
    //   name: {
    //     startsWith: "b",
    //     contains: "a",
    //   },
    // },
    // find find a user with id
    // where: {
    //   id: {
    //     // in: ["6663ce1e043c13ef86d0e42f", "6663ce56043c13ef86d0e436"],
    //     notIn: ["6663ce1e043c13ef86d0e42f", "6663ce56043c13ef86d0e436"],
    //   },
    // },
    // where: {
    //   id: {
    //     not: { in: ["6663ce1e043c13ef86d0e42f", "6663ce56043c13ef86d0e436"] },
    //   },
    // },
    // find start with and id
    // where: {
    //   OR: [
    //     {
    //       name: {
    //         startsWith: "S",
    //       },
    //     },
    //     {
    //       id: {
    //         in: ["6663ce1e043c13ef86d0e42f"],
    //       },
    //     },
    //   ],
    // },
  });

  return new Response(JSON.stringify(user));
}
