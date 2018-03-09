import { Injectable } from '@angular/core';
import { TextWrapInterface } from './textwrap.interface';

@Injectable()
export class TextwrapService implements TextWrapInterface {

  constructor() { }

  public textWrap(text: string, length: number): string[] {
    let regex: RegExp = new RegExp(`([^]{1,${length}})(?:\\s|$)|([^]{${length}})`, "gu");
    let wrapedArray: string[] = text.match(regex);
    return wrapedArray;
  }
}
