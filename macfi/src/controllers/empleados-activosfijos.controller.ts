import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Empleados,
  Activosfijos,
} from '../models';
import {EmpleadosRepository} from '../repositories';

export class EmpleadosActivosfijosController {
  constructor(
    @repository(EmpleadosRepository) protected empleadosRepository: EmpleadosRepository,
  ) { }

  @get('/empleados/{id}/activosfijos', {
    responses: {
      '200': {
        description: 'Array of Empleados has many Activosfijos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Activosfijos)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Activosfijos>,
  ): Promise<Activosfijos[]> {
    return this.empleadosRepository.empleadoasignado(id).find(filter);
  }

  @post('/empleados/{id}/activosfijos', {
    responses: {
      '200': {
        description: 'Empleados model instance',
        content: {'application/json': {schema: getModelSchemaRef(Activosfijos)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleados.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activosfijos, {
            title: 'NewActivosfijosInEmpleados',
            exclude: ['id'],
            optional: ['empleadosId']
          }),
        },
      },
    }) activosfijos: Omit<Activosfijos, 'id'>,
  ): Promise<Activosfijos> {
    return this.empleadosRepository.empleadoasignado(id).create(activosfijos);
  }

  @patch('/empleados/{id}/activosfijos', {
    responses: {
      '200': {
        description: 'Empleados.Activosfijos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activosfijos, {partial: true}),
        },
      },
    })
    activosfijos: Partial<Activosfijos>,
    @param.query.object('where', getWhereSchemaFor(Activosfijos)) where?: Where<Activosfijos>,
  ): Promise<Count> {
    return this.empleadosRepository.empleadoasignado(id).patch(activosfijos, where);
  }

  @del('/empleados/{id}/activosfijos', {
    responses: {
      '200': {
        description: 'Empleados.Activosfijos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Activosfijos)) where?: Where<Activosfijos>,
  ): Promise<Count> {
    return this.empleadosRepository.empleadoasignado(id).delete(where);
  }
}
