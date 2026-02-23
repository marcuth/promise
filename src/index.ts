/**
 * Wraps a Promise to return a tuple of [result, error].
 * Useful for avoiding try/catch blocks and keeping code flow linear.
 *
 * @template T - The type of the data returned by the Promise.
 * @param {T} p - The Promise to be executed.
 * @returns {Promise<[Awaited<T>, null] | [null, any]>} A Promise that resolves to [result, null] on success, or [null, error] on failure.
 *
 * @example
 * const [data, error] = await promise(fetchData());
 * if (error) handle(error);
 * console.log(data);
 */
async function promise<T extends Promise<any>>(p: T): Promise<[Awaited<T>, null] | [null, any]> {
    try {
        const result = await Promise.resolve(p)
        return [result, null]
    } catch (error) {
        return [null, error]
    }
}

export default promise
