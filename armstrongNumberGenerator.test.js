// isArmstrong function

// success case
//  should return 1, if the number is armstrong
//  should return 0, if the number is not armstrong


// failure
//  should return invalid input when array given as input
//  should return invalid input when negative number is given as input
//  should return invalid input when string given as input
//  should throw error when integer raange exceeded

const obj = require('./ArmstrongNumberGenerator');
describe('isArmstrong function', function() {
    it('should return 1, if the number is armstrong', function() {
        const ans = obj.isArmstrong(407);
        expect(ans).toBe(1);
    });
    it('should return 0, if the number is not armstrong', function() {
        const ans = obj.isArmstrong(7);
        expect(ans).toBe(0);
    });
    it('should throw invalid input when array given as input', function() {
        const ans = obj.isArmstrong([4,7,9]);
        expect(ans).toBe('invalid input');
    });
    it('should throw invalid input when negative number is given as input', function() {
        const ans = obj.isArmstrong(-7);
        expect(ans).toBe('invalid input');
    });
    it('should throw invalid input when string given as input', function() {
        const ans = obj.isArmstrong('gh');
        expect(ans).toBe('invalid input');
    });
    it('should throw error when integer raange exceeded', function() {
        expect(() => obj.isArmstrong(1001)).toThrow('Invalid exceeds the valid range');
    })
});


//printArmstrong function

// success case
//  should print all armstrong numbers till the input


// failure
//  should throw invalid input when array given as input
//  should throw invalid input when negative number is given as input
//  should throw invalid input when string given as input
//  should throw error when integer raange exceeded
describe('isArmstrong function', function() {
    it('should print all armstrong numbers till the input', function() {
        const ans = obj.printArmstrong(407);
        expect(ans).toStrictEqual([0,1,153,370,371,407]);
    });
    it('should throw invalid input when array given as input', function() {
        const ans = obj.printArmstrong([4,7,9]);
        expect(ans).toBe('invalid input');
    });
    it('should throw invalid input when negative number is given as input', function() {
        const ans = obj.printArmstrong(-7);
        expect(ans).toBe('invalid input');
    });
    it('should throw invalid input when string given as input', function() {
        const ans = obj.printArmstrong('gh');
        expect(ans).toBe('invalid input');
    });
    it('should throw error when integer raange exceeded', function() {
        expect(() => obj.printArmstrong(1001)).toThrow('Invalid exceeds the valid range');
    })
});

// ./node_modules/.bin/jest.cmd ./ArmstrongNumberGenerator.test.js