import Category from "./category"

describe("Category tests", () => {

    it("should test constructor of category", () => {

        const created_at = new Date()

        const props = {
            name: "Movie",
            description: "description movie",
            is_active: true,
            created_at: created_at
        }

        const category = new Category(props)

        expect(category.props).toStrictEqual({
            name: "Movie",
            description: "description movie",
            is_active: true,
            created_at: created_at
        })

        // expect(category.name).toBe("Movie")
        // expect(category.description).toBe("description movie")
        // expect(category.is_active).toBeTruthy()
        // expect(category.created_at).toBe(created_at)
    })
})