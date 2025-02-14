import { Command } from 'commander'
import { startDevServer, buildApp } from './runner'

const program = new Command()

program
  .command('dev')
  .description('Inicia o servidor de desenvolvimento')
  .action(async () => {
    await startDevServer()
  })

program
  .command('build')
  .description('Realiza o build para produção')
  .action(async () => {
    await buildApp()
  })

program.parse(process.argv)