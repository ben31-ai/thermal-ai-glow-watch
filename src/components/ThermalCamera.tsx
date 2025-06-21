
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Maximize } from "lucide-react";

export const ThermalCamera = () => {
  const [detectionBox, setDetectionBox] = useState({ x: 150, y: 120, width: 80, height: 100 });
  const [isDetecting, setIsDetecting] = useState(true);

  // Simulate detection movement
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDetecting) {
        setDetectionBox(prev => ({
          ...prev,
          x: Math.max(50, Math.min(300, prev.x + (Math.random() - 0.5) * 20)),
          y: Math.max(50, Math.min(200, prev.y + (Math.random() - 0.5) * 20))
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isDetecting]);

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="h-5 w-5 text-blue-400" />
            <span>Thermal Camera Feed</span>
          </div>
          <Maximize className="h-4 w-4 text-blue-400 cursor-pointer" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-64 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-lg overflow-hidden">
          {/* Thermal gradient background */}
          <div className="absolute inset-0 opacity-60">
            <div className="w-full h-full bg-gradient-radial from-red-500/30 via-orange-500/20 to-blue-500/10"></div>
          </div>
          
          {/* Hot spots */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-red-500/60 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-orange-500/50 rounded-full blur-sm"></div>
          
          {/* Detection box */}
          {isDetecting && (
            <div
              className="absolute border-2 border-green-400 bg-green-400/10"
              style={{
                left: detectionBox.x,
                top: detectionBox.y,
                width: detectionBox.width,
                height: detectionBox.height,
                transition: "all 1s ease-in-out"
              }}
            >
              <div className="absolute -top-6 left-0 bg-green-400 text-black px-2 py-1 text-xs rounded">
                Human Detected
              </div>
            </div>
          )}

          {/* Temperature scale */}
          <div className="absolute right-2 top-2 bg-black/50 p-2 rounded">
            <div className="flex flex-col space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-white">Hot (35°C+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span className="text-white">Warm (25-35°C)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-white">Cool (15-25°C)</span>
              </div>
            </div>
          </div>

          {/* Crosshairs */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-green-400/60"></div>
            <div className="absolute w-0.5 h-8 bg-green-400/60"></div>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-blue-200">
          Resolution: 640x480 | FPS: 30 | Detection: Active
        </div>
      </CardContent>
    </Card>
  );
};
