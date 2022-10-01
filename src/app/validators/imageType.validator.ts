import { AbstractControl } from "@angular/forms";

export function ValidateImageFileType(control: AbstractControl) {
    if (!control.value || control.value.endsWith('.jpeg') || control.value.endsWith('.jpg') || control.value.endsWith('.png') || control.value.endsWith('.gif')) {
        return null;
    }
    else {
        return { validateUrl: "The image is not valid" }
    }
}