/* eslint-disable prettier/prettier */
export const API_KEY = '16ba677111dee94de8fdef9ee6e6c47c'

export interface LocalNames {
    an:string
    ar:string
    be:string
    ca:string
    cs:string
    de:string
    el:string
    eo:string
    es:string
    fa:string
    fr:string
    fy:string
    gl:string
    he:string
    hy:string
    it:string
    ja:string
    ka:string
    kk:string
    ko:string
    la:string
    lb:string
    lt:string
    lv:string
    mk:string
    mr:string
    mt:string
    oc:string
    pl:string
    pt:string
    ru:string
    sr:string
    th:string
    tr:string
    ug:string
    uk:string
    zh:string
}

export interface City {
    country: string
    lat: number
    lon: number
    name: string
    state: string
    local_names: LocalNames[]
}
