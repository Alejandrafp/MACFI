import {Entity, model, property} from '@loopback/repository';

@model()
export class Empleados extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  apellido?: string;

  @property({
    type: 'number',
  })
  telefono?: number;

  @property({
    type: 'string',
  })
  ubicacion?: string;

  @property({
    type: 'string',
  })
  otro?: string;


  constructor(data?: Partial<Empleados>) {
    super(data);
  }
}

export interface EmpleadosRelations {
  // describe navigational properties here
}

export type EmpleadosWithRelations = Empleados & EmpleadosRelations;
