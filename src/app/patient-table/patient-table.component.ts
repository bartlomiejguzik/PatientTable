import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { MenuItem } from "primeng/api";

const INITIAL_PATIENT = {
    code: null,
    name: "",
    lastName: "",
    email: "",
    phone: null,
    city: "",
    municipality: "",
    active: ""
};

@Component({
    selector: "app-patient-table",
    templateUrl: "./patient-table.component.html",
    styleUrls: ["./patient-table.component.css"]
})
export class PatientTableComponent implements OnInit {
    displayDialog: boolean;
    patient: Patient = INITIAL_PATIENT;
    selectedPatient: Patient;
    patients: Patient[];
    cols: any[];
    active: SelectItem[];
    filterActive: SelectItem[];
    clonedPatients: { [s: string]: Patient } = {};
    private items: MenuItem[];
    home: MenuItem;
    code = this.getRandomNumber();

    ngOnInit() {
        this.patients = [
            {
                code: this.getRandomNumber(),
                name: "Jan",
                lastName: "Nowak",
                email: "jan@gmail.com",
                phone: 782345982,
                city: "Gliwice",
                municipality: "Slaskie",
                active: "Inactive"
            },
            {
                code: this.getRandomNumber(),
                name: "Adam",
                lastName: "Lis",
                email: "adam@gmail.com",
                phone: 782456789,
                city: "Katowice",
                municipality: "Slaskie",
                active: "Inactive"
            },
            {
                code: this.getRandomNumber(),
                name: "Tomasz",
                lastName: "Wojcik",
                email: "tomasz@gmail.com",
                phone: 765998234,
                city: "Lublin",
                municipality: "Lubelskie",
                active: "Inactive"
            },
            {
                code: this.getRandomNumber(),
                name: "Marek",
                lastName: "Kot",
                email: "marek@gmail.com",
                phone: 712398667,
                city: "Krosno",
                municipality: "Podkarpackie",
                active: "Active"
            },
            {
                code: this.getRandomNumber(),
                name: "Dominik",
                lastName: "Drzewiecki",
                email: "dominik@gmail.com",
                phone: 760992341,
                city: "Warszawa",
                municipality: "Mazowieckie",
                active: "Active"
            },
            {
                code: this.getRandomNumber(),
                name: "Hubert",
                lastName: "Kowalczyk",
                email: "hubert@gmail.com",
                phone: 771453287,
                city: "Gdansk",
                municipality: "Pomorskie",
                active: "Active"
            }
        ];

        this.items = [{ label: "Patient List" }];

        this.home = { icon: "pi pi-home" };

        this.filterActive = [
            { label: "All", value: null },
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" }
        ];
        this.active = [
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" }
        ];
        this.cols = [
            { field: "code", header: "Code" },
            { field: "name", header: "Name" },
            { field: "lastName", header: "Last Name" },
            { field: "email", header: "Email" },
            { field: "phone", header: "Phone" },
            { field: "city", header: "City" },
            { field: "municipality", header: "Municipality" },
            { field: "active", header: "Active" },
            { field: "actions", header: "Actions" }
        ];
    }
    getRandomNumber() {
        return Math.floor(Math.random() * 10000);
    }
    onRowEditInit(patient: Patient) {
        this.clonedPatients[patient.code] = { ...patient };
    }
    onRowEditSave(patient: Patient) {
        delete this.clonedPatients[patient.code];
    }
    onRowEditCancel(patient: Patient, index: number) {
        this.patients[index] = this.clonedPatients[patient.code];
        delete this.clonedPatients[patient.code];
    }
    showDialogToAdd() {
        this.patient = {
            code: this.getRandomNumber(),
            name: "",
            lastName: "",
            email: "",
            phone: null,
            city: "",
            municipality: "",
            active: ""
        };
        this.displayDialog = true;
    }
    save() {
        this.patients.push(this.patient);
        this.patient = INITIAL_PATIENT;
        this.displayDialog = false;
    }
    delete() {
        this.patient = INITIAL_PATIENT;
        this.displayDialog = false;
    }
}

export interface Patient {
    code: number;
    name: string;
    lastName: string;
    email: string;
    phone: number;
    city: string;
    municipality: string;
    active: string;
}
