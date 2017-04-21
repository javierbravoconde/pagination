import { PaginationPage } from './app.po';

describe('pagination App', () => {
  let page: PaginationPage;

  beforeEach(() => {
    page = new PaginationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
