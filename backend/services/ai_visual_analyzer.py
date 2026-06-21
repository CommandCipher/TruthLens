from PIL import Image
import google.generativeai as genai

genai.configure(
    api_key="AQ.Ab8RN6LBkmbXhFmS4sPx_HYETY12iMlYSmL_8qY2gh8I_jmQXw"
)

model = genai.GenerativeModel(
    "models/gemini-2.5-flash"
)


def assess_image_visuals(image_path):

    try:

        image = Image.open(image_path)

        prompt = """
        You are an image authenticity analyst.

        Analyze this image for:

        - Signs of AI generation
        - Deepfake indicators
        - Manipulation or editing
        - Unrealistic lighting
        - Inconsistent shadows
        - Synthetic textures
        - Distorted facial features
        - Visual artifacts

        Return exactly:

        AI Risk Level:
        Reason:
        Confidence:

        Keep the response under 75 words.
        """

        response = model.generate_content(
            [prompt, image]
        )

        if (
            response
            and hasattr(response, "text")
            and response.text
        ):
            return response.text

        return (
            "AI Risk Level: Unknown\n"
            "Reason: Empty model response\n"
            "Confidence: 0"
        )

    except Exception as e:

        print("VISION ERROR:", str(e))

        return (
            "AI Risk Level: Unknown\n"
            "Reason: Visual analysis unavailable\n"
            "Confidence: 0"
        )