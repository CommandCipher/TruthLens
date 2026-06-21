import google.generativeai as genai

genai.configure(
    api_key="AQ.Ab8RN6LBkmbXhFmS4sPx_HYETY12iMlYSmL_8qY2gh8I_jmQXw"
)

for model in genai.list_models():
    print(model.name)
    print(model.supported_generation_methods)
    print("------------------")