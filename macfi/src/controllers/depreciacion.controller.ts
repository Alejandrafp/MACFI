import { authenticate } from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Depreciacion} from '../models';
import {DepreciacionRepository} from '../repositories';
@authenticate('jwt')
export class DepreciacionController {
  constructor(
    @repository(DepreciacionRepository)
    public depreciacionRepository : DepreciacionRepository,
  ) {}

  @post('/depreciacions')
  @response(200, {
    description: 'Depreciacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Depreciacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Depreciacion, {
            title: 'NewDepreciacion',
            
          }),
        },
      },
    })
    depreciacion: Depreciacion,
  ): Promise<Depreciacion> {
    return this.depreciacionRepository.create(depreciacion);
  }

  @get('/depreciacions/count')
  @response(200, {
    description: 'Depreciacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Depreciacion) where?: Where<Depreciacion>,
  ): Promise<Count> {
    return this.depreciacionRepository.count(where);
  }

  @get('/depreciacions')
  @response(200, {
    description: 'Array of Depreciacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Depreciacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Depreciacion) filter?: Filter<Depreciacion>,
  ): Promise<Depreciacion[]> {
    return this.depreciacionRepository.find(filter);
  }

  @patch('/depreciacions')
  @response(200, {
    description: 'Depreciacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Depreciacion, {partial: true}),
        },
      },
    })
    depreciacion: Depreciacion,
    @param.where(Depreciacion) where?: Where<Depreciacion>,
  ): Promise<Count> {
    return this.depreciacionRepository.updateAll(depreciacion, where);
  }

  @get('/depreciacions/{id}')
  @response(200, {
    description: 'Depreciacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Depreciacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Depreciacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Depreciacion>
  ): Promise<Depreciacion> {
    return this.depreciacionRepository.findById(id, filter);
  }

  @patch('/depreciacions/{id}')
  @response(204, {
    description: 'Depreciacion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Depreciacion, {partial: true}),
        },
      },
    })
    depreciacion: Depreciacion,
  ): Promise<void> {
    await this.depreciacionRepository.updateById(id, depreciacion);
  }

  @put('/depreciacions/{id}')
  @response(204, {
    description: 'Depreciacion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() depreciacion: Depreciacion,
  ): Promise<void> {
    await this.depreciacionRepository.replaceById(id, depreciacion);
  }

  @del('/depreciacions/{id}')
  @response(204, {
    description: 'Depreciacion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.depreciacionRepository.deleteById(id);
  }
}
