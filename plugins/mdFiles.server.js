import { readdir, readFile, stat } from 'fs/promises'
import { join } from 'path'

class MdFile {
  constructor() {
    this.dir = join(process.cwd(), 'markdowns')
  }

  async listFileBaseName() {
    return (await readdir(this.dir))
      .filter(file => /.*\.md$/.test(file))
      .map(file => file.substring(0, file.length - 3))
  }

  async retrieve(fileName, ext = "md") {
    const targetPath = join(this.dir, `${fileName}.${ext}`)
    const file = await readFile(targetPath, 'utf-8')
    return file
  }
}

export default (_app, inject) => {
  inject('mdFile', new MdFile())
}