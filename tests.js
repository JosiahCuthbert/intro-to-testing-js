// Unit tests for the helloWorld function
describe('hello', function() {
    it('should be a defined function', function() {
      expect(typeof hello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof hello()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(hello()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(hello()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "hello name" when called', function() {
        expect(sayHello("joe")).toBe("hello joe");
    });
    it('should return the string "hello world!" when passed true', function() {
        expect(sayHello(true)).toBe("hello world!");
    });
    it('should return the string "hello world!" when passed false', function() {
        expect(sayHello(false)).toBe("hello world!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
      it('should return false when passed 4', function () {
        expect(isFive(4)).toBe(false);
    });
      it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
      it('should return true when passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function() {
    it('should always return a boolean value', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});