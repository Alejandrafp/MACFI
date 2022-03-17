import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Depreciacion,
  Activosfijos,
} from '../models';
import {DepreciacionRepository} from '../repositories';

export class DepreciacionActivosfijosController {
  constructor(
    @repository(DepreciacionRepository)
    public depreciacionRepository: DepreciacionRepository,
  ) { }

  @get('/depreciacions/{id}/activosfijos', {
    responses: {
      '200': {
        description: 'Activosfijos belonging to Depreciacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Activosfijos)},
          },
        },
      },
    },
  })
  async getActivosfijos(
    @param.path.string('id') id: typeof Depreciacion.prototype.id,
  ): Promise<Activosfijos> {
    return this.depreciacionRepository.activosfijos(id);
  }
}
