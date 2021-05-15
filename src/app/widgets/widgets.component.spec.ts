import { WidgetsComponent } from './widgets.component';

describe('Widgets Component', () => {
  it('should be named `WidgetsComponent`', () => {
    expect(WidgetsComponent['name']).toBe('WidgetsComponent');
  });

  it('should have a method called `setPromo`', () => {
    expect(WidgetsComponent.prototype.setPromo).toBeDefined();
  });
});
