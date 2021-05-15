import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getHomeHeading(): Promise<string> {
    return element(by.css('app-root #container h1')).getText();
  }
}
