import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MacfiApiDataSource} from '../datasources';
import {Depreciacion, DepreciacionRelations} from '../models';

export class DepreciacionRepository extends DefaultCrudRepository<
  Depreciacion,
  typeof Depreciacion.prototype.activofijo,
  DepreciacionRelations
> {
  constructor(
    @inject('datasources.macfiApi') dataSource: MacfiApiDataSource,
  ) {
    super(Depreciacion, dataSource);
  }
}
