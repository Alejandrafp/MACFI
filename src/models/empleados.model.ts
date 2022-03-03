import {Entity, model, property} from '@loopback/repository';

@model()
export class Empleados extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  nombre?: string;

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


  constructor(data?: Partial<Empleados>) {
    super(data);
  }
}

export interface EmpleadosRelations {
  // describe navigational properties here
}

export type EmpleadosWithRelations = Empleados & EmpleadosRelations;
