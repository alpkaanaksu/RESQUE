export const getVersion = type => {
    return 'TEMP'
}

export const getTypeName = (type: 'pub' | 'software' | 'data' | 'meta' | string) => {
    return {
        pub: 'Publication',
        software: 'Software',
        data: 'Data Set',
        meta: 'Author / Metadata'
    }[type];
}

