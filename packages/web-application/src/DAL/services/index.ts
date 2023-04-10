import { Container } from 'typedi';
import { TablesService } from './tables/tables.service';

export const tablesService = Container.get(TablesService);