import { useState } from "react";
import { Copy, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Generator = () => {
  const { toast } = useToast();

  const [ctaText, setCtaText] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [includeHashtags, setIncludeHashtags] = useState("yes");
  const [includeEmojis, setIncludeEmojis] = useState("yes");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    // Validation
    if (!ctaText.trim() || !videoTitle.trim()) {
      toast({
        title: "Missing Fields!",
        description: "CTA Text and Video Title are required...",
        variant: "destructive",
      });
      return;
    }

    const formData = {
      ctaText,
      videoTitle,
      includeHashtags: includeHashtags === "yes",
      includeEmojis: includeEmojis === "yes",
    };

    try {
      setLoading(true);
      setOutputText("");

      const res = await fetch("http://localhost:5000/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setOutputText(data.text);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to generate the description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (outputText) {
      await navigator.clipboard.writeText(outputText);
      toast({
        title: "Copied!",
        description: "Description copied to clipboard.",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Generate Your <span className="text-gradient">Description</span>
        </h2>

        <div className="glass-card glow-accent p-6 sm:p-8 space-y-6">
          {/* CTA Text */}
          <div className="space-y-2">
            <Label>Include CTA *</Label>
            <Textarea
              placeholder="Enter your call-to-action text..."
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Video Title */}
          <div className="space-y-2">
            <Label>Video Title *</Label>
            <Textarea
              placeholder="Enter your video title..."
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="min-h-[80px]"
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Include Hashtags</Label>
              <Select value={includeHashtags} onValueChange={setIncludeHashtags}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Include Emojis</Label>
              <Select value={includeEmojis} onValueChange={setIncludeEmojis}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Generate Button with Loading */}
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-6 text-lg font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Description
              </>
            )}
          </Button>

          {/* Output */}
          {outputText && (
            <div className="space-y-2 pt-4">
              <div className="flex justify-between items-center">
                <Label>Generated Description</Label>
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4" /> Copy
                </Button>
              </div>
              <Textarea value={outputText} readOnly className="min-h-[200px]" />
            </div>
          )}
        </div>

        <footer className="text-center text-muted-foreground">
          © SmartDescribe
        </footer>
      </div>
    </section>
  );
};

export default Generator;
