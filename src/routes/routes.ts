// External Dependencies

import express, {Request, Response} from "express";
import {ObjectId} from "mongodb";
import {ActivosFijos} from '../models';
import Activos from "../models/activos-fijos.model";
import {collections} from "../services/database.services";

// Global Config

export const activosRouter = express.Router();

activosRouter.use(express.json());

// GET

activosRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const activos = (await collections.activos.find({}).toArray()) as ActivosFijos[];

    res.status(200).send(activos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

activosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {

    const query = {_id: new ObjectId(id)};
    const activos = (await collections.activos.findOne(query)) as ActivosFijos;

    if (ActivosFijos) {
      res.status(200).send(activos);
    }
  } catch (error) {
    res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

// POST

activosRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newActivo = req.body as ActivosFijos;
    const result = await collections.activos.insertOne(newActivo);

    result
      ? res.status(201).send(`Se creo un nuevo activo con ${result.insertedId}`)
      : res.status(500).send("No se pudo crear nuevo activo.");
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

// PUT

activosRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const activoActualizado: ActivosFijos = req.body as Activos;
    const query = {_id: new ObjectId(id)};

    const result = await collections.activos.updateOne(query, {$set: activoActualizado});

    result
      ? res.status(200).send(`Se creo un nuevo activo con id ${id}`)
      : res.status(304).send(`Activo con id: ${id} no se pudo actualizar`);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

// DELETE

activosRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = {_id: new ObjectId(id)};
    const result = await collections.activo.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Se pudo remover activo con id ${id}`);
    } else if (!result) {
      res.status(400).send(`No se pudo remover activo con id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Activo con id ${id} no existe`);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
