
const FitnessKeywords = () => {
  const keywords = [
    "CARDIO", "PLANK", "DUMBLE", "DEAD LIFT", "PILATES", "SQUAT", "CARDIO", "DUMBLE", "DEAD LIFT", "PILATES"
  ];

  return (
    <div className="relative py-8 overflow-hidden bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10">
      {/* Top Banner */}
      <div className="flex whitespace-nowrap animate-scroll mb-4">
        {/* First set */}
        {keywords.map((keyword, index) => (
          <div key={`top-${index}`} className="flex items-center flex-shrink-0">
            <span className="text-primary text-2xl font-black mx-6">{keyword}</span>
            <span className="text-primary text-xl mx-4">✦</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {keywords.map((keyword, index) => (
          <div key={`top-duplicate-${index}`} className="flex items-center flex-shrink-0">
            <span className="text-primary text-2xl font-black mx-6">{keyword}</span>
            <span className="text-primary text-xl mx-4">✦</span>
          </div>
        ))}
      </div>

      {/* Bottom Banner (Reverse Direction) */}
      <div className="flex whitespace-nowrap animate-scroll-reverse">
        {/* First set */}
        {[...keywords].reverse().map((keyword, index) => (
          <div key={`bottom-${index}`} className="flex items-center flex-shrink-0">
            <span className="text-muted-foreground text-2xl font-black mx-6">{keyword}</span>
            <span className="text-muted-foreground text-xl mx-4">✦</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {[...keywords].reverse().map((keyword, index) => (
          <div key={`bottom-duplicate-${index}`} className="flex items-center flex-shrink-0">
            <span className="text-muted-foreground text-2xl font-black mx-6">{keyword}</span>
            <span className="text-muted-foreground text-xl mx-4">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessKeywords;
