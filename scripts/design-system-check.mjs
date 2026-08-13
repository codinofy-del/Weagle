import { readFileSync } from 'node:fs'
import { globSync } from 'node:fs'

const files = globSync('src/**/*.{js,jsx,css}', { cwd: process.cwd() })
const rawHex = /#[0-9a-fA-F]{3,8}\b/
const defaultPalette = /\b(?:text|bg|border|shadow|p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap)-(?:gray|slate|zinc|neutral|stone|red|yellow|green|blue|purple|orange|\d+)\b/
const emoji = /[\p{Extended_Pictographic}]/u
let failed = false
for (const file of files) {
  const text = readFileSync(file, 'utf8')
  for (const [name, pattern] of [['raw hex', rawHex], ['default palette/ad-hoc utility', defaultPalette], ['emoji UI icon', emoji]]) {
    if (file.endsWith('tokens.css') && name === 'raw hex') continue
    if (pattern.test(text)) { console.error(`${file}: ${name} violation`); failed = true }
  }
}
if (failed) process.exit(1)
console.log('Design-system lint passed')
