import { fortawesomeBrandsShortcode, fortawesomeBrandsPlugin } from './index';

describe("test 'fortawesomeBrandsShortcode()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeBrandsShortcode).not.toBeUndefined();
        expect(fortawesomeBrandsShortcode).toBeType('function');
    });

    it('should return a defined string', () => {
        const result = fortawesomeBrandsShortcode('github', 'social-icon');
        expect(result).not.toBeUndefined();
        expect(result).toBeType('string');
    });
});

describe("test 'fortawesomeBrandsPlugin()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeBrandsPlugin).not.toBeUndefined();
        expect(fortawesomeBrandsPlugin).toBeType('function');
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
            fortawesomeBrandsPlugin(eleventyConfig);
            expect(mockAddShortcode).toBeCalledTimes(1);
        });

        it("should call 'eleventyConfig.addShortcode()' with the expected arguments", () => {
            fortawesomeBrandsPlugin(eleventyConfig);
            expect(mockAddShortcode).toBeCalledWith(
                'fortawesomeBrand',
                fortawesomeBrandsShortcode
            );
        });
    });
});
