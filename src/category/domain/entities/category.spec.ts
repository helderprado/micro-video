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

});
