import { NgEcomPage } from './app.po';

describe('ng-ecom App', () => {
  let page: NgEcomPage;

  beforeEach(() => {
    page = new NgEcomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
