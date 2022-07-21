import { <%= singular(classify(name)) %> } from '@prisma/client';
import prisma from '../setup';

export const get<%= singular(classify(name)) %> = async (id: number) =>
  prisma.<%= singluar(lowercased(name)) %>.findUnique({ where: { id } });
export const get<%= classify(name) %> = async () => prisma.<%= singluar(lowercased(name)) %>.findMany();

export const create<%= singular(classify(name)) %> = async (<%= singluar(lowercased(name)) %>: Partial<<%= singular(classify(name)) %>> = {}) =>
  prisma.<%= singluar(lowercased(name)) %>.create({
    data: {
      ...<%= singluar(lowercased(name)) %>,
    },
  });
