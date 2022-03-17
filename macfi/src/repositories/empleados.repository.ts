import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Empleados, EmpleadosRelations, Activosfijos} from '../models';
import {ActivosfijosRepository} from './activosfijos.repository';

export class EmpleadosRepository extends DefaultCrudRepository<
  Empleados,
  typeof Empleados.prototype.id,
  EmpleadosRelations
> {

  public readonly empleadoasignado: HasManyRepositoryFactory<Activosfijos, typeof Empleados.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('ActivosfijosRepository') protected activosfijosRepositoryGetter: Getter<ActivosfijosRepository>,
  ) {
    super(Empleados, dataSource);
    this.empleadoasignado = this.createHasManyRepositoryFactoryFor('empleadoasignado', activosfijosRepositoryGetter,);
    this.registerInclusionResolver('empleadoasignado', this.empleadoasignado.inclusionResolver);
  }
}
