
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Server, Database, Cpu, AlertTriangle } from "lucide-react";

export const SystemStatus = () => {
  const systemComponents = [
    { name: "Thermal Camera", status: "online", icon: Wifi, uptime: "99.8%" },
    { name: "AI Processing", status: "online", icon: Cpu, uptime: "100%" },
    { name: "Light Controller", status: "online", icon: Server, uptime: "99.9%" },
    { name: "Data Storage", status: "warning", icon: Database, uptime: "98.5%" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "warning": return "bg-yellow-500";
      case "offline": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Server className="h-5 w-5 text-green-400" />
          <span>System Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Status */}
        <div className="p-3 bg-white/5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Overall Health</span>
            <Badge className="bg-green-500">Operational</Badge>
          </div>
          <div className="text-sm text-blue-200">
            All critical systems are functioning normally
          </div>
        </div>

        {/* Component Status */}
        <div className="space-y-3">
          <h4 className="text-white font-medium">Components</h4>
          {systemComponents.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded">
                <div className="flex items-center space-x-3">
                  <IconComponent className="h-4 w-4 text-blue-400" />
                  <span className="text-white text-sm">{component.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-blue-200">{component.uptime}</span>
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(component.status)}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-lg font-bold text-blue-400">2.3GB</div>
            <div className="text-blue-200">Memory Used</div>
          </div>
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-lg font-bold text-green-400">15%</div>
            <div className="text-blue-200">CPU Usage</div>
          </div>
        </div>

        {/* Alerts */}
        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium text-sm">System Alert</span>
          </div>
          <p className="text-yellow-200 text-xs">
            Data storage approaching 85% capacity. Consider archiving old thermal data.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
