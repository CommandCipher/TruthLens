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

    final_score = (
        base_score
        - bias_penalty
        - emotion_penalty
        - speculation_penalty
        - clickbait_penalty
        + evidence_bonus
    )

    final_score = max(0, min(100, final_score))

    if final_score >= 80:
        verdict = "Highly Reliable"

    elif final_score >= 60:
        verdict = "Moderately Reliable"

    elif final_score >= 40:
        verdict = "Questionable"

    else:
        verdict = "Potentially Misleading"

    return {
        "score": round(final_score),
        "verdict": verdict
    }