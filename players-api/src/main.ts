import { bootstrap } from './server'

export const main = async () => {
  const { app } = await bootstrap()

  app.listen(3000, () => {
    console.log('server ready http://localhost:3000')
  })
}

main()
