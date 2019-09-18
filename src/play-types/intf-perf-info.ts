export interface IPerfInfo {
  genPerfInfoText: (audience: number, play:any) => string
  genPerfInfoHTML: (audience: number, play:any) => string
}