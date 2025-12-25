const fs = require('fs')
const { browserSync } = require('vibium')

const vibe = browserSync.launch()
vibe.go('https://example.com')

const png = vibe.screenshot()
fs.writeFileSync('screenshot.png', png)

const link = vibe.find('a')
link.click()
vibe.quit()