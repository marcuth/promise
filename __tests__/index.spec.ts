import promise from "../src/index"

describe("promise helper", () => {
    it("should return result and null error when promise resolves", async () => {
        const successPromise = Promise.resolve("success")
        const [result, error] = await promise(successPromise)

        expect(result).toBe("success")
        expect(error).toBeNull()
    })

    it("should return null result and error when promise rejects", async () => {
        const errorMsg = "something went wrong"
        const failurePromise = Promise.reject(errorMsg)
        const [result, error] = await promise(failurePromise)

        expect(result).toBeNull()
        expect(error).toBe(errorMsg)
    })
})
