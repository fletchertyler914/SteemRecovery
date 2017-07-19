import { SteemRecoveryPage } from './app.po';

describe('steem-recovery App', () => {
  let page: SteemRecoveryPage;

  beforeEach(() => {
    page = new SteemRecoveryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
