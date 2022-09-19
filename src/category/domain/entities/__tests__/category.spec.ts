import Category from "../category";

describe("Category tests", () => {

    beforeEach(() => {
        Category.validate = jest.fn()
    })

    it("should test constructor of category", () => {

        let category = new Category({ name: 'Movie' })

        expect(Category.validate).toHaveBeenCalled()
        expect(category.name).toBe("Movie")
        expect(category.created_at).toBeInstanceOf(Date)

    });

    it("should test update method", () => {
        const props = {
            name: "Movie",
        };

        const category = new Category(props);

        expect(Category.validate).toHaveBeenCalledTimes(1)
        expect(category.name).toBe("Movie")
        expect(category.description).toBe(null)

        category.update("Movie updated", "movie 2 description")

        expect(Category.validate).toHaveBeenCalledTimes(2)

        expect(category.name).toBe("Movie updated")
        expect(category.description).toBe("movie 2 description")
    })

    it("should test deactivate method", () => {
        const props = {
            name: "Movie",
        };

        const category = new Category(props);

        expect(category.is_active).toBe(true)
        category.deactivate()
        expect(category.is_active).toBe(false)
    })


    it("should test activate method", () => {
        const props = {
            name: "Movie",
        };

        const category = new Category(props);

        expect(category.is_active).toBe(true)
        category.deactivate()
        expect(category.is_active).toBe(false)
        category.activate()
        expect(category.is_active).toBe(true)
    })


});
