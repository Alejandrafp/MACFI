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
  VidaUtil?: number;

  @property({
    type: 'number',
  })
  DepreciacionAnual?: number;

  @property({
    type: 'number',
  })
  DepreciacionMensual?: number;

  @property({
    type: 'number',
  })
  ValorActual?: number;

  @property({
    type: 'string',
  })
  Metodo?: string;

  @property({
    type: 'string',
  })
  Clasificacion?: string;


  constructor(data?: Partial<ActivosFijos>) {
    super(data);
  }
}

export interface ActivosFijosRelations {
  // describe navigational properties here
}

export type ActivosFijosWithRelations = ActivosFijos & ActivosFijosRelations;
