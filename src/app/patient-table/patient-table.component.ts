import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { MenuItem } from "primeng/api";

@Component({
    selector: "app-patient-table",
    templateUrl: "./patient-table.component.html",
    styleUrls: ["./patient-table.component.css"]
})
export class PatientTableComponent implements OnInit {
    displayDialog: boolean;
    patient: Patient = {};
    selectedPatient: Patient;
    newPatient: boolean;
    patients: Patient[];
    cols: any[];
    active: SelectItem[];
    filterActive: SelectItem[];
    clonedPatients: { [s: string]: Patient } = {};
    private items: MenuItem[];
    home: MenuItem;

    ngOnInit() {
        this.patients = [
            {
                code: 1,
                name: "Jan",
                lastName: "Nowak",
                email: "jan@gmail.com",
                phone: 782345982,
                city: "Gliwice",
                municipality: "Slaskie",
                active: "Inactive"
            },
            {
                code: 2,
                name: "Adam",
                lastName: "Lis",
                email: "adam@gmail.com",
                phone: 782456789,
                city: "Katowice",
                municipality: "Slaskie",
                active: "Inactive"
            },
            {
                code: 3,
                name: "Tomasz",
                lastName: "Wojcik",
                email: "tomasz@gmail.com",
                phone: 765998234,
                city: "Lublin",
                municipality: "Lubelskie",
                active: "Inactive"
            },
            {
                code: 4,
                name: "Marek",
                lastName: "Kot",
                email: "marek@gmail.com",
                phone: 712398667,
                city: "Krosno",
                municipality: "Podkarpackie",
                active: "Active"
            },
            {
                code: 5,
                name: "Dominik",
                lastName: "Drzewiecki",
                email: "dominik@gmail.com",
                phone: 760992341,
                city: "Warszawa",
                municipality: "Mazowieckie",
                active: "Active"
            },
            {
                code: 6,
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
        this.newPatient = true;
        this.patient = {};
        this.displayDialog = true;
    }
    save() {
        let patients = [...this.patients];
        if (this.newPatient) patients.push(this.patient);
        else
            patients[
                this.patients.indexOf(this.selectedPatient)
            ] = this.patient;

        this.patients = patients;
        this.patient = null;
        this.displayDialog = false;
    }
    delete() {
        let index = this.patients.indexOf(this.selectedPatient);
        this.patients = this.patients.filter((val, i) => i != index);
        this.patient = null;
        this.displayDialog = false;
    }
}

export interface Patient {
    code?;
    name?;
    lastName?;
    email?;
    phone?;
    city?;
    municipality?;
    active?;
}
