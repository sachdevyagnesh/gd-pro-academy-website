import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { QuestionnaireConfig, calculateScore, ScoreRange } from "@/config/questionnaire";
import { cn } from "@/lib/utils";

interface QuestionnaireProps {
  config: QuestionnaireConfig;
  onComplete: (result: { score: number; percentage: number; range: ScoreRange; answers: Record<string, number> }) => void;
  onBack?: () => void;
}

export function Questionnaire({ config, onComplete, onBack }: QuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = config.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / config.questions.length) * 100;
  const isLastQuestion = currentQuestion === config.questions.length - 1;

  const handleOptionSelect = (optionIndex: number, score: number) => {
    setSelectedOption(optionIndex);
    setAnswers((prev) => ({
      ...prev,
      [question.id]: score,
    }));
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    if (isLastQuestion) {
      const result = calculateScore(answers, config);
      onComplete({ ...result, answers });
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(answers[config.questions[currentQuestion + 1]?.id] !== undefined 
        ? config.questions[currentQuestion + 1].options.findIndex(o => o.score === answers[config.questions[currentQuestion + 1].id])
        : null
      );
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      const prevQuestionId = config.questions[currentQuestion - 1].id;
      const prevAnswer = answers[prevQuestionId];
      if (prevAnswer !== undefined) {
        const optionIndex = config.questions[currentQuestion - 1].options.findIndex(o => o.score === prevAnswer);
        setSelectedOption(optionIndex);
      }
    } else if (onBack) {
      onBack();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {config.questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <Card className="mb-6">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index, option.score)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all",
                  selectedOption === index
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0",
                      selectedOption === index
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )}
                  >
                    {selectedOption === index && (
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>
                  <span className={cn(
                    "text-sm md:text-base",
                    selectedOption === index ? "text-foreground font-medium" : "text-muted-foreground"
                  )}>
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {currentQuestion === 0 && onBack ? "Back" : "Previous"}
        </Button>

        <Button
          variant="navy"
          onClick={handleNext}
          disabled={selectedOption === null}
          className="gap-2"
        >
          {isLastQuestion ? "See Results" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
