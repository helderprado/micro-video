import Category from "./category";

describe("Category tests", () => {
    it("should test constructor of category", () => {
        const created_at = new Date();

        const props = {
            name: "Movie",
            description: "description movie",
            is_active: true,
            created_at: created_at,
        };

        const category = new Category(props);


        expect(category.props).toStrictEqual({
            name: "Movie",
            description: "description movie",
            is_active: true,
            created_at: created_at,
        });
    });

    it("should test update method", () => {
        const props = {
            name: "Movie",
        };

        const category = new Category(props);

        expect(category.name).toBe("Movie")
        expect(category.description).toBe(null)

        category.update("Movie updated", "movie 2 description")

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
