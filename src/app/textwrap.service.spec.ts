import { TestBed, inject } from '@angular/core/testing';

import { TextwrapService } from './textwrap.service';

describe('TextwrapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextwrapService]
    });
  });

  it('should be created', inject([TextwrapService], (service: TextwrapService) => {
    expect(service).toBeTruthy();
  }));
  it('Deve fazer wrap nos textos', inject([TextwrapService], (service: TextwrapService) => {
    let textArray: string[] = [
     'the book is on the table',
     'UMA PALAVRA ENORME QUE SO PODE SE CONTER EM 8 CARACTERES POR LINHAS',
     'Lorem ipsum dolor sit amet',
     'UMA LONGUÍSSIMA PALAVRAAAAAA QUE SERÁ CORTAAAAAADA'
    ];
    let arrayTest: string[][] = [
      ["the book ", "is on ", "the ", "table"],
      ["UMA ", "PALAVRA ", "ENORME ", "QUE SO ", "PODE SE ", "CONTER ", "EM 8 ", "CARACTER", "ES POR ", "LINHAS"],
      ["Lorem ", "ipsum ", "dolor ", "sit amet"],
      ["UMA ", "LONGUÍSS", "IMA ", "PALAVRAA", "AAAA QUE ", "SERÁ ", "CORTAAAA", "AADA"]
    ];
    for(let i = 0; i < textArray.length; i++){
      expect(service.textWrap(textArray[i], 8)).toEqual(arrayTest[i]);
    }
  }));
});
