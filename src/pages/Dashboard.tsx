import { Users, CheckCircle, XCircle, Clock, TrendingUp, Mail } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Candidates",
      value: "1,234",
      description: "All time",
      icon: Users,
      trend: { value: "12.5%", isPositive: true },
    },
    {
      title: "Shortlisted",
      value: "324",
      description: "This month",
      icon: CheckCircle,
      trend: { value: "8.2%", isPositive: true },
    },
    {
      title: "Rejected",
      value: "156",
      description: "This month",
      icon: XCircle,
      trend: { value: "3.1%", isPositive: false },
    },
    {
      title: "Pending Review",
      value: "89",
      description: "Awaiting decision",
      icon: Clock,
      trend: { value: "5.4%", isPositive: false },
    },
  ];

  const recentCandidates = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      position: "Senior Developer",
      score: 92,
      status: "shortlisted",
    },
    {
      name: "Michael Chen",
      email: "m.chen@email.com",
      position: "Product Manager",
      score: 88,
      status: "shortlisted",
    },
    {
      name: "Emily Davis",
      email: "emily.d@email.com",
      position: "UX Designer",
      score: 85,
      status: "pending",
    },
    {
      name: "James Wilson",
      email: "j.wilson@email.com",
      position: "DevOps Engineer",
      score: 78,
      status: "pending",
    },
  ];

  const upcomingInterviews = [
    {
      candidate: "Sarah Johnson",
      position: "Senior Developer",
      time: "Today, 2:00 PM",
      type: "Technical Round",
    },
    {
      candidate: "Michael Chen",
      position: "Product Manager",
      time: "Tomorrow, 10:00 AM",
      type: "HR Round",
    },
    {
      candidate: "Alex Kumar",
      position: "Data Scientist",
      time: "Tomorrow, 3:30 PM",
      type: "Final Round",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your recruitment pipeline.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Mail className="mr-2 h-4 w-4" />
          Check New Resumes
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent Candidates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCandidates.map((candidate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-all hover:bg-accent"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{candidate.name}</p>
                    <p className="text-sm text-muted-foreground">{candidate.position}</p>
                    <p className="text-xs text-muted-foreground">{candidate.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">
                        {candidate.score}%
                      </p>
                      <p className="text-xs text-muted-foreground">Match</p>
                    </div>
                    <Badge
                      variant={
                        candidate.status === "shortlisted"
                          ? "default"
                          : "secondary"
                      }
                      className={
                        candidate.status === "shortlisted"
                          ? "bg-success text-success-foreground"
                          : ""
                      }
                    >
                      {candidate.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Upcoming Interviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingInterviews.map((interview, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between rounded-lg border border-border p-4 transition-all hover:bg-accent"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">
                      {interview.candidate}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {interview.position}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {interview.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      {interview.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
