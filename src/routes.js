import express from 'express';
import {ItemService} from './items/items.service.js';

const itemsRouter = express.Router();
const itemsService = new ItemService();

itemsRouter.get('/', function(req, res) {
  try {
    const items = itemsService.getItems();
    res.send(items);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

itemsRouter.get('/:id', function (req, res) {
  try {
    const item = itemsService.getItem(req.params.id);
    res.send(item);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

itemsRouter.post('/', function (req, res) {
  try {
    const item = itemsService.createItem(req.body.name);
    res.status(201).send(item);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

export default itemsRouter;
