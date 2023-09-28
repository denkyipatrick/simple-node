export class ItemsController {
  constructor(itemService) {
    console.log(itemService);
    this.itemService = itemService;
  }

  getItems(req, res) {
    try {
      const items = this.itemService.getItems();
      res.send(items);
    } catch (e) {
      console.error(e);
      res.status(500).send();
    }
  }

  // getItem(req, res) {
  //   try {
  //     const item = this.itemService.getItem(req.params.id);
  //     res.send(item);
  //   } catch (e) {
  //     console.error(e);
  //     res.status(500).send();
  //   }
  // }

  // createItem(req, res) {
  //   try {
  //     const item = this.itemService.createItem(req.body.name);
  //     res.status(201).send(item);
  //   } catch (e) {
  //     console.error(e);
  //     res.status(500).send();
  //   }
  // }
}

export default ItemsController;