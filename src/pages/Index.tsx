
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ThermalCamera } from "@/components/ThermalCamera";
import { AIStatusPanel } from "@/components/AIStatusPanel";
import { DetectionLogs } from "@/components/DetectionLogs";
import { TemperatureChart } from "@/components/TemperatureChart";
import { SystemStatus } from "@/components/SystemStatus";
import { LightControls } from "@/components/LightControls";
import { Thermometer, Camera, Zap, Activity } from "lucide-react";

const Index = () => {
  const [isAIEnabled, setIsAIEnabled] = useState(true);
  const [systemStatus, setSystemStatus] = useState("online");
  const [lastDetection, setLastDetection] = useState("Human presence detected");
  const [currentTemp, setCurrentTemp] = useState(23.5);

  // Simulate real-time temperature updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemp(prev => prev + (Math.random() - 0.5) * 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white mb-2">
            Thermal AI Control Center
          </h1>
          <p className="text-blue-200">
            Real-time thermal monitoring with intelligent light control
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Current Temp</p>
                  <p className="text-2xl font-bold text-white">
                    {currentTemp.toFixed(1)}°C
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Camera className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-blue-200">Camera Status</p>
                  <Badge variant="default" className="bg-green-500">
                    Active
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-blue-200">AI Status</p>
                  <Badge variant={isAIEnabled ? "default" : "secondary"} 
                         className={isAIEnabled ? "bg-green-500" : "bg-gray-500"}>
                    {isAIEnabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-blue-200">Last Detection</p>
                  <p className="text-sm font-medium text-white truncate">
                    {lastDetection}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Thermal Camera and AI Status */}
          <div className="lg:col-span-2 space-y-6">
            <ThermalCamera />
            <AIStatusPanel isEnabled={isAIEnabled} />
          </div>

          {/* Right Column - Controls and Status */}
          <div className="space-y-6">
            <LightControls />
            <SystemStatus />
          </div>
        </div>

        {/* Bottom Row - Charts and Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TemperatureChart />
          <DetectionLogs />
        </div>

        {/* AI Control Toggle */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              AI System Control
              <Switch
                checked={isAIEnabled}
                onCheckedChange={setIsAIEnabled}
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-200">
              {isAIEnabled
                ? "AI is actively monitoring thermal data and controlling lights"
                : "AI monitoring is disabled. Manual control only."}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
