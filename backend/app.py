from flask import Flask, request, jsonify

from services.bias_detector import calculate_bias_score
from services.emotion_detector import calculate_emotion_score
from services.evidence_detector import calculate_evidence_score
from services.speculation_detector import calculate_speculation_score
from services.clickbait_detector import calculate_clickbait_score

from services.score_calculator import calculate_final_reliability
from services.source_analyzer import analyze_source
from services.image_analyzer import analyze_image

app = Flask(__name__)


@app.route('/analyze', methods=['POST'])
def analyze_endpoint():

    data = request.get_json()

    if not data or 'text' not in data:
        return jsonify({
            "error": "No text provided"
        }), 400

    user_text = data['text']

    bias_result = calculate_bias_score(user_text)
    emotion_result = calculate_emotion_score(user_text)
    evidence_result = calculate_evidence_score(user_text)
    speculation_result = calculate_speculation_score(user_text)
    clickbait_result = calculate_clickbait_score(user_text)

    metrics = {
        "bias_score": bias_result["bias_score"],
        "emotion_score": emotion_result["emotion_score"],
        "evidence_score": evidence_result["evidence_score"],
        "speculation_score": speculation_result["speculation_score"],
        "clickbait_score": clickbait_result["clickbait_score"]
    }

    overall_reliability = calculate_final_reliability(metrics)

    all_detected_terms = (
        bias_result["detected_terms"] +
        emotion_result["detected_terms"] +
        evidence_result["detected_terms"] +
        speculation_result["detected_terms"] +
        clickbait_result["detected_terms"]
    )

    confidence_score = min(
        100,
        50 + len(all_detected_terms) * 10
    )

    evidence_bias_ratio = round(
        metrics["evidence_score"] /
        max(metrics["bias_score"], 1),
        2
    )

    return jsonify({

        "overall_reliability": overall_reliability,

        "confidence_score": confidence_score,

        "evidence_bias_ratio": evidence_bias_ratio,

        "scores": {
            "bias": bias_result["bias_score"],
            "emotion": emotion_result["emotion_score"],
            "evidence": evidence_result["evidence_score"],
            "speculation": speculation_result["speculation_score"],
            "clickbait": clickbait_result["clickbait_score"]
        },

        "heatmap_data": all_detected_terms,

        "analysis": {
            "bias": bias_result,
            "emotion": emotion_result,
            "evidence": evidence_result,
            "speculation": speculation_result,
            "clickbait": clickbait_result
        }
    })


@app.route('/analyze-source', methods=['POST'])
def analyze_source_endpoint():

    data = request.get_json()

    if not data or 'domain' not in data:
        return jsonify({
            "error": "No domain provided"
        }), 400

    result = analyze_source(
        data["domain"]
    )

    return jsonify(result)

@app.route('/analyze-image', methods=['POST'])
def analyze_image_endpoint():

    result = analyze_image("test.jpg")

    return jsonify(result)

@app.route('/')
def home():
    return jsonify({
        "message": "TruthLens API Running"
    })


if __name__ == '__main__':
    app.run(debug=True)