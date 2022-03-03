import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'macfiApi',
  connector: 'mssql',
  url: 'mssql://mfunez:Inter2022.@localhost/macfi',
  host: 'localhost/macfi',
  port: 1433,
  user: 'mfunez',
  password: 'Inter2022.',
  database: 'macfi'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MacfiApiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'macfiApi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.macfiApi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
