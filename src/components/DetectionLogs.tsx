
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, User, Lightbulb, AlertCircle } from "lucide-react";

export const DetectionLogs = () => {
  const logs = [
    {
      id: 1,
      timestamp: "2024-01-15 14:32:15",
      type: "detection",
      message: "Human presence detected in Zone 1",
      action: "Light ON - Living Room",
      confidence: 98,
      icon: User
    },
    {
      id: 2,
      timestamp: "2024-01-15 14:30:42",
      type: "action",
      message: "No movement detected for 5 minutes",
      action: "Light OFF - Kitchen",
      confidence: 95,
      icon: Lightbulb
    },
    {
      id: 3,
      timestamp: "2024-01-15 14:28:30",
      type: "adjustment",
      message: "Low ambient light detected",
      action: "Brightness increased to 80%",
      confidence: 87,
      icon: Lightbulb
    },
    {
      id: 4,
      timestamp: "2024-01-15 14:25:18",
      type: "detection",
      message: "Motion detected in hallway",
      action: "Light ON - Hallway",
      confidence: 92,
      icon: User
    },
    {
      id: 5,
      timestamp: "2024-01-15 14:22:45",
      type: "alert",
      message: "Unusual heat signature detected",
      action: "Alert sent to monitoring system",
      confidence: 76,
      icon: AlertCircle
    },
    {
      id: 6,
      timestamp: "2024-01-15 14:20:12",
      type: "detection",
      message: "Person entered bedroom area",
      action: "Light ON - Bedroom (dimmed)",
      confidence: 94,
      icon: User
    },
    {
      id: 7,
      timestamp: "2024-01-15 14:18:33",
      type: "action",
      message: "Scheduled night mode activation",
      action: "All lights dimmed to 40%",
      confidence: 100,
      icon: Lightbulb
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "detection": return "bg-green-500";
      case "action": return "bg-blue-500";
      case "adjustment": return "bg-yellow-500";
      case "alert": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case "detection": return "Detection";
      case "action": return "Action";
      case "adjustment": return "Adjustment";
      case "alert": return "Alert";
      default: return "Log";
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-blue-400" />
            <span>Detection Logs</span>
          </div>
          <Badge variant="outline" className="text-xs">
            Live Feed
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 w-full">
          <div className="space-y-3">
            {logs.map((log) => {
              const IconComponent = log.icon;
              return (
                <div key={log.id} className="p-3 bg-white/5 rounded-lg border-l-2 border-blue-400/50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-blue-400" />
                      <Badge className={`text-xs ${getTypeColor(log.type)}`}>
                        {getTypeText(log.type)}
                      </Badge>
                    </div>
                    <div className="text-xs text-blue-300">
                      {log.timestamp.split(' ')[1]}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-white text-sm font-medium">
                      {log.message}
                    </p>
                    <p className="text-blue-200 text-xs">
                      Action: {log.action}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-blue-300">
                        Confidence: {log.confidence}%
                      </span>
                      <div className="w-16 bg-gray-700 rounded-full h-1">
                        <div 
                          className="bg-green-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${log.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-blue-200">
            Showing last 10 events • Real-time monitoring active
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
