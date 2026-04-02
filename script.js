// Grade Points Mapping
const gradePoints = {
    'A+': 4.00, 'A': 3.75, 'A-': 3.50,
    'B+': 3.25, 'B': 3.00, 'B-': 2.75,
    'C+': 2.50, 'C': 2.25, 'D': 2.00, 'F': 0.00
};

const gradeOptions = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'D', 'F'];

// Semester Data
const semesterData = {
    1: {
        name: '1st Year - 1st Semester',
        subjects: [
            { code: 'CSE 1101', name: 'Structured Programming Language', credits: 3 },
            { code: 'CSE 1102', name: 'Structured Programming Language Lab', credits: 1.5 },
            { code: 'EEE 1131', name: 'Basic Electrical Circuits', credits: 3 },
            { code: 'EEE 1132', name: 'Basic Electrical Circuits Lab', credits: 1 },
            { code: 'MAT 1141', name: 'Differential and Integral Calculus', credits: 3 },
            { code: 'PHY 1151', name: 'Basic Physics', credits: 3 },
            { code: 'PHY 1152', name: 'Basic Physics Lab', credits: 1 },
            { code: 'ENG 0002', name: 'English Fundamentals', credits: 3 }
        ],
        totalCredits: 18.5
    },
    2: {
        name: '1st Year - 2nd Semester',
        subjects: [
            { code: 'CSE 1201', name: 'Object Oriented Programming', credits: 3 },
            { code: 'CSE 1202', name: 'Object Oriented Programming Lab', credits: 1.5 },
            { code: 'CSE 1203', name: 'Discrete Mathematics', credits: 3 },
            { code: 'EEE 1231', name: 'Electronic Devices and Circuits', credits: 3 },
            { code: 'EEE 1232', name: 'Electronic Devices and Circuits Lab', credits: 1 },
            { code: 'MAT 1241', name: 'Coordinate Geometry and Vector Analysis', credits: 3 },
            { code: 'CHE 1261', name: 'Chemistry', credits: 2 },
            { code: 'CHE 1262', name: 'Chemistry Lab', credits: 1 }
        ],
        totalCredits: 17.5
    },
    3: {
        name: '2nd Year - 1st Semester',
        subjects: [
            { code: 'CSE 2101', name: 'Object Oriented Design and Design Patterns', credits: 3 },
            { code: 'CSE 2102', name: 'Object Oriented Design and Design Patterns Lab', credits: 1.5 },
            { code: 'CSE 2103', name: 'Data Structures', credits: 3 },
            { code: 'CSE 2104', name: 'Data Structures Lab', credits: 1.5 },
            { code: 'CSE 2105', name: 'Digital System Design', credits: 3 },
            { code: 'CSE 2106', name: 'Digital System Design Lab', credits: 1 },
            { code: 'MAT 2141', name: 'Differential Equations', credits: 3 },
            { code: 'BAN 0001', name: 'History of the Emergence of Bangladesh', credits: 3 }
        ],
        totalCredits: 19
    },
    4: {
        name: '2nd Year - 2nd Semester',
        subjects: [
            { code: 'CSE 2201', name: 'Software Engineering and System Analysis', credits: 3 },
            { code: 'CSE 2203', name: 'Computer Algorithms', credits: 3 },
            { code: 'CSE 2204', name: 'Computer Algorithms Lab', credits: 1.5 },
            { code: 'CSE 2205', name: 'Numerical Methods', credits: 3 },
            { code: 'CSE 2206', name: 'Numerical Methods Lab', credits: 1 },
            { code: 'CSE 2207', name: 'Computer Networks', credits: 3 },
            { code: 'CSE 2208', name: 'Computer Networks Lab', credits: 1 },
            { code: 'MAT 2241', name: 'Linear Algebra and Complex Variables', credits: 3 }
        ],
        totalCredits: 18.5
    },
    5: {
        name: '3rd Year - 1st Semester',
        subjects: [
            { code: 'CSE 3101', name: 'Computer Graphics', credits: 3 },
            { code: 'CSE 3102', name: 'Computer Graphics Lab', credits: 1 },
            { code: 'CSE 3103', name: 'Database Management System', credits: 3 },
            { code: 'CSE 3104', name: 'Database Management System Lab', credits: 1.5 },
            { code: 'CSE 3105', name: 'Computer Architecture', credits: 3 },
            { code: 'CSE 3106', name: 'Computer Architecture Lab', credits: 1 },
            { code: 'CSE 3107', name: 'Communication Engineering', credits: 3 },
            { code: 'MAT 3141', name: 'Applied Statistics and Probability', credits: 3 }
        ],
        totalCredits: 18.5
    },
    6: {
        name: '3rd Year - 2nd Semester',
        subjects: [
            { code: 'CSE 3201', name: 'Theory of Computation and Compiler Design', credits: 3 },
            { code: 'CSE 3203', name: 'Operating System and System Programming', credits: 3 },
            { code: 'CSE 3204', name: 'Operating System and System Programming Lab', credits: 1 },
            { code: 'CSE 3205', name: 'Microprocessor and Assembly Language', credits: 3 },
            { code: 'CSE 3206', name: 'Microprocessor and Assembly Language Lab', credits: 1 },
            { code: 'CSE 3207', name: 'Digital Signal Processing', credits: 3 },
            { code: 'CSE 3208', name: 'Digital Signal Processing Lab', credits: 1 },
            { code: 'CSE 3209', name: 'E-commerce and Web Programming', credits: 2 },
            { code: 'CSE 3210', name: 'E-commerce and Web Programming Project Lab', credits: 1.5 },
            { code: 'ECO 3271', name: 'Engineering Economics', credits: 2 }
        ],
        totalCredits: 20.5
    },
    7: {
        name: '4th Year - 1st Semester',
        subjects: [
            { code: 'CSE 4101', name: 'Artificial Intelligence', credits: 3 },
            { code: 'CSE 4102', name: 'Artificial Intelligence Lab', credits: 1 },
            { code: 'CSE 4103', name: 'Digital Image Processing', credits: 3 },
            { code: 'CSE 4104', name: 'Digital Image Processing Lab', credits: 1 },
            { code: 'CSE 4105', name: 'Engineering Ethics and Environmental Protection', credits: 2 },
            { code: 'OPT-I', name: 'Option I Theory', credits: 3 },
            { code: 'OPT-I-LAB', name: 'Option I Lab', credits: 1 },
            { code: 'ACC 4171', name: 'Industrial Management and Accountancy', credits: 2 },
            { code: 'CSE 4100', name: 'Project or Thesis with Seminar Part I', credits: 2 },
            { code: 'CSE 4120', name: 'Industrial Attachment (Internship)', credits: 1 },
            { code: 'CSE 4122', name: 'Technical Report Writing', credits: 0.5 }
        ],
        totalCredits: 19.5
    },
    8: {
        name: '4th Year - 2nd Semester',
        subjects: [
            { code: 'CSE 4201', name: 'Parallel Processing and Distributed Systems', credits: 3 },
            { code: 'CSE 4202', name: 'Parallel Processing and Distributed Systems Lab', credits: 1 },
            { code: 'CSE 4203', name: 'Cryptography and Network Security', credits: 3 },
            { code: 'CSE 4204', name: 'Cryptography and Network Security Lab', credits: 1 },
            { code: 'OPT-II-1', name: 'Option II Theory (1)', credits: 3 },
            { code: 'OPT-II-1-LAB', name: 'Option II Lab (1)', credits: 1 },
            { code: 'OPT-II-2', name: 'Option II Theory (2)', credits: 3 },
            { code: 'OPT-II-2-LAB', name: 'Option II Lab (2)', credits: 1 },
            { code: 'CSE 4200', name: 'Project or Thesis with Seminar Part II', credits: 2 }
        ],
        totalCredits: 18
    }
};

// State
let currentSemester = 1;
let currentGrades = {};
let allSemesterData = {};

// Initialize
function init() {
    loadDataFromStorage();
    setupEventListeners();
    renderSubjects();
    updateSemesterGPA();
}

// Load data from localStorage
function loadDataFromStorage() {
    const saved = localStorage.getItem('cgpaData');
    if (saved) {
        allSemesterData = JSON.parse(saved);
    }
    if (allSemesterData[currentSemester]) {
        currentGrades = { ...allSemesterData[currentSemester] };
    }
}

// Save to localStorage
function saveToStorage() {
    localStorage.setItem('cgpaData', JSON.stringify(allSemesterData));
}

// Event Listeners
function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Semester selection
    document.getElementById('semester-select').addEventListener('change', (e) => {
        currentSemester = parseInt(e.target.value);
        if (allSemesterData[currentSemester]) {
            currentGrades = { ...allSemesterData[currentSemester] };
        } else {
            currentGrades = {};
        }
        renderSubjects();
        updateSemesterGPA();
    });
}

// Switch tabs
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}-tab`).classList.add('active');
    
    if (tab === 'cumulative') {
        renderAllSemesters();
        updateCumulativeGPA();
    }
}

// Render subjects for current semester
function renderSubjects() {
    const semester = semesterData[currentSemester];
    document.getElementById('semester-title').textContent = semester.name;
    document.getElementById('semester-credits').textContent = `Total Credits: ${semester.totalCredits}`;
    
    const container = document.getElementById('subjects-list');
    container.innerHTML = '';
    
    semester.subjects.forEach(subject => {
        const div = document.createElement('div');
        div.className = 'subject-item';
        
        const select = document.createElement('select');
        select.className = 'select-input';
        select.innerHTML = '<option value="">Select Grade</option>';
        
        gradeOptions.forEach(grade => {
            const option = document.createElement('option');
            option.value = grade;
            option.textContent = `${grade} (${gradePoints[grade].toFixed(2)})`;
            if (currentGrades[subject.code] === grade) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        
        select.addEventListener('change', (e) => {
            if (e.target.value) {
                currentGrades[subject.code] = e.target.value;
            } else {
                delete currentGrades[subject.code];
            }
            updateSemesterGPA();
        });
        
        div.innerHTML = `
            <div class="subject-info">
                <div class="subject-code">${subject.code}</div>
                <div class="subject-name">${subject.name}</div>
                <div class="subject-credits">${subject.credits} Credits</div>
            </div>
        `;
        div.appendChild(select);
        
        container.appendChild(div);
    });
}

// Calculate and update semester GPA
function updateSemesterGPA() {
    const semester = semesterData[currentSemester];
    let totalPoints = 0;
    let totalCredits = 0;
    
    semester.subjects.forEach(subject => {
        const grade = currentGrades[subject.code];
        if (grade) {
            totalPoints += gradePoints[grade] * subject.credits;
            totalCredits += subject.credits;
        }
    });
    
    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
    document.getElementById('semester-gpa').textContent = gpa;
}

// Save semester data
function saveSemesterData() {
    allSemesterData[currentSemester] = { ...currentGrades };
    saveToStorage();
    alert('Semester data saved successfully!');
}

// Clear current semester
function clearCurrentSemester() {
    currentGrades = {};
    renderSubjects();
    updateSemesterGPA();
}

// Render all semesters overview
function renderAllSemesters() {
    const container = document.getElementById('all-semesters-list');
    container.innerHTML = '';
    
    for (let sem = 1; sem <= 8; sem++) {
        const semester = semesterData[sem];
        const semGrades = allSemesterData[sem];
        const gpa = semGrades ? calculateSemesterGPA(semGrades, sem) : '0.00';
        const completed = semGrades && Object.keys(semGrades).length > 0;
        
        const div = document.createElement('div');
        div.className = `semester-overview-item ${completed ? 'completed' : ''}`;
        div.innerHTML = `
            <div class="semester-info">
                <h3>${semester.name}</h3>
                <p>${semester.totalCredits} Credits</p>
            </div>
            <div class="semester-gpa-display">
                <div class="semester-gpa-value">${gpa}</div>
                <div class="semester-status">${completed ? 'Completed' : 'Not Started'}</div>
            </div>
        `;
        container.appendChild(div);
    }
}

// Calculate semester GPA
function calculateSemesterGPA(grades, semester) {
    const subjects = semesterData[semester].subjects;
    let totalPoints = 0;
    let totalCredits = 0;
    
    subjects.forEach(subject => {
        const grade = grades[subject.code];
        if (grade) {
            totalPoints += gradePoints[grade] * subject.credits;
            totalCredits += subject.credits;
        }
    });
    
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
}

// Update cumulative CGPA
function updateCumulativeGPA() {
    let totalPoints = 0;
    let totalCredits = 0;
    
    Object.keys(allSemesterData).forEach(sem => {
        const subjects = semesterData[sem].subjects;
        const grades = allSemesterData[sem];
        
        subjects.forEach(subject => {
            const grade = grades[subject.code];
            if (grade) {
                totalPoints += gradePoints[grade] * subject.credits;
                totalCredits += subject.credits;
            }
        });
    });
    
    const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
    document.getElementById('cumulative-cgpa').textContent = cgpa;
    document.getElementById('completed-credits').textContent = `${totalCredits.toFixed(1)} / 150`;
    
    // Update eligibility status
    const statusEl = document.getElementById('eligibility-status');
    if (parseFloat(cgpa) >= 2.50 && totalCredits >= 150) {
        statusEl.textContent = '✓ Eligible for Graduation';
        statusEl.classList.add('eligible');
    } else {
        statusEl.textContent = 'Keep Working!';
        statusEl.classList.remove('eligible');
    }
}

// Reset all data
function resetAllData() {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
        allSemesterData = {};
        currentGrades = {};
        localStorage.removeItem('cgpaData');
        renderSubjects();
        updateSemesterGPA();
        renderAllSemesters();
        updateCumulativeGPA();
        alert('All data has been reset.');
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', init);