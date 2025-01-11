import { useEffect } from 'react';
import { fabric } from 'fabric';

const Presentation: React.FC = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas('presentation-canvas', {
      width: 960,
      height: 540,
    });
    
    // 添加基础图形工具
    const addShape = (type: string) => {
      let shape;
      switch(type) {
        case 'rectangle':
          shape = new fabric.Rect({
            width: 100,
            height: 100,
            fill: '#cccccc'
          });
          break;
        // 添加更多形状...
      }
      canvas.add(shape);
    };
  }, []);

  return (
    <canvas id="presentation-canvas"></canvas>
  );
} 