import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Prashant Mishra</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Final year B.Tech student at NIT Andhra Pradesh, passionate about AI, Signal Processing, and Full Stack Development.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="https://linkedin.com/in/prashant-mishra-976708157" target="_blank">
          <Button>LinkedIn</Button>
        </a>
        <a href="https://github.com/starkgit91" target="_blank">
          <Button>GitHub</Button>
        </a>
        <a href="https://drive.google.com/file/d/1IBBDi0EcNXQ4xiTMYaw3Rx1tNBXe6ZVm/view" target="_blank">
          <Button>Resume</Button>
        </a>
      </div>
      <div className="mt-10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Research Internships</h2>
            <p>IIT Kanpur – ML projects including Genetic Circuits & System Modeling using NNs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Projects</h2>
            <p>Speech Recognition, SHL RecSys, Car Repair App, ODIR 5K with ResNet + SSL.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Skills</h2>
            <p>Python, C++, ML/DL, Node.js, MongoDB, React, TailwindCSS.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Achievements</h2>
            <p>8.3 CGPA, NPTEL topper, Competitions, Coding & Research contributions.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
