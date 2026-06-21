import pandas as pd
import os
import re

def calculate_emotion_score(text):
    current_dir = os.path.dirname(__file__)
    file_path = os.path.join(current_dir, '..', 'datasets', 'dataset.xlsx')
    
    data = pd.read_excel(file_path)
    emotion_rows = data[data["Category"] == "Emotion"] 
    
    score = 0
    detected_terms = []
    
    for index, row in emotion_rows.iterrows():
        # Fixed the column name here to "Phrase"
        word = str(row["Phrase"]).lower()
        severity = str(row["Severity"]).lower()
        
        if re.search(r'\b' + re.escape(word) + r'\b', text.lower()):
            points = 3 if severity == 'high' else 2 if severity == 'medium' else 1
            score += points
            
            detected_terms.append({
                "term": word,
                "severity": severity.capitalize(),
                "category": "Emotion"
            })
            
    return {
        "status": "success",
        "emotion_score": score,
        "detected_terms": detected_terms
    }