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
import {Activosfijos} from '../models';
import {ActivosfijosRepository} from '../repositories';

export class ActivosfijosController {
  constructor(
    @repository(ActivosfijosRepository)
    public activosfijosRepository : ActivosfijosRepository,
  ) {}

  @post('/activosfijos')
  @response(200, {
    description: 'Activosfijos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Activosfijos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activosfijos, {
            title: 'NewActivosfijos',
            
          }),
        },
      },
    })
    activosfijos: Activosfijos,
  ): Promise<Activosfijos> {
    return this.activosfijosRepository.create(activosfijos);
  }

  @get('/activosfijos/count')
  @response(200, {
    description: 'Activosfijos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Activosfijos) where?: Where<Activosfijos>,
  ): Promise<Count> {
    return this.activosfijosRepository.count(where);
  }

  @get('/activosfijos')
  @response(200, {
    description: 'Array of Activosfijos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Activosfijos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Activosfijos) filter?: Filter<Activosfijos>,
  ): Promise<Activosfijos[]> {
    return this.activosfijosRepository.find(filter);
  }

  @patch('/activosfijos')
  @response(200, {
    description: 'Activosfijos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activosfijos, {partial: true}),
        },
      },
    })
    activosfijos: Activosfijos,
    @param.where(Activosfijos) where?: Where<Activosfijos>,
  ): Promise<Count> {
    return this.activosfijosRepository.updateAll(activosfijos, where);
  }

  @get('/activosfijos/{id}')
  @response(200, {
    description: 'Activosfijos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Activosfijos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Activosfijos, {exclude: 'where'}) filter?: FilterExcludingWhere<Activosfijos>
  ): Promise<Activosfijos> {
    return this.activosfijosRepository.findById(id, filter);
  }

  @patch('/activosfijos/{id}')
  @response(204, {
    description: 'Activosfijos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activosfijos, {partial: true}),
        },
      },
    })
    activosfijos: Activosfijos,
  ): Promise<void> {
    await this.activosfijosRepository.updateById(id, activosfijos);
  }

  @put('/activosfijos/{id}')
  @response(204, {
    description: 'Activosfijos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() activosfijos: Activosfijos,
  ): Promise<void> {
    await this.activosfijosRepository.replaceById(id, activosfijos);
  }

  @del('/activosfijos/{id}')
  @response(204, {
    description: 'Activosfijos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.activosfijosRepository.deleteById(id);
  }
}
