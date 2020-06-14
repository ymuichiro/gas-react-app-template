/** Context Database */
export interface IDatabase {
  name: string
}

/** Google Script Run */
export interface IGoogleRun {
  script: { run: { withSuccessHandler: any } };
}