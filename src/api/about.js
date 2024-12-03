import { useDollarGet } from '~/composables/useDollarFetchRequest'
import { useFetchGet } from '~/composables/useFetchRequest'
export const getDocsApi = () => useDollarGet('/api/slider/getSliders')
export const getDocsApi2 = () => useFetchGet('/api/slider/getSliders')
