
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Clock } from "lucide-react";

interface AIStatusPanelProps {
  isEnabled: boolean;
}

export const AIStatusPanel = ({ isEnabled }: AIStatusPanelProps) => {
  const aiDecisions = [
    { time: "14:32:15", action: "Light ON", reason: "Human presence detected", confidence: 98 },
    { time: "14:30:42", action: "Light OFF", reason: "No movement for 5 min", confidence: 95 },
    { time: "14:28:30", action: "Brightness +20%", reason: "Low ambient light", confidence: 87 },
    { time: "14:25:18", action: "Light ON", reason: "Motion detected", confidence: 92 }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Brain className="h-5 w-5 text-purple-400" />
          <span>AI Analysis Engine</span>
          <Badge variant={isEnabled ? "default" : "secondary"} 
                 className={isEnabled ? "bg-green-500" : "bg-gray-500"}>
            {isEnabled ? "Active" : "Inactive"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Analysis */}
        <div className="p-3 bg-white/5 rounded-lg">
          <h4 className="text-white font-medium mb-2 flex items-center space-x-2">
            <Target className="h-4 w-4 text-green-400" />
            <span>Current Analysis</span>
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-200">Heat Sources:</span>
              <span className="text-white">2 detected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-200">Human Presence:</span>
              <span className="text-green-400">Confirmed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-200">Ambient Temperature:</span>
              <span className="text-white">22.3°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-200">Confidence Level:</span>
              <span className="text-green-400">94%</span>
            </div>
          </div>
        </div>

        {/* Recent Decisions */}
        <div>
          <h4 className="text-white font-medium mb-3 flex items-center space-x-2">
            <Clock className="h-4 w-4 text-blue-400" />
            <span>Recent AI Decisions</span>
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {aiDecisions.map((decision, index) => (
              <div key={index} className="p-2 bg-white/5 rounded text-xs">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-blue-300">{decision.time}</span>
                  <Badge variant="outline" className="text-xs">
                    {decision.confidence}%
                  </Badge>
                </div>
                <div className="text-white font-medium">{decision.action}</div>
                <div className="text-blue-200">{decision.reason}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Processing Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-2xl font-bold text-purple-400">847ms</div>
            <div className="text-blue-200">Avg Response</div>
          </div>
          <div className="text-center p-2 bg-white/5 rounded">
            <div className="text-2xl font-bold text-green-400">99.2%</div>
            <div className="text-blue-200">Accuracy</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
