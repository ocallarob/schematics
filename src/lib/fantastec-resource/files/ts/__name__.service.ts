import { Injectable } from '@nestjs/common';<% if (crud && type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>
import { Create<%= singular(classify(name)) %>Dto, Update<%= singular(classify(name)) %>Dto, Created<%= singular(classify(name)) %>Dto, Updated<%= singular(classify(name)) %>Dto } from './dto';<% } else if (crud) { %>
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input';
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input';<% } %>

@Injectable()
export class <%= classify(name) %>Service {<% if (crud) { %>
  constructor(
    private readonly <%= lowercased(name) %>Repo: <%= classify(name) %>Repository, 
    private readonly logger: PinoLogger
  ) { 
    this.logger.setContext(<%= classify(name) %>Service.name); 
  }

  create(<% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>create<%= singular(classify(name)) %>Dto: Create<%= singular(classify(name)) %>Dto<% } else { %>create<%= singular(classify(name)) %>Input: Create<%= singular(classify(name)) %>Input<% } %>): Promise<<%= singular(classify(name)) %>Dto> {
    this.logger.debug('create');
    this.logger.trace({ %>create<%= singular(classify(name)) %>Dto });
    return this.<%= lowercased(name) %>Repo.create(%>create<%= singular(classify(name)) %>Dto);
  }

  findAll(): Promise<Created<%= singular(classify(name)) %>Dto[]> {
    this.logger.debug('findAll');
    return this.<%= lowercased(name) %>Repo.find({});
  }

  findOne(id: number): Promise<Created<%= singular(classify(name)) %>Dto> {
    this.logger.debug('findOne');
    this.logger.trace({ id });
    return this.<%= lowercased(name) %>Repo.findOne(id);
  }

  update(id: number, <% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>update<%= singular(classify(name)) %>Dto: Update<%= singular(classify(name)) %>Dto<% } else { %>update<%= singular(classify(name)) %>Input: Update<%= singular(classify(name)) %>Input<% } %>): Promise<Updated<%= singular(classify(name)) %>Dto> {
    this.logger.debug('update');
    this.logger.trace({ id, %>update<%= singular(classify(name)) %>Dto });
    return this.<%= lowercased(name) %>Repo.updateById(id, %>update<%= singular(classify(name)) %>Dto);  
  }

  remove(id: number): Promise<Created<%= singular(classify(name)) %>Dto> {
    this.logger.debug('remove');
    this.logger.trace({ id });
    return this.<%= lowercased(name) %>Repo.deleteById(id);
  }
<% } %>}
