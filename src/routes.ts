import { Router } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const routes = Router();

routes.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
    opening_hours
   } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
    opening_hours
  });

  await orphanagesRepository.save(orphanage);

  return response.status(201).json(orphanage)
});

export default routes;