import { PrismaClient, Player, PlayerCreateInput } from '@prisma/client'
import * as faker from 'faker'

const PLAYERS_COUNT = 150

const seed = async () => {
  const db = new PrismaClient()

  await db.connect()

  const genPlayer = (): PlayerCreateInput => {
    return {
      name: faker.name.firstName(),
      score: faker.random.number({ min: 0, max: 200 }),
      team: faker.random.number(100) > 30 ? faker.random.word() : undefined,
    }
  }

  await Promise.all(
    Array.from({ length: PLAYERS_COUNT }).map(() =>
      db.player.create({ data: genPlayer() })
    )
  )

  await db.disconnect()
}

seed()
