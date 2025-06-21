
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Lightbulb, Settings, Power } from "lucide-react";

export const LightControls = () => {
  const [lights, setLights] = useState({
    zone1: { name: "Living Room", on: true, brightness: 75, autoMode: true },
    zone2: { name: "Kitchen", on: false, brightness: 60, autoMode: true },
    zone3: { name: "Bedroom", on: true, brightness: 40, autoMode: false },
    zone4: { name: "Hallway", on: true, brightness: 90, autoMode: true }
  });

  const toggleLight = (zoneId: string) => {
    setLights(prev => ({
      ...prev,
      [zoneId]: { ...prev[zoneId], on: !prev[zoneId].on }
    }));
  };

  const toggleAutoMode = (zoneId: string) => {
    setLights(prev => ({
      ...prev,
      [zoneId]: { ...prev[zoneId], autoMode: !prev[zoneId].autoMode }
    }));
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          <span>Light Controls</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Master Controls */}
        <div className="p-3 bg-white/5 rounded-lg">
          <h4 className="text-white font-medium mb-3">Master Controls</h4>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Power className="h-4 w-4 mr-2" />
              All On
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Power className="h-4 w-4 mr-2" />
              All Off
            </Button>
          </div>
        </div>

        {/* Individual Zone Controls */}
        <div className="space-y-3">
          <h4 className="text-white font-medium">Zone Controls</h4>
          {Object.entries(lights).map(([zoneId, light]) => (
            <div key={zoneId} className="p-3 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{light.name}</span>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={light.on}
                    onCheckedChange={() => toggleLight(zoneId)}
                  />
                  <div className={`w-3 h-3 rounded-full ${light.on ? 'bg-yellow-400' : 'bg-gray-500'}`}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-200">Brightness: {light.brightness}%</span>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-200">Auto:</span>
                  <Switch
                    checked={light.autoMode}
                    onCheckedChange={() => toggleAutoMode(zoneId)}
                    size="sm"
                  />
                </div>
              </div>
              
              {/* Brightness Bar */}
              <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${light.brightness}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h4 className="text-white font-medium">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button size="sm" variant="outline">Evening Mode</Button>
            <Button size="sm" variant="outline">Night Mode</Button>
            <Button size="sm" variant="outline">Motion Only</Button>
            <Button size="sm" variant="outline">
              <Settings className="h-4 w-4 mr-1" />
              Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
