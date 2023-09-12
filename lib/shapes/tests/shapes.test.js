const Shape = require('../shapes');

describe('Shape', () => {
    describe('Letters Too Long', () => {
        test('an error will show when the letters input is more than three characters long', () => {
            const shape = () => new Shape('AAAA', 'White', 'Green');
            const err = new Error(`Can only Generate logo's up to three letters`);
            expect(shape).toThrowError(err);
        });
    });
    describe('Letters Length', () => {
        test('an error will show when the letters input is less than three characters long', () => {
            const shape = () => new Shape('AAA', 'White', 'Green');
            const err = new Error(`Can only Generate logo's up to three letters`);
            expect(shape).not.toThrowError(err);
        });
    });
    describe('Render', () => {
        test('an error will show when render() is called', () => {
            const shape = new Shape('AAA', 'White', 'Green');
            const err = new Error('Child class must implement a render() method.')
            expect(shape.render).toThrow(err);
        });
    });
});