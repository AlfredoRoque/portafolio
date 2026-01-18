import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener, NgZone
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

  constructor(private zone: NgZone) { }

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
      33,
      width / height,
      0.1,
      5000
    );
    this.camera.position.set(0, 500, 950);
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
    const springBoot = this.createPlanet(this.scene, 180,16,0.004,0x73B61D,'SpringBoot');
    const python = this.createPlanet(this.scene, 310, 24, 0.004, 0xF6D145, 'Python');

    this.planets = [
      this.createPlanet(this.scene, 1, 30, 0.10, 0xF0D30F, 'JavaScript'),
      this.createPlanet(this.scene,80, 15, 0.005, 0x3262A2, 'PostgresQL'),
      this.createPlanet(this.scene,120, 15, 0.005, 0xE95101, 'HTML5'),
      springBoot,
      this.createPlanet(this.scene,25,8,0.03,0xCCCCCC,'Java',springBoot),
      this.createPlanet(this.scene,260, 15, 0.004, 0xD60030, 'Angular'),
      python,
      this.createPlanet(this.scene,35, 7, 0.02, 0xDE8A00, 'MySQL',python),
      this.createPlanet(this.scene,45, 8, 0.01, 0x03673E, 'Django',python),
      this.createPlanet(this.scene,350, 15, 0.002, 0x006EB7, 'CSS3'),
      this.createPlanet(this.scene,380, 15, 0.002, 0x2A6BAF, 'TypeScript'),
      this.createPlanet(this.scene,420, 15, 0.002, 0x7377AD, 'PHP')
    ];
  }

  private createPlanet(scene: THREE.Scene, radius: number, size: number, speed: number, 
    color: number, name: string, parent?: Planet3D) {
      if(parent){
        return new Planet3D(
          scene,radius,size,speed,color,name,
          parent // 👈 orbita a planeta
  );
      }
      return new Planet3D(
        scene,radius,size,speed,color,name
      ) 
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
      this.planets.map(p => p.mesh), false
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
    const vector = new THREE.Vector3();
    planet.mesh.getWorldPosition(vector);

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
  orbitGroup: THREE.Object3D;
  orbitLine?: THREE.Line;
  angle = Math.random() * Math.PI * 2;

  constructor(
    scene: THREE.Scene,
    public radius: number,
    public size: number,
    public speed: number,
    color: number,
    public name: string,
    parent?: Planet3D // 👈 planeta padre (opcional)
  ) {
    this.orbitGroup = new THREE.Object3D();
    // 🌍 PLANETA
    const geometry = new THREE.SphereGeometry(size, 32, 32);

    const material = new THREE.MeshStandardMaterial({color});

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.userData['planet'] = this;
    this.mesh.rotation.y = Math.PI;
    scene.add(this.mesh);

    // 🟠 ÓRBITA

    this.orbitGroup.add(this.mesh);

    if (parent) {
      parent.mesh.add(this.orbitGroup); // 🌙 orbita al planeta
    } else {
      scene.add(this.orbitGroup); // 🌍 orbita al sol
    }

    this.mesh.position.x = radius;

    // órbita visual solo para planetas
    if (!parent) {
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
      color: 0xffffff,
      transparent: true,
      opacity: 0.06
    });

this.orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial);
    scene.add(this.orbitLine);
    }
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
