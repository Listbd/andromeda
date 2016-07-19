import { AndromedaPage } from './app.po';

describe('andromeda App', function() {
  let page: AndromedaPage;

  beforeEach(() => {
    page = new AndromedaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
