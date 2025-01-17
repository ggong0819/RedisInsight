export enum BulkActionsServerEvent {
  Create = 'create',
  Get = 'get',
  Abort = 'abort',
  Overview = 'overview',
}

export enum BulkActionsType {
  Delete = 'delete'
}

export enum BulkActionsStatus {
  Initializing = 'initializing',
  Initialized = 'initialized',
  Preparing = 'preparing',
  Ready = 'ready',
  Running = 'running',
  Completed = 'completed',
  Failed = 'failed',
  Aborted = 'aborted',
}

export const MAX_BULK_ACTION_ERRORS_LENGTH = 500
