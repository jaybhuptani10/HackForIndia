class Student:
    def init(self, name, interests, skills, aptitudes, grades):
        self.name = name
        self.interests = interests
        self.skills = skills
        self.aptitudes = aptitudes
        self.grades = grades

class CareerPredictor:
    def init(self, careers_data):
        self.careers_data = careers_data

    def predict_career(self, student):
        # Implement your prediction logic here
        # Compare student's attributes with careers_data to suggest a career
        # You can use scoring or matching algorithms based on attributes
        
        suggested_career = None  # Set this to the predicted career
        
        return suggested_career

# Example data
careers_data = {
    "Software Developer": {
        "interests": ["Programming", "Problem Solving"],
        "skills": ["Coding", "Algorithm Design"],
        "aptitudes": ["Logical Thinking"],
    },
    "Artist": {
        "interests": ["Drawing", "Painting"],
        "skills": ["Creativity", "Visualization"],
        "aptitudes": ["Artistic Sensitivity"],
    },
    # Add more careers and their attributes
}

# Collect student's information
student_name = input("Enter student's name: ")
student_interests = input("Enter student's interests (comma-separated): ").split(", ")
student_skills = input("Enter student's skills (comma-separated): ").split(", ")
student_aptitudes = input("Enter student's aptitudes (comma-separated): ").split(", ")
student_grades = float(input("Enter student's average grades: "))

student = Student(student_name, student_interests, student_skills, student_aptitudes, student_grades)

# Create the career predictor
predictor = CareerPredictor(careers_data)

# Predict and display suggested career
suggested_career = predictor.predict_career(student)
if suggested_career:
    print(f"Suggested career for {student.name}: {suggested_career}")
else:
    print("No career suggestion could be made.")