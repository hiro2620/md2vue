import { readFile } from 'fs/promises'
import { join } from 'path'

export default (_app, inject) => {
  inject('mdFile', async fileName => {
    const targetPath = join(process.cwd(), 'markdowns', `${fileName}.md`)
    const file = await readFile(targetPath, 'utf-8')
    return file
  })
}