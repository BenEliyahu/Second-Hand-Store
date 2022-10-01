import { AbstractControl } from "@angular/forms";

export function ValidatePhoneNumber(control: AbstractControl) {
    if (!control.value || control.value.startsWith('5') || control.value.startsWith('03')) {
        return null;
    }
    else {
        return { validatePhoneNumber: "The number is invalid" }
    }
}