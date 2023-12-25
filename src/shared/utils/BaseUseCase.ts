export interface BaseUseCase<PARAMS, OUTPUT> {
  execute: (params?: PARAMS) => OUTPUT;
}
