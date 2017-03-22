import { TheprimordiallegionPage } from './app.po';

describe('theprimordiallegion App', function() {
  let page: TheprimordiallegionPage;

  beforeEach(() => {
    page = new TheprimordiallegionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
