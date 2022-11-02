import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of a string
 * Usage:
 *   value | capitalizeFirstLetter
 * Example:
 *   {{ 'mario' | capitalizeFirstLetter }}
 * Result:
 *   Mario
*/

@Pipe({
  name: 'capitalizeFirstLetter'
})

export class CapitalizeFirstLetter implements PipeTransform {
    transform(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}
