<% if (crud && type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>
  import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { <%= singular(classify(name)) %>, Prisma } from '@prisma/client';
  import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
  import { PinoLogger } from 'nestjs-pino';
  import { PrismaService } from '../database';
  import { Create<%= singular(classify(name)) %>Dto, Update<%= singular(classify(name)) %>Dto, Created<%= singular(classify(name)) %>Dto, Updated<%= singular(classify(name)) %>Dto } from './dto';
  <% } else if (crud) { %>
  import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input';
  import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input';<% } %>

  const notFoundMessage = `<%= singular(classify(name)) %> not found`;
  
  @Injectable()
  export class <%= classify(name) %>Repository {<% if (crud) { %>
    constructor(
      private prisma: PrismaService,
      private readonly logger: PinoLogger
    ) { 
      this.logger.setContext(<%= classify(name) %>Repository.name); 
    }

    async create(data: Prisma.<%= singular(classify(name)) %>CreateInput): Promise< <%= singular(classify(name)) %> > {
      this.logger.debug('Entering create');
      this.logger.trace({ data });
      return this.prisma.<%= singular(lowercased(name)) %>.create({
        data,
      });
    }

    private async findOne(
      <%= singular(lowercased(name)) %>WhereUniqueInput: Prisma.<%= singular(classify(name)) %>WhereUniqueInput,
    ): Promise< <%= singular(classify(name)) %> > {
      this.logger.debug('findOne');
      this.logger.trace({ <%= singular(lowercased(name)) %>WhereUniqueInput });
      return this.prisma.<%= singular(lowercased(name)) %>.findUnique({
        where: <%= singular(lowercased(name)) %>WhereUniqueInput,
      });
    }
  
    async findById(id: number): Promise<Created<%= singular(classify(name)) %>Dto> {
      this.logger.debug('entering findById');
      this.logger.trace({ id });
      const <%= singular(lowercased(name)) %> = await this.findOne({ id });
      if (!<%= singular(lowercased(name)) %>) {
        this.logger.warn('<%= singular(lowercased(name)) %> not found');
        throw new NotFoundException(notFoundMessage);
      }
      this.logger.debug('leaving findById');
      this.logger.trace({ <%= singular(lowercased(name)) %> });
      return <%= singular(lowercased(name)) %>;
    }
  
    async find(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.<%= singular(classify(name)) %>WhereUniqueInput;
      where?: Prisma.<%= singular(classify(name)) %>WhereInput;
      orderBy?: Prisma.<%= singular(classify(name)) %>OrderByWithRelationInput;
    }): Promise< <%= singular(classify(name)) %>[]> {
      this.logger.debug('Entering find');
      this.logger.trace({ params });
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.<%= singular(lowercased(name)) %>.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }

    private async update(params: {
      where: Prisma.<%= singular(classify(name)) %>WhereUniqueInput;
      data: Prisma.<%= singular(classify(name)) %>UpdateInput;
    }): Promise< <%= singular(classify(name)) %> > {
      this.logger.debug('Entering update');
      this.logger.trace({ params });
      const { where, data } = params;
      return this.prisma.<%= singular(lowercased(name)) %>.update({
        data,
        where,
      });
    }
  
    async updateById(
      id: number,
      update: Update<%= singular(classify(name)) %>Dto,
    ): Promise<Updated<%= singular(classify(name)) %>Dto> {
      try {
        this.logger.debug('entering updateById');
        this.logger.trace({ id, update });
        const updated = await this.update({
          data: update,
          where: { id },
        });
        this.logger.debug('leaving updateById');
        this.logger.trace({ updated });
        return updated;
      } catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
          if (err.code === 'P2025') {
            this.logger.warn(err.message);
            throw new NotFoundException(notFoundMessage);
          }
        }
        this.logger.error({ err, id, update });
        throw err;
      }
    }
  
    private async delete(
      where: Prisma.<%= singular(classify(name)) %>WhereUniqueInput,
    ): Promise< <%= singular(classify(name)) %> > {
      this.logger.debug('delete');
      this.logger.trace({ where });
      return this.prisma.<%= singular(lowercased(name)) %>.delete({
        where,
      });
    }
  
    async deleteById(id: number): Promise<Updated<%= singular(classify(name)) %>Dto> {
      try {
        this.logger.debug('entering deleteById');
        this.logger.trace({ id });
        const deleted = await this.delete({ id });
        this.logger.debug('leaving deleteById');
        this.logger.trace({ deleted });
        return deleted;
      } catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
          if (err.code === 'P2025') {
            this.logger.warn(err.message);
            throw new NotFoundException(notFoundMessage);
          }
        }
        this.logger.error({ err, id });
        throw err;
      }
    }

  <% } %>}
  