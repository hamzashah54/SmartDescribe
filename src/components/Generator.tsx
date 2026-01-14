import { useState } from "react";
import { Copy, Sparkles } from "lucide-react";
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

  const handleGenerate = async () => {
    const formData = {
      ctaText,
      videoTitle,
      includeHashtags: includeHashtags === "yes",
      includeEmojis: includeEmojis === "yes",
    };

    console.log(formData);

    try {
      const res = await fetch("http://localhost:5000/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setOutputText(data.text);
    } catch (err) {
      setOutputText("Error generating description. Try again.");
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
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center">
          Generate Your <span className="text-gradient">Description</span>
        </h2>

        <div className="glass-card glow-accent p-6 sm:p-8 space-y-6">
          {/* CTA Text */}
          <div className="space-y-2">
            <Label htmlFor="cta">Include CTA</Label>
            <Textarea
              id="cta"
              placeholder="Enter your call-to-action text..."
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Video Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Video Title</Label>
            <Textarea
              id="title"
              placeholder="Enter your video title..."
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="hashtags">Include Hashtags</Label>
              <Select value={includeHashtags} onValueChange={setIncludeHashtags}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="emojis">Include Emojis</Label>
              <Select value={includeEmojis} onValueChange={setIncludeEmojis}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            className="w-full flex items-center justify-center gap-2 py-6 text-lg font-semibold"
          >
            <Sparkles className="w-5 h-5" />
            Generate Description
          </Button>

          {/* Output Box */}
          {outputText && (
            <div className="space-y-2 pt-4">
              <div className="flex justify-between items-center">
                <Label>Generated Description</Label>
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4" /> Copy
                </Button>
              </div>
              <Textarea
                value={outputText}
                readOnly
                className="min-h-[200px] resize-none cursor-default"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground mt-4">
          © SmartDescribe
        </footer>
      </div>
    </section>
  );
};

export default Generator;
