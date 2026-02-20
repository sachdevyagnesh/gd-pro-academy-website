import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Building2, User, ArrowRight, ArrowLeft, ClipboardCheck } from "lucide-react";
import { Questionnaire } from "@/components/assessment/Questionnaire";
import { AssessmentResult } from "@/components/assessment/AssessmentResult";
import { EmailReportDialog } from "@/components/assessment/EmailReportDialog";
import { 
  corporateQuestionnaire, 
  individualQuestionnaire, 
  salesConfidenceTest,
  ScoreRange 
} from "@/config/questionnaire";
import { downloadPDF } from "@/lib/pdfGenerator";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg-2.jpg";

type AssessmentStep = "intro" | "name" | "questions" | "result" | "sales-test";
type AssessmentType = "corporate" | "individual";

interface AssessmentState {
  userName: string;
  score: number;
  percentage: number;
  range: ScoreRange | null;
  answers: Record<string, number>;
}

export default function Assessment() {
  const { type } = useParams<{ type: AssessmentType }>();
  const navigate = useNavigate();
  const [step, setStep] = useState<AssessmentStep>("intro");
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [state, setState] = useState<AssessmentState>({
    userName: "",
    score: 0,
    percentage: 0,
    range: null,
    answers: {},
  });
  const [salesTestResult, setSalesTestResult] = useState<{
    score: number;
    percentage: number;
    range: ScoreRange;
  } | null>(null);

  const config = type === "corporate" ? corporateQuestionnaire : individualQuestionnaire;
  const redirectPath = type === "corporate" ? "/corporate-training" : "/individual-training";

  const handleStartAssessment = () => {
    setStep("name");
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.userName.trim()) {
      setStep("questions");
    }
  };

  const handleQuestionnaireComplete = (result: {
    score: number;
    percentage: number;
    range: ScoreRange;
    answers: Record<string, number>;
  }) => {
    setState((prev) => ({
      ...prev,
      ...result,
    }));
    setStep("result");
  };

  const handleSalesTestComplete = (result: {
    score: number;
    percentage: number;
    range: ScoreRange;
  }) => {
    setSalesTestResult(result);
  };

  const getCurrentResult = () => {
    return step === "sales-test" && salesTestResult ? salesTestResult : state;
  };

  const getCurrentConfig = () => {
    return step === "sales-test" ? salesConfidenceTest : config;
  };

  const handleDownloadPDF = async () => {
    const result = getCurrentResult();
    const testConfig = getCurrentConfig();
    
    try {
      await downloadPDF(
        {
          title: "GD Pro Academy Assessment Report",
          date: new Date().toLocaleDateString(),
          userName: state.userName,
          testType: testConfig.title,
          score: result.score,
          maxScore: testConfig.id === "sales-confidence" ? "100%" : "10",
          result: result.range?.title || "",
          description: result.range?.description || "",
          recommendation: result.range?.recommendation || "",
          program: result.range?.program || "",
        },
        `GD-Pro-Academy-Assessment-${state.userName || "Report"}.pdf`
      );
      toast.success("PDF downloaded successfully!");
    } catch {
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  const handleEmailPDF = () => {
    setEmailDialogOpen(true);
  };

  const handleTakeSalesTest = () => {
    setStep("sales-test");
  };

  const handleSkipToProgram = () => {
    navigate(redirectPath);
  };

  const getReportData = () => {
    const result = getCurrentResult();
    const testConfig = getCurrentConfig();
    return {
      testType: testConfig.title,
      score: result.score,
      maxScore: testConfig.id === "sales-confidence" ? "100%" : "10",
      result: result.range?.title || "",
      recommendation: result.range?.recommendation || "",
      program: result.range?.program || "",
    };
  };


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <ClipboardCheck className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Skills Assessment
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {config.title}
              </h1>
              <p className="text-lg text-primary-foreground/80">
                {config.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            {step === "intro" && (
              <div className="max-w-2xl mx-auto text-center">
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      {type === "corporate" ? (
                        <Building2 className="w-10 h-10 text-primary" />
                      ) : (
                        <User className="w-10 h-10 text-primary" />
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {config.subtitle}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      This assessment contains {config.questions.length} questions and takes about 5 minutes to complete. Your answers will help us recommend the best training program for {type === "corporate" ? "your team" : "you"}.
                    </p>
                    <ul className="text-left space-y-2 mb-8 max-w-md mx-auto">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {config.questions.length} multiple-choice questions
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Personalized score out of {config.maxScore}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Custom program recommendations
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Downloadable PDF report
                      </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button variant="navy" size="lg" onClick={handleStartAssessment} className="gap-2">
                        Start Assessment
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="lg" onClick={handleSkipToProgram}>
                        Skip to Programs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Button variant="ghost" asChild>
                  <Link to="/services" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Link>
                </Button>
              </div>
            )}

            {step === "name" && (
              <div className="max-w-md mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold text-foreground mb-4 text-center">
                      Let's Get Started
                    </h2>
                    <p className="text-muted-foreground mb-6 text-center">
                      Enter your name for the personalized report
                    </p>
                    <form onSubmit={handleNameSubmit} className="space-y-4">
                      <Input
                        placeholder="Your full name"
                        value={state.userName}
                        onChange={(e) => setState((prev) => ({ ...prev, userName: e.target.value }))}
                        className="text-center"
                        required
                      />
                      <div className="flex gap-3">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setStep("intro")}
                          className="flex-1"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          variant="navy" 
                          className="flex-1 gap-2"
                          disabled={!state.userName.trim()}
                        >
                          Continue
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === "questions" && (
              <Questionnaire
                config={config}
                onComplete={handleQuestionnaireComplete}
                onBack={() => setStep("name")}
              />
            )}

            {step === "result" && state.range && (
              <AssessmentResult
                score={state.score}
                percentage={state.percentage}
                range={state.range}
                userName={state.userName}
                testType={type as "corporate" | "individual"}
                onDownloadPDF={handleDownloadPDF}
                onEmailPDF={handleEmailPDF}
                onTakeSalesTest={handleTakeSalesTest}
                showSalesTestOffer={type === "individual"}
              />
            )}

            {step === "sales-test" && (
              <>
                {!salesTestResult ? (
                  <div className="mb-8">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Sales Confidence Test
                      </h2>
                      <p className="text-muted-foreground">
                        Take this quick 5-question test to discover your sales confidence level
                      </p>
                    </div>
                    <Questionnaire
                      config={salesConfidenceTest}
                      onComplete={(result) => handleSalesTestComplete(result)}
                      onBack={() => setStep("result")}
                    />
                  </div>
                ) : (
                  <AssessmentResult
                    score={salesTestResult.score}
                    percentage={salesTestResult.percentage}
                    range={salesTestResult.range}
                    userName={state.userName}
                    testType="sales-confidence"
                    onDownloadPDF={handleDownloadPDF}
                    onEmailPDF={handleEmailPDF}
                  />
                )}
              </>
            )}
          </div>
        </section>
      </main>
      
      {/* Email Report Dialog */}
      <EmailReportDialog
        open={emailDialogOpen}
        onOpenChange={setEmailDialogOpen}
        userName={state.userName}
        reportData={getReportData()}
      />
      
      <Footer />
    </div>
  );
}
