import { Module } from '@nestjs/common';

import { PrismaService } from '../database';

import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { <%= classify(name) %>Repository } from './<%= name %>.repository';
import { <%= classify(name) %>Service } from './<%= name %>.service';

@Module({
  controllers: [<%= classify(name) %>Controller],
  providers: [<%= classify(name) %>Service, <%= classify(name) %>Repository, PrismaService],
  // imports: [], // TODO: Import and Dependency Modules if required
  // exports: [<%= classify(name) %>Service, <%= classify(name) %>Repository], // TODO: Export and Providers used elsewhere if required
})
export class <%= classify(name) %>Module {}
