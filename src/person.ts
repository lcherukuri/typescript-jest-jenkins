import { IPerson } from './types';

const person: Function = (): IPerson => ({
    name: 'Lokesh',
    job: 'Software Engineer'
});

export default person;
