import { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('hello, world!');
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-[#000] border border-green-700/20 text-green-300 font-mono p-6 rounded-md shadow-[0_8px_30px_rgba(16,185,129,0.06)]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500/80" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
        </div>

        <pre className="mt-6 text-2xl sm:text-3xl leading-tight">
          &gt; echo "hello, world!"
        </pre>
        <div className="mt-4 text-sm text-green-200/70 flex items-center gap-2">
          <span>user@local:~$</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 rounded bg-transparent border border-green-600/40 text-green-200 text-sm hover:bg-green-900/30"
          >
            {copied ? 'copié' : 'copier'}
          </button>
          <span className="ml-2 blink">▌</span>
        </div>

        <p className="mt-6 text-xs text-green-200/40">
          Minimal hacker theme — monospace, vert néon, responsive.
        </p>
      </div>
    </div>
  );
}

export default App;
