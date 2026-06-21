import pandas as pd
import os
import re

def calculate_bias_score(text):
    current_dir = os.path.dirname(__file__)
    file_path = os.path.join(current_dir, '..', 'datasets', 'dataset.xlsx')

    data = pd.read_excel(file_path)
    bias_rows = data[data["Category"] == "Bias"]

    score = 0
    detected_terms = []

    text_lower = text.lower()

    for _, row in bias_rows.iterrows():

        word = str(row["Phrase"]).strip().lower()
        severity = str(row["Severity"]).strip().lower()

        points = 3 if severity == "high" else 2 if severity == "medium" else 1

        for match in re.finditer(
            r'\b' + re.escape(word) + r'\b',
            text_lower
        ):

            score += points

            detected_terms.append({
                "term": word,
                "severity": severity.capitalize(),
                "category": "Bias",
                "start": match.start(),
                "end": match.end(),
                "points": points
            })

    return {
        "status": "success",
        "bias_score": score,
        "detected_terms": detected_terms
    }