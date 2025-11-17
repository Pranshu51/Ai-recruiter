import { useState } from "react";
import { Search, Filter, Download, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const mockCandidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 234 567 8900",
    position: "Senior Full Stack Developer",
    experience: 8,
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    score: 92,
    status: "shortlisted",
    appliedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 234 567 8901",
    position: "Product Manager",
    experience: 6,
    skills: ["Agile", "Product Strategy", "User Research", "Analytics"],
    score: 88,
    status: "shortlisted",
    appliedDate: "2024-01-14",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "+1 234 567 8902",
    position: "UX/UI Designer",
    experience: 5,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    score: 85,
    status: "pending",
    appliedDate: "2024-01-13",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@email.com",
    phone: "+1 234 567 8903",
    position: "DevOps Engineer",
    experience: 7,
    skills: ["Kubernetes", "CI/CD", "AWS", "Terraform", "Monitoring"],
    score: 78,
    status: "pending",
    appliedDate: "2024-01-12",
  },
  {
    id: 5,
    name: "Alex Kumar",
    email: "a.kumar@email.com",
    phone: "+1 234 567 8904",
    position: "Data Scientist",
    experience: 4,
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    score: 82,
    status: "interview_scheduled",
    appliedDate: "2024-01-11",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "l.anderson@email.com",
    phone: "+1 234 567 8905",
    position: "Backend Developer",
    experience: 5,
    skills: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
    score: 75,
    status: "rejected",
    appliedDate: "2024-01-10",
  },
];

export default function Candidates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const navigate = useNavigate();

  const filteredCandidates = mockCandidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || candidate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shortlisted":
        return "bg-success text-success-foreground";
      case "rejected":
        return "bg-destructive text-destructive-foreground";
      case "interview_scheduled":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    return status.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Candidates</h2>
          <p className="text-muted-foreground">
            Manage and review all candidate applications
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="interview_scheduled">Interview Scheduled</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {filteredCandidates.map((candidate) => (
          <Card
            key={candidate.id}
            className="transition-all hover:shadow-md cursor-pointer"
            onClick={() => navigate(`/candidates/${candidate.id}`)}
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {candidate.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {candidate.position}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{candidate.email}</span>
                        <span>•</span>
                        <span>{candidate.phone}</span>
                      </div>
                    </div>
                    <Badge className={getStatusColor(candidate.status)}>
                      {getStatusLabel(candidate.status)}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.slice(0, 5).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {candidate.skills.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{candidate.skills.length - 5} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{candidate.experience} years experience</span>
                    <span>•</span>
                    <span>Applied on {new Date(candidate.appliedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="mb-1 text-3xl font-bold text-primary">
                      {candidate.score}
                    </div>
                    <p className="text-xs text-muted-foreground">Match Score</p>
                    <div className="mt-2 h-2 w-20 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-gradient-primary transition-all"
                        style={{ width: `${candidate.score}%` }}
                      />
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="hover:bg-accent">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No candidates found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
