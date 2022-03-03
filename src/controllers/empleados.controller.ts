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
import {Empleados} from '../models';
import {EmpleadosRepository} from '../repositories';

export class EmpleadosController {
  constructor(
    @repository(EmpleadosRepository)
    public empleadosRepository : EmpleadosRepository,
  ) {}

  @post('/empleados')
  @response(200, {
    description: 'Empleados model instance',
    content: {'application/json': {schema: getModelSchemaRef(Empleados)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleados, {
            title: 'NewEmpleados',
            exclude: ['id'],
          }),
        },
      },
    })
    empleados: Omit<Empleados, 'id'>,
  ): Promise<Empleados> {
    return this.empleadosRepository.create(empleados);
  }

  @get('/empleados/count')
  @response(200, {
    description: 'Empleados model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Empleados) where?: Where<Empleados>,
  ): Promise<Count> {
    return this.empleadosRepository.count(where);
  }

  @get('/empleados')
  @response(200, {
    description: 'Array of Empleados model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Empleados, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Empleados) filter?: Filter<Empleados>,
  ): Promise<Empleados[]> {
    return this.empleadosRepository.find(filter);
  }

  @patch('/empleados')
  @response(200, {
    description: 'Empleados PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleados, {partial: true}),
        },
      },
    })
    empleados: Empleados,
    @param.where(Empleados) where?: Where<Empleados>,
  ): Promise<Count> {
    return this.empleadosRepository.updateAll(empleados, where);
  }

  @get('/empleados/{id}')
  @response(200, {
    description: 'Empleados model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Empleados, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Empleados, {exclude: 'where'}) filter?: FilterExcludingWhere<Empleados>
  ): Promise<Empleados> {
    return this.empleadosRepository.findById(id, filter);
  }

  @patch('/empleados/{id}')
  @response(204, {
    description: 'Empleados PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleados, {partial: true}),
        },
      },
    })
    empleados: Empleados,
  ): Promise<void> {
    await this.empleadosRepository.updateById(id, empleados);
  }

  @put('/empleados/{id}')
  @response(204, {
    description: 'Empleados PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() empleados: Empleados,
  ): Promise<void> {
    await this.empleadosRepository.replaceById(id, empleados);
  }

  @del('/empleados/{id}')
  @response(204, {
    description: 'Empleados DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empleadosRepository.deleteById(id);
  }
}
