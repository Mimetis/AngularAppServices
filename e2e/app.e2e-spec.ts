import { AngularAppServicesPage } from './app.po';

describe('angular-app-services App', () => {
  let page: AngularAppServicesPage;

  beforeEach(() => {
    page = new AngularAppServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
