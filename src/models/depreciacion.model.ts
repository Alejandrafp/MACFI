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
  porcentajedepreciacion?: number;

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
  fecha?: string;


  constructor(data?: Partial<Depreciacion>) {
    super(data);
  }
}

export interface DepreciacionRelations {
  // describe navigational properties here
}

export type DepreciacionWithRelations = Depreciacion & DepreciacionRelations;
