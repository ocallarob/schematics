import { <%= singular(classify(name)) %> } from '@prisma/client';
import prisma from '../setup';

export const get<%= singular(classify(name)) %> = async (id: number) =>
  prisma.<%= singular(lowercased(name)) %>.findUnique({ where: { id } });
export const get<%= classify(name) %> = async () => prisma.<%= singular(lowercased(name)) %>.findMany();

export const create<%= singular(classify(name)) %> = async (<%= singular(lowercased(name)) %>: Partial<<%= singular(classify(name)) %>> = {}) =>
  prisma.<%= singular(lowercased(name)) %>.create({
    data: {
      ...<%= singular(lowercased(name)) %>,
    },
  });
