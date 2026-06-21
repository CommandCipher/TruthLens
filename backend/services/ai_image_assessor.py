import google.generativeai as genai

genai.configure(
    api_key="AQ.Ab8RN6LBkmbXhFmS4sPx_HYETY12iMlYSmL_8qY2gh8I_jmQXw"
)

model = genai.GenerativeModel(
    "models/gemini-2.5-flash"
)


def assess_image_risk(image_data):

    prompt = f"""
    Analyze these image forensics results.

    IMPORTANT:
    Treat the forensic engine as the primary source of truth.

    Metadata Present: {image_data['metadata_present']}
    ELA Score: {image_data['ela_score']}
    ELA Verdict: {image_data['ela_verdict']}
    Compression Ratio: {image_data['compression_ratio']}
    Risk Score: {image_data['risk_score']}
    Risk Level: {image_data['risk_level']}

    Give:
    1. AI Assessment
    2. Brief Reason
    3. Confidence (0-100)

    Keep response under 50 words.
    """

    try:

        response = model.generate_content(prompt)

        if (
            response
            and hasattr(response, "text")
            and response.text
        ):
            return response.text

        return (
            "AI Assessment: Unavailable. "
            "Reason: Empty response from model. "
            "Confidence: 0"
        )

    except Exception as e:

        print("GEMINI ERROR:", str(e))

        return (
            "AI Assessment: Unavailable. "
            "Reason: Gemini service error. "
            "Confidence: 0"
        )