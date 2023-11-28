const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '..', 'assets', 'dicts', 'custom-nce-3.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时发生错误：', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    const arrayLength = jsonData.length;
    console.log('lenght: ', arrayLength);
  } catch (err) {
    console.error('解析JSON时发生错误: ', err);
  }
});