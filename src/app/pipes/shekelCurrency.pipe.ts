import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shekelCurrency' })
export class ShekelCurrencyPipe implements PipeTransform {
    transform(value: number): string {
        return value + "₪";
    }
}