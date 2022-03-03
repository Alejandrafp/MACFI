import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MacfiApiDataSource} from '../datasources';
import {Empleados, EmpleadosRelations} from '../models';

export class EmpleadosRepository extends DefaultCrudRepository<
  Empleados,
  typeof Empleados.prototype.id,
  EmpleadosRelations
> {
  constructor(
    @inject('datasources.macfiApi') dataSource: MacfiApiDataSource,
  ) {
    super(Empleados, dataSource);
  }
}
