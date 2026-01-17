import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,NgZone
} from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements AfterViewInit, OnDestroy {

  @ViewChild('container', { static: false })
  containerRef!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId = 0;

  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();

  hoveredPlanet: Planet3D | null = null;
  tooltipX = 0;
  tooltipY = 0;

  private planets: Planet3D[] = [];

  constructor(private zone: NgZone) {}
  
  ngAfterViewInit(): void {
    this.initScene();
    this.initPlanets();
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
  }

  private initScene() {
  const container = this.containerRef.nativeElement;

  const width = container.clientWidth;
  const height = container.clientHeight;

  this.scene = new THREE.Scene();

  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  this.scene.add(ambient);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(300, 400, 500);
  this.scene.add(directionalLight);

  this.camera = new THREE.PerspectiveCamera(
    30,
    width / height,
    0.1,
    3000
  );
  this.camera.position.set(0, 500, 900);
  this.camera.lookAt(0, 0, 0);

  this.renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  this.renderer.setSize(width, height);
  this.renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(this.renderer.domElement);
}


  private initPlanets() {
    this.planets = [
      new Planet3D(this.scene,1, 30, 0.10,0xF0D30F, 'JavaScript'),
      new Planet3D(this.scene,80, 15, 0.005,0x90D0DE, 'Java'),
      new Planet3D(this.scene,120, 15, 0.005, 0xE95101, 'HTML5'),
      new Planet3D(this.scene,160, 15, 0.004, 0x73B61D, 'SpringBoot'),
      new Planet3D(this.scene,200, 15, 0.004, 0xD60030, 'Angular'),
      new Planet3D(this.scene,240, 15, 0.004, 0x006EB7, 'CSS3'),
      new Planet3D(this.scene,280, 15, 0.002, 0x3262A2, 'PostgresQL'),
      new Planet3D(this.scene,320, 15, 0.002, 0x2A6BAF, 'TypeScript'),
      new Planet3D(this.scene,360, 15, 0.002, 0x7377AD, 'PHP')
    ];
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.planets.forEach(p => p.update());
    if (this.hoveredPlanet) {
    this.updateTooltipPosition(this.hoveredPlanet);
  }
    this.renderer.render(this.scene, this.camera);
  };

  @HostListener('mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  if (!this.renderer) return;
  
  const rect = this.renderer.domElement.getBoundingClientRect();

  this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  this.raycaster.setFromCamera(this.mouse, this.camera);
  const intersects = this.raycaster.intersectObjects(
    this.planets.map(p => p.mesh),false
  );

  this.planets.forEach(p => p.setHover(false));
  this.zone.run(() => {
    this.hoveredPlanet = null;

  if (intersects.length > 0) {
    const planet = intersects[0].object.userData['planet'];
    planet.setHover(true);
    this.hoveredPlanet = planet;
  }
  });
}

private updateTooltipPosition(planet: Planet3D) {
  const vector = planet.mesh.position.clone();

  vector.project(this.camera);

  const rect = this.renderer.domElement.getBoundingClientRect();

  this.tooltipX =
    ((vector.x + 1) / 2) * rect.width + rect.left;

  this.tooltipY =
    (-(vector.y - 1) / 2) * rect.height + rect.top;
}

  @HostListener('window:resize')
onResize() {
  if (!this.renderer || !this.camera) return;

  const container = this.containerRef.nativeElement;
  const width = container.clientWidth;
  const height = container.clientHeight;

  this.renderer.setSize(width, height);
  this.camera.aspect = width / height;
  this.camera.updateProjectionMatrix();
}
}

export class Planet3D {
  mesh: THREE.Mesh;
  orbitLine: THREE.Line;
  angle = Math.random() * Math.PI * 2;

  constructor(
    scene: THREE.Scene,
    public radius: number,       // distancia al centro
    public size: number,
    public speed: number,
    textureUrl: number,
    public name: string
  ) {
    // 🌍 PLANETA
    const geometry = new THREE.SphereGeometry(size, 32, 32);

    const material = new THREE.MeshStandardMaterial({
      color: textureUrl
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.userData['planet'] = this;
    this.mesh.rotation.y = Math.PI;
    scene.add(this.mesh);

    // 🟠 ÓRBITA
    const points: THREE.Vector3[] = [];

for (let i = 0; i <= 128; i++) {
  const angle = (i / 128) * Math.PI * 2;
  points.push(
    new THREE.Vector3(
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius
    )
  );
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
const orbitMaterial = new THREE.LineBasicMaterial({
  color: 0x444444,
  transparent: true,
  opacity: 0.4
});

this.orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial);
scene.add(this.orbitLine);
  }

  update() {
    this.angle += this.speed;

    this.mesh.position.set(
      Math.cos(this.angle) * this.radius,
      0,
      Math.sin(this.angle) * this.radius
    );
  }

  setHover(state: boolean) {
  this.mesh.scale.setScalar(state ? 1.2 : 1);
}
}
