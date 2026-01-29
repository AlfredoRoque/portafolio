import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcuacionesService } from '../services/ecuaciones.service';
import { EcuacionResponse, EcuacionRequest } from '../models/ecuacion.models';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ResultadoDialogComponent } from '../resultado-dialog/resultado-dialog.component';

@Component({
  selector: 'app-ecuaciones',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,
     MatInputModule, MatRadioModule, MatButtonModule, MatCardModule, MatDialogModule,ResultadoDialogComponent],
  templateUrl: './ecuaciones.component.html',
  styleUrls: ['./ecuaciones.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EcuacionesComponent implements OnInit {

  resultado: EcuacionResponse = {
    mensaje: null
  };
  loading = false;
  rutaArchivo = 'https://raw.githubusercontent.com/AlfredoRoque/Sistema-de-Ecuaciones/e76041f7b58f40751354ead2fe89a53c31f97272/out/artifacts/Sistema_de_Ecuaciones_jar/Sistema-de-Ecuaciones.jar';

  request: EcuacionRequest = {
    xvalueFields: [],
    yvalueFields: [],
    zvalueFields: [],
    resFields: []
  };
  systemForm: FormGroup;
  constructor(private fb: FormBuilder, private ecuacionesService: EcuacionesService,private dialog: MatDialog) {
    this.systemForm = this.fb.group({
      type: ['2x2', Validators.required],
      method: ['sustitucion', Validators.required],

      // 2x2
      x1: [null], y1: [null], r1: [null],
      x2: [null], y2: [null], r2: [null],

      // 3x3
      x3: [null], y3: [null], z1: [null], r3: [null],
      x4: [null], y4: [null], z2: [null], r4: [null],
      x5: [null], y5: [null], z3: [null], r5: [null],
    });
  }

  ngOnInit() {
    this.applyValidators(this.systemForm.value.type);


    this.systemForm.get('type')!.valueChanges.subscribe(type => {
      this.applyValidators(type);
    });
  }

  submit(): void {
    if (this.systemForm.invalid) {
      this.systemForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const payload = this.buildPayload();

    console.log('Payload para resolver el sistema de ecuaciones:', payload);

    this.resolverSistemaEcuaciones(payload);
  }

  resolverSistemaEcuaciones(payload: EcuacionRequest) {
    switch (this.systemForm.value.method) {
      case 'sustitucion':
        if (this.systemForm.value.type === '2x2') {
          this.ecuacionesService.sustitucion2x2(payload)
            .subscribe(res => {
              this.responseHandler(res);
            });
        } else {
          this.ecuacionesService.sustitucion3x3(payload)
            .subscribe(res => {
              this.responseHandler(res);
            });
        }
        break;
      case 'suma_resta':
        if (this.systemForm.value.type === '2x2') {
          this.ecuacionesService.sumaresta2x2(payload)
            .subscribe(res => {
              this.responseHandler(res);
            });
        } else {
          this.ecuacionesService.sumaresta3x3(payload)
            .subscribe(res => {
                this.responseHandler(res);
            });
        }
        break;
      case 'determinantes':
        if (this.systemForm.value.type === '2x2') {
          this.ecuacionesService.determinante2x2(payload)
            .subscribe(res => {
              this.responseHandler(res);
            });
        } else {
          this.ecuacionesService.determinante3x3(payload)
            .subscribe(res => {
              this.responseHandler(res);
            });
        }
        break;
      case 'igualacion':
        if (this.systemForm.value.type === '2x2') {
          this.ecuacionesService.igualacion2x2(payload)
            .subscribe(res => {
              this.responseHandler(res);
            });
        } else {
          this.ecuacionesService.igualacion3x3(payload)
            .subscribe(res => {
              this.responseHandler(res);
            });
        }
        break;
      // Implementar otros métodos aquí
      default:
        console.error('Método no soportado');
    }
  }
  responseHandler(res: EcuacionResponse) {
    const mensaje = this.formatResult(res);
    this.loading = false;
    this.dialog.open(ResultadoDialogComponent, {
      data: mensaje,
      width: '600px',
      maxHeight: '80vh'
    });
  }

  private buildPayload() {
    const v = this.systemForm.value;

    if (v.type === '2x2') {
      this.request.xvalueFields = [v.x1, v.x2];
      this.request.yvalueFields = [v.y1, v.y2];
      this.request.resFields = [v.r1, v.r2];
      return this.request;
    }

    this.request.xvalueFields = [v.x3, v.x4, v.x5];
    this.request.yvalueFields = [v.y3, v.y4, v.y5];
    this.request.zvalueFields = [v.z1, v.z2, v.z3];
    this.request.resFields = [v.r3, v.r4, v.r5];
    return this.request;
  }

  formatResult(raw: EcuacionResponse): string {
    return raw.mensaje.replace(/\n/g, '<br><br>');
  }

  applyValidators(type: '2x2' | '3x3'): void {

    const controls2x2 = [
      'x1', 'y1', 'r1',
      'x2', 'y2', 'r2'
    ];

    const controls3x3 = [
      'x3', 'y3', 'z1', 'r3',
      'x4', 'y4', 'z2', 'r4',
      'x5', 'y5', 'z3', 'r5'
    ];

    // 1️⃣ Limpia validadores y valores
    [...controls2x2, ...controls3x3].forEach(name => {
      const control = this.systemForm.get(name);
      control?.clearValidators();
      control?.reset();
      control?.updateValueAndValidity();
    });

    // 2️⃣ Aplica required según el tipo
    const requiredControls = type === '2x2'
      ? controls2x2
      : controls3x3;

    requiredControls.forEach(name => {
      const control = this.systemForm.get(name);
      control?.setValidators([Validators.required]);
      control?.updateValueAndValidity();
    });
  }

  descargarVersionEscritorio() {

    const link = document.createElement('a');
    link.href = this.rutaArchivo;
    link.download = 'Sistema-de-Ecuaciones.jar';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
