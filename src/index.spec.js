import { fortawesomeSolidShortcode, fortawesomeSolidPlugin } from './index';

describe("test 'fortawesomeSolidShortcode()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeSolidShortcode).not.toBeUndefined();
        expect(fortawesomeSolidShortcode).toBeType('function');
    });

    it('should return a defined string', () => {
        const result = fortawesomeSolidShortcode('bell');
        expect(result).not.toBeUndefined();
        expect(result).toBeType('string');
    });

    it('should return a non-empty string', () => {
        const result = fortawesomeSolidShortcode('bell');
        expect(result.length).not.toBe(0);
    });

    it('should return a string including the passed class name', () => {
        const result = fortawesomeSolidShortcode('bell', 'social-icon');
        expect(result).toContain('social-icon');
    });
});

describe("test 'fortawesomeSolidPlugin()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeSolidPlugin).not.toBeUndefined();
        expect(fortawesomeSolidPlugin).toBeType('function');
    });

    describe('test the plugin', () => {
        const mockAddShortcode = jest.fn();
        const eleventyConfig = {
            addShortcode: mockAddShortcode,
        };

        beforeEach(() => {
            mockAddShortcode.mockReset();
        });

        it("should call 'eleventyConfig.addShortcode()'", () => {
            fortawesomeSolidPlugin(eleventyConfig);
            expect(mockAddShortcode).toBeCalledTimes(1);
        });

        it("should call 'eleventyConfig.addShortcode()' with the expected arguments", () => {
            fortawesomeSolidPlugin(eleventyConfig);
            expect(mockAddShortcode).toBeCalledWith(
                'fortawesomeSolid',
                fortawesomeSolidShortcode
            );
        });
    });
});
