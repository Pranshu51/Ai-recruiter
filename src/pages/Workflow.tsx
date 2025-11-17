import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  FileText, 
  User, 
  Target, 
  Calendar, 
  FileSpreadsheet, 
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";

export default function Workflow() {
  // Workflow steps - represents the LangGraph pipeline
  const workflowSteps = [
    {
      id: 1,
      name: "Gmail Monitor",
      description: "Monitor inbox for new resumes via Gmail API",
      icon: Mail,
      status: "active",
      processed: 45,
    },
    {
      id: 2,
      name: "Resume Extractor",
      description: "Extract text and data from PDF resumes using AI",
      icon: FileText,
      status: "active",
      processed: 42,
    },
    {
      id: 3,
      name: "LinkedIn Enrichment",
      description: "Enrich candidate profiles with LinkedIn data",
      icon: User,
      status: "active",
      processed: 38,
    },
    {
      id: 4,
      name: "AI Scorer",
      description: "Score candidates using Groq AI based on job requirements",
      icon: Target,
      status: "active",
      processed: 38,
    },
    {
      id: 5,
      name: "Decision Router",
      description: "Route candidates to shortlist or rejection based on score",
      icon: CheckCircle2,
      status: "active",
      processed: 38,
    },
    {
      id: 6,
      name: "Calendar Scheduler",
      description: "Schedule interviews for shortlisted candidates",
      icon: Calendar,
      status: "active",
      processed: 22,
    },
    {
      id: 7,
      name: "Google Sheets Export",
      description: "Export candidate data to Google Sheets",
      icon: FileSpreadsheet,
      status: "completed",
      processed: 38,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "completed":
        return "bg-primary text-primary-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="h-4 w-4" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Automation Workflow</h2>
        <p className="text-muted-foreground">
          AI-powered recruitment pipeline visualization
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Steps</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{workflowSteps.length}</div>
            <p className="text-xs text-muted-foreground">In pipeline</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Steps</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {workflowSteps.filter((s) => s.status === "active").length}
            </div>
            <p className="text-xs text-muted-foreground">Currently processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processed Today</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">45</div>
            <p className="text-xs text-muted-foreground">Resumes analyzed</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pipeline Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <div key={step.id}>
                <div className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {index + 1}. {step.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <Badge className={getStatusColor(step.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(step.status)}
                          {step.status}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Processed: {step.processed} candidates</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-gradient-primary transition-all"
                          style={{ width: `${(step.processed / 45) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
