from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from google import genai

load_dotenv()
app = Flask(__name__)
CORS(app)

GEMINI_KEY = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=GEMINI_KEY)

@app.route("/generate-description", methods=["POST"])
def generate_description():
    data = request.json
    cta_text = data.get("ctaText", "")
    video_title = data.get("videoTitle", "")
    include_hashtags = data.get("includeHashtags", True)
    include_emojis = data.get("includeEmojis", True)

    # Build Gemini prompt
    prompt = f"""
You are an expert AI content writer specialized in YouTube videos.
Generate a compelling, engaging, and SEO-optimized YouTube description based on the information below.
Write in a natural, human-like tone without using hyphens. 
Make it attractive for viewers to read and structured for high engagement.

Video Title: {video_title}
Include Hashtags: {include_hashtags}
Include Emojis: {include_emojis}

Instructions:
1. Make it informative, entertaining, and easy to read.
2. Structure it with paragraphs and line breaks.
3. Include relevant emojis if "Include Emojis" is Yes.
4. Add relevant hashtags at the end if "Include Hashtags" is Yes.
5. Preserve all formatting and line breaks in the provided CTA text.
6. Append the CTA exactly at the end of the description.
7. Focus on maximizing watch time, engagement, and click-through rate.
8. Do not use AI-sounding words.

CTA:
{cta_text}

Generate the full description following all instructions above.
"""

    try:
        response = client.models.generate_content(
            model="gemini-3-flash-preview",
            contents=prompt,
        )
        return jsonify({"text": response.text})
    except Exception as e:
        return jsonify({"text": f"Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
