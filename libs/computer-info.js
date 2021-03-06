/**
 * 解析字符串
 */
const os = require('os')
const secondToDay = require('./utils').secondToDay
const byteToMb = require('./utils').byteToMb

const computerInfo = {
  hostname: os.hostname(),
  platform: os.platform(),
  uptime: secondToDay(os.uptime()),
  totalmem: byteToMb(os.totalmem()),
  freemen: byteToMb(os.freemem()),
  cups: os.cpus()? os.cpus()[0].model : 1,
  cupsNumber: os.cpus()? os.cpus().length: 1,
  localhost: os.networkInterfaces().lo0? os.networkInterfaces().lo0[0].address : '',
  interhost: os.networkInterfaces().en0? os.networkInterfaces().en0[1].address : '',
  pid: process.pid,
  nodeVersion: process.version,
}

module.exports = computerInfo;


