//Harjutus: A Simple Counter
const display = document.getElementById("display");
const pluss = document.getElementById("pluss");
const miinus = document.getElementById("miinus");
const reset = document.getElementById("reset");

let count = 0;

pluss.onclick = function () {
  count++;
  display.textContent = count;
};

miinus.onclick = function () {
  if (count !== 0) {
    count--;
  }
  display.textContent = count;
};

reset.onclick = function () {
  count = 0;
  display.textContent = count;
};

//Harjutus: Div clicked?

window.onclick = function (e) {
  const element = e.target;
  while (element !== document) {
    if (element.nodeName === "DIV") {
      alert("Div clicked!");
    }
    element = element.parentNode;
  }
};

//Harjutus: Sortable table

class SortableTable {
    constructor(data, element) {
        this.data = data;
        this.originalData = [...data]; // Hoiab alles originaalse data
        this.element = element || document.body;
        this.sortField = null;
        this.sortOrder = null; // asc või desc
        
        this.renderTable();
    }

    renderTable() {
        // Loob tabeli
        const table = document.createElement('table');
        
        // Loob tabeli päise ja pealkirjad
        const thead = document.createElement('thead');
        const headers = Object.keys(this.data[0]);
        const headerRow = document.createElement('tr');
        
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            th.addEventListener('click', () => this.sortBy(header));
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Loob tabeli sisu antud data põhjal
        const tbody = document.createElement('tbody');
        this.data.forEach(item => {
            const row = document.createElement('tr');
            headers.forEach(field => {
                const td = document.createElement('td');
                td.textContent = item[field];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        
        // Asendab olemasoleva tabeli loodud tabeliga
        this.element.innerHTML = ''; // Teeb eelmise tabeli tühjaks
        this.element.appendChild(table);
    }

    sortBy(field) {
        // Teeb kindlaks, mis järjeskorras asjad on
        if (this.sortField === field) {
            if (this.sortOrder === 'asc') {
                this.sortOrder = 'desc';
                this.data.sort((a, b) => (a[field] < b[field] ? 1 : -1));
            } else if (this.sortOrder === 'desc') {
                this.sortOrder = null; // Algne järjekord
                this.data = [...this.originalData];
            } else {
                this.sortOrder = 'asc';
                this.data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
            }
        } else {
            this.sortField = field;
            this.sortOrder = 'asc';
            this.data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
        }

        // Uuendab tabelit 
        this.renderTable();
        this.updateHeaderSymbols(field);
    }
        //Uuendab päise sümbleid, mis on määratud CSSis
    updateHeaderSymbols(sortedField) {
        const headers = this.element.querySelectorAll('th');
        headers.forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
            if (th.textContent === sortedField) {
                if (this.sortOrder === 'asc') {
                    th.classList.add('sort-asc');
                } else if (this.sortOrder === 'desc') {
                    th.classList.add('sort-desc');
                }
            }
        });
    }
}