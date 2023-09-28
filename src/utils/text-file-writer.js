
import { writeFile } from 'fs/promises';

export class TextFileWriter {
  writeToFile(path, content) {
    writeFile(path, content);
  }
}

export default TextFileWriter;
