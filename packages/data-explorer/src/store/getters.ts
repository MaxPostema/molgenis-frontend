import ApplicationState from '@/types/ApplicationState'

export default {
  activeEntityData: (state: ApplicationState): object|null =>
    state.entityData
}
