def calculate_final_reliability(metrics):
    base_score = 100
    
    bias = metrics.get("bias_score", 0)
    emotion = metrics.get("emotion_score", 0)
    speculation = metrics.get("speculation_score", 0)
    evidence = metrics.get("evidence_score", 0)
    clickbait = metrics.get("clickbait_score", 0)
    
    bias_penalty = bias * 3.0
    emotion_penalty = emotion * 2.0
    speculation_penalty = speculation * 2.5
    clickbait_penalty = clickbait * 2.0
    
    evidence_bonus = evidence * 2.0
    
    final_score = base_score - bias_penalty - emotion_penalty - speculation_penalty - clickbait_penalty + evidence_bonus
    
    if final_score > 100:
        final_score = 100
    elif final_score < 0:
        final_score = 0
        
    return round(final_score)