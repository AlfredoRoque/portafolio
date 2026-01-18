import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { TechnologiComponent } from './technologi/technologi.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,
    HeaderComponent, CardComponent,
    MenuComponent, TechnologiComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lenguage = "es";

  ngOnInit() {
    var URLactual = window.location.pathname.replace("/", "");
    if (URLactual != "") {
      this.lenguage = URLactual;
    }
    this.createSpaceBackground();
  }



  createSpaceBackground() {
    const canvas = document.getElementById('space-bg') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);


    // ⭐ DISTRIBUCIÓN DE COLORES (PORCENTAJE)
    const colorDistribution = [
      { color: 'white', weight: 75 },
      { color: 'yellow', weight: 15 },
      { color: 'lightblue', weight: 7 },
      { color: 'red', weight: 3 }
    ];

    const getWeightedColor = (): string => {
      const rand = Math.random() * 100;
      let cumulative = 0;

      for (const item of colorDistribution) {
        cumulative += item.weight;
        if (rand <= cumulative) {
          return item.color;
        }
      }

      return 'white';
    };

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const stars = Array.from({ length: 250 }, () => ({
      x: (Math.random() - 0.5) * canvas.width,
      y: (Math.random() - 0.5) * canvas.height,
      z: Math.random() * canvas.width,
      color: getWeightedColor(),

      // ✨ parpadeo
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.08,
      phase: Math.random() * Math.PI * 2
    }));

    // 🌫 NEBULOSAS - CAPA FONDO (muy suaves)
    const nebulasBack = Array.from({ length: 2 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 900 + 700,
      color: [
        'rgba(80, 60, 160, 0.08)',
        'rgba(40, 100, 160, 0.06)',
        'rgba(120, 40, 120, 0.06)'
      ][Math.floor(Math.random() * 3)],
      dx: (Math.random() - 0.5) * 0.01,
      dy: (Math.random() - 0.5) * 0.01
    }));

    // 🌫 NEBULOSAS - CAPA MEDIA (más visibles)
    const nebulasMid = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 450 + 350,
      color: [
        'rgba(140, 80, 255, 0.08)',
        'rgba(255, 100, 180, 0.06)',
        'rgba(80, 180, 255, 0.08)'
      ][Math.floor(Math.random() * 3)],
      dx: (Math.random() - 0.5) * 0.03,
      dy: (Math.random() - 0.5) * 0.03
    }));



    const speed = 2.5; // 🔥 velocidad de avance

    const drawNebulas = (list: any[]) => {
      list.forEach(n => {
        n.x += n.dx;
        n.y += n.dy;

        if (n.x < -n.radius) n.x = canvas.width + n.radius;
        if (n.x > canvas.width + n.radius) n.x = -n.radius;
        if (n.y < -n.radius) n.y = canvas.height + n.radius;
        if (n.y > canvas.height + n.radius) n.y = -n.radius;

        const gradient = ctx.createRadialGradient(
          n.x, n.y, 0,
          n.x, n.y, n.radius
        );

        gradient.addColorStop(0, n.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 🌌 NEBULOSAS FONDO
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      drawNebulas(nebulasBack);
      ctx.restore();

      // 🌌 NEBULOSAS CAPA MEDIA
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      drawNebulas(nebulasMid);
      ctx.restore();

      // ⭐ DIBUJAR ESTRELLAS
      stars.forEach(star => {
        star.z -= speed;

        // cuando pasa la cámara, se recicla
        if (star.z <= 1) {
          star.x = (Math.random() - 0.5) * canvas.width;
          star.y = (Math.random() - 0.5) * canvas.height;
          star.z = canvas.width;
        }

        const scale = canvas.width / star.z;

        const x = star.x * scale + centerX;
        const y = star.y * scale + centerY;

        const radius = scale * 0.4;

        ctx.save();
        star.phase += star.twinkleSpeed;
        const alpha = star.baseAlpha + Math.sin(star.phase) * 0.3;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));

        if (star.color === 'white') {
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'white';
        }

        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };
    animate();

  }

}


