import pandas as pd
import os
import re

def calculate_evidence_score(text):
    current_dir = os.path.dirname(__file__)
    file_path = os.path.join(current_dir, '..', 'datasets', 'dataset.xlsx')
    
    data = pd.read_excel(file_path)
    # Using exact Title Case headers to match your new spreadsheet
    evidence_rows = data[data["Category"] == "Evidence"]
    
    score = 0
    detected_terms = []
    
    for index, row in evidence_rows.iterrows():
        word = str(row["Phrase"]).lower()
        severity = str(row["Severity"]).lower()
        
        if re.search(r'\b' + re.escape(word) + r'\b', text.lower()):
            points = 3 if severity == 'high' else 2 if severity == 'medium' else 1
            score += points
            
            detected_terms.append({
                "term": word,
                "severity": severity.capitalize(),
                "category": "Evidence"
            })
            
    return {
        "status": "success",
        "evidence_score": score,
        "detected_terms": detected_terms
    }