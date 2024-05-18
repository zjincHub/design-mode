import fs from 'fs'

const data = fs.readFileSync('./src/pages/single.vue', 'utf8')

const codeFileString = 'const code = ' + JSON.stringify(data) + ';export default code;'

fs.writeFile('./src/docs/single.js', codeFileString, (err) => {
  if (err) throw err
  console.log('文件已被保存')
})

console.log(codeFileString)
