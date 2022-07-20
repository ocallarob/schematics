import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { <%= classify(name) %>Repository } from './<%= lowercased(name) %>.repository';
import {
  Create<%= singular(classify(name)) %>Dto,
  Created<%= singular(classify(name)) %>Dto,
  Update<%= singular(classify(name)) %>Dto,
  Updated<%= singular(classify(name)) %>Dto,
} from './dto';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(
    private <%= lowercased(name) %>Repo: <%= classify(name) %>Repository,
    private readonly logger: PinoLogger,
  ) {
    this.logger.setContext(<%= classify(name) %>Service.name);
  }

  create(create<%= singular(classify(name)) %>Dto: Create<%= singular(classify(name)) %>Dto): Promise<Created<%= singular(classify(name)) %>Dto> {
    this.logger.debug('create');
    this.logger.trace(create<%= singular(classify(name)) %>Dto);
    return this.<%= lowercased(name) %>Repo.create(create<%= singular(classify(name)) %>Dto);
  }

  findAll(): Promise<Created<%= singular(classify(name)) %>Dto[]> {
    this.logger.debug('findAll');
    return this.<%= lowercased(name) %>Repo.find({});
  }

  findOne(id: number): Promise<Created<%= singular(classify(name)) %>Dto> {
    this.logger.debug('findOne');
    this.logger.trace({ id });
    return this.<%= singular(lowercased(name)) %>Repo.findById(id);
  }
  update(
    id: number,
    update<%= singular(classify(name)) %>Dto: Update<%= singular(classify(name)) %>Dto,
  ): Promise<Updated<%= singular(classify(name)) %>Dto> {
    this.logger.debug('update');
    this.logger.trace({ id, update<%= singular(classify(name)) %>Dto });
    return this.<%= lowercased(name) %>Repo.updateById(id, update<%= singular(classify(name)) %>Dto);
  }

  remove(id: number): Promise<Created<%= singular(classify(name)) %>Dto> {
    this.logger.debug('remove');
    this.logger.trace({ id });
    return this.<%= lowercased(name) %>Repo.deleteById(id);
  }
}
