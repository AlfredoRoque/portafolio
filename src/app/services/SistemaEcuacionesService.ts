import { Injectable } from "@angular/core";
import { SistemaEcuacionDto, SistemaEcuacionRequestDto, SistemaEcuacionResponseDto } from "../models/SistemaEcuacionDto";

@Injectable({
  providedIn: 'root'
})
export class SistemaEcuacionesService {
  // Equation system positions
  private positionOne = 0;
  private positionTwo = 1;
  private positionThree = 2;
  private positionFour = 3;

  // Data process variables
  private sistemaEcuacion: SistemaEcuacionDto = this.createEmptyDto();

  // Equation system x values
  private x1 = 0;
  private x2 = 0;
  private x3 = 0;

  // Equation system y values
  private y1 = 0;
  private y2 = 0;
  private y3 = 0;

  // Equation system z values
  private z1 = 0;
  private z2 = 0;
  private z3 = 0;

  // Equation system results values
  private res1 = 0;
  private res2 = 0;
  private res3 = 0;

  // Equation system x steps process
  private xProcess1 = 0;
  private xProcess2 = 0;
  private xProcess3 = 0;
  private xProcess4 = 0;
  private xProcess5 = 0;
  private xProcess6 = 0;
  private xProcess7 = 0;
  private xProcess8 = 0;
  private xProcess9 = 0;
  private xProcess10 = 0;
  private xProcess11 = 0;
  private xProcess12 = 0;
  private xProcess13 = 0;
  private xProcess14 = 0;
  private xProcess15 = 0;
  private xProcess16 = 0;
  private xProcess17 = 0;
  private xProcess18 = 0;

  // Equation system y step process
  private yProcess1 = 0;
  private yProcess2 = 0;
  private yProcess3 = 0;
  private yProcess4 = 0;
  private yProcess5 = 0;
  private yProcess6 = 0;
  private yProcess7 = 0;
  private yProcess8 = 0;
  private yProcess9 = 0;
  private yProcess10 = 0;

  // Equation system z step process
  private zProcess1 = 0;
  private zProcess2 = 0;
  private zProcess3 = 0;
  private zProcess4 = 0;
  private zProcess5 = 0;
  private zProcess6 = 0;
  private zProcess7 = 0;
  private zProcess8 = 0;
  private zProcess9 = 0;
  private zProcess10 = 0;

  private responseMessage = "";

  // ─── Helpers ──────────────────────────────

  private createEmptyDto(): SistemaEcuacionDto {
    return {
      xValue: [],
      yValue: [],
      zValue: [],
      ecuResults: [],
      xResult: 0,
      yResult: 0,
      zResult: 0,
    };
  }

  private r(n: number): string {
    return this.roundTwoDecimals(n).toFixed(2);
  }

  private roundTwoDecimals(n: number): number {
    return Math.round(n * 100) / 100;
  }

  private getFieldsValues(
    sistemaEcuacion: SistemaEcuacionDto,
    xFields: number[],
    yFields: number[],
    thirdOrResFields: number[],
    resFields?: number[]
  ): void {
    const is3x3 = resFields !== undefined;
    for (let i = 0; i < xFields.length; i++) {
      sistemaEcuacion.xValue.push(xFields[i]);
      sistemaEcuacion.yValue.push(yFields[i]);
      if (is3x3) {
        sistemaEcuacion.zValue.push(thirdOrResFields[i]);
        sistemaEcuacion.ecuResults.push(resFields![i]);
      } else {
        sistemaEcuacion.ecuResults.push(thirdOrResFields[i]);
      }
    }
  }

  private get2x2Values(): void {
    this.x1 = this.sistemaEcuacion.xValue[this.positionOne];
    this.y1 = this.sistemaEcuacion.yValue[this.positionOne];
    this.res1 = this.sistemaEcuacion.ecuResults[this.positionOne];
    this.x2 = this.sistemaEcuacion.xValue[this.positionTwo];
    this.y2 = this.sistemaEcuacion.yValue[this.positionTwo];
    this.res2 = this.sistemaEcuacion.ecuResults[this.positionTwo];
  }

  private get3x3Values(): void {
    this.x1 = this.sistemaEcuacion.xValue[this.positionOne];
    this.y1 = this.sistemaEcuacion.yValue[this.positionOne];
    this.z1 = this.sistemaEcuacion.zValue[this.positionOne];
    this.res1 = this.sistemaEcuacion.ecuResults[this.positionOne];
    this.x2 = this.sistemaEcuacion.xValue[this.positionTwo];
    this.y2 = this.sistemaEcuacion.yValue[this.positionTwo];
    this.z2 = this.sistemaEcuacion.zValue[this.positionTwo];
    this.res2 = this.sistemaEcuacion.ecuResults[this.positionTwo];
    this.x3 = this.sistemaEcuacion.xValue[this.positionThree];
    this.y3 = this.sistemaEcuacion.yValue[this.positionThree];
    this.z3 = this.sistemaEcuacion.zValue[this.positionThree];
    this.res3 = this.sistemaEcuacion.ecuResults[this.positionThree];
  }

  private cleanAll(): void {
    this.sistemaEcuacion = this.createEmptyDto();
    this.xProcess1 = this.xProcess2 = this.xProcess3 = this.xProcess4 = this.xProcess5 = 0;
    this.xProcess6 = this.xProcess7 = this.xProcess8 = this.xProcess9 = this.xProcess10 = 0;
    this.xProcess11 = this.xProcess12 = this.xProcess13 = this.xProcess14 = this.xProcess15 = 0;
    this.xProcess16 = this.xProcess17 = this.xProcess18 = 0;
    this.yProcess1 = this.yProcess2 = this.yProcess3 = this.yProcess4 = this.yProcess5 = 0;
    this.yProcess6 = this.yProcess7 = this.yProcess8 = this.yProcess9 = this.yProcess10 = 0;
    this.zProcess1 = this.zProcess2 = this.zProcess3 = this.zProcess4 = this.zProcess5 = 0;
    this.zProcess6 = this.zProcess7 = this.zProcess8 = this.zProcess9 = this.zProcess10 = 0;
    this.x1 = this.x2 = this.x3 = 0;
    this.y1 = this.y2 = this.y3 = 0;
    this.z1 = this.z2 = this.z3 = 0;
    this.res1 = this.res2 = this.res3 = 0;
    this.responseMessage = "";
  }

  // ─── Public methods ────────────────────────

  sustitucion2x2(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.resFields
    );
    this.get2x2Values();

    this.xProcess1 = this.roundTwoDecimals((this.x2 * this.res1) / this.x1);
    this.xProcess2 = this.roundTwoDecimals((-this.x2 * this.y1) / this.x1);
    this.xProcess3 = this.roundTwoDecimals(this.xProcess2 + this.y2);
    this.sistemaEcuacion.yResult = this.roundTwoDecimals(
      (this.res2 - this.xProcess1) / this.xProcess3
    );
    this.yProcess1 = this.y2 * this.sistemaEcuacion.yResult;
    this.sistemaEcuacion.xResult = this.roundTwoDecimals(
      (this.res2 - this.yProcess1) / this.x2
    );

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son :\n${r(this.x1)}x+${r(this.y1)}y = ${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y = ${r(this.res2)}             \n` +
      `\ndespejar 'x' en ecuacion 1\n x=${r(this.res1)}+${r(-this.y1)}x /${r(this.x1)}\n` +
      `\nsustituir 'x' en ecuacion 2 \n ${r(this.x2)}(${r(this.res1)}+${r(-this.y1)}y /${r(this.x1)})+${r(this.y2)}y=${r(this.res1)}\n\n` +
      `resolver multiplicacion \n ${r(this.res1)}+${r(this.xProcess2)}y+${r(this.y2)}y=${r(this.res2)}\n` +
      ` ${r(this.xProcess3)}y=${r(this.res2)}+${r(-this.res1)}\n\n` +
      `despejar 'y' \n y=${r(this.res2)}+${r(-this.res1)}/${r(this.xProcess3)}\n\ny=${r(se.yResult)}\n\n` +
      `sustituir valor de 'y' en ecuacion 2\n ${r(this.x2)}x+${r(this.y2)}(${r(se.yResult)})=${r(this.res2)}\n\n` +
      `despejar 'x'\n${r(this.x2)}x=${r(this.res2)}+${r(-this.yProcess1)}\n` +
      `x=${r(this.res2 - this.yProcess1)}/${r(this.x2)}\nx=${r(se.xResult)}\n\n` +
      `              Los resultados de tus ecuaciones son:                                                          \n` +
      `                  x =${r(se.xResult)}  y = ${r(se.yResult)}\n\n\n`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }

  sustitucion3x3(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.zvalueFields!,
      req.resFields
    );
    this.get3x3Values();

    this.xProcess1 = this.roundTwoDecimals((this.z2 * this.res1) / this.z1);
    this.xProcess2 = this.roundTwoDecimals((-this.z2 * this.x1) / this.z1);
    this.xProcess3 = this.roundTwoDecimals((-this.z2 * this.y1) / this.z1);
    this.xProcess4 = this.roundTwoDecimals(this.x2 + this.xProcess2);
    this.xProcess5 = this.roundTwoDecimals(this.y2 + this.xProcess3);
    this.xProcess6 = this.roundTwoDecimals(this.res2 - this.xProcess1);

    this.yProcess1 = this.roundTwoDecimals((this.z3 * this.res1) / this.z1);
    this.yProcess2 = this.roundTwoDecimals((-this.z3 * this.x1) / this.z1);
    this.yProcess3 = this.roundTwoDecimals((-this.z3 * this.y1) / this.z1);
    this.yProcess4 = this.roundTwoDecimals(this.x3 + this.yProcess2);
    this.yProcess5 = this.roundTwoDecimals(this.y3 + this.yProcess3);
    this.yProcess6 = this.roundTwoDecimals(this.res3 - this.yProcess1);

    this.zProcess1 = this.roundTwoDecimals((this.yProcess4 * this.xProcess6) / this.xProcess4);
    this.zProcess2 = this.roundTwoDecimals((-this.yProcess4 * this.xProcess5) / this.xProcess4);
    this.zProcess3 = this.roundTwoDecimals(this.zProcess2 + this.yProcess5);

    this.sistemaEcuacion.yResult = this.roundTwoDecimals(
      (this.yProcess6 - this.zProcess1) / this.zProcess3
    );

    this.zProcess4 = this.yProcess5 * this.sistemaEcuacion.yResult;
    this.zProcess5 = this.roundTwoDecimals(
      (this.yProcess6 - this.zProcess4) / this.yProcess4
    );

    const findZValue: number[] = [];
    findZValue.push(this.x1 * this.zProcess5);
    findZValue.push(this.y1 * this.sistemaEcuacion.yResult);
    findZValue.push(this.res1 - findZValue[this.positionOne]);
    findZValue.push(findZValue[this.positionThree] - findZValue[this.positionTwo]);

    this.sistemaEcuacion.zResult = this.roundTwoDecimals(
      findZValue[this.positionFour] / this.z1
    );

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son:\n${r(this.x1)}x+${r(this.y1)}y+${r(this.z1)}z=${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y+${r(this.z2)}z=${r(this.res2)}\n` +
      `${r(this.x3)}x+${r(this.y3)}y+${r(this.z3)}z=${r(this.res3)}\n` +
      `despejar 'z' de ecuacion 1\n` +
      `z=(${r(this.res1)}+${r(-this.x1)}x+${r(-this.y1)}y)/${r(this.z1)}\n` +
      `sutituir valor de z en ecuacion 2\n(4)   ${r(this.xProcess4)}x+${r(this.xProcess5)}y=${r(this.res2 - this.xProcess1)}\n` +
      `sutituir valor de z en ecuacion 3\n(5)   ${r(this.yProcess4)}x+${r(this.yProcess5)}y=${r(this.res3 - this.yProcess1)}\n` +
      `despejar 'x' de ecuacion 4\n(6)    x=(${r(this.xProcess6)}+${r(-this.xProcess5)}y)/${r(this.xProcess4)}\n` +
      `sustituir valor de x en ecuacion 5\n${r(this.yProcess4)}(${r(this.xProcess6)}+${r(-this.xProcess5)}y)/${r(this.xProcess4)}\n` +
      `resolver y despejar y\ny=${r(this.yProcess6 - this.zProcess1)}/${r(this.zProcess3)}\n` +
      `y=${r(se.yResult)}\n` +
      `sustituir y en ecuacion 6\nx=(${r(this.xProcess6)}+${r(-this.xProcess5)}(${r(se.yResult)}))/${r(this.xProcess4)}\n` +
      `x=(${r(this.xProcess6)}+${r(-(this.xProcess5 * se.yResult))})/${r(this.xProcess4)}\n` +
      `x=${r(this.xProcess6 - this.xProcess5 * se.yResult)}/${r(this.xProcess4)}\n` +
      `x=${r(this.zProcess5)}\n` +
      `sustituir valor de x e y en ecuacion 1\n${r(this.x1)}(${r(this.zProcess5)})+${r(this.y1)}(${r(se.yResult)})+${r(this.z1)}z=${r(this.res1)}\n` +
      `${r(findZValue[this.positionOne] + findZValue[this.positionTwo])}+${r(this.z1)}z=${r(this.res1)}\n` +
      `z=(${r(this.res1)}+${r(-(findZValue[this.positionOne] + findZValue[this.positionTwo]))})/${r(this.z1)}\n` +
      `z=${r(se.zResult)}\n` +
      `Los resultados de tus ecuaciones son:\n\nx  = ${r(this.zProcess5)}     y = ${r(se.yResult)}     z = ${r(se.zResult)}`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }

  sumayrestaReduccion2x2(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.resFields
    );
    this.get2x2Values();

    this.yProcess1 = -this.y1 * this.x2;
    this.yProcess2 = -this.y1 * this.y2;
    this.yProcess3 = -this.y1 * this.res2;

    this.xProcess1 = this.y2 * this.x1;
    this.xProcess2 = this.y2 * this.y1;
    this.xProcess3 = this.y2 * this.res1;

    this.zProcess1 = this.xProcess1 + this.yProcess1;
    this.zProcess2 = this.xProcess2 + this.yProcess2;
    this.zProcess3 = this.xProcess3 + this.yProcess3;
    this.zProcess4 = this.roundTwoDecimals(this.zProcess3 / this.zProcess1);

    this.xProcess4 = this.x1 * this.zProcess4;
    this.xProcess5 = this.res1 - this.xProcess4;

    this.sistemaEcuacion.yResult = this.roundTwoDecimals(this.xProcess5 / this.y1);

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son :\n${r(this.x1)}x+${r(this.y1)}y = ${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y = ${r(this.res2)}             \n` +
      `\neliminar 'y' multiplicando\n${r(this.xProcess1)}x+${r(this.xProcess2)}y=${r(this.xProcess3)}\n` +
      `${r(this.yProcess1)}x+${r(this.yProcess2)}y=${r(this.yProcess3)}\n\nSumar valores nuevos\n` +
      `${r(this.zProcess1)}x+${r(this.zProcess2)}y=${r(this.zProcess3)}\n` +
      `${r(this.zProcess1)}x=${r(this.zProcess3)}\nx=${r(this.zProcess3)}/${r(this.zProcess1)}\nx=${r(this.zProcess4)}\n\n` +
      `sustituir 'x' en alguna ecuacion\n${r(this.x1)}(${r(this.zProcess4)})+${r(this.y1)}y=${r(this.res1)}\n` +
      `${r(this.y1)}y=${r(this.res1)}+${r(-this.xProcess4)}\n` +
      `y=${r(this.x1)}/${r(this.y1)}\ny=${r(se.yResult)}\n\n` +
      `Los resultados de tus ecuaciones son:                             \n\n` +
      `                 x =${r(this.zProcess4)}     y = ${r(se.yResult)}\n\n`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }

  sumayrestaReduccion3x3(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.zvalueFields!,
      req.resFields
    );
    this.get3x3Values();

    this.xProcess1 = this.y1 * this.x2;
    this.xProcess2 = this.z1 * this.x2;
    this.xProcess3 = this.res1 * this.x2;

    this.yProcess1 = this.y2 * -this.x1;
    this.yProcess2 = this.z2 * -this.x1;
    this.yProcess3 = this.res2 * -this.x1;

    this.xProcess4 = this.xProcess1 + this.yProcess1;
    this.xProcess5 = this.xProcess2 + this.yProcess2;
    this.xProcess6 = this.xProcess3 + this.yProcess3;
    this.xProcess7 = this.y1 * this.x3;
    this.xProcess8 = this.z1 * this.x3;
    this.xProcess9 = this.res1 * this.x3;

    this.zProcess1 = this.y3 * -this.x1;
    this.zProcess2 = this.z3 * -this.x1;
    this.zProcess3 = this.res3 * -this.x1;

    this.yProcess4 = this.xProcess7 + this.zProcess1;
    this.yProcess5 = this.xProcess8 + this.zProcess2;
    this.yProcess6 = this.xProcess9 + this.zProcess3;

    this.xProcess10 = this.xProcess5 * this.yProcess4;
    this.xProcess11 = this.xProcess6 * this.yProcess4;

    this.zProcess4 = this.yProcess5 * -this.xProcess4;
    this.zProcess5 = this.yProcess6 * -this.xProcess4;
    this.zProcess6 = this.xProcess10 + this.zProcess4;
    this.zProcess7 = this.xProcess11 + this.zProcess5;
    this.sistemaEcuacion.zResult = this.roundTwoDecimals(this.zProcess7 / this.zProcess6);

    this.yProcess7 = this.xProcess5 * this.sistemaEcuacion.zResult;
    this.yProcess8 = this.xProcess6 - this.yProcess7;
    this.sistemaEcuacion.yResult = this.roundTwoDecimals(this.yProcess8 / this.xProcess4);

    this.yProcess9 = this.y1 * this.sistemaEcuacion.yResult;
    this.zProcess8 = this.z1 * this.sistemaEcuacion.zResult;
    this.xProcess12 = this.res1 - this.yProcess9 - this.zProcess8;

    this.sistemaEcuacion.xResult = this.roundTwoDecimals(this.xProcess12 / this.x1);

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son:\n${r(this.x1)}x+${r(this.y1)}y+${r(this.z1)}z=${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y+${r(this.z2)}z=${r(this.res2)}\n` +
      `${r(this.x3)}x+${r(this.y3)}y+${r(this.z3)}z=${r(this.res3)}\n` +
      `eliminar 'x' con ecuacion 1 y 2\n${r(this.x1)}x+${r(this.y1)}y+${r(this.z1)}z=${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y+${r(this.z2)}z=${r(this.res2)}\n` +
      `(4)   ${r(this.xProcess4)}y+${r(this.xProcess5)}z=${r(this.xProcess6)}\n` +
      `eliminar 'x' con ecuacion 1 y 3\n${r(this.x1)}x+${r(this.y1)}y+${r(this.z1)}z=${r(this.res1)}\n` +
      `${r(this.x3)}x+${r(this.y3)}y+${r(this.z3)}z=${r(this.res3)}\n` +
      `(5)   ${r(this.yProcess4)}y+${r(this.yProcess5)}z=${r(this.yProcess6)}\n` +
      `eliminar 'y' con ecuacion 4 y 5 y despejar 'z'\n${r(this.xProcess4)}y+${r(this.xProcess5)}z=${r(this.xProcess6)}\n` +
      `${r(this.yProcess4)}y+${r(this.yProcess5)}z=${r(this.yProcess6)}\n  ` +
      `${r(this.zProcess6)}z=${r(this.zProcess7)}\nz=${r(this.zProcess7)}/${r(this.zProcess6)}\nz=${r(se.zResult)}\n` +
      `sutituir 'z' en ecuacion 4 y despejar 'y'\n${r(this.xProcess4)}y+${r(this.xProcess5)}(${r(se.zResult)})=${r(this.xProcess6)}\n` +
      `${r(this.xProcess4)}y+${r(this.yProcess7)}=${r(this.xProcess6)}\n` +
      `${r(this.xProcess4)}y=${r(this.xProcess6)}-${r(this.yProcess7)}\ny=${r(this.yProcess8)}/${r(this.xProcess4)}\ny=${r(se.yResult)}\n` +
      `sutituir 'y' y 'z' en ecuacion 1 y despejar x\n${r(this.x1)}x+${r(this.y1)}(${r(se.yResult)})+${r(this.z1)}(${r(se.zResult)})=${r(this.res1)}\n` +
      `${r(this.x1)}x=${r(this.res1)}-${r(this.zProcess8)}-(${r(this.yProcess9)})\n` +
      `x=${r(this.xProcess12)}/${r(this.x1)}\nx=${r(se.xResult)}\n\n` +
      `             Los resultados de tus ecuaciones son:\n\nx  = ${r(se.xResult)}     y = ${r(se.yResult)}     z = ${r(se.zResult)}`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }

  determinantes2x2(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.resFields
    );
    this.get2x2Values();

    this.xProcess1 = this.x1 * this.y2;
    this.xProcess2 = this.y1 * this.x2;
    this.xProcess3 = this.xProcess1 - this.xProcess2;
    this.xProcess4 = this.res1 * this.y2;
    this.xProcess5 = this.y1 * this.res2;
    this.xProcess6 = this.xProcess4 - this.xProcess5;

    this.yProcess1 = this.x1 * this.res2;
    this.yProcess2 = this.res1 * this.x2;
    this.yProcess3 = this.yProcess1 - this.yProcess2;

    this.sistemaEcuacion.xResult = this.roundTwoDecimals(this.xProcess6 / this.xProcess3);
    this.sistemaEcuacion.yResult = this.roundTwoDecimals(this.yProcess3 / this.xProcess3);

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son:\n${r(this.x1)}x+${r(this.y1)}y=${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y=${r(this.res2)}\n` +
      `sacar determinante principal utilizando columna 'x' e 'y'\n${r(this.x1)}   ${r(this.y1)}\n` +
      `${r(this.x2)}   ${r(this.y2)}\nmultiplicar columnas\n` +
      `${r(this.x1)}(${r(this.y2)})=${r(this.xProcess1)}\n${r(this.y1)}(${r(this.x2)})=${r(this.xProcess2)}\n` +
      `restar resultados\n${r(this.xProcess1)}-(${r(this.xProcess2)})=${r(this.xProcess3)}      Dp=${r(this.xProcess3)}\n` +
      `determinante 'x' utilizando resultados e 'y'\n${r(this.res1)}   ${r(this.y1)}\n${r(this.res2)}   ${r(this.y2)}\n` +
      `resolver\n${r(this.res1)}(${r(this.y2)})=${r(this.xProcess4)}\n${r(this.y1)}(${r(this.res2)})=${r(this.xProcess5)}\n` +
      `restar\n${r(this.xProcess4)}-(${r(this.xProcess5)})=${r(this.xProcess6)}      Dp=${r(this.xProcess6)}\n` +
      `determinante 'y' utilizando resultados e 'x'\n${r(this.x1)}   ${r(this.res1)}\n${r(this.x2)}   ${r(this.res2)}\n` +
      `resolver\n${r(this.x1)}(${r(this.res2)})=${r(this.yProcess1)}\n${r(this.res1)}(${r(this.x2)})=${r(this.yProcess2)}\n` +
      `restar\n${r(this.yProcess1)}-(${r(this.yProcess2)})=${r(this.yProcess3)}      Dp=${r(this.yProcess3)}\n` +
      `dividie Dx y Dy entre Dp\nx=${r(this.xProcess6)}/${r(this.xProcess3)}=${r(se.xResult)}\n` +
      `y=${r(this.yProcess3)}/${r(this.xProcess3)}=${r(se.yResult)}\n` +
      `Los resultados de tus ecuaciones son:                                            \n` +
      `                x = ${r(se.xResult)}     y = ${r(se.yResult)}     \n\n`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }

  determinantes3x3(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.zvalueFields!,
      req.resFields
    );
    this.get3x3Values();

    this.xProcess1 = this.x1 * this.y2 * this.z3;
    this.xProcess2 = this.x2 * this.y3 * this.z1;
    this.xProcess3 = this.x3 * this.y1 * this.z2;
    this.xProcess4 = this.z1 * this.y2 * this.x3;
    this.xProcess5 = this.z2 * this.y3 * this.x1;
    this.xProcess6 = this.z3 * this.y1 * this.x2;
    this.xProcess7 = this.xProcess1 + this.xProcess2 + this.xProcess3;
    this.xProcess8 = this.xProcess4 + this.xProcess5 + this.xProcess6;
    this.xProcess9 = this.xProcess7 - this.xProcess8;
    this.xProcess10 = this.res1 * this.y2 * this.z3;
    this.xProcess11 = this.y1 * this.z2 * this.res3;
    this.xProcess12 = this.z1 * this.res2 * this.y3;
    this.xProcess13 = this.z1 * this.y2 * this.res3;
    this.xProcess14 = this.res1 * this.z2 * this.y3;
    this.xProcess15 = this.y1 * this.res2 * this.z3;
    this.xProcess16 = this.xProcess10 + this.xProcess11 + this.xProcess12;
    this.xProcess17 = this.xProcess13 + this.xProcess14 + this.xProcess15;
    this.xProcess18 = this.xProcess16 - this.xProcess17;

    this.yProcess1 = this.x1 * this.res2 * this.z3;
    this.yProcess2 = this.x2 * this.res3 * this.z1;
    this.yProcess3 = this.x3 * this.res1 * this.z2;
    this.yProcess4 = this.z1 * this.res2 * this.x3;
    this.yProcess5 = this.z2 * this.res3 * this.x1;
    this.yProcess6 = this.z3 * this.res1 * this.x2;
    this.yProcess7 = this.yProcess1 + this.yProcess2 + this.yProcess3;
    this.yProcess8 = this.yProcess4 + this.yProcess5 + this.yProcess6;
    this.yProcess9 = this.yProcess7 - this.yProcess8;

    this.zProcess1 = this.x1 * this.y2 * this.res3;
    this.zProcess2 = this.y1 * this.res2 * this.x3;
    this.zProcess3 = this.res1 * this.x2 * this.y3;
    this.zProcess4 = this.res1 * this.y2 * this.x3;
    this.zProcess5 = this.x1 * this.res2 * this.y3;
    this.zProcess6 = this.y1 * this.x2 * this.res3;
    this.zProcess7 = this.zProcess1 + this.zProcess2 + this.zProcess3;
    this.zProcess8 = this.zProcess4 + this.zProcess5 + this.zProcess6;
    this.zProcess9 = this.zProcess7 - this.zProcess8;

    this.sistemaEcuacion.xResult = this.roundTwoDecimals(this.xProcess18 / this.xProcess9);
    this.sistemaEcuacion.yResult = this.roundTwoDecimals(this.yProcess9 / this.xProcess9);
    this.sistemaEcuacion.zResult = this.roundTwoDecimals(this.zProcess9 / this.xProcess9);

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son:\n${r(this.x1)}x+${r(this.y1)}y+ ${r(this.z1)}z= ${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y+${r(this.z2)}z=${r(this.res2)}\n` +
      `${r(this.x3)}x+${r(this.y3)}y+${r(this.z3)}z=${r(this.res3)}\n` +
      `sacar determinante del sistema por metodo sarrus\n` +
      `${r(this.x1)}   ${r(this.y1)}   ${r(this.z1)}\n` +
      `${r(this.x2)}   ${r(this.y2)}   ${r(this.z2)}               (${r(this.xProcess1)}+${r(this.xProcess2)}+${r(this.xProcess3)})-(${r(this.xProcess4)}+${r(this.xProcess5)}+${r(this.xProcess6)})\n` +
      `${r(this.x3)}   ${r(this.y3)}   ${r(this.z3)}               Ds=(${r(this.xProcess7)})-(${r(this.xProcess8)})=${r(this.xProcess9)}\n` +
      `${r(this.x1)}   ${r(this.y1)}   ${r(this.z1)}\n${r(this.x2)}   ${r(this.y2)}   ${r(this.z2)}\n` +
      `sacar determinante 'x' por metodo sarrus\n` +
      `${r(this.res1)}   ${r(this.y1)}   ${r(this.z1)}   ${r(this.res1)}   ${r(this.y1)}\n` +
      `${r(this.res2)}   ${r(this.y2)}   ${r(this.z2)}   ${r(this.res2)}   ${r(this.y2)}\n` +
      `${r(this.res3)}   ${r(this.y3)}   ${r(this.z3)}   ${r(this.res3)}   ${r(this.y3)}\n` +
      `(${r(this.xProcess10)}+${r(this.xProcess11)}+${r(this.xProcess12)})-(${r(this.xProcess13)}+${r(this.xProcess14)}+${r(this.xProcess15)})\n` +
      `Dx=(${r(this.xProcess16)})-(${r(this.xProcess17)})=${r(this.xProcess18)}\n` +
      `sacar determinante 'y' por metodo sarrus\n` +
      `${r(this.x1)}   ${r(this.res1)}   ${r(this.z1)}\n` +
      `${r(this.x2)}   ${r(this.res2)}   ${r(this.z2)}              (${r(this.yProcess1)}+${r(this.yProcess2)}+${r(this.yProcess3)})-(${r(this.yProcess4)}+${r(this.yProcess5)}+${r(this.yProcess6)})\n` +
      `${r(this.x3)}   ${r(this.res3)}   ${r(this.z3)}                 Dy=(${r(this.yProcess7)})-(${r(this.yProcess8)})=${r(this.yProcess9)}\n` +
      `${r(this.x1)}   ${r(this.res1)}   ${r(this.z1)}\n${r(this.x2)}   ${r(this.res2)}   ${r(this.z2)}\n` +
      `sacar determinante 'z' por metodo sarrus\n` +
      `${r(this.x1)}   ${r(this.y1)}   ${r(this.res1)}   ${r(this.x1)}   ${r(this.y1)}\n` +
      `${r(this.x2)}   ${r(this.y2)}   ${r(this.res2)}   ${r(this.x2)}   ${r(this.y2)}\n` +
      `${r(this.x3)}   ${r(this.y3)}   ${r(this.res3)}   ${r(this.x3)}   ${r(this.y3)}\n` +
      `(${r(this.zProcess1)}+${r(this.zProcess2)}+${r(this.zProcess3)})-(${r(this.zProcess4)}+${r(this.zProcess5)}+${r(this.zProcess6)})\n` +
      `Dz=(${r(this.zProcess7)})-(${r(this.zProcess8)})=${r(this.zProcess9)}\n` +
      `sacar los valores de las incognitas\nx=Dx/Ds=${r(this.xProcess18)}/${r(this.xProcess9)}=${r(se.xResult)}\n` +
      `y=Dy/Ds=${r(this.yProcess9)}/${r(this.xProcess9)}=${r(se.yResult)}\n` +
      `x=Dz/Ds=${r(this.zProcess9)}/${r(this.xProcess9)}=${r(se.zResult)}\n` +
      `Los resultados de tus ecuaciones son:\n` +
      `         x = ${r(se.xResult)}     y = ${r(se.yResult)}     z = ${r(se.zResult)}`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }

  igualacion2x2(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.resFields
    );
    this.get2x2Values();

    this.xProcess1 = -this.x1;
    this.xProcess2 = -this.x2;
    this.xProcess3 = this.y2 * this.res1;
    this.xProcess4 = this.y2 * this.xProcess1;

    this.yProcess1 = this.y1 * this.res2;
    this.yProcess2 = this.y1 * this.xProcess2;
    this.yProcess3 = this.xProcess4 - this.yProcess2;
    this.yProcess4 = this.yProcess1 - this.xProcess3;

    this.sistemaEcuacion.xResult = this.roundTwoDecimals(this.yProcess4 / this.yProcess3);
    this.sistemaEcuacion.yResult = this.roundTwoDecimals(
      (this.res2 + this.xProcess2 * this.sistemaEcuacion.xResult) / this.y2
    );

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son:\n${r(this.x1)}x+${r(this.y1)}y=${r(this.res1)}\n` +
      `${r(this.x2)}x+${r(this.y2)}y=${r(this.res2)}\n\ndespejar 'y' en ambas ecuaciones\n` +
      `y=(${r(this.res1)}+${r(this.xProcess1)}x)/${r(this.y1)}\ny=(${r(this.res2)}+${r(this.xProcess2)}x)/${r(this.y2)}\n\n` +
      `igualar ambos despejes\n(${r(this.res1)}+${r(this.xProcess1)}x)/${r(this.y1)}=(${r(this.res2)}+${r(this.xProcess2)}x)/${r(this.y2)}\n\n` +
      `resolver\n${r(this.y2)}(${r(this.res1)}+${r(this.xProcess1)}x) = ${r(this.y1)}(${r(this.res2)}+${r(this.xProcess2)}x)\n` +
      `${r(this.xProcess3)}+${r(this.xProcess4)}x = ${r(this.yProcess1)}+${r(this.yProcess2)}x\n\n` +
      `simplificar ecuacion\n${r(this.xProcess4)}x+${r(-this.yProcess2)}x=${r(this.yProcess1)}+${r(-this.xProcess3)}\n` +
      `${r(this.yProcess3)}x=${r(this.yProcess4)}\nx=${r(this.yProcess4)}/${r(this.yProcess3)}\nx=${r(se.xResult)}\n\n` +
      `sutituir 'x' en la ecuacion que mas convenga\ny=(${r(this.res2)}+(${r(se.xResult)}))/${r(this.y2)}\n` +
      `y=${r(se.yResult)}\n\nLos resultados de tus ecuaciones son:                                \n` +
      `                 x = ${r(se.xResult)}     y = ${r(se.yResult)}`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }

  igualacion3x3(req: SistemaEcuacionRequestDto): SistemaEcuacionResponseDto {
    this.getFieldsValues(
      this.sistemaEcuacion,
      req.xvalueFields,
      req.yvalueFields,
      req.zvalueFields!,
      req.resFields
    );
    this.get3x3Values();

    this.xProcess1 = -this.y1;
    this.xProcess2 = -this.z1;
    this.xProcess3 = -this.y2;
    this.xProcess4 = -this.z2;
    this.xProcess5 = -this.y3;
    this.xProcess6 = -this.z3;
    this.xProcess7 = this.x2 * this.xProcess1 - this.x1 * this.xProcess3;
    this.xProcess8 = this.x2 * this.xProcess2 - this.x1 * this.xProcess4;
    this.xProcess9 = this.x1 * this.res2 - this.x2 * this.res1;

    this.yProcess1 = this.x3 * this.xProcess1 - this.x1 * this.xProcess5;

    this.zProcess1 = this.x3 * this.xProcess2 - this.x1 * this.xProcess6;
    this.zProcess2 = this.x1 * this.res3 - this.x3 * this.res1;
    this.zProcess3 = -this.xProcess8;
    this.zProcess4 = -this.zProcess1;
    this.zProcess5 = this.yProcess1 * this.xProcess9;
    this.zProcess6 = this.yProcess1 * this.zProcess3;
    this.zProcess7 = this.xProcess7 * this.zProcess2;
    this.zProcess8 = this.xProcess7 * this.zProcess4;
    this.zProcess9 = this.zProcess6 - this.zProcess8;
    this.zProcess10 = this.zProcess7 - this.zProcess5;

    this.sistemaEcuacion.zResult = this.roundTwoDecimals(this.zProcess10 / this.zProcess9);

    this.yProcess2 = this.zProcess1 * this.sistemaEcuacion.zResult;
    this.sistemaEcuacion.yResult = this.roundTwoDecimals(
      (this.zProcess2 - this.yProcess2) / this.yProcess1
    );

    this.yProcess3 = this.y1 * this.sistemaEcuacion.yResult;
    this.yProcess4 = this.z1 * this.sistemaEcuacion.zResult;
    this.sistemaEcuacion.xResult = this.roundTwoDecimals(
      (this.res1 - (this.yProcess3 + this.yProcess4)) / this.x1
    );

    const r = this.r.bind(this);
    const se = this.sistemaEcuacion;

    this.responseMessage =
      `Tus ecuaciones son:\n(1)    ${r(this.x1)}x+${r(this.y1)}y+${r(this.z1)}z=${r(this.res1)}\n` +
      `(2)    ${r(this.x2)}x+${r(this.y2)}y+${r(this.z2)}z=${r(this.res2)}\n` +
      `(3)    ${r(this.x3)}x+${r(this.y3)}y+${r(this.z3)}z=${r(this.res3)}\n` +
      `despejar la misma incognita en las 3 ecuaciones\n` +
      `(4)     x=(${r(this.res1)}+${r(this.xProcess1)}y+${r(this.xProcess2)}z)/${r(this.x1)}\n` +
      `(5)     x=(${r(this.res2)}+${r(this.xProcess3)}y+${r(this.xProcess4)}z)/${r(this.x2)}\n` +
      `(6)     x=(${r(this.res3)}+${r(this.xProcess5)}y+${r(this.xProcess6)}z)/${r(this.x3)}\n` +
      `igualar ecuacion 4 con 5\n(${r(this.res1)}+${r(this.xProcess1)}y+${r(this.xProcess2)}z)/${r(this.x1)}=(${r(this.res2)}+${r(this.xProcess3)}y+${r(this.xProcess4)}z)/${r(this.x2)}\n` +
      `resolver por producto cruzado\n(7)     ${r(this.xProcess7)}y+${r(this.xProcess8)}z=${r(this.xProcess9)}\n` +
      `igualar ecuacion 4 con 6\n(${r(this.res1)}+${r(this.xProcess1)}y+${r(this.xProcess2)}z)/${r(this.x1)}=(${r(this.res3)}+${r(this.xProcess5)}y+${r(this.xProcess6)}z)/${r(this.x3)}\n` +
      `resolver por producto cruzado\n(8)     ${r(this.yProcess1)}y+${r(this.zProcess1)}z=${r(this.zProcess2)}\n` +
      `despejar la misma incognita en ecuacion 7 y 8\n (9)     y=(${r(this.xProcess9)}+${r(this.zProcess3)}z)/${r(this.xProcess7)}` +
      `     (10)   y=(${r(this.zProcess2)}+${r(this.zProcess4)}z)/${r(this.yProcess1)}\n` +
      `igualr ecuaciones 9 y 10\n(${r(this.xProcess9)}+${r(this.zProcess3)}z)/${r(this.xProcess7)}=(${r(this.zProcess2)}+${r(this.zProcess4)}z)/${r(this.yProcess1)}\n` +
      `resolver por producto cruzado\n${r(this.zProcess6)}z+${r(-this.zProcess8)}z=${r(this.zProcess7)}+${r(-this.zProcess5)}\n` +
      `${r(this.zProcess9)}z=${r(this.zProcess10)}\nz=${r(this.zProcess10)}/${r(this.zProcess9)}  =${r(se.zResult)}\n` +
      `sustituir 'z' en ecuacion 8 para sacar 'y'\n${r(this.yProcess1)}y+${r(this.zProcess1)}(${r(se.zResult)})=${r(this.zProcess2)}\n` +
      `y=(${r(this.zProcess2)}+${r(this.yProcess2)})/${r(this.yProcess1)}     y=${r(se.yResult)}\n` +
      `sustituir 'z' e 'y' en ecuacion 1 para sacar 'x'\n${r(this.x1)}x+${r(this.y1)}(${r(se.yResult)})+${r(this.z1)}(${r(se.zResult)})=${r(this.res1)}\n` +
      `${r(this.x1)}x=${r(this.res1)}+${r(-(this.yProcess3 + this.yProcess4))}\n` +
      `x=${r(this.res1 - (this.yProcess3 + this.yProcess4))}/${r(this.x1)}  =${r(se.xResult)}\n` +
      `            Los resultados de tus ecuaciones son:\n\nx  = ${r(se.xResult)}     y = ${r(se.yResult)}     z = ${r(se.zResult)}`;

    const response: SistemaEcuacionResponseDto = { message: this.responseMessage };
    this.cleanAll();
    return response;
  }
}

