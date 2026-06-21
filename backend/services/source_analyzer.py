import pandas as pd
import os

def analyze_source(domain):

    current_dir = os.path.dirname(__file__)

    file_path = os.path.join(
        current_dir,
        '..',
        'datasets',
        'source_dataset.csv'
    )

    data = pd.read_csv(file_path)

    match = data[
        data["domain"].str.lower() ==
        domain.lower()
    ]

    if len(match) == 0:

        return {
            "domain": domain,
            "credibility": 50,
            "classification": "Unknown"
        }

    credibility = int(
        match.iloc[0]["credibility"]
    )

    if credibility >= 85:
        classification = "Trusted"

    elif credibility >= 70:
        classification = "Moderate"

    else:
        classification = "Low Trust"

    return {
        "domain": domain,
        "credibility": credibility,
        "classification": classification
    }