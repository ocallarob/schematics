import { Created<%= singular(classify(name)) %>Dto } from './created-<%= singular(lowercased(name)) %>.dto';

export class Updated<%= singular(classify(name)) %>Dto extends Created<%= singular(classify(name)) %>Dto {
}
