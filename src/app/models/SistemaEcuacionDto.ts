export interface SistemaEcuacionDto {
  xValue: number[];
  yValue: number[];
  zValue: number[];
  ecuResults: number[];
  xResult: number;
  yResult: number;
  zResult: number;
}

export interface SistemaEcuacionRequestDto {
  xvalueFields: number[];
  yvalueFields: number[];
  zvalueFields?: number[];
  resFields: number[];
}

export interface SistemaEcuacionResponseDto {
  message: string;
}