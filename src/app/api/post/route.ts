import prisma from "@/lib/prisma";

export async function GET() {
  // const post = await prisma.post.findMany();
  // return new Response(JSON.stringify(post));
  // const firstUser = await prisma.user.findFirst();
  // return new Response(JSON.stringify(firstUser));
  // const firstUserOrError = await prisma.user.findFirstOrThrow();
  // return new Response(JSON.stringify(firstUserOrError));
  // const id = "66647b526aef1bf282b5068c";
  // const posts = await prisma.post.update({
  //   data: {
  //     published: true,
  //   },
  //   where: {
  //     id,
  //   },
  // });

  // const posts = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       {
  //         title: {
  //           contains: "e",
  //           mode: "insensitive",
  //         },
  //       },
  //       {
  //         title: {
  //           contains: "t",
  //           mode: "insensitive",
  //         },
  //       },
  //     ],
  //     AND: {
  //       published: true,
  //     },
  //   },
  // });

  // get the post whose user name is babu
  // const posts = await prisma.post.findMany({
  //   where: {
  //     author: {
  //       is: {
  //         name: "babu",
  //       },
  //     },
  //   },
  // });
  // get the post whose user name is not Ram email starts with s include full author of the post
  const posts = await prisma.post.findMany({
    where: {
      author: {
        isNot: {
          name: "Ram",
        },
        is: {
          email: {
            startsWith: "s",
          },
        },
      },
    },
    include: {
      author: true,
    },
  });
  return new Response(JSON.stringify(posts));
}
