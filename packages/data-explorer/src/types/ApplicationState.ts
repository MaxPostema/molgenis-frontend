import { DataApiResponse, MetaDataApiResponse } from '@/types/ApiResponse'

export type Toast = {
  type: 'danger' | 'success',
  message: string
}

export default interface ApplicationState {
  toast: Toast | null,
  dataDisplayLayout: string
  activeEntity: string | null
  entityData: DataApiResponse | null
  entityMeta: MetaDataApiResponse | null
  shoppedEntityItems: string[]
  showFilters: boolean
  shoppingFilter: boolean
}
