const fs = require('fs')
const chalk = require('chalk')
const {pageFileContentMaps, componentFileContentMaps} = require('./template')
const fileMaps = {
  "weapp": ['wxss', 'wxml', 'ts', 'json']
}



function create(dir, cmd, type) {
  mkdirSync(dir, cmd.target, cmd.filename, type)
}

function mkdirSync(path, target, filename, type) {
  let paths = path.split('/');
  let index = 1;

  function next(index) {
    //递归结束判断
    if (index > paths.length) return touchFile(path, target, filename, type)
    let newPath = paths.slice(0, index).join('/');
    fs.access(newPath, (err) => {
      if (err) {//如果文件不存在，就创建这个文件
        fs.mkdir(newPath, (err) => {
          next(index + 1);
        });
      } else {
        //如果这个文件已经存在，就进入下一个循环
        next(index + 1);
      }
    })
  }

  next(index);
}

function touchFile(path, target, filename, type) {
  if (type === 'page') {
    (fileMaps[target || 'weapp'] || fileMaps['weapp']).forEach(ext => {
      const fileName = `${filename || 'index'}.${ext}`
      const filePath = `${path}/${fileName}`
      fs.access(filePath, err => {
        if (err) {
          fs.writeFile(`${path}/${fileName}`, Buffer.from(pageFileContentMaps[ext]), { flag: 'a+' }, (err) => {
          });
        }
      })
    })
  }
  if (type === 'component') {
    (fileMaps[target || 'weapp'] || fileMaps['weapp']).forEach(ext => {
      const fileName = `${filename || 'index'}.${ext}`
      const filePath = `${path}/${fileName}`
      fs.access(filePath, err => {
        if (err) {
          fs.writeFile(`${path}/${fileName}`, Buffer.from(componentFileContentMaps[ext]), { flag: 'a+' }, (err) => {});
        }
      })
    })
  }
  console.log(chalk.blue('写入成功'))
}

module.exports = create