export default function MLProjects() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-green-100 to-yellow-100">
      <h1 className="text-4xl font-bold text-black mb-6">Machine Learning Projects</h1>

      <section className="space-y-8 text-gray-900">
        <div>
          <h2 className="text-2xl font-semibold">Automatic Speech Recognition using RNNs</h2>
          <p>
            Developed an end-to-end ASR system using Recurrent Neural Networks trained on annotated audio datasets. Focused on improving WER (Word Error Rate) by integrating temporal smoothing and beam search decoding.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">SHL Assessment Recommendation System</h2>
          <p>
            Built a semantic retrieval model using Gemini LLM embeddings to recommend SHL tests. Designed with scalable backend and vector DB for real-time querying. Deployed the system with optimized inference latency.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">ODIR-5K Eye Disease Classifier</h2>
          <p>
            Tackled long-tail multilabel classification using self-supervised ResNet variants. Incorporated contrastive loss pretraining to boost minority class performance. Achieved high macro F1-score improvement over baseline.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Neural Modeling of Genetic Circuits</h2>
          <p>
            Collaborated with IIT Kanpur to model synthetic genetic circuits using first- and second-order system approximations. Employed neural ODEs for simulation and verification of biological switches and gates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Car Repair Shop Backend System</h2>
          <p>
            Designed a full-stack Node.js and MongoDB solution for managing employee records and repair tickets. Developed secure REST APIs and role-based access for admin and technicians.
          </p>
        </div>
      </section>
    </main>
  );
}



