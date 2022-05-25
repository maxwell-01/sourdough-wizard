const createApiResponse = <T>(status: number, message: string, data: T) => {
    return {
        status: status,
        message: message,
        data: data
    }
}
export default createApiResponse