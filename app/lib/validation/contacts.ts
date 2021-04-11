export const isContact = (contact) => Object.keys(contact === 3) &&
    typeof contact.firstname === 'string' &&
    typeof contact.lastname === 'string' &&
    typeof contact.job === 'string';
