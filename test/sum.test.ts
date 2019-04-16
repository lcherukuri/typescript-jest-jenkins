import sum from '../src/sum';

describe('unit tests', () => {
    describe('sum()', () => {
        it('takes 2 numbers as input and return their sum', function () {
            expect(sum(1, 2)).toBe(3);
        });
    });
});
