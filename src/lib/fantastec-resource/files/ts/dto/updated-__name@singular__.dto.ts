import { Created<%= singular(classify(name)) %>Dto } from './created-<%= singular(name) %>.dto';

export class Updated<%= singular(classify(name)) %>Dto extends Created<%= singular(classify(name)) %>Dto {
}
