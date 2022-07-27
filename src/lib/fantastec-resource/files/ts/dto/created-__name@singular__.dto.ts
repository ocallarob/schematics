import { Create<%= singular(classify(name)) %>Dto } from './create-<%= singular(name) %>.dto';

export class Created<%= singular(classify(name)) %>Dto extends Create<%= singular(classify(name)) %>Dto {
  id: number;
  dateCreated: Date;
  dateUpdated: Date;
}
