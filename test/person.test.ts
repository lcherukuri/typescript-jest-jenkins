import person from '../src/person';

const expectedInfo = {
    name: 'Lokesh',
    job: 'Software Engineer'
};

describe('unit tests', () => {
    describe('person()', () => {
        it('return person info object', function () {
            expect(person()).toEqual(expectedInfo);
        });
    });
});
