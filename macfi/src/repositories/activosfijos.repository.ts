import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Activosfijos, ActivosfijosRelations} from '../models';

export class ActivosfijosRepository extends DefaultCrudRepository<
  Activosfijos,
  typeof Activosfijos.prototype.id,
  ActivosfijosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Activosfijos, dataSource);
  }
}
