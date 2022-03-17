import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Activosfijos} from './activosfijos.model';

@model()
export class Depreciacion extends Entity {
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
  activofijo: string;

  @property({
    type: 'number',
    required: true,
  })
  valorinicial: number;

  @property({
    type: 'number',
    required: true,
  })
  vidautil: number;

  @property({
    type: 'number',
    default: true,
  })
  depreciacionmensual?: number;

  @property({
    type: 'number',
    default: true,
  })
  depreciacionanual?: number;

  @property({
    type: 'number',
    default: true,
  })
  valoractual?: number;

  @property({
    type: 'number',
    default: true,
  })
  depreciaciontotal?: number;

  @property({
    type: 'date',
    default: true,
  })
  fechaadquisicion?: string;

  @property({
    type: 'string',
    default: true,
  })
  comentario?: string;

  @property({
    type: 'string',
    default: true,
  })
  metodo?: string;

  @property({
    type: 'string',
    default: true,
  })
  descripcion?: string;

  @belongsTo(() => Activosfijos)
  activosfijosId: string;

  constructor(data?: Partial<Depreciacion>) {
    super(data);
  }
}

export interface DepreciacionRelations {
  // describe navigational properties here
}

export type DepreciacionWithRelations = Depreciacion & DepreciacionRelations;
