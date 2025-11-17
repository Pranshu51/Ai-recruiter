import { Download, FileSpreadsheet, FileText, PieChart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Reports() {
  // Mock data - will be fetched from FastAPI backend
  const reports = [
    {
      id: 1,
      name: "Candidate Analysis Report",
      type: "CSV",
      date: "2024-01-15",
      size: "2.4 MB",
      records: 45,
    },
    {
      id: 2,
      name: "Shortlisted Candidates",
      type: "JSON",
      date: "2024-01-15",
      size: "1.8 MB",
      records: 22,
    },
    {
      id: 3,
      name: "Rejected Candidates",
      type: "JSON",
      date: "2024-01-15",
      size: "1.2 MB",
      records: 23,
    },
    {
      id: 4,
      name: "Weekly Summary",
      type: "PDF",
      date: "2024-01-14",
      size: "856 KB",
      records: 45,
    },
    {
      id: 5,
      name: "Skill Distribution",
      type: "CSV",
      date: "2024-01-14",
      size: "324 KB",
      records: 45,
    },
  ];

  const stats = {
    skillDistribution: [
      { skill: "React", count: 28 },
      { skill: "Node.js", count: 25 },
      { skill: "Python", count: 22 },
      { skill: "AWS", count: 18 },
      { skill: "Docker", count: 15 },
    ],
    experienceDistribution: [
      { range: "0-2 years", count: 8 },
      { range: "3-5 years", count: 15 },
      { range: "6-8 years", count: 12 },
      { range: "9+ years", count: 10 },
    ],
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "CSV":
        return <FileSpreadsheet className="h-5 w-5 text-success" />;
      case "JSON":
        return <FileText className="h-5 w-5 text-primary" />;
      case "PDF":
        return <FileText className="h-5 w-5 text-destructive" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Reports & Analytics</h2>
          <p className="text-muted-foreground">Download and analyze recruitment data</p>
        </div>
        <Button className="gap-2 bg-gradient-primary hover:opacity-90">
          <Download className="h-4 w-4" />
          Generate New Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{reports.length}</div>
            <p className="text-xs text-muted-foreground">Available for download</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">45</div>
            <p className="text-xs text-muted-foreground">Candidates analyzed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Size</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">6.5 MB</div>
            <p className="text-xs text-muted-foreground">Total storage used</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.skillDistribution.map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-muted-foreground">{item.count} candidates</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-gradient-primary transition-all"
                    style={{ width: `${(item.count / 45) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Experience Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.experienceDistribution.map((item) => (
              <div key={item.range} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{item.range}</span>
                  <span className="text-muted-foreground">{item.count} candidates</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-gradient-primary transition-all"
                    style={{ width: `${(item.count / 45) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-accent"
              >
                <div className="flex items-center gap-4">
                  {getFileIcon(report.type)}
                  <div>
                    <h4 className="font-semibold text-foreground">{report.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{new Date(report.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{report.size}</span>
                      <span>•</span>
                      <span>{report.records} records</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{report.type}</Badge>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
