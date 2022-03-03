import {Entity, model, property} from '@loopback/repository';

@model()
export class ActivosFijos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'number',
  })
  ValorInicial?: number;

  @property({
    type: 'boolean',
  })
  Estado?: boolean;

  @property({
    type: 'string',
  })
  Ubicacion?: string;

  @property({
    type: 'string',
  })
  EmpleadoAsignado?: string;

  @property({
    type: 'date',
  })
  FechaAdquisicion?: string;

  @property({
    type: 'number',
  })
  ValorActual?: number;

  @property({
    type: 'number',
  })
  PorcentajeDepreciacion?: number;

  @property({
    type: 'object',
  })
  Img?: object;


  constructor(data?: Partial<ActivosFijos>) {
    super(data);
  }
}

export interface ActivosFijosRelations {
  // describe navigational properties here
}

export type ActivosFijosWithRelations = ActivosFijos & ActivosFijosRelations;
