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