import {Entity, model, property} from '@loopback/repository';

@model()
export class Depreciacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  activofijo?: number;

  @property({
    type: 'number',
  })
  valorinicial?: number;

  @property({
    type: 'number',
  })
  vidautil?: number;

  @property({
    type: 'number',
  })
  depreciacionmensual?: number;


  @property({
    type: 'number',
  })
  valoractual?: number;


  @property({
    type: 'number',
  })
  depreciaciontotal?: number;

  @property({
    type: 'date',
  })
  fechaadquisicion?: string;

  @property({
    type: 'string',
  })
  comentario?: string;

  @property({
    type: 'number',
  })
  depreciacionanual?: number;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'string',
  })
  metodo?: string;


  constructor(data?: Partial<Depreciacion>) {
    super(data);
  }
}

export interface DepreciacionRelations {
  // describe navigational properties here
}

export type DepreciacionWithRelations = Depreciacion & DepreciacionRelations;
