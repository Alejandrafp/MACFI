import {Entity, model, property} from '@loopback/repository';

@model()
export class Activosfijos extends Entity {
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
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  valorinicial: number;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;

  @property({
    type: 'string',
    default: true,
  })
  ubicacion?: string;

  @property({
    type: 'string',
    default: true,
  })
  empleadoasignado?: string;

  @property({
    type: 'date',
    default: true,
  })
  fechaadquisicion?: string;

  @property({
    type: 'number',
    default: true,
  })
  vidautil?: number;

  @property({
    type: 'number',
    default: true,
  })
  depreciacionanual?: number;

  @property({
    type: 'number',
    default: true,
  })
  depreciacionmensual?: number;

  @property({
    type: 'number',
    default: true,
  })
  valoractual?: number;

  @property({
    type: 'string',
    default: true,
  })
  metodo?: string;

  @property({
    type: 'string',
    default: true,
  })
  clasificacion?: string;


  constructor(data?: Partial<Activosfijos>) {
    super(data);
  }
}

export interface ActivosfijosRelations {
  // describe navigational properties here
}

export type ActivosfijosWithRelations = Activosfijos & ActivosfijosRelations;
