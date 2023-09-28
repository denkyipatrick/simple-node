import items from "../data/item.js";
import ItemToFileWriter from "./item-to-file-writer.js";

export class ItemService {

  getItems() {
    console.log(items);
    return items;
  }

  getItem(id) {
    return items.find(it => it.id === id);
  }

  createItem(name) {
    items.push({
      name,
      createdAt: new Date(),
      id: Math.random().toString(36).substring(2)
    });

    ItemToFileWriter.writeItemsToFile(items);
    return items[items.length - 1];
  }
  
}

export default ItemService;