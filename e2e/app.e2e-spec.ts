import { InfotekaPage } from './app.po';

describe('infoteka App', () => {
  let page: InfotekaPage;

  beforeEach(() => {
    page = new InfotekaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
