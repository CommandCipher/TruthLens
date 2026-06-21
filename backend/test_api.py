from services.bias_detector import calculate_bias_score

result = calculate_bias_score(
    "The corrupt government spread propaganda and pushed a radical agenda."
)

print(result)