import { FileToItemReader } from "../items/file-to-item-reader.js";

const items = await FileToItemReader.readItemsFromFile();
export default items;
