import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, Download, FileText, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CandidateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app this would come from API
  const candidate = {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 234 567 8900",
    position: "Senior Full Stack Developer",
    experience: 8,
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "GraphQL", "Kubernetes"],
    score: 92,
    status: "shortlisted",
    appliedDate: "2024-01-15",
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2016-2018",
      },
      {
        degree: "Bachelor of Engineering",
        institution: "MIT",
        year: "2012-2016",
      },
    ],
    workExperience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Corp",
        duration: "2020 - Present",
        description: "Led development of microservices architecture, improving system scalability by 300%",
      },
      {
        title: "Software Engineer",
        company: "StartupXYZ",
        duration: "2018 - 2020",
        description: "Built full-stack web applications using React and Node.js",
      },
    ],
    summary: "Highly skilled full-stack developer with 8 years of experience in building scalable web applications. Proven track record of leading technical teams and implementing best practices. Strong expertise in modern JavaScript frameworks and cloud technologies.",
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-primary";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/candidates")}
          className="hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-foreground">{candidate.name}</h2>
          <p className="text-muted-foreground">{candidate.position}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Schedule Interview
          </Button>
          <Button className="gap-2 bg-gradient-primary hover:opacity-90">
            <Mail className="h-4 w-4" />
            Send Email
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{candidate.summary}</p>
              
              <Separator />
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{candidate.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{candidate.phone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {candidate.workExperience.map((job, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge variant="outline">{job.duration}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                  {index < candidate.workExperience.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {candidate.education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                  {index < candidate.education.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Match Score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className={`text-6xl font-bold ${getScoreColor(candidate.score)}`}>
                  {candidate.score}
                </div>
                <p className="text-sm text-muted-foreground mt-2">Overall Match</p>
                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-gradient-primary transition-all"
                    style={{ width: `${candidate.score}%` }}
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Technical Skills</span>
                  <span className="font-medium text-foreground">95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experience Match</span>
                  <span className="font-medium text-foreground">90%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Culture Fit</span>
                  <span className="font-medium text-foreground">88%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-medium text-foreground">{candidate.experience} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium text-foreground">{candidate.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Applied</span>
                <span className="font-medium text-foreground">
                  {new Date(candidate.appliedDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <Badge className="bg-success text-success-foreground">
                  {candidate.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
