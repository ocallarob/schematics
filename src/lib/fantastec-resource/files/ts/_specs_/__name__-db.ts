import { <%= singular(classify(name)) %> } from '@prisma/client';
import prisma from '../setup';

export const get<%= singular(classify(name)) %> = async (id: number) =>
  prisma.athlete.findUnique({ where: { id } });
export const get<%= classify(name) %> = async () => prisma.athlete.findMany();

export const create<%= singular(classify(name)) %> = async (athlete: Partial<<%= singular(classify(name)) %>> = {}) =>
  prisma.athlete.create({
    data: {
      ...athlete,
    },
  });
