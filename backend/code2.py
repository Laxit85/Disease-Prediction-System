import pickle

with open("models/symptom_disease_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("models/vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

def predict_disease(symptoms: str):
    X = vectorizer.transform([symptoms])
    result = model.predict(X)
    return result[0]
