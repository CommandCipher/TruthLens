from PIL import Image
from services.ai_image_assessor import assess_image_risk
from services.ai_visual_analyzer import assess_image_visuals
from services.ela_analyzer import calculate_ela_score
import os


def analyze_image(image_path):

    img = Image.open(image_path)

    width, height = img.size

    megapixels = round(
        (width * height) / 1000000,
        2
    )

    file_size = round(
        os.path.getsize(image_path) / 1024,
        2
    )

    pixels = width * height

    compression_ratio = round(
        file_size / max(pixels, 1),
        4
    )

    exif_data = img.getexif()

    metadata_present = len(exif_data) > 0

    ela_result = calculate_ela_score(
        image_path
    )

    risk_score = 0

    if not metadata_present:
        risk_score += 20

    if ela_result["ela_score"] > 5:
        risk_score += min(
            40,
            int(ela_result["ela_score"] * 2)
        )

    if compression_ratio < 0.02:
        risk_score += 15

    if risk_score < 30:
        risk_level = "Low"

    elif risk_score < 60:
        risk_level = "Medium"

    else:
        risk_level = "High"

    if risk_score < 30:
        final_verdict = "Likely Authentic"

    elif risk_score < 60:
        final_verdict = "Requires Verification"

    else:
        final_verdict = "Potentially Manipulated"

    image_data = {
        "metadata_present": metadata_present,
        "ela_score": ela_result["ela_score"],
        "ela_verdict": ela_result["ela_verdict"],
        "compression_ratio": compression_ratio,
        "risk_score": risk_score,
        "risk_level": risk_level
    }

    ai_assessment = assess_image_risk(
        image_data
    )

    visual_assessment = assess_image_visuals(
        image_path
    )

    analysis_summary = {
        "forensic_engine": final_verdict,
        "risk_level": risk_level,
        "ai_enabled": True
    }

    return {
        "width": width,
        "height": height,
        "megapixels": megapixels,

        "file_size_kb": file_size,

        "format": img.format,
        "mode": img.mode,

        "metadata_present": metadata_present,

        "ela_score": ela_result["ela_score"],
        "ela_verdict": ela_result["ela_verdict"],

        "compression_ratio": compression_ratio,

        "risk_score": risk_score,
        "risk_level": risk_level,

        "ai_forensic_explanation": ai_assessment,

        "ai_visual_assessment": visual_assessment,

        "analysis_summary": analysis_summary,

        "verdict": final_verdict
    }