const fs = require('fs');
const {browserSync} = require('vibium');

const vibe = browserSync.launch()
vibe.go('https://vibium.com/')
vibe.find('button[type="submit"]').click()
const png = vibe.screenshot()
fs.writeFileSync('screenshot.png', png)
console.log('Screenshot taken')

vibe.find('input[type="email"]').type('test@mailinator.com')
vibe.find('button[type="submit"]').click()

const png1 = vibe.screenshot()
fs.writeFileSync('screenshot1.png', png1)
console.log('Screenshot taken')
vibe.quit()