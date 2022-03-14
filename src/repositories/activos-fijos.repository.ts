import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MacfiApiDataSource} from '../datasources';
import {ActivosFijos, ActivosFijosRelations} from '../models';

export class ActivosFijosRepository extends DefaultCrudRepository<
  ActivosFijos,
  typeof ActivosFijos.prototype.Id,
  ActivosFijosRelations
> {
  constructor(
    @inject('datasources.macfi') dataSource: MacfiApiDataSource,
  ) {
    super(ActivosFijos, dataSource);
  }
}
