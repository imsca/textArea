import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { TextwrapService } from './textwrap.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
        imports: [
          FormsModule
        ],
        providers: [TextwrapService]
      
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
