import { Calendar, Clock, Video, Mail, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Scheduler() {
  // Mock data - will be fetched from FastAPI backend
  const upcomingInterviews = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      position: "Senior Full Stack Developer",
      date: "2024-01-20",
      time: "10:00 AM",
      duration: "1 hour",
      type: "Technical Round",
      interviewer: "John Doe",
      meetingLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      candidateName: "Michael Chen",
      position: "Backend Engineer",
      date: "2024-01-20",
      time: "2:00 PM",
      duration: "45 mins",
      type: "HR Round",
      interviewer: "Jane Smith",
      meetingLink: "https://meet.google.com/xyz-pqrs-tuv",
    },
    {
      id: 3,
      candidateName: "Emily Rodriguez",
      position: "DevOps Engineer",
      date: "2024-01-21",
      time: "11:00 AM",
      duration: "1 hour",
      type: "Final Round",
      interviewer: "Bob Wilson",
      meetingLink: "https://meet.google.com/klm-nopq-rst",
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Interview Scheduler</h2>
          <p className="text-muted-foreground">Manage and schedule candidate interviews</p>
        </div>
        <Button className="gap-2 bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4" />
          Schedule Interview
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Interviews</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground">Next at 10:00 AM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground">Across 5 candidates</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Confirmation</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground">Awaiting response</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Interviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingInterviews.map((interview) => (
            <div
              key={interview.id}
              className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {getInitials(interview.candidateName)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{interview.candidateName}</h4>
                    <p className="text-sm text-muted-foreground">{interview.position}</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">{interview.type}</Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(interview.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{interview.time} ({interview.duration})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Interviewer: {interview.interviewer}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Video className="h-4 w-4" />
                    Join Meeting
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Send Reminder
                  </Button>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
