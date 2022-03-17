import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Depreciacion, DepreciacionRelations} from '../models';

export class DepreciacionRepository extends DefaultCrudRepository<
  Depreciacion,
  typeof Depreciacion.prototype.id,
  DepreciacionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Depreciacion, dataSource);
  }
}
