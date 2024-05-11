import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type MakeApiRequest = <T = any>(endpoint: string, opts: AxiosRequestConfig) => Promise<AxiosResponse<T>>
export const makeApiOneRequest: MakeApiRequest = async (endpoint, opts) => {

    if (!endpoint) throw new Error("No endpoint provided in the request!");

    const fullUrl = process.env.NODE_ENV === 'development' ?
        `/api/${endpoint}`
        :
        `/api/${endpoint}`

    const config: AxiosRequestConfig = {
        url: fullUrl,
        withCredentials: true,
        headers: {
            'Authorization': 'Bearer ' //+ accessToken,
        },
        method: opts?.method ? opts.method : "get",
        ...opts
    }
    try {
        const response = await axios(config);
        return response;
    } catch (err: any) {
        const errorName = err.response?.data?.name ?? "Unknown Error"
        const errorMessage = err.response?.data?.message ?? "Cannot provide any details at this time. Please try again later."
        throw Error()

    }
};


type MakeExternalApiRequest = <T = any>(endpoint: string, opts: AxiosRequestConfig) => Promise<AxiosResponse<T>>
export const makeExternalApiRequest: MakeExternalApiRequest = async (endpoint, opts) => {

    if (!endpoint) throw new Error("No endpoint provided in the request!");
    const env = process.env.NODE_ENV
    // const fullUrl = env === 'development' ? 
    //     `http://localhost:4689/${endpoint}` 
    //     : 
    //     `https://api1.pushbackbuster.com/${endpoint}`

    const fullUrl = "https://api1.pushbackbuster.com/" + endpoint

    const config: AxiosRequestConfig = {
        url: fullUrl,
        method: opts?.method ? opts.method : "get",
        ...opts
    }
    try {
        const response = await axios(config);
        return response;
    } catch (err: any) {
        const errorName = err.response?.data?.name ?? "Unknown Error"
        const errorMessage = err.response?.data?.message ?? "Cannot provide any details at this time. Please try again later."
        throw Error(`Error on external API: ${err.name} - ${err.message}`)
    }
};

