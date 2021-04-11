export const MalformedEntityError = () => Object.assign(
  new Error('MALFORMED ENTITY'),
  { status: 400});

  export const EntityNotFoundError = () => Object.assign(
    new Error('MALFORMED ENTITY'),
    { status: 404});