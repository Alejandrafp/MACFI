import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {ActivosFijos} from '../models';
import {ActivosFijosRepository} from '../repositories';

export class ActivosFijosController {
  constructor(
    @repository(ActivosFijosRepository)
    public activosFijosRepository: ActivosFijosRepository,
  ) { }

  @post('/activos-fijos')
  @response(200, {
    description: 'ActivosFijos model instance',
    content: {'application/json': {schema: getModelSchemaRef(ActivosFijos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivosFijos, {
            title: 'NewActivosFijos',
            exclude: ['Id'],
          }),
        },
      },
    })
    activosFijos: Omit<ActivosFijos, 'id'>,
  ): Promise<ActivosFijos> {
    return this.activosFijosRepository.create(activosFijos);
  }

  @get('/activos-fijos/count')
  @response(200, {
    description: 'ActivosFijos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ActivosFijos) where?: Where<ActivosFijos>,
  ): Promise<Count> {
    return this.activosFijosRepository.count(where);
  }

  @get('/activos-fijos')
  @response(200, {
    description: 'Array of ActivosFijos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ActivosFijos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ActivosFijos) filter?: Filter<ActivosFijos>,
  ): Promise<ActivosFijos[]> {
    return this.activosFijosRepository.find(filter);
  }

  @patch('/activos-fijos')
  @response(200, {
    description: 'ActivosFijos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivosFijos, {partial: true}),
        },
      },
    })
    activosFijos: ActivosFijos,
    @param.where(ActivosFijos) where?: Where<ActivosFijos>,
  ): Promise<Count> {
    return this.activosFijosRepository.updateAll(activosFijos, where);
  }

  @get('/activos-fijos/{id}')
  @response(200, {
    description: 'ActivosFijos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ActivosFijos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ActivosFijos, {exclude: 'where'}) filter?: FilterExcludingWhere<ActivosFijos>
  ): Promise<ActivosFijos> {
    return this.activosFijosRepository.findById(id, filter);
  }

  @patch('/activos-fijos/{id}')
  @response(204, {
    description: 'ActivosFijos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActivosFijos, {partial: true}),
        },
      },
    })
    activosFijos: ActivosFijos,
  ): Promise<void> {
    await this.activosFijosRepository.updateById(id, activosFijos);
  }

  @put('/activos-fijos/{id}')
  @response(204, {
    description: 'ActivosFijos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() activosFijos: ActivosFijos,
  ): Promise<void> {
    await this.activosFijosRepository.replaceById(id, activosFijos);
  }

  @del('/activos-fijos/{id}')
  @response(204, {
    description: 'ActivosFijos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.activosFijosRepository.deleteById(id);
  }
}
