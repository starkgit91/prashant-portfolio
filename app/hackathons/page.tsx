import Image from 'next/image';

export default function Hackathons() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-purple-100 to-blue-100">
      <h1 className="text-4xl font-bold text-black mb-6">Hackathons & Tech Events</h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-black">Smart India Hackathon</h2>
          <p className="text-gray-800">
            Participated in the prestigious SIH representing NIT Andhra Pradesh, contributing to a cutting-edge ML-driven solution for real-time monitoring and anomaly detection. Worked collaboratively in a team to deliver a complete proof-of-concept.
          </p>
          <Image src="/images/sih.jpg" alt="Smart India Hackathon" width={600} height={400} className="rounded-xl mt-4" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black">AI and Robotics Club - NIT Andhra</h2>
          <p className="text-gray-800">
            Regular contributor and presenter in AI workshops and Robotics colloquiums. Conducted hands-on sessions and collaborated with peers to demonstrate AI-powered robotic mechanisms.
          </p>
          <Image src="/images/ai-robotics.jpg" alt="AI Robotics Club" width={600} height={400} className="rounded-xl mt-4" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black">Neural Nexus - TechFest Autonomous Car Prototype</h2>
          <p className="text-gray-800">
            Spearheaded the development and expo of an autonomous vehicle prototype during the Neural Nexus tech fest. The system integrated real-time sensor inputs with a custom-trained ML model to make navigation decisions.
          </p>
          <Image src="/images/neural-nexus.jpg" alt="Neural Nexus Autonomous Car" width={600} height={400} className="rounded-xl mt-4" />
        </div>
      </section>
    </main>
  );
}
