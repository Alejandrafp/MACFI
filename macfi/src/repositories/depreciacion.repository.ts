import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Depreciacion, DepreciacionRelations, Activosfijos} from '../models';
import {ActivosfijosRepository} from './activosfijos.repository';

export class DepreciacionRepository extends DefaultCrudRepository<
  Depreciacion,
  typeof Depreciacion.prototype.id,
  DepreciacionRelations
> {

  public readonly activosfijos: BelongsToAccessor<Activosfijos, typeof Depreciacion.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('ActivosfijosRepository') protected activosfijosRepositoryGetter: Getter<ActivosfijosRepository>,
  ) {
    super(Depreciacion, dataSource);
    this.activosfijos = this.createBelongsToAccessorFor('activosfijos', activosfijosRepositoryGetter,);
    this.registerInclusionResolver('activosfijos', this.activosfijos.inclusionResolver);
  }
}
