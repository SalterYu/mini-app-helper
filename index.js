#!/usr/bin/env node
const create = require('./file')
const program = require('commander')

function createMiniAppPage(dir, cmd) {
  create(dir, cmd, 'page')
}
function createMiniAppComponent (dir, cmd) {
  create(dir, cmd, 'component')
}

program
  .command('cp <dir>')
  .description('生成page目录')
  .option('-t, --target [target]', 'target app, default: weapp, type: weapp || baiduapp')
  .option('-f, --filename [name]', 'target filename, default: index')
  .action(createMiniAppPage)


program
  .command('cc <dir>')
  .description('生成component目录')
  .option('-t, --target [target]', 'target app, default: weapp, type: weapp || baiduapp')
  .option('-f, --filename [name]', 'target filename, default: index')
  .action(createMiniAppComponent)

program.parse(process.argv)