import { Config } from "apollo-server-micro";

export const resolvers: Config["resolvers"] = {
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
