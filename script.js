

function loadStudentMap () {
    return JSON.parse(localStorage.getItem('studentMap')) || {
        "2425404490":{
            name: "EDWARD OTENG-MANKA",
            program: "BSc Infromation Technology",
            session: "Group A",
            level: 100
        },
        "2425404405":{
            name: "ENOCK BOADU BAAH",
            program: "BSc Infromation Technology",
            session: "Group A",
            level: 100
        },
        "2425404355":{
            name: "KELVIN AFFUL OSEI",
            program: "BSc Infromation Technology",
            session: "Group A",
            level: 100
        },
        "2425402827":{
            name: "USMAN LUKMAN LUTIF",
            program: "BSc Infromation Technology",
            session: "Group B",
            level: 100
        },
        "2425402820":{
            name: "DENNIS ADUSEI",
            program: "BSc Infromation Technology",
            session: "Group B",
            level: 100
        },
        "2425402816":{
            name: "STAFFORD STARRY",
            program: "BSc Infromation Technology",
            session: "Group B",
            level: 100
        },
        "2425402055":{
            name: "MICHAEL OPOKU",
            program: "BSc Infromation Technology",
            session: "Group C",
            level: 100
        },
        "2425402053":{
            name: "KELVIN KORKORDI",
            program: "BSc Infromation Technology",
            session: "Group C",
            level: 100
        },
        "2425402004":{
            name: "AMANDA DOMPREH AKUA OFORIWAA",
            program: "BSc Infromation Technology",
            session: "Group C",
            level: 100
        },
        "2425401332":{
            name: "YUSSIF ALIDU SAHA",
            program: "BSc Infromation Technology",
            session: "Group D",
            level: 100
        },
        "2425401331":{
            name: "ISAIAH AKYEA FOSU",
            program: "BSc Infromation Technology",
            session: "Group D",
            level: 100
        },
        "2425401330":{
            name: "BEAUTY AMEDZRATOR",
            program: "BSc Infromation Technology",
            session: "Group D",
            level: 100
        },
        "2425404354":{
            name: "EMMANUEL ASANTE GYAN",
            program: "BSc Infromation Technology",
            session: "Group E (BNSA)",
            level: 100
        },
        "2425404322":{
            name: "FLORENCE DOWUONA",
            program: "BSc Infromation Technology",
            session: "Group E (BNSA)",
            level: 100
        },
        "2425404306":{
            name: "GIDOEN SARPONG",
            program: "BSc Infromation Technology",
            session: "Group E (BNSA)",
            level: 100
        },
        "2425404675":{
            name: "CARLSON CARL EDUMADZE INCOOM",
            program: "BSc Infromation Technology",
            session: "Group F",
            level: 100
        },
        "2425400151":{
            name: "ADDO SAMUEL ADDOKWEI",
            program: "BSc Infromation Technology",
            session: "Group F",
            level: 100
        },
        "2425402834":{
            name: "MICHELLE SERWAA AMOAKO",
            program: "BSc Infromation Technology",
            session: "Group F",
            level: 100
        },
        "2425404089":{
            name: "JANET AMENUKU MAWUWOE",
            program: "BSc Infromation Technology",
            session: "Evening",
            level: 100
        },
        "2425403880":{
            name: "BENJAMIN ESSEL ADU",
            program: "BSc Infromation Technology",
            session: "Evening",
            level: 100
        },
        "2425403739":{
            name: "EMMANUEL ADDAH",
            program: "BSc Infromation Technology",
            session: "Evening",
            level: 100
        },
        "2425400999":{
            name: "ISAAC ABEKA",
            program: "BSc Information Technology",
            session: "Weekend",
            level: 100
        } ,
        "2425401208":{
            name: "BRIGHT AMPOMAH",
            program: "BSc Information Technology",
            session: "Weekend",
            level: 100
        },
        "2425401177":{
            name: "EBENEZER YAMOAH JONAH",
            program: "BSc Information Technology",
            session: "Weekend",
            level: 100
        },
        "2425404519": "STEPHEN OSAFO AMOATENG",
        "2425403735": "CLEMENT ADDY",
        "2425403712": "LASBART OKUNTU",
        "2425403518": "PATRICK OSEI HWEDIE",
        "2425403505": "PRINCE ADOFO-OTCHERE",
        "2425402947": "EMMANUEL AGOE OKWABI",
        "2425402740": "COLLINS AGBOLOSU",
        "2425402721": "ZAKARI IBRAHIM",
        "2425402660": "FRANCIS SARPONG",
        "2425402587": "PRINCE ANSAH",
        "2425402578": "EMMANUEL ESSUON-SEPAH",
        "2425402324": "BELINDA KAMASSAH APEFA",
        "2425402041": "SAVIOUR NYAMADI EDEM",
        "2425402009": "PORTIA ADUBEA",
        "2425401952": "FESTUS BOAFO OFOSU",
        "2425401940": "PRINCE OWUSU",
        "2425401920": "DANIEL LORMENYO",
        "2425401903": "EVANS AFRIFA",
        "2425401892": "EMMANUEL EVEDZI",
        "2425401877": "BRIGHT KOOMSON",
        "2425401823": "HANSON AMEGASHIE",
        "2425401790": "RICHARD OSEI TUTU",
        "2425401652": "DERRICK OWUSU",
        "2425401624": "SHADRACK BAIDEN",
        "2425401477": "MARIE-LYNNE TETTEH",
        "2425401465": "CHRISTIANA AIDOO",
        "2425401351": "JULIUS AMITEYE AWISITEY",
        "2425401312": "JUDE ADJAOTTOR",
        "2425401095": "MARTIN ASIEDU",
        "2425401068": "YAWSON EMMANUEL",
        "2425401019": "FALIYATANA MUHAMMED",
        "2425400945": "EBENEZER KOOMSON KWESI",
        "2425400892": "VIDAL QUARTEY EMMANUEL NII QUATEI",
        "2425400825": "KELVIN AFFUL KUUKU",
        "2425400638": "JOHN DADSON KOBINA",
        "2425400592": "ANITA AFFUL AYA",
        "2425400572": "STEPHANY ACQUAH",
        "2425400534": "CHARITY AKALIGA NMALEMIYA",
        "2425400533": "FRANCIS AKWESI OBENG",
        "2425400517": "KELVIN OPOKU OSEI",
        "2425400493": "PATRICK DZADE DOTSE",
        "2425400401": "DANIEL BOACHIE AMOANI",
        "2425400400": "SAMUEL PANFUL",
        "2425400399": "BARNABAS ATINDANA AYINLOYA",
        "2425400386": "ESTHER AGYIN OSEI NIFA",
        "2425400374": "ROY ANNAN",
        "2425400373": "RICHARD BOSOMPEM",
        "2425400372": "JOHN ANQUANDAH",
        "2425400353": "EBENEZER AGYEKUM",
        "2425400314": "UNITY OFORI",
        "2425400302": "BRIGHT MENSAH OKO",
        "2425400301": "RICHARD OWUSU KWABENA",
        "2425400281": "EDEM SEDZOAME",
        "2425400266": "ISAAC LARTEY ABEDI",
        "2425400263": "BRIGHT ASIAMAH CORTEZ",
        "2425400255": "MORO YAKUBU",
        "2425400253": "OHENEBA BANKA KWAME",
        "2425400251": "DERRICK REDEEMER AHIAVOR DELA",
        "2425400250": "EMMANUEL ASIAMAH",
        "2425400248": "KWABENA YEBOAH JUNOIR",
        "2425400241": "EMMANUEL ANSAH POBEE",
        "2425400183": "BENJAMIN TAMKLOE",
        "2425400170": "DANIEL ADUAMAH",
        "2425400159": "ENOCK OWUSU",
        "2425400133": "BEATRICE AMON",
        "2425400131": "SASU GIFTY",
        "2425400056": "IBRAHIM YAHAYA MOHAMMED",
        "2425400020": "EVANS OTENG",
        "2425400002": "YAW OWUSU",
        "2425404236": "WILFRED AYEDE",
        "2425400386": "AGYIN OSEI NIFA ESTHER",
        "2425401200": "AYIREBI RICHARD NANA",
        "2425400020": "EVANS OTENG",
        "2425400374": "ROY NII NUNOO ANNAN",
        "2425404521": "ASAMOAH BISMARK OBUOBISA",
        "2425402882": "ANNANG AARON GALLEY",
        "2425404560": "TETTEH SIMON",
        "2425400038": "AGYEI GYIMAH"
    };
}

function saveStudentMap(map) {
    localStorage.setItem('studentMap', JSON.stringify(map));
}

let studentMap = loadStudentMap();

const form = document.getElementById('attendance-form');
const tableBody = document.querySelector("#attendanceTable tbody");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('studentID').value.trim().toUpperCase();
    
    const student = studentMap[id];

    if (!student) {
        alert ("Student ID not found!");
        return;
    }

    const session = student.session;

    const keyMap = JSON.parse(localStorage.getItem("lectureKeys")) || {};

    const assignedKey = Object.keys(keyMap).find(key => keyMap[key] === session);

    if (!assignedKey) {
        alert(`No lecture key has been assigned to your session (${session}) yet.`);
        return;
    }

    const now = new Date();
    const record = {
        id: id,
        name: student.name,
        program: student.program,
        session: session,
        level: student.level,
        roomKey: assignedKey,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    };

    let records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    records.push(record);
    localStorage.setItem('attendanceRecords', JSON.stringify(records));

    alert(`Check-in successful. \nLecture Hall: ${assignedKey}`);
    form.reset();
    loadAttendnace();
});

function loadAttendnace() {
    const records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    tableBody.innerHTML = "";

    records.forEach((r, i) => {
        const row = `<tr>
        <td>${i + 1}</td>
        <td>${r.id}</td>
        <td>${r.name}</td>
        <td>${r.program}</td>
        <td>${r.session}</td>
        <td>${r.level}</td>
        <td>${r.date}</td>
        <td>${r.time}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
loadAttendnace();

const adminPanel = document.getElementById("adminPanel");
const toggleAdmin = document.getElementById("toggleAdmin");

toggleAdmin.addEventListener("click", () => {
    
    const password = prompt("Enter Admin Password");
    if (password === "admin123") {
        adminPanel.style.display = "block";
        updateKeyAssignmentList();
        loadAdminTodayAttendance();
        
        toggleAdmin.textContent = "Lock Panel";
    }else{
        alert("Incorrect Password!");
    }
    window.addEventListener("DOMContentLoaded", () => {
        loadAdminTodayAttendance();
    });
});

document.getElementById('admin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('newStudentName').value.trim();
    const id = document.getElementById('newStudentID').value.trim();

    if (!name || !id) {
        alert("Please enter both name and ID.");
        return;
    }

    if (studentMap[name]) {
        alert("Student already exists!");
        return;
    }

    studentMap[name] = id;
    saveStudentMap(studentMap);
    alert("Student registered");
    e.target.reset();
});

if(!localStorage.getItem("lecturekeys")) {
    const defaultKeys = {
        "C1A": "Group A",
        "C1B": "Group B",
        "C1C": "Group C",
        "C1": "Group D",
        "C2": "Group E (BNSA)",
        "C3": "Group F",
        "C4": "Evening",
        "C5": "Weekend",
        "C6": null,
        "C7": null,
        "C8": null,
        "C9": null,
        "C10": null,
        "C11": null,
        "C12": null,
        "C13": null,
        "C14": null,
        "C15": null
    };
    localStorage.setItem("lectureKeys", JSON.stringify(defaultKeys));
}

document.getElementById("keyAssignForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const key = document.getElementById("lectureKeySelect").value;
    const session = document.getElementById("sessionSelect").value;

    let keyMap = JSON.parse(localStorage.getItem("lectureKeys")) || {};
    keyMap[key] = session;
    

    if(keyMap[key] && keyMap[key] !== session) {
        alert(`${key} is already assigned to ${keyMap[key]}. You cannot reassign an occupied hall.`);
        return;
    }

    if(keyMap[key] === session) {
        alert(`${key} is already assigned to ${session}. No changes made.`);
        return;
    }

    keyMap[key] = session;
    localStorage.setItem("lectureKeys", JSON.stringify(keyMap));

    alert(`${key} assigned to ${session}`);
    updateKeyAssignmentList();
});

function updateKeyAssignmentList() {
    const keyMap = JSON.parse(localStorage.getItem("lectureKeys")) || {};
    const list = document.getElementById("keyAssignmentList");
    list.innerHTML = "";

    Object.entries(keyMap).forEach(([key, session]) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
        ${key} <strong>${session || 'Not Assigned'}</strong>
        <button class="btn btn-sm btn-outline-danger ms-2" onclick="releaseKey('${key}')">Release</button>
        `;
        list.appendChild(li);
    });
}

function releaseKey(key) {
    if(!confirm(`Are you sure you want to release ${key}?`)) return;

    let keyMap = JSON.parse(localStorage.getItem("lectureKeys")) || {};
    keyMap[key] = null;

    localStorage.setItem("lectureKeys", JSON.stringify(keyMap));

    setTimeout(updateKeyAssignmentList, 100);
    alert(`${key} has been released.`);
}

function getTodaysRecord() {
    const allRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const today = new Date().toLocaleDateString();
    return allRecords.filter(record => record.date === today);
}

function loadAdminTodayAttendance() {
    const todayRecords = getTodaysRecord();
    const tbody = document.querySelector("#adminTodayTable tbody");
    tbody.innerHTML = "";

    todayRecords.forEach((record, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.date}</td>
            <td>${record.time}</td>
        `;
        tbody.appendChild(row)
    });
}

document.getElementById("exportToday").addEventListener("click", () => {
    const todayRecords = getTodaysRecord();

    if(todayRecords.length === 0){
        alert("No check-ins found for today.");
        return
    }

    let csv = "BSc. INFORMATON TECHNOLOGY\n LEVEL 100 | WEEKEND\n TODAY'S ATTENDNACE\nID, Name, Date, Time\n";
    todayRecords.forEach(r => {
        csv += `${r.id}, ${r.name}, ${r.date}, ${r.time}\n`;
    });

    const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `attendance_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById("deleteToday").addEventListener("click", () => {
    if(!confirm("Are you sure you want to delete all of today's records?")) return;

    const allRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const today = new Date().toLocaleDateString();
    const remaining = allRecords.filter(r => r.date !== today);

    localStorage.setItem("attendanceRecords", JSON.stringify(remaining));
    alert("Today's records deleted.");
    loadAdminTodayAttendance();
});

window.addEventListener("DOMContentLoaded", () => {
    loadAdminTodayAttendance();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log("Service Worker registered"))
        .catch(err => console.error("Service Worker registration failed", err))
    });
}

