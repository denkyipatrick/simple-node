import { writeFile } from 'fs/promises';

export class ItemToFileWriter {
  static async writeItemsToFile(items) {
    let itemsString = JSON.stringify(items, null, 4);
    await writeFile('/data/items.txt', itemsString);
  }
}

export default ItemToFileWriter;
