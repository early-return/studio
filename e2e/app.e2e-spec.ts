import { StudioPage } from './app.po';

describe('studio App', function() {
  let page: StudioPage;

  beforeEach(() => {
    page = new StudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
