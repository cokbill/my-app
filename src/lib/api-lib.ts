
type DataProp = {
    data: any
    length: number
    slice: (first: number, last: number) => void
}

export const getAnimeResponse = async (resouce : string, query? : string): Promise<any> => {
    const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resouce}?${query}`)
    const anime:any = await response.json()
    return anime

}

export const getNestedAnimeresponse = async (resouce: string, objectProperty: string ): Promise<any> => {
    const response = await getAnimeResponse(resouce)
return response.data.flatMap((item:any) => item[objectProperty])
}

export const reproduce = (data:DataProp, gap:number) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap
    console.log({first, last})

    const response = {
        data: data.slice(first,last)
    }
    return response
}