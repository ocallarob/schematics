import {
  Create<%= singular(classify(name)) %>Dto,
  Created<%= singular(classify(name)) %>Dto,
  Update<%= singular(classify(name)) %>Dto,
  Updated<%= singular(classify(name)) %>Dto,
} from '../../dto';

// TODO: Update Properties

const defaults: Created<%= singular(classify(name)) %>Dto = {
  id: 1,
  // <%= singular(classify(name)) %> properties
  dateCreated: new Date(),
  dateUpdated: new Date(),
};

export const create<%= singular(classify(name)) %>DtoStub = ({}: // <%= singular(classify(name)) %> properties
Partial<Create<%= singular(classify(name)) %>Dto> = {}): Create<%= singular(classify(name)) %>Dto => ({
  firstName: firstName || defaults.firstName,
  lastName: lastName || defaults.lastName,
  displayName: displayName || defaults.displayName,
  gender: gender || defaults.gender,
});

export const created<%= singular(classify(name)) %>DtoStub = ({
  id,
  // <%= singular(classify(name)) %> properties
  dateCreated,
  dateUpdated,
}: Partial<Created<%= singular(classify(name)) %>Dto> = {}): Created<%= singular(classify(name)) %>Dto => ({
  id: id || defaults.id,
  // <%= singular(classify(name)) %> properties
  dateCreated: dateCreated || defaults.dateCreated,
  dateUpdated: dateUpdated || defaults.dateUpdated,
});

export const update<%= singular(classify(name)) %>DtoStub = (
  <%= singular(lowercased(name)) %>Data: Partial<Update<%= singular(classify(name)) %>Dto> = {},
): Update<%= singular(classify(name)) %>Dto => create<%= singular(classify(name)) %>DtoStub(<%= singular(lowercased(name)) %>Data);

export const updated<%= singular(classify(name)) %>DtoStub = (
  <%= singular(lowercased(name)) %>Data: Partial<Updated<%= singular(classify(name)) %>Dto> = {},
): Updated<%= singular(classify(name)) %>Dto => created<%= singular(classify(name)) %>DtoStub(<%= singular(lowercased(name)) %>Data);
