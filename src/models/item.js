export class Item {
  constructor(id = null, name = null, createdAt = new Date()) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }
}