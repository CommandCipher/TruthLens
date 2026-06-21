from flask import Flask, request, jsonify
from services.bias_detector import calculate_bias_score
from services.emotion_detector import calculate_emotion_score
from services.evidence_detector import calculate_evidence_score
from services.speculation_detector import calculate_speculation_score
from services.clickbait_detector import calculate_clickbait_score
from services.score_calculator import calculate_final_reliability

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_endpoint():
    data = request.get_json()
    
    if not data or 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
        
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
    
    top_level_score = calculate_final_reliability(metrics)
    
    all_detected_terms = (
        bias_result["detected_terms"] + 
        emotion_result["detected_terms"] +
        evidence_result["detected_terms"] +
        speculation_result["detected_terms"] +
        clickbait_result["detected_terms"]
    )
    
    return jsonify({
        "overall_reliability_score": top_level_score,
        "reliability_metrics": metrics,
        "heatmap_data": all_detected_terms
    })

if __name__ == '__main__':
    app.run(debug=True)