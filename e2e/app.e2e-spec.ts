import { NgJsonPage } from './app.po';

describe('ng-json App', function() {
  let page: NgJsonPage;

  beforeEach(() => {
    page = new NgJsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
