import { Context } from './types'
import {
  PlayerWhereInput,
  PlayerWhereUniqueInput,
  PlayerCreateArgs,
  PlayerCreateInput,
} from '@prisma/client'
import { IResolvers } from 'apollo-server-express'

type Where<T> = {
  where: T
}

type Data<T> = {
  data: T
}

export const resolvers: IResolvers<any, Context> = {
  Query: {
    player: (parent, args: Where<PlayerWhereUniqueInput>, ctx) => {
      return ctx.db.player.findOne(args)
    },
    players: (parent, args: Where<PlayerWhereInput>, ctx) => {
      return ctx.db.player.findMany(args)
    },
    aggregateScore: async (parent, args: Where<PlayerWhereInput>, ctx) => {
      const scores = await ctx.db.player
        .findMany(args)
        .then((res) => res.map((el) => el.score))

      const sum = scores.reduce((a, b) => a + b, 0)
      const average = scores.length > 0 ? sum / scores.length : 0

      return {
        min: Math.min(...scores),
        max: Math.min(...scores),
        sum,
        average,
      }
    },
  },
  Mutation: {
    createPlayer: (parent, { data }: Data<PlayerCreateInput>, ctx) => {
      return ctx.db.player.create({ data })
    },
    updatePlayer: (
      parent,
      { where, data }: Data<PlayerCreateInput> & Where<PlayerWhereUniqueInput>,
      ctx
    ) => {
      return ctx.db.player.update({ where, data })
    },
    deletePlayer: (parent, { where }: Where<PlayerWhereUniqueInput>, ctx) => {
      return ctx.db.player.delete({ where })
    },
  },
}
