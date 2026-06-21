from PIL import Image, ImageChops
import os

def calculate_ela_score(image_path):

    original = Image.open(image_path).convert("RGB")

    temp_file = "temp_ela.jpg"

    original.save(
        temp_file,
        "JPEG",
        quality=90
    )

    compressed = Image.open(temp_file)

    ela_image = ImageChops.difference(
        original,
        compressed
    )

    histogram = ela_image.histogram()

    score = sum(
        value * (idx % 256)
        for idx, value in enumerate(histogram)
    )

    score = round(
        score / (original.size[0] * original.size[1]),
        2
    )

    os.remove(temp_file)

    if score < 5:
        verdict = "Low Suspicion"

    elif score < 15:
        verdict = "Medium Suspicion"

    else:
        verdict = "High Suspicion"

    return {
        "ela_score": score,
        "ela_verdict": verdict
    }