import { Resolvers } from "./__generated__/graphql";

export const resolvers: Resolvers = {
  Query: {
    tasks: (_parent, _args, ctx) => {
      return ctx.prisma.task.findMany();
    },
    task: (_parent, { id }, ctx) => {
      return ctx.prisma.task.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
};
