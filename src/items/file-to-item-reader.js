import { readFile } from 'fs/promises';

export class FileToItemReader {
  static async readItemsFromFile() {
    try {
      const itemsString = await readFile('/data/items.txt', 'utf8');

      if (!itemsString) {
        return [];
      }

      return JSON.parse(itemsString);
    } catch {
      return [];
    }
  }
}

export default FileToItemReader;
